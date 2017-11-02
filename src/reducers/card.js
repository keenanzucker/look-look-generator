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
                ...state, lifespan: action.lifespan
            }
        case 'SET-SIZE':
            return {
                ...state, size: action.size
            }
            
        case 'SET-TROPHIC-LEVEL':
            return {
                ...state, trophicLevel: action.trophicLevel
            }
        
        case 'SET-TITLE':
            return {
                ...state, title: action.title
            }

        case 'SET-DESCRIPTION':
            return {
                ...state, description: action.description
            }
        
        case 'SET-NOCTURNAL':
            return {
                ...state, nocturnal: action.nocturnal
            }
        
        case 'SET-MAP':
            return {
                ...state, map: action.map
            }

        case 'SET-SUPER-DEFENDER':
            return {
                ...state, superDefender: action.superDefender
            }

        default:
            return state;
    }
}