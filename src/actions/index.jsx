export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const SHOW_ACTIVE = 'SHOW_ACTIVE';
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";



let nextTodoId = 0;

export const visbilityFilters =  {
    SHOW_ALL,
    SHOW_COMPLETED,
    SHOW_ACTIVE
    
};

export const addToDo = (text) => {
   return {
       type: ADD_TODO,
       id: nextTodoId++,
       text
       
       
   };
    
};

export const toggleToDo = (index) => {
    return {
        type: TOGGLE_TODO,
        index
        
    };
    
};


export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
        
    };
};