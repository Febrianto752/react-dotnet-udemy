import { Button, Container, Header, List } from "semantic-ui-react";

import Navbar from "./Navbar";

import { observer } from "mobx-react-lite";
import { Outlet, useLocation } from "react-router-dom";
import HomePage from "../../features/home/HomePage";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname == "/" ? (
        <HomePage />
      ) : (
        <>
          <Navbar />
          <br />
          <br />
          <br />

          <Container>
            {/* <ActivityDashboard /> */}
            <Outlet />
          </Container>
        </>
      )}
    </div>
  );
}

export default observer(App);
