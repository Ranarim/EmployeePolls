import {useState} from "react"
import { connect } from "react-redux";
import  handleAddQuestion from "../actions/questions";

const CreateQuestion = ({dispatch,id}) => {
    const [optionA, setOptionA] = useState("")
    const [optionB, setOptionB] = useState("")

    const handleChangeA = (e) => {
        e.preventDefault();
        let text = e.target.value;
        setOptionA(text);
    }

    const handleChangeB = (e) => {
        e.preventDefault();
        let text = e.target.value;
        setOptionB(text);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(handleAddQuestion(optionA,optionB))

        setOptionA("");
        setOptionB("");
    }

    return (
        <div>
        <h2>Would you rather</h2>
        <p>Create your Own Poll</p>
        <form onSubmit={handleSubmit}>
            <p>First Option</p>
			<input type="OptionOne" placeholder="First Option" value={optionA} onChange={handleChangeA}></input>
			<br></br>
            <p>Second Option</p>
			<input type="OptionTwo" placeholder="Second Option" value={optionB} onChange={handleChangeB}></input>
			</form>
            <br />
            <button>Login</button>
        </div>
    )
}

export default connect()(CreateQuestion)


