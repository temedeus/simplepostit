import React from 'react';
import { shallow } from 'enzyme';
import AddPostIt from "./AddPostIt";

describe('AddPostIt', () => {
    it('should render AddPostIt', async () => {
        const action = jest.fn()
        const addPostIt = shallow(<AddPostIt onClick={action} />)
        expect(addPostIt).toMatchSnapshot()
    });

    it('should be possible to activate button with Spacebar', () => {
        const action = jest.fn()
        const addPostIt = shallow(<AddPostIt onClick={action} />)
        addPostIt
            .find('button')
            .simulate('click')

        expect(action).toHaveBeenCalled()
        addPostIt.unmount()
    })
})
