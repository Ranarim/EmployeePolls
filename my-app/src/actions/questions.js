import { saveQuestionAnswer } from "../utils/api";
import { saveQuestion } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import {addUsersQuestion} from "./users"

export const ADD_QUESTION = "ADD_QUESTION";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION"


export function handleAnswerQuestion ({authedUser, id, answer}) {
    return (dispatch) => {
        dispatch(showLoading());

        return saveQuestionAnswer({
            id,
            authedUser,
            answer,
        })
        .then(() => {
            dispatch(answerQuestion({ authedUser, id, answer }));
          })
          .then(() => dispatch(hideLoading()));
    }
}

export default function handleAddQuestion(question) {
   return (dispatch) => {
       dispatch(showLoading)
   

   return saveQuestion(question)
   .then((data) => {
        dispatch(addQuestion(data));
        dispatch(addUsersQuestion(data));
   })
   .then(() => dispatch(hideLoading()))
   .catch(err => console.log(err,": HandleAddQuestion Action Creator failed"))
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

function answerQuestion ({id,authedUser,answer}) {
    return ({
        type: ANSWER_QUESTION,
        id,
        authedUser,
        answer,
    })
}

function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question
    }
}
