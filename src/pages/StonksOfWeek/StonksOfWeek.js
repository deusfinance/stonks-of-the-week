import React, {useEffect, useState, useCallback} from 'react';
import Web3 from 'web3'

import Footer from './components/Footer/Footer';
import MainBody from './components/MainBody/MainBody';
import styles from './StonksOfWeek.module.scss';

export default function StonksOfWeek() {
  const [account, setAccount] = useState('');

  const connectMetamask = useCallback(async () => {
    // console.log('connectmetamask')
    try {
      await window.ethereum.enable()
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:8080')
      // const network = await web3.eth.net.getNetworkType();
      // console.log(network) // should give you main if you're connected to the main network via metamask...
      const accounts = await web3.eth.getAccounts()
      // console.log('accounts', accounts)
      setAccount(accounts[0]);
    } catch(e) {
      // alert('Please install metamask on your browser')
    }
  },[]);

  useEffect(() => {
    connectMetamask();
  }, [connectMetamask])

  return (
    <div className={styles.root} onScroll={e => e.preventDefault()}>
      <div className={styles.main}>
        <div className={styles.body}>
          <MainBody account={account} />
        </div>
        <Footer />
      </div>
    </div>
  )
}