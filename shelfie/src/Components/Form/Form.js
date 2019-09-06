import React, {Component} from 'react';
import Axios from 'axios';

class Form extends Component{
    constructor(){
        super()
        this.state ={
            price: 0,
            product: "",
            image: ""
        }
        this.handlePriceChange = this.handlePriceChange.bind(this)
        this.handleProductChange = this.handleProductChange.bind(this)
        this.handleImageChange = this.handleImageChange.bind(this)
    }
    handlePriceChange(e) {
        this.setState({
            [e.target.price]: e.target.value
        });
    }
    handleProductChange(e) {
        this.setState({
            [e.target.product]: e.target.value
        });
    }
    handleImageChange(e) {
        this.setState({
            [e.target.image]: e.target.value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        Axios.post("/api/product", {
           product: this.state.product
        })
        .then(response => {
            this.setState({product: response.data})
        })
        .catch(err => {
            console.log(err);
        })

    }
    
    
    
        render(){
            return(
                <main>

                    <section>
                        <div className="box1">
                <div className="form">
                    <div className ="image-input">
                        <input onChange={this.handleImageChange} type="url" id="image" placeholder="image" value={this.state.image} />
                    </div>
                    <div className="product-input">
                        <input onChange={this.handleProductChange} type="text" id="product-name" placeholder="product name" value={this.state.product}/>
                    </div>
                    <div>
                        <input className="price" onChange={this.handlePriceChange} type="text" id="price" placeholder="price goes here" value={this.state.price}/>
                    </div>
                    
                </div>
                    </div>

                    </section>
            </main>
            )
        }
    }
    

export default Form;