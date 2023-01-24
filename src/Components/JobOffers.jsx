import { Center, Grid, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { JobCard } from "./JobCard";

export const JobOffers = ({ alert }) => {
  let [data, setdata] = useState([]);
  let [state, setstate] = useState(1);

  let getdata = async () => {
    let headersList = {
      Accept: "*/*",
    };

    let reqOptions = {
      url: "https://scary-elk-sneakers.cyclic.app/jobs",
      method: "GET",
      headers: headersList,
    };

    let response = await axios.request(reqOptions);
    let new_arr = response.data.reverse();
    setdata(new_arr);
  };

  useEffect(() => {
    getdata();
  }, [alert, state]);

  return (
    <div>
      <Center>
        <Heading>JobOffers</Heading>
      </Center>
      <br />
      <br />
      <Grid gap={"30px"} templateColumns={{ sm: "1fr", md: "repeat(3, 1fr)" }}>
        {data && data.map((e, i) => <JobCard e={e} setstate={setstate} />)}
      </Grid>
    </div>
  );
};
