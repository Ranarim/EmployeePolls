import {connect} from "react-redux";
import { useLocation } from 'react-router-dom'
import { addUsersAnswer } from "../actions/users";
import {handleAnswerQuestion} from "../actions/questions";

 

const ViewQuestions = (props) => {

    const location = useLocation()
    const { from } = location.state

    const {firstChoice,secondChoice,name } = from.question
  
    if (!from.question) {
        return (
            <p>This question doesnt exist.</p>
        )
    }

    const handleAnswerPoll = (e,) => {
        console.log(e.target.value, props.authedUser, from.question.id)

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

    }
    
    return (
        <div>
            <div>
                <h2>Poll by {name}</h2>
                <img src="" alt="" />
                <h2>Would you rather</h2>
            </div>
            <div
            onChange={handleAnswerPoll}
          >
            <div>
              <input type="radio" value="optionOne" />
              {firstChoice.text}
              <h4>or</h4>
            </div>
            <div>
              <input type="radio" value="optionTwo" />
              {secondChoice.text}
            </div><h4>?</h4>
          </div>
        </div>
    )
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


