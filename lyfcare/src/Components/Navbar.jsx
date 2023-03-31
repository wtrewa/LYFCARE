import React from "react";
import Styles from "./Styles.css";
import logo from "../images/logo.jpg";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react"



const Navbar = () => {
  return (
    <div className="main-Nav">
      <div className="first-nav"></div>
      <div className="second-nav">
        <img className="logo" src={logo} alt="lyfcare" />
        <div className="search">
          <input
            type="text"
            name=""
            className="search-box"
            placeholder="search for a brand or a product "
          />
          <button className="search-btn">
            <BiSearch />
          </button>
        </div>
        <div className="account">
          <BiUserCircle className="icon" />
          <p>
            <Menu isLazy>
              <MenuButton>Account</MenuButton>
              <MenuList>
                {/* MenuItems are not rendered unless Menu is open */}
                <MenuItem>New Window</MenuItem>
                <MenuItem>Open Closed Tab</MenuItem>
                <MenuItem>Open File</MenuItem>
              </MenuList>
            </Menu>
          </p>
        </div>
        <div className="cart">
          <BiCart className="icon" />
          <p>Cart</p>
        </div>
      </div>
      <div className="third-nav">
        <p>
          <Menu isLazy>
            <MenuButton>Open menu</MenuButton>
            <MenuList>
              {/* MenuItems are not rendered unless Menu is open */}
              <MenuItem>
                <div
                  style={{
                    display: "flex",
                    border: "1px solid red",
                    width: "600px",
                    height: "300px",
                    justifyContent: "space-between",
                    
                  }}
                >
                  <div>
                    <p>
                      {" "}
                      <Link>link1</Link>
                    </p>
                    <p>
                      <Link>link2</Link>
                    </p>
                    <p>
                      <Link>link3</Link>
                    </p>
                    <p>
                      <Link>link4</Link>
                    </p>
                  </div>
                  <div>
                    <p>
                      {" "}
                      <Link>link1</Link>
                    </p>
                    <p>
                      <Link>link2</Link>
                    </p>
                    <p>
                      <Link>link3</Link>
                    </p>
                    <p>
                      <Link>link4</Link>
                    </p>
                  </div>
                  <div>
                    <p>
                      {" "}
                      <Link>link1</Link>
                    </p>
                    <p>
                      <Link>link2</Link>
                    </p>
                    <p>
                      <Link>link3</Link>
                    </p>
                    <p>
                      <Link>link4</Link>
                    </p>
                  </div>
                  <div>
                    <p>
                      {" "}
                      <Link>link1</Link>
                    </p>
                    <p>
                      <Link>link2</Link>
                    </p>
                    <p>
                      <Link>link3</Link>
                    </p>
                    <p>
                      <Link>link4</Link>
                    </p>
                  </div>
                </div>
              </MenuItem>
            </MenuList>
          </Menu>
        </p>
        <p>Holiday Shoop</p>
        <p>Bestseller</p>
        <p>Skin Care</p>
        <p>
          <Link to="/nail" style={{ textDecoration: "none", color: "black" }}>
            MakeUp
          </Link>
        </p>
        <p>Hair Care</p>
        <p>Bath & Body</p>
        <p></p>
      </div>
    </div>
  );
};

export default Navbar;
