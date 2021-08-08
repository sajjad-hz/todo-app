
import { createReducer } from "@reduxjs/toolkit";
import { removeTodo, setTodo, colorTodo } from "../actions/todo";

export const todo = createReducer([], {
  [setTodo]: (state, {payload}) => {
    let check = {};
    state.map((e) => {
      if (e.tags === payload.tags && e.color) {
        check = { ...payload, color: e.color };
      }
    });
    return check.tags ? [...state, check] : [...state, payload];
  },

  [removeTodo]: (state, {payload}) =>
    state.filter((state) => state.todoash !== payload),
    
  [colorTodo]: (state, {payload}) => {
    let arr = [];

    state.map((e) =>
      e.tags === payload.tags
        ? (arr = [...arr, { ...e, ...payload }])
        : (arr = [...arr, e])
    );
    return arr;
  },

});



// [...state, action.payload],
