'use strict';

export const nextSlide = () => {
    return {
        type: 'NEXT-SLIDE',
    };
};

export const prevSlide = () => {
    return {
        type: 'PREV-SLIDE',
    };
};

export const setSlide = (slideNumber) => {
    return {
        type: 'SET-SLIDE',
        slideNumber
    }
}