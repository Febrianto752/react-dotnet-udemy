import { Button, Card, Grid, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";

function AcitivityDetails() {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    loadActivity,
    loadingInitial,
  } = activityStore;
  const { id } = useParams();

  useEffect(() => {
    if (id) loadActivity(id);
  }, [id, loadActivity]);

  if (!activity) {
    return <></>;
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityDetailedHeader activity={activity} />
        <ActivityDetailedInfo activity={activity} />
        <ActivityDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <ActivityDetailedSidebar />
      </Grid.Column>
    </Grid>
  );

  // return (
  //   <Card>
  //     <Image src={`/assets/images/category/film.jpg`} />
  //     <Card.Content>
  //       <Card.Header>{activity.title}</Card.Header>
  //       <Card.Meta>
  //         <span className="date">{activity.date}</span>
  //         <Card.Description>{activity.description}</Card.Description>
  //       </Card.Meta>
  //     </Card.Content>

  //     <Card.Content extra>
  //       <Button.Group widths={2}>
  //         <Button
  //           as={Link}
  //           to={`/manage/${activity.id}`}
  //           basic
  //           color="blue"
  //           content="Edit"
  //         />
  //         <Button
  //           as={Link}
  //           to="/activities"
  //           basic
  //           color="grey"
  //           content="Cancel"
  //         />
  //       </Button.Group>
  //     </Card.Content>
  //   </Card>
  // );
}

export default observer(AcitivityDetails);
