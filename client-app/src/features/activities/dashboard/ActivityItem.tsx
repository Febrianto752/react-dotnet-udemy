import { Button, Icon, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { SyntheticEvent, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { Link } from "react-router-dom";

interface IProps {
  activity: Activity;
}

export default function ActivityItem({ activity }: IProps) {
  const { activityStore } = useStore();

  const [target, setTarget] = useState<string>("");
  const { loading, deleteActivity } = activityStore;

  const handleDeleteActivity = (
    event: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) => {
    setTarget(id);
    deleteActivity(id);
  };

  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src="/assets/images/user.png" />
            <Item.Content>
              <Item.Header as={Link} to={`/activities/${activity.id}`}>
                {activity.title}
              </Item.Header>
              <Item.Description>Hosted by bob</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {activity.date}
          <Icon name="marker" className="ms-3" /> {activity.venue}
        </span>
      </Segment>
      <Segment secondary>Attendees go here</Segment>
      <Segment clearing>
        <span>{activity.description}</span>
        <Button
          as={Link}
          to={`/activities/${activity.id}`}
          color="teal"
          floated="right"
          content="View"
        />
      </Segment>
    </Segment.Group>
    // <Item key={activity.id}>
    //   <Item.Content>
    //     <Item.Header as="a">{activity.title}</Item.Header>
    //     <Item.Meta>{activity.date}</Item.Meta>
    //     <Item.Description>
    //       <div>{activity.description}</div>
    //       <div>
    //         {activity.city} {activity.venue}
    //       </div>
    //     </Item.Description>
    //     <Item.Extra>
    //       <Button
    //         as={Link}
    //         to={`/activities/${activity.id}`}
    //         floated="right"
    //         content="View"
    //         color="blue"
    //       />
    //       <Button
    //         name={activity.id}
    //         loading={loading && target == activity.id}
    //         onClick={(e) => handleDeleteActivity(e, activity.id)}
    //         floated="right"
    //         content="Delete"
    //         color="red"
    //       />
    //       <Label basic content={activity.category} />
    //     </Item.Extra>
    //   </Item.Content>
    // </Item>
  );
}
