import React from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from 'react-router-dom';


const Navigation = () => {
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand component ={RouterNavLink} to="/">Quotes</NavbarBrand>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink component ={NavLink} to="/quotes/new">New quotes</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink component ={NavLink} to="/about">about</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink component ={NavLink} to="/contact">contact</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default Navigation;