import react from "react";
import { Card, Container } from "react-bootstrap";

const Header =()=>{
    return(
        <Container>
        <div className="p-3 border broder-black">
          <h2 style={{textAlign:"center"}}>Product Manager</h2>
        </div>
        </Container>
    );
}
export default Header;