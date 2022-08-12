import styles from './Navigator.module.scss'
import navObj from '../../utils/navObject'

const Navigator = ({ propsNavType, handleClickNav }) => (
  <div className={styles.navigator}>
    {Object.entries(navObj).map(([key, value], idx) => (
      <div
        className={`${styles.navItem} ${
          propsNavType === value.urlTo ? styles.click : ''
        }`}
        key={value.title}
        onClick={() => handleClickNav(value.urlTo)}
      >
        <img
          src={propsNavType === value.urlTo ? value.svg_w : value.svg_b}
          alt=""
        />
        <div>{value.title}</div>
      </div>
    ))}
  </div>
)

export default Navigator
