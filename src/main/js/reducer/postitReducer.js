import { DELETE_POSTIT, EDIT_POSTIT, GET_ALL_POSTIT, SAVE_POSTIT } from "../action/types"

const initialState = {
    isLoaded: false,
    postIts: []
}

// Use the initialState as a default value
export default function postitReducer(state = initialState, action) {
    //console.log("action", action)
    switch (action.type) {
        case SAVE_POSTIT:
            return {
                ...state,
                isLoaded: true,
                postIts: [...this.state.postIts, action.payload]
            }

        case EDIT_POSTIT:
            return {
                ...state,
                isLoaded: true,
                postIts: [action.payload]
            }

        case DELETE_POSTIT:
            return {
                ...state,
            }

        case GET_ALL_POSTIT:
            return {
                ...state,
                isLoaded: true,
                postIts: action.payload
            }

        default:
            return state
    }
}