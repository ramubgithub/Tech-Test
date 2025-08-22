import { createSlice, configureStore } from '@reduxjs/toolkit'

const examSlice = createSlice({
    name: "exam",
    initialState: {
        stackId: null,
        sections: [],

        selectedSection: 0,
        selectedQuestion: 0,
        answers: [],

        message: "",
        msgType: "",
        msgVisible: false,

        timeLeft: 30 * 60
    },
    reducers: {
        setExamData: (state, action) => {
            state.stackId = action.payload.stackId;
            state.sections = action.payload.sections;

            state.answers = action.payload.sections.map(section => 
                section.questions.map(() => ({
                    selectedOption: "",
                    correctOption: ""
                }))
            )
        },
        setSelectedSection: (state, action) => {
            state.selectedSection = action.payload;
            state.selectedQuestion = 0;
        },
        setSelectedQuestion: (state, action) => {
            state.selectedQuestion = action.payload;
        },
        setAnswer: (state, action) => {
            const { selectedSection, selectedQuestion, selectedOption, correctOption } = action.payload;
            if(!state.answers[selectedSection]) {
                state.answers[selectedSection] = [];
            }

            state.answers[selectedSection][selectedQuestion] = {
                selectedOption,
                correctOption
            }
        },
        clearAnswer: (state, action) => {
            const { selectedSection, selectedQuestion } = action.payload;
            state.answers[selectedSection][selectedQuestion] = {
                selectedOption: '',
                correctOption: ''
            }
        },
        resetExam: (state) => {
            state.stackId = null;
            state.sections = [];
            state.selectedSection = 0;
            state.selectedQuestion = 0;
            state.answers = [];
        },
        showMsg: (state, action) => {
            const { msg, isSuccess } = action.payload;
            state.message = msg;
            state.msgType = isSuccess ? "success" : "error";
            state.msgVisible = true;
        },
        hideMsg: (state) => {
            state.message = "",
            state.msgType = "",
            state.msgVisible = false
        },
        loadFromStorage: (state) => {
            const saved = localStorage.getItem("examState");
            if (saved) {
                const parsed = JSON.parse(saved);
                state.stackId = parsed.stackId;
                state.sections = parsed.sections || [];
                state.selectedSection = parsed.selectedSection || 0;
                state.selectedQuestion = parsed.selectedQuestion || 0;
                state.answers = parsed.answers || [];
            }
        },
        decrementTimer: (state) => {
            if(state.timeLeft > 0) state.timeLeft -= 1;
            localStorage.setItem("examTimer", state.timeLeft);
        },
        resetTimer: (state) => {
            state.timeLeft = 30 * 60;
            localStorage.setItem("examTimer", state.timeLeft);
        },
        loadTimerFromStorage: (state) => {
            const savedTimer = localStorage.getItem("examTimer");
            state.timeLeft = savedTimer ? parseInt(savedTimer) : 30 * 60;
        }
    }
});

export const { setExamData, resetExam, setAnswer,clearAnswer, setSelectedQuestion, setSelectedSection, showMsg, hideMsg, loadFromStorage, decrementTimer, resetTimer, loadTimerFromStorage } = examSlice.actions;

export const showMessage = ({msg, isSuccess}) => (dispatch) => {
    dispatch(showMsg({msg, isSuccess}));

    setTimeout(() => {
        dispatch(hideMsg());
    }, 3000);
}

export const store = configureStore({
    reducer: { exam: examSlice.reducer }
})