import { useSelector } from 'react-redux'
import Card from '../../component/Card/Card'
import styles from './Home.module.scss'

const NewsPage = ({ page }) => {
  const AppReducer = useSelector((state) => state.AppReducer)
  const {
    list: { articles },
  } = AppReducer
  return (
    <div className={styles.NewsPage}>
      <div>熱門</div>
      {articles && articles.map((itm) => <Card props={itm} />)}
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
