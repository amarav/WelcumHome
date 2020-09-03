import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavDropdown,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import "../css/styles.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);

    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleLogin(event) {
    this.toggleModal();
    alert(
      "Username: " +
        this.username.value +
        " Password: " +
        this.password.value +
        " Remember: " +
        this.remember.checked
    );
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <React.Fragment>
          <Navbar dark expand="md" className="fixed-top">
            <div className="container">
              <NavbarToggler onClick={this.toggleNav} />
              <NavbarBrand className="mr-auto" href="/">
              <i className="fas fa-2x fa-home text-primary mb-8"></i>
              Welcum Home              
              </NavbarBrand>
              <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar className="text-uppercase ml-auto">
                  <NavItem>
                    <NavLink className="nav-link" to="/home"> Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/menu"> Recipies
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle tag="a" className="nav-link" caret>
                        Lifestyle
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem tag="a" href="/blah" active>
                          Home remedies
                        </DropdownItem>
                        <DropdownItem tag="a" href="/blah" active>
                          Lactation
                        </DropdownItem>
                        <DropdownItem tag="a" href="/blah" active>
                          Post natal care
                        </DropdownItem>
                        <DropdownItem tag="a" href="/blah" active>
                          Pregnancy
                        </DropdownItem>
                      </DropdownMenu>
               
                    </UncontrolledDropdown> 
                    </NavItem>
                    <NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle tag="a" className="nav-link" caret>
                        Buy Now
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem tag="a" href="/blah" active>
                          Post natal kit
                        </DropdownItem>
                        <DropdownItem tag="a" href="/blah" active>
                          Baby care kit
                        </DropdownItem>
                        <DropdownItem tag="a" href="/blah" active>
                          Herbal Tea
                        </DropdownItem>
                        <DropdownItem tag="a" href="/blah" active>
                          Herbal bath powder
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    </NavItem>
                    
                  <NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle tag="a" className="nav-link" caret>
                        Siddha
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem tag="a" href="/blah" active>
                          Consultation
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>

                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/aboutus">
                      Blog
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/contactus"> Contact
                      Us
                    </NavLink>
                    
                  </NavItem>
                </Nav>
              </Collapse>
            </div>
          </Navbar>         

          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
            <ModalBody>
              <Form onSubmit={this.handleLogin}>
                <FormGroup>
                  <Label htmlFor="username">Username</Label>
                  <Input
                    type="text"
                    id="username"
                    name="username"
                    innerRef={(input) => (this.username = input)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    innerRef={(input) => (this.password = input)}
                  />
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="remember"
                      innerRef={(input) => (this.remember = input)}
                    />
                    Remember me
                  </Label>
                </FormGroup>
                <Button type="submit" value="submit" color="primary">
                  Login
                </Button>
              </Form>
            </ModalBody>
          </Modal>
        </React.Fragment>
        <header className="masthead" id="home">
          <div className="container">
            <div className="masthead-subheading">Well,Come Home!</div>
            <div className="masthead-heading text-uppercase">Welcome Home!</div>
          </div>
        </header>
      </div>
    );
  }
}
export default Header;
