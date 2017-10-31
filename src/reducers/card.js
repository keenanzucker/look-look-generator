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

        case 'SET-HABITAT':
            return {
                ...state, habitat: action.habitat
            }

        case 'SET-DOMAIN':
            return {
                ...state, domain: action.domain
            }
    
        case 'SET-LIFESPAN':
            return {
                ...state, domain: action.lifespan
            }
        case 'SET-SIZE':
            return {
                ...state, domain: action.size
            }
            
        case 'SET-TROPHIC-LEVEL':
            return {
                ...state, domain: action.trophicLevel
            }
        
        case 'SET-TITLE':
            return {
                ...state, domain: action.title
            }

        case 'SET-DESCRIPTION':
            return {
                ...state, domain: action.description
            }
        
        case 'SET-NOCTURNAL':
            return {
                ...state, domain: action.nocturnal
            }
        
        case 'SET-MAP':
            return {
                ...state, domain: action.map
            }

        case 'SET-SUPER-DEFENDER':
            return {
                ...state, domain: action.superDefender
            }

        default:
            return state;
    }
}