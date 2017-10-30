// action 类型
export const ADD_TODO = 'ADD_TDOO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// 其它的常量
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETE: 'SHOW_COMPLETE',
  SHOW_ACTIVE: 'SHOW_ACTIV E'
};

// action 创建函数
export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function toggle_Todo(text) {
  return { type: TOGGLE_TODO, text }
}

export function setvibility_Filter(text) {
  return { type: SET_VISIBILITY_FILTER, text }
}