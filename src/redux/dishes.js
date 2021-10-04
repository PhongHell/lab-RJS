import * as ActionTypes from './ActionTypes';
//reducer dishes
export const Dishes = (state={
    isLoading: true,
    errMess: null,
    dishes:[]
    //tải thông tin món ăn từ nơi nào đò
},action) =>{
    switch(action.type){
        //xảy ra tương ứng từng state của Dishes
        case ActionTypes.ADD_DISHES:
            return {...state,isLoading:false, errMess:null ,dishes:action.payload}
        //trong ActionCreator set payload: dishes để lấy dữ liệu
        case ActionTypes.DISHES_LOADING:
            return {...state,isLoading:true, errMess:null ,dishes:[]}
                //mọi state đi qua đều loading
        case ActionTypes.DISHES_FAILED:
            return {...state,isLoading:false, errMess:action.payload ,dishes:[]}
            //pay load cài trong component gán vào mang thông tin
        default : 
         return state;
    }
}