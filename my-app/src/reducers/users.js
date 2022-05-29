import { RECEIVE_USERS,ADD_USERS_QUESTION,ADD_USERS_ANSWER } from "../actions/users";


const answerFunc = (prevState = {},action) => {
    switch(action.type) {
        case ADD_USERS_ANSWER: 
        const {answer,questionId} = action
        const {answers} = prevState

         return {
        ...prevState,
            answers: {
                ...answers,
                [questionId] : answer
            }
        }
        default:
             return prevState
    }
}



const questionFunc = (prevState = {},action) => {
    switch(action.type) {
        case ADD_USERS_QUESTION: 
        const {id} = action;
        const {questions} = prevState;
        return {
            ...prevState,
                question: questions.concat(id)
        }
        default: return {
            prevState
        }
    }
} 

export default function users (prevState={}, action){
    switch(action.type) {

        case RECEIVE_USERS: 
        return {
            ...prevState,
            ...action.users,
        }
        case ADD_USERS_QUESTION: 
        console.log(action);
            return {
                ...prevState,
                [action.authedUser]: questionFunc(prevState[action.authedUser],action)
        }
        case ADD_USERS_ANSWER: 
        console.log(action.authedUser);

            return {
                ...prevState,
                [action.authedUser]:answerFunc(prevState[action.authedUser],action)
            }

        default: 
        return prevState
    }
}