import { Grid, List } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import AcitivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

function ActivityDashboard() {
  const { activityStore } = useStore();
  const { selectedActivity, editMode, activities } = activityStore;
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList activities={activities} />
      </Grid.Column>
      <Grid.Column width={6}>
        {selectedActivity && <AcitivityDetails />}
        {editMode && selectedActivity && <h3>Edit Form</h3>}
        {editMode && !selectedActivity && <h3>Create Form</h3>}
        {editMode && <ActivityForm />}
      </Grid.Column>
    </Grid>
  );
}

export default observer(ActivityDashboard);
