import { Button, Card, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";

export default function AcitivityDetails() {
  const { activityStore } = useStore();

  const {
    selectedActivity: activity,
    openForm,
    cancelSelectedActivity,
    closeForm,
  } = activityStore;

  if (!activity) {
    return <></>;
  }

  return (
    <Card>
      <Image src={`/assets/images/category/film.jpg`} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span className="date">{activity.date}</span>
          <Card.Description>{activity.description}</Card.Description>
        </Card.Meta>
      </Card.Content>

      <Card.Content extra>
        <Button.Group widths={2}>
          <Button
            onClick={() => {
              openForm(activity.id);
            }}
            basic
            color="blue"
            content="Edit"
          />
          <Button
            basic
            color="grey"
            content="Cancel"
            onClick={() => {
              cancelSelectedActivity();
              closeForm();
            }}
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
}
