import { initialState } from './initialState';
import {ADDED, CLEARCOMPLETED, COLORSELECTED, TOGGLED, DELETED, ALLCOMPLETED} from './actionTypes';

const nextTodoId=(todoes)=>{
    const maxId=todoes.reduce((maxId, todo)=>Math.max(maxId, todo.id),0);
    return maxId+1;
}

const reducer=(state=initialState, action)=>{
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id:nextTodoId(state),
                    text:action.payload,
                    completed:false
                }
            ];


        case TOGGLED:
            return state.map(todo=>{
                if(todo.id !== action.payload){
                    return todo;
                }

                return{
                    ...todo,
                    completed: !todo.completed
                }
            });


        case COLORSELECTED:
            const {todoId,color}=action.payload;
            return state.map(todo=>{
                if(todo.id !== todoId){
                    return todo;
                }

                return{
                    ...todo,
                    color: color
                }
            });


        case DELETED:
            return state.filter(todo=>todo.id !== action.payload);


        case ALLCOMPLETED:
            return state.map(todo=>{
                return{
                    ...todo,
                    completed:true
                }
            });


        case CLEARCOMPLETED:
            return state.filter(todo=>!todo.completed);
    
        default:
            return state;
    }
}

export default reducer;