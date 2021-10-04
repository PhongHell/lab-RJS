import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';

export const addComment =(dishId , rating ,author ,comment) =>({
    type : ActionTypes.ADD_COMMENT,
    payload :{
            dishId  : dishId,
            rating : rating,
            author :author,
            comment : comment
    }
});

export const fetchDishes =() =>(dispatch) => {
    dispatch(dishesLoading(true));
//thuc hien2 thunk sau 2s add dish
    setTimeout(() =>{
        dispatch(addDishes(DISHES));
    },2000);
    //time loading
}
export const dishesLoading =() =>({
    type : ActionTypes.DISHES_LOADING

})//({}) la 1 function hoac action

export const dishesFailed = (errmess) => ({
    type :ActionTypes.DISHES_FAILED,
    payload : errmess
})//alert failed chứa thông tin errmess

export const addDishes = (dishes)=>({
  type: ActionTypes.ADD_DISHES,
  payload : dishes
})