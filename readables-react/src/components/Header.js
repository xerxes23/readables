// Libs
import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Header = () =>  (
    <nav className="nav" >
        <Link to="/">
        <h1 className="logo">
            Readables
        </h1>
        </Link>



        <Link to="/new">
        <Button positive className="nav-add-button" >
            <Icon name='plus' />
            Add New Post 
        </Button>
        </Link>
    </nav>
);



export default Header
