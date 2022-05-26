import styles from "../stylesheets/navbar.module.css";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import {handleLogout} from "../actions/shared"

const NavBar = (props) => {
/*     const avatarURL = props.users[props.authedUser].avatarURL
 */
console.log(props)

    return (
        <ul className={styles.navbar}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/leaderboard">Leaderboard</Link></li>
        <li><Link to="/new">Create Question</Link></li>
        <li className={styles.navbar_left}>{props.authedUser}</li>
        <li><img alt="" /></li>
        <li onClick={handleLogout}><Link to="/login">Logout</Link></li>
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


