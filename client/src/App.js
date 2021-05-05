import React,{useEffect} from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import {useDispatch,useSelector } from 'react-redux'
import Routes from './Routes'
import {ifLoged} from './redux/slices/authSlice'
import NavBar from './components/NavBar'

const App =()=> {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(ifLoged())
  },[dispatch])
  const {isAuthenticated,role} = useSelector(state => state.authentification)
  return (
    <Router>
      <NavBar/>
      <Routes  auth={isAuthenticated} role ={role}/>
    </Router>
  );
}




export default App;
