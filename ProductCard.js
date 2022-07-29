import react from "react";
import { Card, Container } from "react-bootstrap";

const ProductCard= (props)=>{
    const {id, product_Name,prize}=props.product;
    return(
        <>
        <div>{product_Name}</div>
        <div>{prize}</div>
        <i class="fas fa-trash-alt"></i>
        </>
    );    
}
export default ProductCard;