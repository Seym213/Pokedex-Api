import { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import PokemonServices from "../Services/PokemonServices";

const NavBar = () => {
    const navigate = useNavigate();
const [type,setType]=useState([]);

const fetchpokemonsbytype= async () => {
  try {
      const response = await PokemonServices.getPokemonByType();

      setType(response.data.results);
      
      
  } catch (error) {
      console.log(error);
  }
}
// useEffect evite les boucles infini
useEffect(() => {
  fetchpokemonsbytype()
}, []) 
    return <>
     <Navbar expand="lg" className="nav">
      <Container>
    
        <Navbar.Brand>
          <div className="d-flex gap-3">
            <div>
            <Link to={'/'}>Pokedex</Link>
            </div>
            <div>
            <Link to={'/Type'}></Link>
            </div>
            <div>
            <Link to={'/'}></Link>
            </div>
            </div> 
            
        </Navbar.Brand>
       
        <NavDropdown title="Type" id="basic-nav-dropdown">
                    {/* <NavDropdown title="Types" id="basic-nav-dropdown"> */}
            {type.map((type, index) => (
              <NavDropdown.Item
                key={"a"+index}
                href={`/type/${type.name}`}
              >
                {type.name.charAt(0).toUpperCase() + type.name.slice(1)} 
              </NavDropdown.Item>
            ))}
          </NavDropdown>           
 
      </Container>
    </Navbar>
    </>;
}
 
export default NavBar;