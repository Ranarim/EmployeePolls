import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from '../utils/test-utils';
import {BrowserRouter as Router} from 'react-router-dom';
import Question from "../components/Question";
import { Provider } from "react-redux";
import {store} from "../store";

 describe("Question", () => {
    it("Checking if the question card has all node elements", async() => {
      render(
            <Provider store={store}>
                <Router>
                    <Question />
                </Router>
            </Provider>
        )
    
       const answered = screen.getByText(/answered polls/i);
       const unanswered = screen.getByText(/unanswered polls/i);
        expect(answered).toBeInTheDocument();
        expect(unanswered).toBeInTheDocument();
    })
}) 

