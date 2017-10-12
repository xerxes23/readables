// Libs
import React from 'react';

// Utils
import { toTitleCase } from '../utils/utils.js';

const CategoryHeader = (props) => {

    const { categoryPath } = props;

    return (
        <div className="category-header" >
            
            <h1> {toTitleCase(categoryPath)} </h1>

        </div>
    );
   
}

export default CategoryHeader;
