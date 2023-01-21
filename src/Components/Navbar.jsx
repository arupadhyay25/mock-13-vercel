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
            src="https://play-lh.googleusercontent.com/wK8d12hBmOgqOVDsgezN6q1h8QQvPkTxpqFwUAWcvim243Gvx7K674JDBfqGSVh6r0gc"
            width="60px"
            alt="logo"
          />
        </Link>
      </div>
      <div>
        <Heading>Grow Calculator</Heading>
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
          <Text textTransform={"capitalize"}>Welcome {token.name}</Text>
        )}
      </div>
    </div>
  );
};

export default Navbar;
