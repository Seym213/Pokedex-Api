import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

    const navigateTo = (route) => {
        navigate(route);
    }

    return <>
     <Navbar expand="lg" className="nav">
      <Container>
        {/* <Navbar.Brand onClick={() => {navigateTo("/")}}>
            Acceuil
        </Navbar.Brand> */}
        <Navbar.Brand>
          <div className="d-flex gap-3">
            <div>
            <Link to={'/'}>Pokedex</Link>
            </div>
            <div>
            <Link to={'/'}></Link>
            </div>
            <div>
            <Link to={'/'}></Link>
            </div>
            </div>
        </Navbar.Brand>
  
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/Champion"}>Champions</Link>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
    </>;
}
 
export default NavBar;