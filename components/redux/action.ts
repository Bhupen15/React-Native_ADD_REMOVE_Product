import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";

export function addToCart(item: any){
    return{
        type:ADD_TO_CART,
        data: item
    }
}export function removeFromCart(item: any){
    return{
        type:REMOVE_FROM_CART,
        data: item
    }
}