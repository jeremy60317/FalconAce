import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import * as AppActions from '../../actions/AppActions'
import Home from '../HomePage/Home'
import Nav from '../../container/Nav/Navigator'
import Header from '../../container/Header/Header'
import Footer from '../../container/Footer/Footer'
import Layout from '../../component/Layout/Layout'
import Loading from '../../component/Loading/Loading'
import pathName from '../../utils/path'
import './App.scss'

function App() {
  let navigate = useNavigate()
  const [navType, setNavType] = useState('')
  const dispatch = useDispatch()
  const AppReducer = useSelector((state) => state.AppReducer)
  const { loading } = AppReducer
  const url = new URL(window.location.href)

  useEffect(() => {
    const pathName = url.pathname.split('/')[1]
    setNavType(pathName)
  }, [])

  useEffect(() => {
    dispatch(AppActions.fetchInitialApiSaga(navType))
  }, [navType])

  const handleClickNav = (type) => {
    setNavType(type)
    navigate(`/${type}`)
  }

  if (loading) {
    return <Loading />
  }

  return (
    <Layout>
      <Header />
      <div>
        <Nav
          propsNavType={navType}
          handleClickNav={(type) => handleClickNav(type)}
        />
        <Routes>
          {Object.entries(pathName).map(([key, value], idx) => {
            return (
              <Route
                index={idx === 0}
                path={value}
                element={<Home page={key} />}
                key={key}
              />
            )
          })}
        </Routes>
      </div>
      <Footer />
    </Layout>
  )
}

export default App
