'use strict';

export default function card(state = {currentSlide: 0}, action) {
    switch (action.type) {
        case 'SET-AUTHOR':
            return {
                ...state, author: action.author
            }

        default:
            return state;
    }
}