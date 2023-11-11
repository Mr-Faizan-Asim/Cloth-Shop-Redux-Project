import { ActionTypes } from "../contants/action-type"

const intialState = {
    products:[{
        id:1,
        title:"Dispatch",
        category: "programmer", 
    },
]
}

export const productReducer = (state,{type,payload}) =>{
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return state
        default:
            return state;
            
    }
} 