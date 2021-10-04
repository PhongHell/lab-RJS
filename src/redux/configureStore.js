import {createStore , combineReducers, applyMiddleware} from 'redux';
import {Comments} from './comments';
import {Leaders} from './leaders';
import {Promotions} from './promotions';
import {Dishes} from './dishes';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
//two middleWWare thunk and logger

//quản lý state cấu hỉnh nhận các reducer con và combineReducer

export const ConfigureStore = () =>{
    const store = createStore (
        combineReducers(
            {
                dishes: Dishes,
                comments:Comments,
                leaders:Leaders,
                promotions: Promotions
            }),
            applyMiddleware(thunk ,logger)
            
    );
    return store;

}