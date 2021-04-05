import React, {Fragment}from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Header extends React.Component{

    handleClick = (e) => { // when origin url === target url then stop changing the page
        if(e.target.baseURI === e.target.href)
            e.preventDefault()
    }

    render(){
        return(
            <Fragment>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/home" onClick={this.handleClick}>Home</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/scenicSpot" onClick={this.handleClick}>ScenicSpots</Nav.Link>
                        <Nav.Link href="/chooseCity" onClick={this.handleClick}>ScenicSpotsCity</Nav.Link>
                    </Nav>
                </Navbar>
            </Fragment>
        )
    }
}

export default Header;