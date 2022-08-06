import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as AppActions from '../../actions/AppActions.js'
import pathName from '../../utils/path'
import style from './Header.module.scss'

const Header = () => {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const AppReducer = useSelector((state) => state.AppReducer)

  function toPageType(type = '') {
    navigate(`/${type}`)
  }

  return (
    <div className={style.header} id="headerDiv">
      <div className={style.logoBox} onClick={() => toPageType()}>
        <img
          className={style.logo}
          src={'https://1000logos.net/wp-content/uploads/2017/12/Bing-logo.png'}
          alt="logo"
        />
      </div>
    </div>
  )
}

export default Header
