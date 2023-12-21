import { useEffect, useState } from "react";

import axios from "axios";
import { Header, List } from "semantic-ui-react";
import { Activity } from "../models/activity";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((response: any) => {
      setActivities(response.data.data);
    });
  }, []);

  return (
    <div>
      <Header as="h2" icon="users" content="Activities App" />

      <List>
        {activities.map((activity: Activity) => {
          return <List.Item key={activity.id}>{activity.title}</List.Item>;
        })}
      </List>
    </div>
  );
}

export default App;
