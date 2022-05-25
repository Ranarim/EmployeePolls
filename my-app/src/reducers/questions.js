import { RECEIVE_QUESTIONS, ANSWER_QUESTION } from "../actions/questions";


export default function questions (state={}, action){
    switch(action.type) {
        case RECEIVE_QUESTIONS: 
        return {
            ...state,
            ...action.questions,
        }
        case ANSWER_QUESTION: 
        return {

            /*What I want to do: 
            If the user votes for A, push his ID in the state[action.id].optionA.votes Array,
            if the user votes for , push his ID in the state[action.id].optionB.votes Array
            */

            ...state,
            [action.id]: {
                ...state[action.id],
                answers: action.hasAnswered === true ?  
                (
                    action.voteForA ? state[action.id].optionOne.votes.filter(
                (userId) => userId !== action.authedUser) : 
                state[action.id].optionTwo.votes.filter( (userId) => userId !== action.authedUser)
                ) : (
                    action.voteForA ? state[action.id].optionOne.votes.concat([action.authedUser]) : 
                    state[action.id].optionTwo.votes.concat([action.authedUser])
                )

            }
           }
           default: 
           return state;
        }
     
    }






