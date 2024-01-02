import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";

function ActivityDashboard() {
  const { activityStore } = useStore();
  const { activitiesByDate } = activityStore;

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial) {
    return <LoadingComponent />;
  } else {
    return (
      <Grid>
        <Grid.Column width="10">
          <ActivityList activities={activitiesByDate} />
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Activity Filters</h2>
        </Grid.Column>
      </Grid>
    );
  }
}

export default observer(ActivityDashboard);
