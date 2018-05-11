import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

const setup = () => {
    const output = shallow(<App/>);
    return output;
};

describe('components', () => {
    describe('App', () => {

        it('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(<App/>, div)
        });
    });
});
