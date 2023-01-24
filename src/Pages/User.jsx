import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import { JobOffers } from "../Components/JobOffers";
import { JobUser } from "../Components/JobUser";
import { Profile } from "../Components/Profile";

export const User = () => {
  return (
    <div style={{ width: "80%", margin: "auto", display: "flex" }}>
      <Tabs isFitted variant="enclosed" w={"100%"}>
        <TabList mb="1em">
          <Tab>Jobs List</Tab>
          <Tab>Profile</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <JobUser />
          </TabPanel>
          <TabPanel>
            <Profile />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};
