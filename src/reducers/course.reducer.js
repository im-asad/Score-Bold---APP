import {
    ADDED_COURSE,
    ADDING_COURSE,
    GETTING_COURSES,
    SET_COURSES,
    ERROR,
    GETTING_COURSE,
    SET_COURSE,
} from "../actions/course.actions";
import {
    ADDED_CHAPTER,
    ADDING_CHAPTER,
    SET_CHAPTERS,
    GETTING_CHAPTERS,
    GETTING_CHAPTER,
    SET_CHAPTER
} from "../actions/chapter.actions";
import {
    ADDED_QUESTION,
    ADDING_QUESTION,
} from "../actions/question.actions";

const initialState = {
    courses: [],
    loading: true,
    isErr: false,
    errorMessage: '',
    activeCourse: null,
    courseChapters: [],
    activeChapter: null,
    chapterQuestions: []
};

function courseReducer(state = initialState, action) {
    switch (action.type) {
        case ADDING_QUESTION: {
            return {...state, loading: true}
        }
        case ADDED_QUESTION: {
            return {...state, loading: false, ...action.payload}
        }
        case GETTING_CHAPTER: {
            return {...state, loading: true}
        }
        case SET_CHAPTER: {
            return {...state, loading: false, ...action.payload}
        }
        case GETTING_COURSE: {
            return {...state, loading: true}
        }
        case SET_COURSE: {
            return {...state, loading: false, ...action.payload}
        }
        case ADDING_CHAPTER: {
            return {...state, loading: true}
        }
        case ADDED_CHAPTER: {
            return {...state, ...action.payload, loading: false}
        }
        case GETTING_CHAPTERS:
        {
            return {...state, loading: true}
        }
        case SET_CHAPTERS:
        {
            return {...state, ...action.payload, loading: false}
        }
        case ADDING_COURSE: {
            return {...state, loading: true}
        }
        case ADDED_COURSE: {
            return {...state, ...action.payload, loading: false}
        }
        case GETTING_COURSES:
        {
            return {...state, loading: true}
        }
        case SET_COURSES:
        {
            return {...state, ...action.payload, loading: false}
        }
        case ERROR:
        {
            return {...state, isErr: true, errorMessage: action.payload.errorMessage}
        }
    }
    return state;
}

export default courseReducer;