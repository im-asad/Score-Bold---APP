import axios from "axios";

export const GETTING_QUESTIONS = 'GETTING QUESTIONS';
export const SET_QUESTIONS = 'SET QUESTIONS';
export const ADDING_QUESTION = 'ADDING QUESTION';
export const ADDED_QUESTION = 'ADDED QUESTION';
export const ERROR = 'ERROR';

const API_URL = ``;

export function addQuestion(question, {chapterId, courseId})
{
    return async (dispatch, getState) => {
        dispatch({
            type: ADDING_QUESTION,
        });

        const response = await axios.post(`${API_URL}/api/question/${courseId}/${chapterId}`, question);
        if (response.status === 200) {
            const {chapterQuestions} = getState().course;
            chapterQuestions.push(response.data.question);
            return dispatch({
                type: ADDED_QUESTION,
                payload: {chapterQuestions}
            });
        } else {
            return dispatch({
                type: ERROR,
                payload: {errorMessage: response.data.message}
            });
        }
    }
}

export function getChapters()
{
    return async (dispatch) => {
        dispatch({
            type: GETTING_QUESTIONS,
        });

        const response = await axios.get(`${API_URL}/api/chapter`);

        return dispatch({
            type: SET_QUESTIONS,
            payload: {courses: response.data.chapters}
        });
    }
}