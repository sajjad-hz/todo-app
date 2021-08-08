import { createReducer } from "@reduxjs/toolkit";
import {filterTodo} from '../actions/filter';

export const filter = createReducer([], {
    [filterTodo]: (state, {payload}) => {
      return payload
    }
})