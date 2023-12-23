import { useEffect, useState } from "react";

import axios from "axios";
import { Container, Header, List } from "semantic-ui-react";
import { Activity } from "../models/activity";
import Navbar from "./Navbar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((response: any) => {
      setActivities(response.data.data);
    });
  }, []);

  function handleSelecActivity(id: string) {
    setSelectedActivity(activities.find((a) => a.id == id));
  }

  function handleCancelSelectActivity() {
    setSelectedActivity(undefined);
  }

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />

      <Container>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelecActivity}
          cancelSelectActivity={handleCancelSelectActivity}
        />
      </Container>
    </div>
  );
}

export default App;
