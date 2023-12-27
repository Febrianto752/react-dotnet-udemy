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

function App() {
  const { activityStore } = useStore();
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [submitting, setSubmitting] = useState<boolean>(false);

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  function handleCreateOrEditActivity(activity: Activity) {
    setSubmitting(true);
    if (activity.id) {
      agent.Activities.update(activity).then(() => {
        setActivities([
          ...activities.filter((a) => a.id !== activity.id),
          activity,
        ]);
        setSelectedActivity(activity);
        setEditMode(false);
        setSubmitting(false);
      });
    } else {
      activity.id = uuidv4();
      agent.Activities.create(activity).then(() => {
        setActivities([...activities, activity]);
      });
      setSelectedActivity(activity);
      setEditMode(false);
      setSubmitting(false);
    }
  }

  function handleDeleteActivity(id: string) {
    const agreeToDelete = confirm("are your sure ?");
    if (agreeToDelete) {
      setSubmitting(true);
      agent.Activities.delete(id).then(() => {
        setSubmitting(false);
        setActivities([...activities.filter((a) => a.id !== id)]);
        // handleCancelSelectActivity();
      });
    }
  }

  if (activityStore.loadingInitial) {
    return <LoadingComponent />;
  } else {
    return (
      <div>
        <Navbar />
        <br />
        <br />
        <br />

        <Container>
          <ActivityDashboard
            activities={activityStore.activities}
            createOrEdit={handleCreateOrEditActivity}
            deleteActivity={handleDeleteActivity}
            submitting={submitting}
          />
        </Container>
      </div>
    );
  }
}

export default observer(App);
