import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Card from '../../component/Card/Card'
import styles from './Home.module.scss'
import navObj from '../../utils/navObject'
import { diffDate } from '../../utils/tools'

function randomBGC() {
  const letters = '0123456789ABCDEF'.split('')
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const NewsPage = ({ page }) => {
  const [nowHotPage, setNowHotPage] = useState(0)
  const AppReducer = useSelector((state) => state.AppReducer)
  const {
    list: { hotPageNews, otherNews },
  } = AppReducer

  return (
    <div className={styles.NewsPage}>
      <div className={styles.title}>{navObj[page].title}</div>
      <div className={styles.newsBox}>
        <div
          className={styles.hotNewsBox}
          style={{ left: `-${nowHotPage * 100}%`, transition: 'left .5s' }}
        >
          {hotPageNews &&
            hotPageNews.map((hotPage, hotPageIdx) => (
              <div className={styles.newBoxItm} key={hotPageIdx}>
                {hotPage.map((itm, idx) => (
                  <Card props={itm} key={idx} color={randomBGC()} />
                ))}
              </div>
            ))}
        </div>
        {nowHotPage !== 0 && (
          <div
            className={styles.left}
            onClick={() => setNowHotPage(nowHotPage - 1)}
          >
            {`<`}
          </div>
        )}
        {hotPageNews && nowHotPage !== hotPageNews.length - 1 && (
          <div
            className={styles.right}
            onClick={() => setNowHotPage(nowHotPage + 1)}
          >
            {`>`}
          </div>
        )}
      </div>
      {otherNews && otherNews.length > 0 && (
        <React.Fragment>
          <div className={`${styles.title} ${styles.moreNews}`}>更多新聞</div>
          <div className={styles.moreNewsBox}>
            {otherNews.map((itm, idx) => (
              <a
                href={itm.url}
                target="_blank"
                className={styles.moreNewsItem}
                key={idx}
              >
                <div className={styles.moreNewsTitle}>
                  <div className={styles.titleText}>{itm.title}</div>
                  <div className={styles.descriptionText}>
                    {itm.description}
                  </div>
                  <div className={styles.authorText}>
                    {itm.author}
                    <span> {diffDate(itm.publishedAt)}</span>
                  </div>
                </div>
                <div className={styles.imageBox}>
                  <img src={itm.urlToImage} alt="" />
                </div>
              </a>
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  )
}

function Home({ page }) {
  return (
    <div className={styles.homeBox}>
      <NewsPage page={page}></NewsPage>
    </div>
  )
}

export default Home
