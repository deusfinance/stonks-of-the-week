import React from 'react';

import Button from '../Button/Button';
import styles from './PageNavigation.module.scss';

export default function PageNavigation({total, currentPage, setCurrentPage, handleClick}) {
  return (
    <div className={styles.pageDiv}>
      <div className={styles.buttons}>
        <Button disabled={currentPage === 1} handleClick={() => setCurrentPage(prev => prev - 1)} text="< Prev" style={[styles.item, styles.prevItem]} textStyle={styles.text} />
        {
          total > 5 ? (
            currentPage === 1 || currentPage === 2 || currentPage === 3 ? (
              <>
                <Button handleClick={() => setCurrentPage(1)} text="1" style={[styles.item, styles.numberItem, currentPage === 1 && styles.current]} textStyle={styles.text} />
                <Button handleClick={() => setCurrentPage(2)} text="2" style={[styles.item, styles.numberItem, currentPage === 2 && styles.current]} textStyle={styles.text} />
                <Button handleClick={() => setCurrentPage(3)} text="3" style={[styles.item, styles.numberItem, currentPage === 3 && styles.current]} textStyle={styles.text} />
                <Button handleClick={() => setCurrentPage(4)} text="4" style={[styles.item, styles.numberItem]} textStyle={styles.text} />
                <Button handleClick={() => setCurrentPage(5)} text="5" style={[styles.item, styles.numberItem]} textStyle={styles.text} />
                <Button disabled text="..." style={[styles.item, styles.numberItem]} textStyle={styles.text} />
                <Button handleClick={() => setCurrentPage(total)} text={total} style={[styles.item, styles.numberItem, styles.rightBorder]} textStyle={styles.text} />
              </>
            ) : currentPage === total || currentPage === total - 1 || currentPage === total - 2 ? (
              <>
                <Button handleClick={() => setCurrentPage(1)} text="1" style={[styles.item, styles.numberItem, currentPage === 1 && styles.current]} textStyle={styles.text} />
                <Button disabled text="..." style={[styles.item, styles.numberItem]} textStyle={styles.text} />
                <Button handleClick={() => setCurrentPage(total - 4)} text={total - 4} style={[styles.item, styles.numberItem, currentPage === 1 && styles.current]} textStyle={styles.text} />
                <Button handleClick={() => setCurrentPage(total - 3)} text={total - 3} style={[styles.item, styles.numberItem]} textStyle={styles.text} />
                <Button handleClick={() => setCurrentPage(total - 2)} text={total - 2} style={[styles.item, styles.numberItem, currentPage === total - 2  && styles.current]} textStyle={styles.text} />
                <Button handleClick={() => setCurrentPage(total - 1)} text={total - 1} style={[styles.item, styles.numberItem, currentPage === total - 1 && styles.current]} textStyle={styles.text} />
                <Button handleClick={() => setCurrentPage(total)} text={total} style={[styles.item, styles.numberItem, styles.rightBorder, currentPage === total && styles.current]} textStyle={styles.text} />
              </>
            ) : (
              <>
                <Button handleClick={() => setCurrentPage(1)} text="1" style={[styles.item, styles.numberItem, currentPage === 1 && styles.current]} textStyle={styles.text} />
                <Button disabled text="..." style={[styles.item, styles.numberItem]} textStyle={styles.text} />
                <Button handleClick={() => setCurrentPage(currentPage - 2)} text={currentPage - 2} style={[styles.item, styles.numberItem]} textStyle={styles.text} />
                <Button handleClick={() => setCurrentPage(currentPage - 1)} text={currentPage - 1} style={[styles.item, styles.numberItem]} textStyle={styles.text} />
                <Button handleClick={() => setCurrentPage(currentPage)} text={currentPage} style={[styles.item, styles.numberItem, styles.current]} textStyle={styles.text} />
                <Button handleClick={() => setCurrentPage(currentPage + 1)} text={currentPage + 1} style={[styles.item, styles.numberItem]} textStyle={styles.text} />
                <Button handleClick={() => setCurrentPage(currentPage + 2)} text={currentPage + 2} style={[styles.item, styles.numberItem]} textStyle={styles.text} />
                <Button disabled text="..." style={[styles.item, styles.numberItem]} textStyle={styles.text} />
                <Button handleClick={() => setCurrentPage(total)} text={total} style={[styles.item, styles.numberItem, styles.rightBorder]} textStyle={styles.text} />
              </>
            )
          ) : (
            <>
              {
                new Array(total).fill(0).map((_, index) => {
                  return (
                    <Button
                      key={index}
                      handleClick={() => setCurrentPage(index + 1)}
                      text={index + 1}
                      style={[
                        styles.item,
                        styles.numberItem,
                        index === total - 1 && styles.rightBorder,
                        currentPage === index + 1 && styles.current,
                      ]}
                      textStyle={styles.text}
                    />
                  )
                })
              }
            </>
          )
        } 
        <Button disabled={currentPage === total} handleClick={() => setCurrentPage(prev => prev + 1)} text="Next >" style={[styles.item, styles.nextItem]} textStyle={styles.text} />
      </div>
    </div>
  )
}