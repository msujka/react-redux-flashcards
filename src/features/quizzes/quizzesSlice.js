import { createSlice } from '@reduxjs/toolkit';

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: [],
    },
    reducers: {
        addQuiz: (state, action) => {
            console.log('Adding quiz:' + JSON.stringify(action.payload));
            state.quizzes.push(
                {
                    id: action.payload.id, 
                    name: action.payload.name,
                    topicId: action.payload.topicId,
                    cardIds: action.payload.cardIds
            });
        },
        addCardIdToQuiz: (state, action) => {
            const quiz = state.quizzes.find(quiz => quiz.id === action.payload.quizId);
            quiz.cardIds.push(action.payload.cardId);
        }
    }
});

export const selectQuizzes = state => {
    console.log('Quizzes:' + JSON.stringify(state.quizzes.quizzes));
    return state.quizzes.quizzes;
}
export const { addQuiz, addCardIdToQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;