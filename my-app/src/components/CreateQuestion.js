import { connect } from "react-redux";
import {handleAddQuestion} from "../actions/questions"
import {useState} from "react"


const CreateQuestion = (props) => {
    const [optionA, setOptionA] = useState("");
    const [optionB, setOptionB] = useState("");


    const handleCreatePoll = () => {

        console.log(optionA,optionB)
        const {dispatch} = props;

        dispatch(handleAddQuestion({
            optionOneText: optionA,
            optionTwoText:  optionB,
            author: props.authedUser
        }))
    }


    return (
        <div>
        <h2>Would you rather</h2>
        <p>Create your Own Poll</p>
        <form>
            <p>First Option</p>
			<input type="OptionOne" placeholder="First Option" onChange={(e) => setOptionA(e.target.value)}></input>
			<br></br>
            <p>Second Option</p>
			<input type="OptionTwo" placeholder="Second Option" onChange={(e) => setOptionB(e.target.value)} ></input>
			</form>
            <br />
            <button onClick={handleCreatePoll}>Login</button>
        </div>
    )
}

const mapStateToProps = ({authedUser,users, questions}) => {
    return ({
        authedUser,
        users,
        questions,
    })
}
export default connect(mapStateToProps)(CreateQuestion)


