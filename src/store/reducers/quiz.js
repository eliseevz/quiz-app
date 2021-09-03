import {FETCH_QUIZ_SUCCESS, FETCH_QUIZES_ERROR, FETCH_QUIZES_START, FETCH_QUIZES_SUCCESS} from "../actions/actionType";
import {act} from "@testing-library/react";

const initalState = {
    quizes: [],
    isLoading: false,
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: null,
}

export default function quizReducer(state=initalState,action) {

    switch (action.type) {
        case FETCH_QUIZES_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_QUIZES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                quizes: action.quizes
            }
        case FETCH_QUIZES_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        case FETCH_QUIZ_SUCCESS:
            return {
                ...state,
                isLoading: false,
                quiz: action.quiz
            }
        default:
            return state
    }

}