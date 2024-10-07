import React from "react";
import './Sidebar.css';
/*import Closables from "./Closables";
import Layout from "./Layout";*/
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Sidebar(){
 
   return (

     <div>
     
                <div class="sidenav" style={{width:"150px",marginTop:'60px',height:'100%'}}>
                    <div>
                    <Link to='order'>Orders</Link>
                    </div>
                    <div>
                    <Link to='service'>Services</Link>
                    </div>
                    <div>
                    <Link to='content'>Contents</Link>
                    </div>
                </div>

     </div>


   )
}


export default Sidebar;

                