import styles from "../stylesheets/navbar.module.css";
import {Link, useNavigate} from "react-router-dom";
import { connect } from "react-redux";
import {handleLogin} from "../actions/shared"

const NavBar = (props) => {
    const navigate = useNavigate();
    const logout = () => {
        props.dispatch(handleLogin(null));
        navigate("/");
      };
    const avatarURL = props.users[props.authedUser].avatarURL
      console.log(avatarURL)

    return (
        <ul className={styles.navbar}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/leaderboard">Leaderboard</Link></li>
        <li><Link to="/new">Create</Link></li>
        <li className={styles.navbar_left}>{props.authedUser}</li>
        <li className={styles.navbar_avatar}><img src={avatarURL} alt="" /></li>
        <li className={styles.login} onClick={logout}><Link to="/login">Logout</Link></li>
        </ul>
    )
}

const mapStateToProps = ({authedUser,users}) => {
return (
    {
        authedUser,
        users
    }
)
}

export default connect (mapStateToProps)(NavBar)


