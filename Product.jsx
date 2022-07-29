import React from "react";
import { Card, Container } from "react-bootstrap";
import Table from "./Table";

function Product() {
    
   
    return(
        <Container>
      <Card className="mt-5 pt-5 ">
            <div className="form-group row mb-3">
                    <label className="col-sm-2 col-form-label mx-5">Product</label>
                    <div className="col-sm-5">
                        <input type="email" className="form-control"   placeholder="Enter product name" />
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label  className="col-sm-2 col-form-label mx-5">Prize</label>
                    <div className="col-sm-5">
                        <input type="number" className="form-control"   placeholder="Enter prize" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit"   className="btn btn-primary m-5">Submit</button>
                    </div>
                    </div>
        </Card>
        </Container>

    )
}
export default Product;