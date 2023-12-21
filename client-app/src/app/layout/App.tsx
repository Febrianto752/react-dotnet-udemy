import { useEffect, useState } from "react";

import axios from "axios";
import { Container, Header, List } from "semantic-ui-react";
import { Activity } from "../models/activity";
import Navbar from "./Navbar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((response: any) => {
      setActivities(response.data.data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />

      <Container>
        <ActivityDashboard activities={activities} />
      </Container>
    </div>
  );
}

export default App;
