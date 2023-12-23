import { Button, Card, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface IProps {
  activity: Activity;
  cancelSelectActivity: () => void;
}
export default function AcitivityDetails({
  activity,
  cancelSelectActivity,
}: IProps) {
  return (
    <Card>
      <Image src="/assets/images/category/film.jpg" />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span className="date">{activity.date}</span>
          <Card.Description>{activity.description}</Card.Description>
        </Card.Meta>
      </Card.Content>

      <Card.Content extra>
        <Button.Group widths={2}>
          <Button basic color="blue" content="Edit" />
          <Button
            basic
            color="grey"
            content="Cancel"
            onClick={cancelSelectActivity}
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
}
