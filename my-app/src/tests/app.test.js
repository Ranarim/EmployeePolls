import App from '../components/App';
import React from 'react';
import { render,screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../index.js';
import "@testing-library/jest-dom/extend-expect";

describe("Testing the app component", () => {
    it("checking if login page shows up", () => {
        render (
        <Provider store={store}>
          <App />
        </Provider>
        )
        const loginText = screen.getByText(/login/i)
        expect(loginText).toBeInTheDocument();
    })
})


