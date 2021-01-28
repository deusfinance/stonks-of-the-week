import React, {useState, useEffect, useCallback} from 'react';
import Web3 from 'web3'
import Spinner from 'react-spinkit';

import Button from 'components/Button/Button';
import PageNavigation from 'components/PageNavigation/PageNavigation';
import { ReactComponent as StonksIcon } from 'icons/STONKS.svg';
import RankItem from '../RankItem/RankItem';
import styles from './MainBody.module.scss';

const size = 10;

export default function MainBody({account: address}) {
  const [searchInput, setSearchInput] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [stocks, setStocks] = useState([]);
  const [searchStocks, setSearchStocks] = useState([]);
  const [firstItem, setFirstItem] = useState({});
  const [voteItem, setVoteItem] = useState({});
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const getStocks = useCallback(() => {
    return new Promise((resolve, reject) => {
      const apiUrl = 'https://weeklystocks-api.herokuapp.com/stocks?search='+searchInput+'&offset='+(searchInput ? 0 : (currentPage - 1) * size + 1)+'&limit='+size+'&sort=' + (searchInput ? 'ticker,asc' : 'vote.numberOfVotes,desc&sort=ticker,asc');
      fetch(apiUrl, {
        method: 'GET',
        headers: {
          api_key: process.env.REACT_APP_API_KEY,
          Accept: '*/*',
          'Content-Type': 'application/json',
        },
      }).then(data => {
        return data.json();
      }).then(resp => {
        if(searchInput) {
          setSearchStocks(resp.stocks)
        } else {
          setStocks(resp.stocks)
          setPages(resp.totalPages)
        }
        resolve(true)
      }).catch(err => {
        // consolg.log('getStocks err', err)
        reject(err)
      })
    })
  }, [currentPage, searchInput])

  const getFirstItem = useCallback(() => {
    return new Promise((resolve, reject) => {
      const apiUrl = 'https://weeklystocks-api.herokuapp.com/stocks?search=&offset=0&limit=1&sort=vote.numberOfVotes,desc&sort=ticker,asc';
      fetch(apiUrl, {
        method: 'GET',
        headers: {
          api_key: process.env.REACT_APP_API_KEY,
          Accept: '*/*',
          'Content-Type': 'application/json',
        },
      }).then(data => {
        return data.json();
      }).then(resp => {
        setFirstItem(resp.stocks[0]);
        resolve();
      }).catch(err => {
        // consolg.log('getFirstItem err', err)
        reject();
      })
    })
  }, []);

  const getVotes = useCallback(() => {
    return new Promise((resolve, reject) => {
      if(address) {
        setLoading(true);
        const apiUrl = 'https://weeklystocks-api.herokuapp.com/wallets/' + address + '/votes';
        fetch(apiUrl, {
          method: 'GET',
          headers: {
            api_key: process.env.REACT_APP_API_KEY,
            Accept: '*/*',
            'Content-Type': 'application/json',
          },
        }).then(data => {
          if(data.status === 200) {
            return data.json();
          } else {
            return {}
          }
        }).then(resp => {
          setVoteItem(resp);
          resolve();
        }).catch(err => {
          // consolg.log('getVotes err', err)
          reject();
        })
      } else {
        resolve();
      }
    })
  }, [address]);

  const getData = useCallback(() => {
    setLoading(true);
    getStocks().then(() => {
      getFirstItem().then(() => {
        getVotes().then(() => {
          setLoading(false);
        })
      })
    })
  }, [getStocks, getFirstItem, getVotes]);

  useEffect(() => {
    getData();
  }, [getData]);

  const onChangeInput = (value) => {
    setSearchInput(value);
    if (value) {
      document.body.style.overflow = 'hidden';
      setModalShow(true);
    } else {
      hideModal();
    }
  }

  const hideModal = () => {
    document.body.style.overflow = 'unset';
    setModalShow(false);
  }

  const onVote = async (item) => {
    if(!address) {
      alert('Please install metamask on your browser');
      return
    }
    if(!voteItem.id) {
      setLoading(true);
      const apiUrl = 'https://weeklystocks-api.herokuapp.com/wallets/'+address+'/stocks/'+item.id.toString()+'/votes';
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:8080')
      const signature = await web3.eth.personal.sign(item.ticker.toString(), address)
      fetch(apiUrl, {
        method: 'PUT',
        headers: {
          api_key: process.env.REACT_APP_API_KEY,
          Accept: '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address: address,
          message: item.ticker.toString(),
          signature: signature,
          version: "2"
        })
      }).then(data => {
        if(data.ok) {
          // alert('You\'ve voted');
          getData();
        } else {
          setLoading(false)
        }
      }).catch(err => {
        // consolg.log('onVote err', err)
        setLoading(false);
      })
    } else {
      alert('You\'ve already voted already for this week');
    }
  }

  const retractVote = async () => {
    setLoading(true);
    const apiUrl = 'https://weeklystocks-api.herokuapp.com/wallets/'+address+'/stocks/'+voteItem.id.toString()+'/votes';
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8080')
    const signature = await web3.eth.personal.sign(voteItem.ticker.toString(), address)
    fetch(apiUrl, {
      method: 'DELETE',
      headers: {
        api_key: process.env.REACT_APP_API_KEY,
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        address: address,
        message: voteItem.ticker.toString(),
        signature: signature,
        version: "2"
      })
    }).then(data => {
      if(data.ok) {
        // alert('You\'ve retracted');
        getData();
      } else {
        setLoading(false);
      }
    }).catch(err => {
      // consolg.log('retractVote err', err)
      setLoading(false);
    })
  }

  const getSearchArray = () => {
    return [firstItem, ...searchStocks].filter(each => each.id !== firstItem.id);
  }
  console.log('firstItem', firstItem)
  return (
    <div className={styles.bodyMain}>
      {modalShow && <div className={styles.overlay} onClick={() => hideModal()} />}
      <div className={styles.stonkDiv}>
        <StonksIcon />
        <div className={styles.ofTheWeek}>OF THE WEEK</div>
      </div>
      <div className={styles.descriptionDiv}>
        <div className={styles.line}>
          A stonk of the week, voted by the community
        </div>
        <div className={styles.line}>
          The DEUS Dao will conduct <span>{firstItem?.name}</span> and add liquidity for it to Uniswap.
        </div>
      </div>
      <div className={styles.mainContainer}>
        {
          voteItem?.id ? (
            <div className={styles.votted}>
              <div className={styles.vottedText}>You have voted for {voteItem.name}</div>
              <Button size="long" text="RETRACT VOTE" handleClick={retractVote} />
            </div>
          ) : null
        }
        <div className={styles.leaderboard}>
          LEADERBOARD WEEK #1
        </div>
        <div className={styles.searchDiv}>
          <div className={styles.searchDescription}>
            Not happy with the top votes? Search, find and vote for your pick
          </div>
          <div className={styles.searchInputDiv}>
            <input value={searchInput} placeholder="Search" onChange={e => onChangeInput(e.target.value)} />
          </div>
          {modalShow && (
            <div className={styles.modalContainer}>
              {
                getSearchArray().map((item, index) => {
                  if(item) {
                    return (
                      <RankItem
                        search
                        voted={item.id === voteItem.id}
                        key={item.id}
                        onVote={() => onVote(item)}
                        item={item}
                        rank={1 + index}
                        last={index === Math.min(getSearchArray().length, 5)}
                      />
                    )
                  } else {
                    return null
                  }
                })
              }
            </div>
          )}
        </div>
        {firstItem && firstItem.name ? (
          <div className={styles.firstRankDiv}>
            <div className={styles.firstRankText}>#1</div>
            <div className={styles.itemName}>{firstItem.ticker}</div>
            <div className={styles.itemDescription}>{firstItem.name}</div>
            <Button handleClick={() => onVote(firstItem)} size="big" text="VOTE" />
            <div className={styles.details}>{firstItem?.vote?.numberOfVotes} Votes so far – {firstItem?.vote?.percentageShare}%</div>
          </div>
        ) : null}
        <div className={styles.otherRanks}>
          {
            stocks && stocks.map((stock, index) => (
              <RankItem onVote={() => onVote(stock)} key={stock?.vote?.id} rank={(currentPage - 1) * size + 2 + index} item={stock} last={index === (size - 1)} />
            ))
          }
        </div>
        <div className={styles.pageNavigation}>
          <PageNavigation total={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </div>
  )
}