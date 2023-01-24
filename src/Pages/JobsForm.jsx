import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import Styles from "./Login.module.css";

const JobsForm = ({ alert, setalert }) => {
  let [name, setname] = useState("");
  let [position, setposition] = useState("");
  let [contract, setcontract] = useState("");
  let [location, setlocation] = useState("");

  let handlesubmit = async () => {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      name: name,
      contract: contract,
      location: location,
      position: position,
    });

    let reqOptions = {
      url: "https://scary-elk-sneakers.cyclic.app/jobs/create",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };

    let response = await axios.request(reqOptions);
    setalert("true");
    setname("");
    setcontract("");
    setlocation("");
    setposition("");
  };

  return (
    <>
      {alert && (
        <Alert status="success">
          <AlertIcon />
          Job uploaded to the server Succesfully !!
        </Alert>
      )}
      <Flex
        w={"100%"}
        margin="auto"
        justifyContent={"space-evenly"}
        className={Styles.main}
      >
        <VStack w={"50%"} margin="auto">
          <Center>
            <Image
              src="https://media.tenor.com/A5eDh9nWrqYAAAAd/working-from.gif"
              alt="login image"
            />
          </Center>
        </VStack>
        <VStack w={"50%"}>
          <br />
          <Heading
            textTransform={"capitalize"}
            textAlign="center"
            fontSize={"3xl"}
          >
            post a job with following details
          </Heading>
          <br />
          <Box w={"90%"} display={"flex"}>
            <Input
              variant="flushed"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Company Name"
            />
          </Box>
          <br />
          <Box w={"90%"} display={"flex"}>
            <Select
              variant="flushed"
              value={position}
              onChange={(e) => setposition(e.target.value)}
              placeholder="Select Position"
            >
              <option value="developer">Developer</option>
              <option value="SDE-I">SDE I</option>
              <option value="SDE-II">SDE II</option>
              <option value="SDE-III">SDE III</option>
              <option value="project-manager">Project Manager</option>
              <option value="system-administrator">System Administrator</option>
              <option value="network-engineer">Network Engineer</option>
              <option value="database-administrator">
                Database Administrator
              </option>
              <option value="security-analyst">Security Analyst</option>
              <option value="business-analyst">Business Analyst</option>
              <option value="quality-assurance">Quality Assurance</option>
              <option value="technical-support">Technical Support</option>
              <option value="information-architect">
                Information Architect
              </option>
            </Select>
          </Box>
          <br />
          <Box w={"90%"} display={"flex"}>
            <Select
              variant="flushed"
              value={contract}
              onChange={(e) => setcontract(e.target.value)}
              placeholder="Contract"
            >
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
            </Select>
          </Box>
          <br />
          <Box w={"90%"} display={"flex"}>
            <Select
              variant="flushed"
              value={location}
              onChange={(e) => setlocation(e.target.value)}
              placeholder="Select Location"
            >
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Chennai">Chennai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Pune">Pune</option>
              <option value="Surat">Surat</option>
              <option value="Jaipur">Jaipur</option>
            </Select>
          </Box>
          <br />
          <Button onClick={handlesubmit} w={"50%"} colorScheme={"teal"}>
            Submit
          </Button>
        </VStack>
      </Flex>
    </>
  );
};

export default JobsForm;
