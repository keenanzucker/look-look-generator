'use strict';

export default function card(state = {}, action) {
    var newCard = {
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
        cardSet: '',
        image: '',
        author: '',
        id: ''
    };

    switch (action.type) {

        case 'NEW-CARD':
            return {
                state: {
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
                    cardSet: '',
                    image: '',
                    author: '',
                    id: ''
                }
            }

        case 'SET-CARD-ID':
            return {
                ...state, cardId: action.cardId
            }
            
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
                ...state, image: action.image
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
        
        case 'SET-CARD-SET':
            return {
                ...state, cardSet: action.cardSet
            }

        case 'SET-SUPER-DEFENDER':
            return {
                ...state, superDefender: action.superDefender
            }

        default:
            return state;
    }
}