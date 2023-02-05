import React, { useState } from "react";
import { 
    Navbar, 
    NavbarBrand, 
    InputGroup, 
    Input, 
    Button, 
    Form
} from 'reactstrap';
  
import { 
    BiCameraMovie, 
    BiSearchAlt2 
} from 'react-icons/bi';
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

        if(!search) return;

        navigate(`/search?q=${search}`);
        setSearch('');

    }

    return (
        <Navbar color="dark" dark expand='md'>
            <NavbarBrand>
                <Link to='/'>
                    <BiCameraMovie/> Top Movies
                </Link>
            </NavbarBrand>
            <Form onSubmit={handleSubmit}>
                <InputGroup>
                    <Input 
                    size="sm" 
                    placeholder="Search for a movie..."
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                    />
                    <Button color='warning'>
                        <BiSearchAlt2/>
                    </Button>
                </InputGroup>
            </Form>
        </Navbar>
    )
}

export default Header;