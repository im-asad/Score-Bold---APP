import axios from "axios";
import {GETTING_COURSE, SET_COURSE} from "./course.actions";

export const GETTING_CHAPTERS = 'GETTING CHAPTERS';
export const SET_CHAPTERS = 'SET CHAPTERS';
export const ADDING_CHAPTER = 'ADDING CHAPTER';
export const ADDED_CHAPTER = 'ADDED CHAPTER';
export const GETTING_CHAPTER = 'GETTING CHAPTER';
export const SET_CHAPTER = 'SETTING CHAPTER';
export const ERROR = 'ERROR';

const API_URL = ``;

export function addChapter(chapter, courseId)
{
    return async (dispatch, getState) => {
        dispatch({
            type: ADDING_CHAPTER,
        });

        const response = await axios.post(`${API_URL}/api/chapter/${courseId}`, chapter);
        if (response.status === 200) {
            const {chapters} = getState().course;
            chapters.push(response.data.chapter);
            return dispatch({
                type: ADDED_CHAPTER,
                payload: {chapters}
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
            type: GETTING_CHAPTERS,
        });

        const response = await axios.get(`${API_URL}/api/chapter`);

        return dispatch({
            type: SET_CHAPTERS,
            payload: {courses: response.data.chapters}
        });
    }
}

export function getChapter(chapterId)
{
    return async (dispatch) => {
        dispatch({
            type: GETTING_CHAPTER,
        });

        const response = await axios.get(`${API_URL}/api/chapter/${chapterId}`);

        return dispatch({
            type: SET_CHAPTER,
            payload: {activeChapter: response.data.chapter, chapterQuestions: response.data.chapter ? response.data.chapter.questions : []}
        });
    }
}