'use strict';

export default function card(state = {}, action) {
    switch (action.type) {
        case 'SET-AUTHOR':
            return {
                ...state, author: action.author
            }

        case 'SET-NAME':
            return {
                ...state, name: action.name
            }

        case 'SET-IMAGE':
            return {
                ...state, image: action.url
            }

        case 'SET-DOMAIN':
            return {
                ...state, domain: action.domain
            }
        
        case 'SET-HABITAT':
            return {
                ...state, habitat: action.habitat
            }

        default:
            return state;
    }
}