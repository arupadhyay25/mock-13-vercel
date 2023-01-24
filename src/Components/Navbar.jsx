import { Button, Center, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  let auth = useSelector((s) => s.Authreducer.isAuth);
  let token = useSelector((s) => s.Authreducer.token);
  return (
    <div id="navbar">
      <div>
        <Link to={"/"}>
          <img
            src="http://levelupcollege.com/wp-content/uploads/2022/01/Masai_Logo.jpeg"
            width="100px"
            alt="logo"
          />
        </Link>
      </div>
      <div>
        <Heading>Masai Job App</Heading>
      </div>
      <div>
        {!auth ? (
          <Link to="/login">
            <Center>
              <img
                src="https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png"
                width="50px"
                alt="logo"
              />
            </Center>
          </Link>
        ) : (
          <Text textTransform={"capitalize"}>Welcome {token&&token.name}</Text>
        )}
      </div>
    </div>
  );
};

export default Navbar;
