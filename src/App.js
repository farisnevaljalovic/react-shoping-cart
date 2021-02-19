//feature 1
import React, { Component, useState } from 'react';
import "./style.css";
import data from "./data.json";
import Products from './components/Products';

class App extends Component {

    constructor (){
        super();
        this.state = {
            products: data.products,
            size: "",
            sort: ""
        }
    }
    render () {
        return (
            <div className="grid-container">
                <header>
                    <a href="/">React Shoping Cart</a>
                </header>
                <main>
                    <div className="content">
                        <div className="main">
                            <Products products={this.state.products}></Products>
                        </div>
                        <div className="sidebar"></div>
                    </div>
                </main>
                <footer>All right is reserved.</footer>
                
            </div>
        )

    }
}

export default App
