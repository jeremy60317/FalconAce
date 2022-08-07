import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Card from '../../component/Card/Card'
import styles from './Home.module.scss'
import navObj from '../../utils/navObject'
import { diffDate } from '../../utils/tools'

const NewsPage = ({ page }) => {
  const [title, setTitle] = useState('')
  const [nowHotPage, setNowHotPage] = useState(0)
  const AppReducer = useSelector((state) => state.AppReducer)
  const {
    list: { articles, hotPageNews, otherNews },
  } = AppReducer

  useEffect(() => {
    setTitle(navObj[page] ? navObj[page].title : '熱門報導')
  }, [page])

  function onClickHotPageBtn(type) {
    if (type === 'left') {
      setNowHotPage(nowHotPage - 1)
    } else {
      setNowHotPage(nowHotPage + 1)
    }
  }

  const color = [
    '#193368',
    '#726959',
    '#554D21',
    '#503E3F',
    '#C22833',
    '#252523',
  ]

  return (
    <div className={styles.NewsPage}>
      <div className={styles.title}>{title}</div>
      <div className={styles.newsBox}>
        <div
          className={styles.hotNewsBox}
          style={{ left: `-${nowHotPage * 100}%`, transition: 'left .5s' }}
        >
          {hotPageNews &&
            hotPageNews.map((hotPage) => (
              <div className={styles.newBoxItm}>
                {hotPage.map((itm, idx) => (
                  <Card props={itm} key={idx} color={color[idx]} />
                ))}
              </div>
            ))}
        </div>
        {nowHotPage !== 0 && (
          <div
            className={styles.left}
            onClick={() => onClickHotPageBtn('left')}
          >
            {`<`}
          </div>
        )}
        {hotPageNews && nowHotPage !== hotPageNews.length - 1 && (
          <div
            className={styles.right}
            onClick={() => onClickHotPageBtn('right')}
          >
            {`>`}
          </div>
        )}
      </div>
      {otherNews && otherNews.length > 0 && (
        <React.Fragment>
          <div className={`${styles.title} ${styles.moreNews}`}>更多新聞</div>
          <div className={styles.moreNewsBox}>
            {otherNews.map((itm) => (
              <a
                href={itm.url}
                target="_blank"
                className={styles.moreNewsItem}
                key={itm.title}
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
  const AppReducer = useSelector((state) => state.AppReducer)
  const { list } = AppReducer
  return (
    <div className={styles.homeBox}>
      <NewsPage page={page}></NewsPage>
    </div>
  )
}

export default Home
