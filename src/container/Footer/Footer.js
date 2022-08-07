import styles from './Footer.module.scss'

const footerArray = [
  { title: '隱私權和 Cookie', url: '' },
  { title: '法律聲明', url: '' },
  { title: '廣告', url: '' },
  { title: '關於我們的廣告', url: '' },
  { title: '說明', url: '' },
  { title: '意見反應', url: '' },
]

const year = new Date().getFullYear()

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.urlBox}>
        {footerArray.map((itm) => (
          <a href={itm.url} key={itm.title}>
            {itm.title}
          </a>
        ))}
      </div>
      <div className={styles.copyright}>© {year} Microsoft</div>
    </div>
  )
}

export default Footer
