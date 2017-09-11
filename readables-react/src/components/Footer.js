// Libs
import React from 'react';
import { Icon } from 'semantic-ui-react'

const Footer = () =>  (
    <footer className="footer">         
            
        <p>
            <strong>Readables</strong> by <a href="mailto:josephmendoza23@gmail.com">Joseph Mendoza</a>.
            <br />
            A React & Redux project.
            <br />
            New York, September 2017.
            
            <br />
            
            <a href="https://github.com/xerxes23"> 
                <Icon size='big' className="git-link" name='github' />
            </a>

            <a href="https://github.com/xerxes23"> 
                <Icon size='big' className="git-link" name='linkedin' />
            </a>

        </p>
            
	</footer>  
);



export default Footer


