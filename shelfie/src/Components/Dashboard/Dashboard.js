import React, {Component} from 'react';
import Product from "./../Product/Product";

class Dashboard extends Component{
    render(){
        return(
            <div>
                <Product />
                <h1>Dashboard</h1>
            </div>
        )
    }
}

export default Dashboard;