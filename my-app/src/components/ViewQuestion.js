import {connect} from "react-redux";
import { handleAnswerQuestion } from "../actions/questions";
import { useLocation } from 'react-router-dom'
 

const ViewQuestions = (props) => {

    const location = useLocation()
    const { from } = location.state

    const { users, authedUser } = props;
    const { id,question } = from;
    const {firstChoice,secondChoice,timestamp,name } = question
  
    if (!from.question) {
        return (
            <p>This question doesnt exist.</p>
        )
    }

    const handlAnswerPoll = (e) => {

        const {dispatch,authedUser} = props;

        dispatch(handleAnswerQuestion({
            authedUser,
            id: from.question.id,
            answer: e.target.value,
        }))
        console.log(e)
    }
    
    return (
        <div>
            <div>
                <h2>Poll by {name}</h2>
                <img src="" alt="" />
                <h2>Would you rather?</h2>
            </div>
            <div onChange={handlAnswerPoll}>
                <div className="poll-color-light padding">
                <input type="radio" name="options" value="optionOne" />
                <span>{firstChoice.text}</span>
            </div>{" "}
            <div className="poll-color-light padding">
              <input type="radio" name="options" value="optionTwo" />
              <span>{secondChoice.text}</span>
            </div>
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


