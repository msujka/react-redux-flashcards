import { createSlice } from '@reduxjs/toolkit';


/*
add an action to your topics slice that adds a quiz’s id to the quizIds array of the topic 
with which the newly created quiz is associated. 
This action will receive the same payload the quizzes slice addQuiz action received in the form { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}.
*/
export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: [],
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics.push(
                {
                    id: action.payload.id, 
                    name: action.payload.name,
                    icon: action.payload.icon,
                    quizIds: []
            });
        },
        addQuizIdToTopic: (state, action) => {
            const topic = state.topics.find(topic => topic.id === action.payload.topicId);
            topic.quizIds.push(action.payload.quizId);
        }
    }
});

export const selectTopics = state => state.topics.topics;
export const { addTopic, addQuizIdToTopic } = topicsSlice.actions;
export default topicsSlice.reducer;