import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Navigator.module.scss'
import navObj from '../../utils/navObject'

const Navigator = ({ propsClickType }) => {
  const [clickType, setClickType] = useState('')
  useEffect(() => {
    if (propsClickType !== '') {
      onClickNav(
        propsClickType,
        propsClickType === 'home' ? '' : propsClickType
      )
    }
  }, [propsClickType])
  let navigate = useNavigate()
  function onClickNav(key, urlTo) {
    setClickType(key)
    toPageType(urlTo)
    localStorage.setItem('clickType', key)
  }
  function toPageType(type = '') {
    navigate(`/${type}`)
  }
  return (
    <div className={styles.navigator}>
      {Object.entries(navObj).map(([key, value], idx) => (
        <div
          className={`${styles.navItem} ${
            clickType === key ? styles.click : ''
          }`}
          key={value.title}
          onClick={() => onClickNav(key, `${value.urlTo}`)}
        >
          <img src={clickType === key ? value.svg_w : value.svg_b} />
          <div>{value.title}</div>
        </div>
      ))}
    </div>
  )
}

export default Navigator
