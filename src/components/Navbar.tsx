import { Icon, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <Menu fixed="top" size="huge" className=" bg-warning menu-header">
        <Menu.Item>
          <Icon name="video" size="large" />
          <h3>Movie Info</h3>
        </Menu.Item>
        <Menu.Item as={Link} to="/">
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/rating">
          Rating
        </Menu.Item>
        <Menu.Item as={Link} to="/about">
          About
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item as={Link} to="/auth">
            Auth
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </>
  );
}

export default Navbar;
