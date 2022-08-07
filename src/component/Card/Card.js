import styles from './Card.module.scss'

const Card = ({ props }) => {
  // console.log('props', props)
  return (
    <div className={styles.card}>
      <img src={props.urlToImage} alt="" />
      <div className={styles.info}>
        {props.author}
        {props.title}
      </div>
    </div>
  )
}
export default Card
