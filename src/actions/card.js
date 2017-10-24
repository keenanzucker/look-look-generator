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

export const setPicture = (url) => {
    return {
        type: 'SET-PICTURE',
        url
    };
};