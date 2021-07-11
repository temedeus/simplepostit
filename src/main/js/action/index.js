import { SAVE_POSTIT_SUCCESS, EDIT_POSTIT_SUCCESS, DELETE_POSTIT_SUCCESS, FETCH_POSTITS_SUCCESS } from './types'
import { API_ROOT_URL } from "../util/apiconfig";

export const savePostIt = (content) => {
    return (dispatch) => fetch(API_ROOT_URL + "postIts", {
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
        });
}

export const editPostit = (link, content) => {
    return (dispatch) => fetch(link, {
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
            });
}

export const deletePostit = (link) => {
    return (dispatch) => fetch(link, {
        method: "delete"
    }).then(res => {
        dispatch({
            type: DELETE_POSTIT_SUCCESS,
            payload: { link }
        })
    });
}

export const getAllPostit = () => {
    return (dispatch) => {
        return fetch(API_ROOT_URL + "postIts")
            .then(res => res.json())
            .then(
                response => {
                    dispatch({
                        type: FETCH_POSTITS_SUCCESS,
                        payload: response._embedded.postIts
                    })
                },
            )
    }
}