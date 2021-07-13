import { SAVE_POSTIT_SUCCESS, EDIT_POSTIT_SUCCESS, DELETE_POSTIT_SUCCESS, FETCH_POSTITS_SUCCESS, FETCH_POSTITS_REQUEST, FETCH_POSTITS_FAILURE, DELETE_POSTIT_FAILURE, EDIT_POSTIT_FAILURE, SAVE_POSTIT_FAILURE, DELETE_POSTIT_REQUEST, EDIT_POSTIT_REQUEST, SAVE_POSTIT_REQUEST } from './types'
import { API_ROOT_URL } from "../util/apiconfig";

export const savePostIt = (content) => {
    return (dispatch) => {
        dispatch({
            type: SAVE_POSTIT_REQUEST
        })
        return fetch(API_ROOT_URL + "postIts", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                content
            })
        })
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: SAVE_POSTIT_SUCCESS,
                    payload: data
                })
            },
                error => {
                    dispatch({
                        type: SAVE_POSTIT_FAILURE,
                        payload: error
                    })
                }
            );
    }
}

export const editPostit = (link, content) => {
    return (dispatch) => {
        dispatch({
            type: EDIT_POSTIT_REQUEST
        })
        return fetch(link, {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                content
            })
        })
            .then(res => res.json())
            .then(
                response => {
                    dispatch({
                        type: EDIT_POSTIT_SUCCESS,
                        payload: response
                    })
                },
                error => {
                    dispatch({
                        type: EDIT_POSTIT_FAILURE,
                        payload: error
                    })
                }
            );
    }
}

export const deletePostit = (link) => {
    return (dispatch) => {
        dispatch({
            type: DELETE_POSTIT_REQUEST
        })
        return fetch(link, {
            method: "delete"
        })
            .then(
                res => {
                    dispatch({
                        type: DELETE_POSTIT_SUCCESS,
                        payload: { link }
                    })
                },
                error => {
                    dispatch({
                        type: DELETE_POSTIT_FAILURE,
                        payload: error
                    })
                }
            );
    }
}

export const getAllPostit = () => {
    return (dispatch) => {
        dispatch({
            type: FETCH_POSTITS_REQUEST
        })
        return fetch(API_ROOT_URL + "postIts", { method: "get" })
            .then(res => res.json())
            .then(
                response => {
                    dispatch({
                        type: FETCH_POSTITS_SUCCESS,
                        payload: response._embedded.postIts
                    })
                },
                error => {
                    dispatch({
                        type: FETCH_POSTITS_FAILURE,
                        payload: error
                    })
                }
            )
    }
}