import {connect} from "react-redux";
import styles from '../stylesheets/login.module.css'
import { handleLogin } from "../actions/shared";
import { useState } from "react";



const Login = (props) => {

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	function performValidation() {
		return username.length > 0 && password.length > 0;
		}

/* 	function handleSubmit(event) {
		event.preventDefault();
		const {users} = props;
		if( users.hasOwnProperty(username) && users[username].password === password ) {
			handleLogin(users[username].id)
			console.log(props.authedUser)
		} else {
			console.log("NOP")
		}
	} */


	
	return (
        <div className={styles.box_form}>
	<div className={styles.left}>
		<div className={styles.overlay}>
		<h1>Employee Polls.</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		Curabitur et est sed felis aliquet sollicitudin</p>
		</div>
	</div>
		<div className={styles.right}>
		<h5>Login</h5>
		<p>Don't have an account? Creat Your Account it takes less than a minute.</p>
		<div className={styles.inputs}>
			<form action="">
			<input type="text"
				value={username}
				onChange={e => 
				setUsername(e.target.value)}></input>
			<br></br>
			<input type="password"
				value={password}
				onChange={e => setPassword(e.target.value)}
			>
			</input>
			</form>
			
		</div>	
			<br></br>
			<button onClick={() => handleLogin(username) } disabled={!performValidation()} type="submit">Login</button>
	</div>
	
</div>
    );
  };

  //
  const mapStateToProps = ({users,authedUser}) =>{
      return ({
		users,
		authedUser
      })
  }

  export default connect(mapStateToProps)(Login)


