import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import styles from './Navigator.module.scss'
import navObj from '../../utils/navObject'
console.log('navObj', navObj)

const Navigator = (type) => {
  let navigate = useNavigate()
  function toPageType(type = '') {
    navigate(`/${type}`)
  }
  return (
    <div className={styles.navigator}>
      {Object.entries(navObj).map(([key, value], idx) => (
        <div
          className={styles.navItem}
          onClick={() => toPageType(`${value.urlTo}`)}
        >
          {value.title}
        </div>
      ))}
    </div>
  )
}

export default Navigator
