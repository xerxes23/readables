import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

const NotFound = () =>  (
		<div className="not-found-hero" >
		
            <h1 className="title">
                <Icon size="big" name="exclamation triangle"/>
                [404] : Bad URL
            </h1>
                
            <Link to='/' className="subtitle">
                Go Back Home
            </Link>
            
          
		</div>
	)


export default NotFound