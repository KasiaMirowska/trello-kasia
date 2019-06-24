import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import './Card.css';
import Card from './Card';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card title = 'A title' content = 'some content'/>, div);
    ReactDOM.unmountComponentAtNode(div);
})

it('renders as expected', () => {
    const tree = renderer.create(<Card title='A title' content='some content' />)
    expect(tree).toMatchSnapshot();
})