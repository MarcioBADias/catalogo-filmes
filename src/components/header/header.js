import React from "react";
import { 
    Navbar, 
    NavbarBrand, 
    InputGroup, 
    Input, 
    Button 
} from 'reactstrap';
  
import { 
    BiCameraMovie, 
    BiSearchAlt2 
} from 'react-icons/bi';
import { Link, Outlet } from "react-router-dom";

const Header = () => {
    return (
        <Navbar className="my-2" color="dark" dark expand='md'>
            <NavbarBrand>
                <Link to='/'>
                    <BiCameraMovie/> Top Movies
                </Link>
                <Link to='/movie/1'>Movie</Link>
                <Link to='/search'>Search</Link>
            </NavbarBrand>
            <InputGroup>
                <Input size="sm" placeholder="Search for a movie..."/>
                <Button color='warning'>
                    <BiSearchAlt2/>
                </Button>
        </InputGroup>
        <Outlet/>
      </Navbar>
    )
}

export default Header;