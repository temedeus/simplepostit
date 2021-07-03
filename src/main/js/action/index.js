import { SAVE_POSTIT, EDIT_POSTIT, DELETE_POSTIT, GET_ALL_POSTIT } from './types'
import { API_ROOT_URL } from "../util/apiconfig";

export const savePostIt = async () => {
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
                type: SAVE_POSTIT,
                payload: {
                    isLoaded: true,
                    postIts: [...this.state.postIts, data]
                }
            })

            error => {
                alert("Something went wrong saving post-it.");
            };
        });
}

export const editPostit = async (link, content) => {
    return (dispatch) => fetch(link, {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            content
        })
    }).then(response => {
        error => {
            alert("Something went wrong editing post-it.");
        };
    });
}

export const deletePostit = async (link) => {
    return (dispatch) => fetch(link, {
        method: "delete"
    }).then(res => {
        dispatch(getAllPostit())
        error => {
            alert("Something went wrong deleting post-it.");
        };
    });
}

export const getAllPostit = () => {
    return (dispatch) => {
        return fetch(API_ROOT_URL + "postIts")
            .then(res => res.json())
            .then(
                response => {
                    console.log("perkele")
                    dispatch({
                        type: GET_ALL_POSTIT,
                        payload: response._embedded.postIts
                    })
                },
            )
    }
}