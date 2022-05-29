import {connect} from "react-redux";
import Question from "./Question"
import styles from '../stylesheets/dashboard.module.css'


const Dashboard = (props) => {

  return (
    <div>
      <ul className={styles.questions_list}>
          {props.questionIds.map((id) => (
            <li key={id} className={styles.question_listitems}>
                <Question id={id}/>
            </li>
          ))}
      </ul>
	  </div>
    );
  };

const mapStateToProps = ({questions,authedUser}) => {
    
  return ({
           
            questionIds: Object.keys(questions).sort((a,b) => 
            questions[b].timestamp - questions[a].timestamp
            ),
            authedUser
    })
  }


export default connect(mapStateToProps)(Dashboard)