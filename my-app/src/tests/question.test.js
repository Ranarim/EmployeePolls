import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Question from "../components/Question";
import {screen } from "@testing-library/react";


const mockStore = configureStore([]);

describe('My Connected React-Redux Component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      myState: 'sample text',
    });
  });

  component = renderer.create(
    <Provider store={store}>
      <Question />
    </Provider>
  );

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();

    const answered = screen.getByText(/answered polls/i);
       const unanswered = screen.getByText(/unanswered polls/i);
        expect(answered).toBeInTheDocument();
        expect(unanswered).toBeInTheDocument();
  });
});

 