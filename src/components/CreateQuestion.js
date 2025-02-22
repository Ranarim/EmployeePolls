import { connect } from "react-redux";
import {handleAddQuestion} from "../actions/questions"
import {useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";
import styles from '../stylesheets/createquestion.module.css';

const CreateQuestion = (props) => {
    
    const navigate = useNavigate();
    const [optionA, setOptionA] = useState("");
    const [optionB, setOptionB] = useState("");
    const [disabled,setDisabled] = useState(true)

    useEffect(() => {
        optionA.length > 0 && optionB.length > 0 ? setDisabled(false) : setDisabled(true)
    },[optionA,optionB])

    const handleCreatePoll = () => {
        const {dispatch} = props;
        dispatch(handleAddQuestion({
            optionOneText: optionA,
            optionTwoText:  optionB,
            author: props.authedUser
        }))
        navigate("/");

    }

    return (
        <div className={styles.createQuestion}>
        <h2>Would you rather</h2>
        <p>Create your Own Poll</p>
        <form>
            <p>First Option</p>
			<textarea data-testid="input-field-one" type="OptionOne" placeholder="First Option" onChange={(e) => setOptionA(e.target.value)}></textarea>
			<br></br>
            <p>Second Option</p>
			<textarea data-testid="input-field-two" type="OptionTwo" placeholder="Second Option" onChange={(e) => setOptionB(e.target.value)} ></textarea>
			</form>
            <br />
            <button  data-testid="button-element" onClick={handleCreatePoll} disabled={disabled}>Create Question</button>
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


