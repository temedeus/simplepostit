// users.test.js
import fetchMock from "jest-fetch-mock";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { savePostIt, getAllPostit, editPostit, deletePostit } from "./index"
import { DELETE_POSTIT_REQUEST, DELETE_POSTIT_SUCCESS, EDIT_POSTIT_REQUEST, FETCH_POSTITS_REQUEST, FETCH_POSTITS_SUCCESS, SAVE_POSTIT_REQUEST, SAVE_POSTIT_SUCCESS } from "./types"

fetchMock.enableMocks();

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

beforeEach(() => {
    fetch.resetMocks();
});

describe('save postit', () => {
    it('should trigger save postit action', async () => {
        const store = mockStore({})
        const response = {
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
        fetch.mockResponseOnce(JSON.stringify(response));

        store.dispatch(savePostIt("content"))
            .then(() => {
                const actions = store.getActions()
                const types = actions.map(action => action.type)
                const expectedTypes = [SAVE_POSTIT_REQUEST, SAVE_POSTIT_SUCCESS]
                expect(types).toEqual(expect.arrayContaining(expectedTypes))
                expect(actions[1].payload).toEqual(response)
            })
    });
})

describe('fetch postit', () => {
    it('should trigger fetch all postit action', async () => {
        const store = mockStore({})
        const response = {
            _embedded: {
                postIts: [{
                    _links:
                    {
                        postIt: { href: "http://localhost:8080/api/postIts/1" },
                        self: { href: "http://localhost:8080/api/postIts/1" }
                    }, content: "Hey there! Hit the plus sign down there to add more"
                },
                {
                    _links:
                    {
                        postIt: { href: "http://localhost:8080/api/postIts/2" },
                        self: { href: "http://localhost:8080/api/postIts/2" }
                    }, content: "You can also delete us before adding real data!"
                }]
            }
        }


        fetch.mockResponseOnce(JSON.stringify(response));

        store.dispatch(getAllPostit())
            .then(() => {
                const actions = store.getActions()
                const types = actions.map(action => action.type)
                const expectedTypes = [FETCH_POSTITS_REQUEST, FETCH_POSTITS_SUCCESS]
                expect(types).toEqual(expect.arrayContaining(expectedTypes))
                expect(actions[1].payload._embedded.postIts).toEqual(response)
            })
    });
})

describe('edit postit', () => {
    it('should trigger edit postit action', async () => {
        const store = mockStore({})
        const editedText = "Edited text"
        const response = {
            "content": editedText,
            "_links": {
                "self": {
                    "href": "http://localhost:8080/api/postIts/2"
                },
                "postIt": {
                    "href": "http://localhost:8080/api/postIts/2"
                }
            }
        }

        fetch.mockResponseOnce(JSON.stringify(response));

        store.dispatch(editPostit("http://localhost:8080/api/postIts/2", editedText))
            .then(() => {
                const actions = store.getActions()
                const types = actions.map(action => action.type)
                const expectedTypes = [EDIT_POSTIT_REQUEST, EDIT_POSTIT_SUCCESS]
                expect(types).toEqual(expect.arrayContaining(expectedTypes))
                expect(actions[0].payload).toEqual(response)
            })
    });
})

describe('delete postit', () => {
    it('should trigger edit postit action', async () => {
        const store = mockStore({})

        fetch.mockResponseOnce(JSON.stringify({}));

        store.dispatch(deletePostit("http://localhost:8080/api/postIts/2"))
            .then(() => {
                const actions = store.getActions()
                const types = actions.map(action => action.type)
                const expectedTypes = [DELETE_POSTIT_REQUEST, DELETE_POSTIT_SUCCESS]
                expect(types).toEqual(expect.arrayContaining(expectedTypes))
            })
    });
})
