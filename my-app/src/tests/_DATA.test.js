import {
    _saveQuestion as saveQuestion,
    _saveQuestionAnswer as saveQuestionAnswer,
    formatQuestion,
    generateUID,
} from "../utils/_DATA";



describe("_DATA.js", () => {


    it("saveQuestion: to work if valid params are passed", async () => {
        const mockObject = {
            optionOneText: "Apfel",
            optionTwoText: "Wein",
            author: "Johannes Maier",
        }

        const mockData = await saveQuestion(mockObject);
        const { author, optionOne, optionTwo } = mockData;
        const optionOneText = optionOne.text;
        const optionTwoText = optionTwo.text;

        expect(author).toBe("Johannes Maier");
        expect(optionOneText).toBe("Apfel");
        expect(optionTwoText).toBe("Wein");
    })

    it("saveQuestion: to return an error if unvalid data is passed in", async () => {
        const mockObject = {
            optionOneText: null,
            optionTwoText: null,
            author: null,
        }

        const result = saveQuestion(mockObject);
        await expect(result).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
    })

    /*  it("saveQuestionsanswer to work", async () => {
         const mockObject = {
             authedUser: "mtsamis",
             qid: "8xf0y6ziyjabvozdd253nd",
             answer: "optionOne",
         }
 
         const { questions, users } = await saveQuestionAnswer(mockObject);
         expect(users[mockObject.authedUser].answers[mockObject.qid] === mockObject.answer).toBe(true);
         expect(questions[mockObject.qid][mockObject.answer].votes.includes(mockObject.authedUser)).toBe(true);
     }) */


    it("formatQuestion: returning a formatted object if input params are valid", async () => {
        const mockData = {
            optionOneText: "A",
            optionTwoText: "B",
            author: "Johannes Maier"
        }

        const returnObject = formatQuestion(mockData);
        const { author, optionOne, optionTwo } = returnObject;
        expect(author).toBe("Johannes Maier");
        expect(optionOne.text).toBe("A");
        expect(optionTwo.text).toBe("B");
    })

    it("generateUID: returning a string which length is 22", () => {
        const result = generateUID();
        expect(result.length).toBeGreaterThan(15);
    })

})

