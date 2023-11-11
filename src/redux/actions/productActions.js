import {ActionTypes} from "../contants/action-type.js"


// ya form ko abhi tyar kar raha ha (ticket example) 

export const setProducts = (products) =>{
        return{
            type: ActionTypes.SET_PRODUCTS,
            payload: products,
        };
};

export const selectedProduct = (product) =>{
    return{
        type: ActionTypes.SELECT_PRODUCT,
        // payload aik jaga sa dosri jaga bajana ka kam karta ha like dispatcher tak bajan ka kam karta ha
        payload: product,
    };
};