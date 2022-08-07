import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import * as AppActions from '../../actions/AppActions'
import Home from '../HomePage/Home'
import Nav from '../../container/Nav/Navigator'
import Header from '../../container/Header/Header'
import Footer from '../../container/Footer/Footer'
import Layout from '../../component/Layout/Layout'
import pathName from '../../utils/path'
import navObj from '../../utils/navObject'
import './App.scss'

function App() {
  const dispatch = useDispatch()
  const AppReducer = useSelector((state) => state.AppReducer)
  const { loading, openModal } = AppReducer

  useEffect(() => {
    dispatch(AppActions.fetchInitialApiSaga())
  }, [])

  if (loading) {
    return (
      <div className="loading">
        <div className="pointBox">
          <div className="point"></div>
          <div className="point"></div>
          <div className="point"></div>
        </div>
      </div>
    )
  }

  return (
    <Layout>
      <Header />
      <div>
        <Nav />
        <Routes>
          <Route
            index
            path={pathName.Home}
            element={<Home page={pathName.Home} />}
            onClick={() => console.log('click')}
          />
          <Route
            path={pathName.global}
            element={<Home page={pathName.global} />}
          />
          <Route
            path={pathName.business}
            element={<Home page={pathName.business} />}
          />
          <Route
            path={pathName.entertainment}
            element={<Home page={pathName.entertainment} />}
          />
          <Route
            path={pathName.sport}
            element={<Home page={pathName.sport} />}
          />
          <Route
            path={pathName.technology}
            element={<Home page={pathName.technology} />}
          />
        </Routes>
      </div>
      <Footer />
    </Layout>
  )
}

export default App
