import {ActionTypes} from "../contants/action-type.js"


// ya form ko abhi tyar kar raha ha (ticket example) 

export const setProducts = (products) =>{
        return{
            type: ActionTypes.SELECT_PRODUCT,
            payload: products,
        };
};