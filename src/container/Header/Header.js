import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './Header.module.scss'
import microphonePng from '../../static/icons8-microphone-24.png'
import searchSvg from '../../static/icons8-search.svg'

const SearchInput = () => {
  const [searchText, setSearchText] = useState('熱門報導')
  return (
    <div className={style.searchInput}>
      <div className={style.inputBox}>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className={style.searchBtnBox}>
          <div>
            <img src={microphonePng} alt="" />
          </div>
          <div>
            <img src={searchSvg} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

const Header = () => {
  let navigate = useNavigate()

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
      <SearchInput />
    </div>
  )
}

export default Header
