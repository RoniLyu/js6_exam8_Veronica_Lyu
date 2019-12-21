import React from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from 'react-router-dom';


const Navigation = () => {
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand tag ={RouterNavLink} to="/">Quotes</NavbarBrand>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink tag ={RouterNavLink} to="/quotes">New quotes</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag ={RouterNavLink} to="/quotes/new">about</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default Navigation;