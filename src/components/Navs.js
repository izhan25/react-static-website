import React from 'react';

function Navs() {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around' }}>
            <NavItem name="Home" />
            <NavItem name="About"/>
            <NavItem name="Services"/>
            <NavItem name="Contact"/>
        </nav>
    )
}

function NavItem({name, route}) {
    return (
    <span>{name}</span>
    )
}

export default Navs;