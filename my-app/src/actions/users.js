export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USERS_QUESTION = "ADD_USERS_QUESTION";
export const ADD_USERS_ANSWER = "ADD_USERS_ANSWER";

export function receiveUsers(users) {
    return (
        {
            type: RECEIVE_USERS,
            users,
        }
    )
}

export function addUsersQuestion(question) {
    return ({
        type: ADD_USERS_QUESTION,
        authedUser: question.author,
        id: question.id,
    }
    )
}

export function addUsersAnswer({answer,authedUser,questionId}){
    return ({
        type: ADD_USERS_ANSWER,
        answer,
        authedUser,
        questionId,
    })
}