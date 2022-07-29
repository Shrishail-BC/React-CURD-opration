import react from "react";
import { Link } from "react-router-dom"
import { Card, Container } from "react-bootstrap";
import ProductCard from "./ProductCard";

const ProductList=(props)=>{
    console.log(props);

    const products=[
        {
            id:"1",
            product_Name:"Mobil",
           prize:"1000",
        },
    ];
    
    const renderProductList=products.map((product)=>{
        return(
           <ProductCard product={product}></ProductCard>
        );      
    })

    return(
        <Container>
        <Card style={{textAlign:"center"}}className="mt-5 pt-5 ">
              <div className="form-group row mb-3">

           <h2 > Product List</h2> 
           <Link to="/add">
              <button type="submit"  className="btn btn-primary m-5 col-sm-10">Add</button>
              </Link>
           <div>{ renderProductList} </div>
           </div>
        </Card>
        </Container>

    )
}
export default ProductList;