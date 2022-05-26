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
            // What is the peace of state in the store, this component cares about?
            // What will show up as a property on this container?

            // The option is going to have questionIds in it,it will point to Object.keys, which means we
            // are getting all the different ids of our questions, which we sort by time
            questionIds: Object.keys(questions).sort((a,b) => 
            questions[b].timestamp - questions[a].timestamp
            ),
            authedUser
    })
  }


export default connect(mapStateToProps)(Dashboard)