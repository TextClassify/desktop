import {combineReducers} from 'redux';
import {handle} from 'redux-pack';
import {
    ADD_COLLECTION,
    FILTER_COLLECTIONS,
    CLASSIFY_COLLECTION,
    LOG_IN,
    LOG_OUT
} from '../actions/index';
import { stat } from 'fs';

function user(state=null,action){
    switch(action.type){
        case LOG_IN:
            return action.user;
        case LOG_OUT:
            return null;
        default:
            return state;
    }
}

function collections(state=[],action){
    const { type, collection,payload } = action;
    switch(type){
        case ADD_COLLECTION:
            return [...state,action.collection];
        case CLASSIFY_COLLECTION:
            return handle(state,action,{
                start: prevState=>{
                    return prevState.map((item,index)=>{
                        if(index !== action.collection.index){
                            return;
                        }
                        return Object.assign({},item,{
                            classifying: true
                        });
                    });
                },
                finish: prevState=>{
                    return prevState.map((item,index)=>{
                        if(index !== action.collection.index){
                            return;
                        }
                        return Object.assign({},item,{
                            classifying: false,
                            classified: true,
                            className: ''
                        });
                    });
                }
            });
        default:
            return state;
    }
}