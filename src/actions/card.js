'use strict';

export const setAuthor = (author) => {
    return {
        type: 'SET-AUTHOR',
        author
    }
}

export const setName = (name) => {
    return {
        type: 'SET-NAME',
        name
    };
};

export const setImage = (url) => {
    return {
        type: 'SET-IMAGE',
        url
    };
};

export const setDomain = (domain) => {
    return {
        type: 'SET-DOMAIN',
        domain
    };
};

export const setHabitat = (habitat) => {
    return {
        type: 'SET-HABITAT',
        habitat
    };
};