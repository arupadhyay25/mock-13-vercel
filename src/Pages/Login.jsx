import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Input,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, signup } from "../Redux/AuthReducer/action";
import Styles from "./Login.module.css";

const Login = () => {
  let [name, setname] = useState("");
  let [username, setusername] = useState("");
  let [password, setpassword] = useState("");
  let dispatch = useDispatch();
  let Navigate = useNavigate();
  let isloading = useSelector((s) => s.Authreducer.isLoading);

  let handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      let payload = { email: username, password: password };
      dispatch(login(payload)).then((r) => {
        if (r.type == "LOGIN_SUCCESS") {
          Navigate("/admin");
        }
      });
    }
    setpassword("");
    setusername("");
  };
  let handleSignup = (e) => {
    e.preventDefault();
    if (username && password && name) {
      let payload = {
        name: name,
        age: 25,
        email: username,
        password: password,
      };
      dispatch(signup(payload)).then((r) => {
        console.log(r);
      });
    }
    // setpassword("");
    // setusername("");
  };

  return (
    <Flex
      w={"80%"}
      margin="auto"
      justifyContent={"space-evenly"}
      className={Styles.main}
    >
      <VStack w={"50%"}>
        <Center>
          <Image
            src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg"
            alt="login image"
          />
        </Center>
      </VStack>
      <VStack w={"50%"}>
        <Tabs
          w="100%"
          isFitted
          variant="soft-rounded"
          colorScheme="blue"
          mt={"10%"}
        >
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>SignUp</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Center>
                <Heading>LOGIN</Heading>
              </Center>
              <br />
              <Center>
                <form style={{ width: "70%" }} onSubmit={handleLogin}>
                  <div>
                    <label>User Email</label>
                    <br />
                    <Input
                      mt={2}
                      type="text"
                      value={username}
                      onChange={(e) => setusername(e.target.value)}
                    />
                  </div>
                  <br />
                  <div>
                    <label>User Password</label>
                    <br />
                    <Input
                      mt={2}
                      type="password"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                    />
                  </div>
                  <br />
                  <div>
                    <Text fontStyle={"italic"} color="blue" fontSize={"small"}>New User ? SignUp</Text>
                  </div>
                  <br />
                  <Button w={"100%"} type="submit">
                    {isloading ? <Spinner /> : "Submit"}
                  </Button>
                </form>
              </Center>
            </TabPanel>
            <TabPanel>
              <Center>
                <Heading textTransform={"uppercase"}>Signup</Heading>
              </Center>
              <br />
              <Center>
                <form style={{ width: "70%" }} onSubmit={handleSignup}>
                  <div>
                    <label>Name</label>
                    <br />
                    <Input
                      mt={2}
                      type="text"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                    />
                  </div>
                  <br />
                  <div>
                    <label>User Email</label>
                    <br />
                    <Input
                      mt={2}
                      type="text"
                      value={username}
                      onChange={(e) => setusername(e.target.value)}
                    />
                  </div>
                  <br />
                  <div>
                    <label>User Password</label>
                    <br />
                    <Input
                      mt={2}
                      type="password"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                    />
                  </div>
                  <br />
                  <Button w={"100%"} type="submit">
                    {isloading ? <Spinner /> : "Submit"}
                  </Button>
                </form>
              </Center>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Flex>
  );
};

export default Login;
