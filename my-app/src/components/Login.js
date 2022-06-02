import {connect} from "react-redux";
import styles from '../stylesheets/login.module.css';
import { handleLogin } from "../actions/shared";
/* import { useNavigate } from "react-router-dom";
 */


const Login = (props) => {


	const { users, } = props;

	const objToArr = Object.keys(users)

	const usersArr = []
		objToArr.map((user) =>
    	usersArr.push(users[user])
	)
  
	const login = (e) => {
	  props.dispatch(handleLogin(e.target.value));
	};
	
/* 	const loginWithoutAcc = () => {
		props.dispatch(handleLogin("guestUser"));
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
		<select
          onChange={(e) => login(e)}
        >
          <option>choose your username</option>
          {usersArr.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
		<button>Login without Account</button>
		</div>	
	</div>
	
</div>
    );
  };

  //
  const mapStateToProps = ({users}) =>{
      return ({
		users      
	})
  }

  export default connect(mapStateToProps)(Login)

  

