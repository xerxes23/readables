
// Libs
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Utils
import { toTitleCase } from '../utils/utils.js'

const Categories = (props) => {

    const { categories } = props

    return (
        <div className="category-wrapper">

            <h3 className="category-title">Categories:</h3>
            
            <div className="categories">
                
                {
                    categories.map( (category, i) => {
                        return  <Link key={i} to={`category/${category.path}`} className="category-link" >
                                    { toTitleCase(category.name)}
                                </Link>
                    })
                }
                

            </div> 

        </div>
    );
}


export default Categories
