import  React,{createContext} from "react";
import all_products from "../Components/Assets/all_product";

export const ShopContext = createComtext(null);

const ShopContextProvider =(props)=>{
    const contextValue ={all_product};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;