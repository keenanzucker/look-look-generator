'use strict';

import { combineReducers } from 'redux';
import card from './card';
import ui from './ui';


const rootReducer = combineReducers({
    card,
    ui
});

export default rootReducer;
