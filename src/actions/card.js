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

export const setHabitat = (habitat) => {
    return {
        type: 'SET-HABITAT',
        habitat
    };
};

export const setDomain = (domain) => {
    return {
        type: 'SET-DOMAIN',
        domain
    };
};

export const setLifespan = (lifespan) => {
    return {
        type: 'SET-LIFESPAN',
        lifespan
    };
};

export const setSize = (size) => {
    return {
        type: 'SET-SIZE',
        size
    };
};

export const setTrophicLevel = (trophicLevel) => {
    return {
        type: 'SET-TROPHIC-LEVEL',
        trophicLevel
    };
};

export const setTitle = (title) => {
    return {
        type: 'SET-TITLE',
        title
    };
};

export const setDescription = (description) => {
    return {
        type: 'SET-DESCRIPTION',
        description
    };
};

export const setNocturnal = (nocturnal) => {
    return {
        type: 'SET-NOCTURNAL',
        nocturnal
    };
};

export const setCardSet = (cardSet) => {
    return {
        type: 'SET-CARD-SET',
        cardSet
    };
};

export const setSuperDefender = (superDefender) => {
    return {
        type: 'SET-SUPER-DEFENDER',
        superDefender
    };
};
