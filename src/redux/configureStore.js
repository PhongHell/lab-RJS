import {createStore , combineReducers} from 'redux';
import {Comments} from './comments';
import {Leaders} from './leaders';
import {Promotions} from './promotions';
import {Dishes} from './dishes';

//quản lý state cấu hỉnh nhận các reducer con và combineReducer

export const ConfigureStore = () =>{
    const store = createStore (
        combineReducers(
            {
                dishes: Dishes,
                comments:Comments,
                leaders:Leaders,
                promotions: Promotions
            }
        )
    );
    return store;

}