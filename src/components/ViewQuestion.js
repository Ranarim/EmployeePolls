import {connect} from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom'
import { addUsersAnswer } from "../actions/users";
import {handleAnswerQuestion} from "../actions/questions";
import styles from "../stylesheets/viewquestion.module.css";
import gif from '../utils/404.gif'


const ViewQuestions = (props) => {

    const location = useLocation()
    const navigate = useNavigate()
    try {
        const { from } = location.state
        const {firstChoice,secondChoice,name } = from.question
    
    
        console.log(from)
    
        if (props.authedUser === 'Guest') {
           return (<h2>As a guest you are not able to see this poll. Please sign in as an employee to see this poll.</h2>)
        }
    
        const handleAnswerPoll = (e) => {
            const {dispatch} = props;
    
            dispatch(addUsersAnswer({
                authedUser: props.authedUser,
                qid: from.question.id,
                answer: e.target.value,
            }))
    
            dispatch(handleAnswerQuestion({
                authedUser: props.authedUser,
                qid: from.question.id,
                answer: e.target.value,
            }))
    
            setTimeout(() => navigate("/"), 1500); 
    
        }
    
        const checkIfAnswered = () => 
        props.users[props.authedUser].answers.hasOwnProperty(from.question.id);
        const getVotesPercentage = (num) => {
            const rawNum = (num/(firstChoice.votes.length + secondChoice.votes.length))*100;
            return `${rawNum.toFixed(2)} percent votes for this option`
        }
        const voteForOption = (option) => props.users[props.authedUser].answers[from.question.id] === option;
        
        return (
            <div className = {styles.box}>
                <div>
                    <h2>Poll by {name}</h2>
                    <img src="" alt="" />
                </div>
                {checkIfAnswered() ? (
                    <div className={styles.answered}>
                        <h2>You answered this poll already.</h2>
                        <div className={voteForOption("optionOne") ? styles.yes : styles.no}>
                            <p>First Option: {firstChoice.text}</p>
                            <p>{getVotesPercentage(firstChoice.votes.length)}</p>
                        </div>
                        <div className={voteForOption("optionTwo") ? styles.yes : styles.no}>
                            <p>Second Option: {secondChoice.text}</p>
                            <p>{getVotesPercentage(secondChoice.votes.length)}</p>
                        </div>
                    </div>
                ) : (
                    <div onChange={handleAnswerPoll}>
                <div className={styles.notAnswered}>
                <h2>Would you rather</h2>
                  <input type="radio" value="optionOne" />
                  {firstChoice.text}
                  <h4>or</h4>
                </div>
                <div>
                  <input type="radio" value="optionTwo" />
                  {secondChoice.text}
                </div><h4>?</h4>
              </div>
                ) }
            </div>
        )
    } catch {
        return (
        <div className={styles.notFound}>
            <img src={gif} alt="loading..." /> 
            <h1 className={styles.sorry} >Sorry! The question you are looking for does not exist.</h1>
        </div>
        )
    }
}

const mapStateToProps = ({authedUser,users}) => {
    return (
        {
            users,
            authedUser,
        }
    )
}

export default connect(mapStateToProps)(ViewQuestions)


