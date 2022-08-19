import { combineReducers } from "redux";
import { addToCartReducer } from "./addToCartReducer";
import { ItemReducer } from "./ItemReducer";
import { ProductReducer } from "./productReducer";

export const reducer = combineReducers({
    productData: ProductReducer,
    product: ItemReducer,
    productAdded: addToCartReducer
})