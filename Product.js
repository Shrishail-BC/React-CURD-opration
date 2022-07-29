import react from "react";
import { Link } from "react-router-dom"
import { Card, Container } from "react-bootstrap";

class Product extends react.Component {
    state = {
        product_Name: "",
        prize: "",
    };
    add = (e) => {
        e.preventDefault();
        if (this.state.product_Name === "" && this.state.prize === "") {
            alert("all field are mandatory!");
            return;
        }
        this.props.productHandler(this.state)
        this.setState({ product_Name: "", prize: "" });
    };

    render() {
        return (
            <Container>
                <Card className="mt-5 pt-5 ">
                    <form onSubmit={this.add}>
                        <div className="form-group row mb-3">
                            <h2 style={{ textAlign: "center" }}> Add products</h2>
                            <label className="col-sm-2 col-form-label mx-5">Product Name</label>
                            <div className="col-sm-5">
                                <input className="form-control" value={this.state.product_Name} placeholder="Enter product name" onChange={(e) => this.setState({ product_Name: e.target.value })} />
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label className="col-sm-2 col-form-label mx-5">Prize</label>
                            <div className="col-sm-5">
                                <input type="text" className="form-control" value={this.state.prize} placeholder="Enter prize" onChange={(e) => this.setState({ prize: e.target.value })} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-10">
                            <Link to="/">
                                <button type="submit" className="btn btn-primary m-5">Submit</button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </Card>
            </Container>
        );
    }

}

export default Product;