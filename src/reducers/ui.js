'use strict';

// Change UI based on state of current slide? Maybe?
const defaultState = {
    habitat: -1,
    lifespan: -1,
    size: {
        feet: -1,
        inches: -1
    },
    domain: -1,
    trophicLevel: -1,
    superDefender: null,
    nocturnal: null,
    name: '',
    title: '',
    description: '',
    set: '',
    image: '',
    author: '',
    currentSlide: 0
}

export default function ui(state={currentSlide:0}, action) {
    switch (action.type) {
        case 'NEXT-SLIDE':
            return {
                ...state, 
                currentSlide: state.currentSlide + 1
            }
        case 'PREV-SLIDE':  
            return {
                ...state, 
                currentSlide: state.currentSlide - 1
            }
        case 'SET-SLIDE':
            return {
                ...state,
                currentSlide: action.slideNumber
            }
        default:
            return state;
    }   
}