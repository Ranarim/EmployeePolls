import { connect } from "react-redux";
import Question from "./Question";
import styles from '../stylesheets/dashboard.module.css';
import { useState } from "react";


const Dashboard = (props) => {

  const answeredQuestions = props.questionIds.filter(id =>
    props.users[props.authedUser].answers.hasOwnProperty(id))

  const unAnsweredQuestions = props.questionIds.filter(id =>
    props.users[props.authedUser].answers.hasOwnProperty(id) === false)

  const [activeAnswered, setActiveAnswered] = useState(false)
  const [activeUnAnswered, setActiveUnAnswered] = useState(true)


  const showAnsweredQuestions = () => {
    activeAnswered ? setActiveAnswered(false) : setActiveAnswered(true)
  }

  const showUnAnsweredQuestions = () => {
    activeUnAnswered ? setActiveUnAnswered(false) : setActiveUnAnswered(true)
  }

  return (
    <div>
      <div className={styles.questions_list}>
        <h2 className={styles.title}>Answered Polls</h2>
        <button onClick={showAnsweredQuestions}>Show</button>
        <div className={styles.answered_questions}>
          {activeAnswered ? (
            answeredQuestions.length === 0 ? (
              <h3 className={styles.no_polls}>No polls available.</h3>
            ) : (answeredQuestions.map(question => (
              <li key={question} className={styles.question_listitems}>
                <Question id={question} />
              </li>
            )))
          ) : null}

        </div>
        <h2 className={styles.title}>Unanswered Polls</h2>
        <button onClick={showUnAnsweredQuestions}>Show</button>
        <div className={styles.unanswered_questions}>

          {activeUnAnswered ? (
            answeredQuestions.length === 0 ? (
              <h3 className={styles.no_polls}>No polls available.</h3>
            ) : (unAnsweredQuestions.map(question => (
              <li key={question} className={styles.question_listitems}>
                <Question id={question} />
              </li>
            )))
          ) : null}

        </div>


      </div>
    </div>
  );
};

const mapStateToProps = ({ questions, authedUser, users }) => {

  return ({
    questionIds: Object.keys(questions).sort((a, b) =>
      questions[b].timestamp - questions[a].timestamp
    ),
    authedUser,
    users,
    questions,
  })
}


export default connect(mapStateToProps)(Dashboard)
