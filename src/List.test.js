import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List header="A title" cards={[{id: 1, title: "A card", content: "A content"}]} />, div);
    ReactDOM.unmountComponentAtNode(div);
})


it('renders as expected', () => {
    const tree = renderer.create(<List header="A title" cards={[{id: 1, title: "A card", content: "A content"}]} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
  