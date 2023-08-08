import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import useLogout from "../hooks/useLogout";
import { UserAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const pages = ["Products", "pricing", "Blog"];
  const settings = ["Profile", "Account", "ShoppingCart", "Logout"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const { logout, user } = UserAuth();
  let navigate = useNavigate();

  const handleLogout = async () => {
    console.log("click");
    sessionStorage.clear();

    let res;
    try {
      res = await signOut;
      console.log(res);
      sessionStorage.clear();
      navigate("/sign-in");
    } catch (e) {
      console.log(e);
    }
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="/Dashboard">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="20"
            fill="currentColor"
            class="bi bi-film"
            viewBox="0 0 16 16"
          >
            <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
          </svg>
          <span className="ms-2">Movie</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-appbar" />
        <Navbar.Collapse id="menu-appbar">
          <Nav className="me-auto">
            {pages.map((page, index) => (
              <Nav.Link key={index} as={Link} to={"/" + page}>
              {page}
              </Nav.Link>
              
            ))}
          </Nav>
          <Nav>
            <Dropdown
              onToggle={handleOpenUserMenu}
              show={Boolean(anchorElUser)}
            >
              <Button onClick={() => handleLogout()}>Logout</Button>2
              <Dropdown.Menu className="mt-3" aria-labelledby="user-dropdown">
                {settings.map((setting, index) => (
                  <Dropdown.Item
                    key={index}
                    as={Link}
                    to={"/" + setting.toLowerCase()}
                  >
                    {setting}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
