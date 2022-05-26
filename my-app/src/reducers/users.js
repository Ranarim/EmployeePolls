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
            const {authedUser} = action;
            return {
                ...prevState,
                [authedUser]: questionFunc(prevState[authedUser],action)
        }
        case ADD_USERS_ANSWER: 
            
            return {
                ...prevState,
                [authedUser]:answerFunc(prevState[authedUser],action)
            }

        default: 
        return prevState
    }
}