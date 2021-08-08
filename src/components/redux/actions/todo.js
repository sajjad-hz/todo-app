import {createAction} from '@reduxjs/toolkit'

export const setTodo = createAction('ADD')
export const removeTodo = createAction('DEL')
export const colorTodo = createAction('COLOR')

