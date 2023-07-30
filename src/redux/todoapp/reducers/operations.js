import { ADD_TODO, DELETE_ALL, REMOVE_TODO, UPDATE_CHECKBOX, UPDATE_TODO } from "../actions";

const initialState = [
    {id: 1, todo: 'Buy Laptop', completed: false},
    {id: 2, todo: 'Master Redux', completed: false},
    {id: 3, todo: 'Watering Plants', completed: true},
];

export const operationsReducer = (state=initialState,action) => {
    switch(action.type){
        case ADD_TODO:
            return [...state,action.payload]
        case DELETE_ALL:
            return [];
        case REMOVE_TODO:
            const filterteredTodos = state.filter((todo) => todo.id !== action.payload)
            return filterteredTodos;
        case UPDATE_TODO:
            let data = action.payload
            const updateArr = []
            state.map((item) => {
                if(item.id === data.id){
                    item.id = data.id;
                    item.todo = data.todo;
                    item.completed = data.completed
                }
                updateArr.push(item)
            })
            return updateArr;
        case UPDATE_CHECKBOX : 
            let todoArr = []
            state.map((item) => {
                if(item.id === action.payload){
                    item.completed = !item.completed;
                }
                todoArr.push(item)
            })
            return todoArr
        default : 
            return state
    }
}