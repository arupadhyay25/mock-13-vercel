import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React, { useState } from "react";
import { JobOffers } from "../Components/JobOffers";
import { Profile } from "../Components/Profile";
import JobsForm from "./JobsForm";

export const Admin = () => {
  let [alert, setalert] = useState(false);
  return (
    <div style={{ width: "90%", margin: "auto", display: "flex" }}>
      <Tabs isFitted variant="enclosed" w={"100%"}>
        <TabList mb="1em">
          <Tab>Jobs Form page</Tab>
          <Tab>Jobs Form Listing page</Tab>
          <Tab>Profile</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <JobsForm alert={alert} setalert={setalert} />
          </TabPanel>
          <TabPanel>
            <JobOffers alert={alert} />
          </TabPanel>
          <TabPanel>
            <Profile />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};
