import { EDIT_POSTIT_SUCCESS, SAVE_POSTIT_SUCCESS } from "../action/types"
import postitReducer from "./postitReducer"

describe('Save postit', () => {
    it('saves new postit', () => {
        const payload = {
            content: "Empty note...",
            _links: {
                self: {
                    "href": "http://localhost:8080/api/postIts/3"
                },
                postIt: {
                    "href": "http://localhost:8080/api/postIts/3"
                }
            }
        }
        const action = {
            type: SAVE_POSTIT_SUCCESS,
            payload: payload
        }

        const newState = postitReducer(undefined, action)
        expect(newState.isLoaded).toEqual(true)
        expect(newState.postIts.length).toEqual(1)
        expect(newState.postIts[0]).toEqual(payload)

    })
})

describe('Edit postit', () => {
    it('edit postit', () => {
        const editedText = "Edited text"
        const payload = {
            "content": editedText,
            "_links": {
                "self": {
                    "href": "http://localhost:8080/api/postIts/3"
                },
                "postIt": {
                    "href": "http://localhost:8080/api/postIts/3"
                }
            }
        }
        const action = {
            type: EDIT_POSTIT_SUCCESS,
            payload: payload
        }
        const initialState = {
            isLoaded: true,
            postIts: [{
                content: "Empty note...",
                _links: {
                    self: { href: "http://localhost:8080/api/postIts/3" },
                    postIt: { href: "http://localhost:8080/api/postIts/3" }
                }
            }]
        }

        const newState = postitReducer(initialState, action)
        expect(newState.isLoaded).toEqual(true)
        expect(newState.postIts.length).toEqual(1)
        expect(newState.postIts[0].content).toEqual(editedText)
    })
})