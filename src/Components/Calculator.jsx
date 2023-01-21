import {
  Box,
  Button,
  Flex,
  Heading,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import DoughnutChart from "./MyChart";

export const Calculator = () => {
  const [annualInstalmentAmount, setannualInstalmentAmount] = useState(100000);
  const [totalYears, settotalYears] = useState(2);
  let annualInterestRate = 7.1;
  const [totalInterestGained, settotalInterestGained] = useState(0);
  const [totalInvestmentAmount, settotalInvestmentAmount] = useState(0);
  const [totalMaturityValue, settotalMaturityValue] = useState(0);

  let gettotal = async () => {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      annualInstalmentAmount,
      annualInterestRate,
      totalYears,
    });

    let reqOptions = {
      url: "https://cloudy-mackerel.cyclic.app/grow/calculate",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };

    let response = await axios.request(reqOptions);
    let { totalMaturityValue, totalInvestmentAmount, totalInterestGained } =
      response.data;
    settotalInterestGained(totalInterestGained);
    settotalMaturityValue(totalMaturityValue);
    settotalInvestmentAmount(totalInvestmentAmount);
  };

  useEffect(() => {
    gettotal();
  }, [annualInstalmentAmount, totalYears]);
  return (
    <div>
      <Heading fontSize={"2xl"} textAlign="center">
        PPF CALCULATOR
      </Heading>
      <br />
      <Flex h={"500px"}>
        <VStack w="50%">
          <br />
          <Box w={"80%"}>
            <Flex alignItems={"center"} justifyContent="space-between">
              <Text>Yearly Investment</Text>
              <Button>₹{annualInstalmentAmount}</Button>
            </Flex>
            <Slider
              aria-label="slider-ex-6"
              min={100000}
              max={150000}
              value={annualInstalmentAmount}
              onChange={(val) => setannualInstalmentAmount(val)}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>
          <br />
          <Box w={"80%"}>
            <Flex alignItems={"center"} justifyContent="space-between">
              <Text>Time period (In Years)</Text>
              <Button>{totalYears} yr</Button>
            </Flex>
            <Slider
              aria-label="slider-ex-6"
              min={2}
              max={15}
              value={totalYears}
              onChange={(val) => settotalYears(val)}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>
          <br />
          <Box w={"80%"}>
            <Flex alignItems={"center"} justifyContent="space-between">
              <Text>Rate of interrest</Text>
              <Button>{annualInterestRate} yr</Button>
            </Flex>
          </Box>
          <br />
          <Box w={"80%"}>
            <Flex alignItems={"center"} justifyContent="space-between">
              <Text textTransform={"capitalize"}>total Investment Amount</Text>
              <Button>₹ {totalInvestmentAmount.toLocaleString()}</Button>
            </Flex>

            <Flex alignItems={"center"} justifyContent="space-between">
              <Text textTransform={"capitalize"}>total Interest Gained</Text>
              <Button>₹ {totalInterestGained.toLocaleString()}</Button>
            </Flex>
            <Flex alignItems={"center"} justifyContent="space-between">
              <Text textTransform={"capitalize"}>Total Maturity Amount</Text>
              <Button>
                ₹ {Math.floor(totalMaturityValue).toLocaleString()}
              </Button>
            </Flex>
          </Box>
        </VStack>
        <VStack w="50%">
        {/* <DoughnutChart  yearlyInvestment={10000} timePeriod={5} rateOfInterest={0.1}/> */}
        </VStack>
      </Flex>
    </div>
  );
};
