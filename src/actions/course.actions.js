import axios from "axios";

export const GETTING_COURSES = 'GETTING COURSES';
export const SET_COURSES = 'SET COURSES';
export const ADDING_COURSE = 'ADDING COURSE';
export const ADDED_COURSE = 'ADDED COURSE';
export const GETTING_COURSE = 'GETTING COURSE';
export const SET_COURSE = 'SETTING COURSE';
export const ERROR = 'ERROR';

const API_URL = ``;

export function addCourse(course)
{
    return async (dispatch, getState) => {
        dispatch({
            type: ADDING_COURSE,
        });

        const response = await axios.post(`${API_URL}/api/course`, course);
        console.log("THIS IS THE RESPONSE: ", response);
        if (response.status === 200) {
            const {courses} = getState().course;
            courses.push(response.data.course);
            return dispatch({
                type: ADDED_COURSE,
                payload: {courses}
            });
        } else {
            return dispatch({
                type: ERROR,
                payload: {errorMessage: response.data.message}
            });
        }
    }
}

export function getCourses()
{
    return async (dispatch) => {
        dispatch({
            type: GETTING_COURSES,
        });

        const response = await axios.get(`${API_URL}/api/course`);

        return dispatch({
            type: SET_COURSES,
            payload: {courses: response.data.courses}
        });
    }
}

export function getCourse(courseId)
{
    return async (dispatch) => {
        dispatch({
            type: GETTING_COURSE,
        });

        const response = await axios.get(`${API_URL}/api/course/${courseId}`);

        return dispatch({
            type: SET_COURSE,
            payload: {activeCourse: response.data.course, chapters: response.data.course ? response.data.course.chapters : []}
        });
    }
}