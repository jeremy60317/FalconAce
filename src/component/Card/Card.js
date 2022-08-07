import styles from './Card.module.scss'
import { diffDate } from '../../utils/tools'

const Card = ({ props, color }) => {
  const diffTime = diffDate(props.publishedAt)
  return (
    <a
      href={props.url}
      rel="noreferrer"
      target="_blank"
      className={styles.card}
    >
      <img src={props.urlToImage} alt="" />
      <div
        className={styles.info}
        style={{
          background: `linear-gradient(to top, ${color} 70%, transparent 100%)`,
        }}
      >
        <div className={styles.author}>
          {props.author}
          <span> {diffTime}</span>
        </div>
        <div className={styles.title}>{props.title}</div>
      </div>
    </a>
  )
}
export default Card
