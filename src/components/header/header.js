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

const Header = () => {
    return (
        <Navbar className="my-2" color="dark" dark expand='md'>
        <NavbarBrand>
          <BiCameraMovie/> Top Movies
        </NavbarBrand>
        <InputGroup>
        <Input size="sm" placeholder="Search for a movie..."/>
        <Button color='warning'>
          <BiSearchAlt2/>
        </Button>
      </InputGroup>
      </Navbar>
    )
}

export default Header;