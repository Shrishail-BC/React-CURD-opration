import React from "react";
import { Container } from "react-bootstrap";


function Table() {
   
    return(
        <Container>
           <button  className="btn btn-secondary m-5" >Add</button>
           <table className="border border-black">
               <thead >
                   <tr>
                       <th>sl no</th>
                       <th>Product Name</th>
                       <th>Product prize</th>
                   </tr>
               </thead>
               <tbody>
                   <tr>
                       <td>01</td>
                       <td> Apple</td>
                       <td> 100000</td>
                   </tr>
                   <tr>
                       <td>01</td>
                       <td>Samsung</td>
                       <td> 80000</td>
                   </tr>
                   <tr>
                       <td>01</td>
                       <td>jio</td>
                       <td> 10000</td>
                   </tr>
               </tbody>
           </table>
        </Container>
        )
    }
    export default Table;
