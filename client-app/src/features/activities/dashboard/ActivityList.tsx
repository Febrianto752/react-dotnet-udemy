import { Button, Header, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { Fragment, SyntheticEvent, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import ActivityItem from "./ActivityItem";

function ActivityList() {
  const { activityStore } = useStore();
  const { groupedActivities } = activityStore;

  return (
    <>
      {groupedActivities.map(([groupKey, activities]) => {
        return (
          <Fragment key={groupKey}>
            <Header sub color="teal">
              {groupKey}
              <Segment>
                <Item.Group divided>
                  {activities.map((activity) => {
                    return <ActivityItem activity={activity} />;
                  })}
                </Item.Group>
              </Segment>
            </Header>
          </Fragment>
        );
      })}
    </>
  );
}

export default observer(ActivityList);
