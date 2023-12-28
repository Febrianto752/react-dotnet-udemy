import { useEffect, useState } from "react";

import { Button, Container, Header, List } from "semantic-ui-react";
import { Activity } from "../models/activity";
import Navbar from "./Navbar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { v4 as uuidv4 } from "uuid";
import agent from "../api/agent";
import LoadingComponent from "./LoadingComponent";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />

      <Container>
        {/* <ActivityDashboard /> */}
        <Outlet />
      </Container>
    </div>
  );
}

export default observer(App);
