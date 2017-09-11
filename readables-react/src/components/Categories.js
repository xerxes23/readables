// Libs
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Categories extends Component {

    render() {

        return (
            <div className="category-wrapper">
        
                <h3 className="category-title">Categories:</h3>
                
                <div className="categories">
                    <Link to="/category" className="category-link" >
                        React
                    </Link>

                    <Link to="/category" className="category-link" >
                        Redux
                    </Link>

                    <Link to="/category" className="category-link" >
                        Udacity
                    </Link> 
                </div> 

            </div>
        );
    }
}

export default Categories
