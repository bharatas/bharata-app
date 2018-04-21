
import {Navbar, Nav, MenuItem, NavDropdown} from "react-bootstrap";
import React from "react";
import "../../sass/bootstrapUI.scss";


export default class TopHeader extends React.Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand className="customBrand">
              <a href="#brand">Bharata Spandana</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavDropdown eventKey={1} title="Account" id="basic-nav-dropdown">
              <MenuItem eventKey={1.1}>Sign In</MenuItem>
              <MenuItem eventKey={1.2}>Register</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
