import { DELETE_POSTIT_SUCCESS, EDIT_POSTIT_SUCCESS, FETCH_POSTITS_SUCCESS, SAVE_POSTIT_SUCCESS } from "../action/types"

const initialState = {
    isLoaded: false,
    postIts: []
}

// Use the initialState as a default value
export default function postitReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_POSTIT_SUCCESS:
            return {
                ...state,
                isLoaded: true,
                postIts: [...state.postIts, action.payload]
            }

        case EDIT_POSTIT_SUCCESS:
            const editedPostIts = state.postIts.map(postIt => {
                return postIt._links.self.href == action.payload._links.self.href ? action.payload : postIt
            })
            return {
                ...state,
                isLoaded: true,
                postIts: editedPostIts
            }

        case DELETE_POSTIT_SUCCESS:
            const filteredPostIts = state.postIts.filter(postIt => postIt._links.self.href != action.payload.link)
            return {
                ...state,
                postIts: filteredPostIts
            }

        case FETCH_POSTITS_SUCCESS:
            return {
                ...state,
                isLoaded: true,
                postIts: action.payload
            }

        default:
            return state
    }
}