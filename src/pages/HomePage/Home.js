import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Card from '../../component/Card/Card'
import styles from './Home.module.scss'
import navObj from '../../utils/navObject'

const NewsPage = ({ page }) => {
  const [title, setTitle] = useState('')
  const AppReducer = useSelector((state) => state.AppReducer)
  const {
    list: { articles },
  } = AppReducer

  useEffect(() => {
    setTitle(navObj[page] ? navObj[page].title : '熱門報導')
  }, [page])

  return (
    <div className={styles.NewsPage}>
      <div className={styles.title}>{title}</div>
      <div className={styles.newsBox}>
        {articles && articles.map((itm) => <Card props={itm} />)}
      </div>
      <div className={`${styles.title} ${styles.moreNews}`}>更多新聞</div>
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
