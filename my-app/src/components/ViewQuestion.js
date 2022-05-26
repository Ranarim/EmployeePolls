import {connect} from "react-redux";
import { handleAnswerQuestion } from "../actions/questions";
import { useLocation } from 'react-router-dom'
 

const ViewQuestions = (props) => {

    let location = useLocation();
    let data = location.state;
    
    if (!data.question) {
        return (
            <p>This question doesnt exist.</p>
        )
    }
  /*   {authedUser, id, answer} */

    const handlAnswerPoll = (e) => {
        e.preventDefault();

        const {dispatch,authedUser} = props;

        dispatch(handleAnswerQuestion({
            authedUser,
            id: data.question.id,
            answer: e.target.value,
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

const mapStateToProps = ({authedUser}) => {
    return (
        {
            authedUser
        }
    )
}

export default connect(mapStateToProps)(ViewQuestions)


