import { createSlice } from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: [],
    },
    reducers: {
        addCard: (state, action) => {
            state.cards.push(
                {
                    id: action.payload.id, 
                    front: action.payload.front,
                    back: action.payload.back,
            });
        },
    }
});

export const selectCards = state => {
    console.log('State:' + JSON.stringify(state));
    return state.cards.cards;
};
export const selectCardById = (state, cardId) => {
    console.log('State:' + JSON.stringify(state));
    return state.cards.cards.find(card => card.id === cardId);
};
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;