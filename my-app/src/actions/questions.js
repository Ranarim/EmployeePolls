import { saveQuestionAnswer } from "../utils/api";
import { saveQuestion } from "../utils/api";

export const ADD_QUESTION = "ADD_QUESTION";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION"

 function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export default function handleAddQuestion(optionOne, optionTwo) {
    return (dispatch,getState) => {
        const {authedUser} = getState();
        return saveQuestion({
            optionOne,
            optionTwo,
            author: authedUser
        })
        .then((question) => dispatch(addQuestion(question)))
    }
}

export function receiveQuestions(questions) {
    return (
        {
            type: RECEIVE_QUESTIONS,
            questions,
        }
    )
}

function answerQuestion ({id,authedUser,hasAnswered, voteForA}) {
    return ({
        type: ANSWER_QUESTION,
        id,
        authedUser,
        hasAnswered,
        voteForA,
    })
}

export function handleAnswerQuestion (info) {
    return (dispatch) => {
        dispatch(answerQuestion(info))

        return saveQuestionAnswer.catch((err) => { 
            console.warn("Error in handling answering a question: ", err);
            dispatch(answerQuestion(info))
            alert("There was an error in the handling of answering the question")
        })
    }
}