// Libs
import React, { Component } from 'react'

// Utils
import { toTitleCase } from '../utils/utils.js'

class CategoryHeader extends Component {

    render() {


        const { categoryPath } = this.props

        return (
            <div className="category-header" >
                
                <h1> {toTitleCase(categoryPath)} </h1>

            </div>
        );
    }
}

export default CategoryHeader
