import {useEffect, Fragment} from "react";
import {connect} from "react-redux";
import {Routes, Route} from "react-router-dom";
import { handleInitialData } from "../actions/shared";
 import Dashboard from "./Dashboard";
import Login from "./Login"
 import CreateQuestion from "./CreateQuestion"
 import NavBar from "./NavBar";
import Leaderboard from "./Leaderboard";
import styles from '../stylesheets/app.module.css';
import ViewQuestion from "./ViewQuestion";
import { LoadingBar } from "react-redux-loading-bar";




const App = (props) => {
  useEffect(()=>{
  props.dispatch(handleInitialData())
  },)

  return (
    <Fragment>
      <LoadingBar/> 
      {props.loggedIn === false ? (<Login/>) : (
     <div className={styles.box_form}>
      <NavBar/>  
      <Routes>
        <Route path="/" exact element={<Dashboard/>}/>
        <Route path="/leaderboard" exact element={<Leaderboard/>}/>
        <Route path="/new" element={<CreateQuestion/>}/>
        <Route path="/questions/:id" element={<ViewQuestion/>}/>
      </Routes>
      </div>
      )}
    </Fragment>
  )
}

const mapStateToProps = ({authedUser}) => {
  return (
    {
       // What is the peace of state in the store, this component cares about? --> authed user
      // What will show up as a property on this container? --> id of authed user
      loggedIn: authedUser !== null ? true : false,
    }
  )
}

export default connect(mapStateToProps)(App)

