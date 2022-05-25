import {connect} from "react-redux";
import styles from '../stylesheets/login.module.css'



const Login = (props) => {
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
			<input type="text" placeholder="user name"></input>
			<br></br>
			<input type="password" placeholder="password"></input>
			</form>
			
		</div>	
			<br></br>
			<button>Login</button>
	</div>
	
</div>
    );
  };

  //
  const mapStateToProps = ({users}) =>{
      return ({
		// What is the peace of state in the store, this component cares about?
      	// What will show up as a property on this container?
      })
  }

  export default connect(mapStateToProps)(Login)


