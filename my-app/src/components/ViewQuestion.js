import {connect} from "react-redux";
import { handleAnswerQuestion } from "../actions/questions";
import { formatQuestion } from "../utils/helpers";
import { useLocation } from 'react-router-dom'


const ViewQuestions = (props) => {

    const location = useLocation()
    const { id } = location.state
    console.log(id)

    if (!props.question) {
        return (
            <p>This question doesnt exist.</p>
        )
    }

    const handlAnswerPoll = (boolean) => {
        boolean.preventDefault();

        const {dispatch,question,authedUser} = props;

        dispatch(handleAnswerQuestion({
            id: question.id,
            authedUser,
            hasAnswered: question.hasAnswered,
            voteForA: boolean === true ? true : false,
        }))
    }
    
    return (
        <div>
                    <div>
                        <h2>Poll by Username</h2>
                        <img src="" alt="" />
                        <h2>Would you rather?</h2>
                        </div>
                    <div>
                        <div>
                            <p>Option A</p>
                            <button onClick={handlAnswerPoll(true)}>Click</button>
                        </div>
                        <p>Option B</p>
                            <button onClick={handlAnswerPoll(false)}>Click</button>
                        <div>
        
                        </div>
                    </div>
        </div>
    )
}

const mapStateToProps = ({authedUser,users,questions},props) => {
    const question = questions[props.id];
    return (
        {
            authedUser,
            question: question ?
            formatQuestion(question,users[question.author]) : null, 
            // What is the peace of state in the store, this component cares about? --> tweets
            // What will show up as a property on this container
        }
    )
}

export default connect(mapStateToProps)(ViewQuestions)


