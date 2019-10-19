import React from 'react';
import {NavLink} from 'react-router-dom';
const Toolbar = (props) => {
    return (
                    <nav class="navbar navbar-inverse">
                        <div class="container-fluid">
                            <div class="navbar-header">  
                                <NavLink to='/' class="navbar-brand">Contract Manager</NavLink>
                            </div>
                            <ul class="nav navbar-nav">
                                <li class="active"><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to='/addcontracts'> Add Contracts</NavLink></li>
                                <li><NavLink to='/viewcontracts'> View Contracts</NavLink></li>
                                <li><NavLink to='/addobligations'>Add Obligations</NavLink></li>
                                <li><NavLink to='/viewobligations'>View Obligations</NavLink></li>
                            </ul>
                        </div>
                    </nav>
    );
}

export default Toolbar;