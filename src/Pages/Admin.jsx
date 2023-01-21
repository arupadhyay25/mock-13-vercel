import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import { Calculator } from "../Components/Calculator";
import { Profile } from "../Components/Profile";

export const Admin = () => {
  return (
    <div style={{ width: "80%", margin: "auto", display: "flex" }}>
      <Tabs isFitted variant="enclosed" w={"100%"}>
        <TabList mb="1em">
          <Tab>Profile</Tab>
          <Tab>Calculator</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Profile/>
          </TabPanel>
          <TabPanel>
            <Calculator/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};
