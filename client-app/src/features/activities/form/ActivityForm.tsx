import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useStore } from "../../../app/stores/store";

interface IProps {
  createOrEdit: (activity: Activity) => void;
  submitting: boolean;
}

export default function ActivityForm({ createOrEdit, submitting }: IProps) {
  const { activityStore } = useStore();
  const { selectedActivity, closeForm } = activityStore;
  const initialState: Activity = selectedActivity ?? {
    id: "",
    title: "",
    description: "",
    city: "",
    date: "",
    category: "",
    venue: "",
  };
  const [activity, setActivity] = useState(initialState);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    createOrEdit(activity);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          placeholder="Title"
          value={activity.title}
          onChange={handleInputChange}
          name="title"
        />
        <Form.TextArea
          placeholder="Description"
          value={activity.description}
          onChange={handleInputChange}
          name="description"
        />
        <Form.Input
          placeholder="Category"
          value={activity.category}
          onChange={handleInputChange}
          name="category"
        />
        <Form.Input
          placeholder="Date"
          type="Date"
          value={activity.date}
          onChange={handleInputChange}
          name="date"
        />
        <Form.Input
          placeholder="City"
          value={activity.city}
          onChange={handleInputChange}
          name="city"
        />
        <Form.Input
          placeholder="Venue"
          value={activity.venue}
          onChange={handleInputChange}
          name="venue"
        />
        <Button
          loading={submitting}
          floated="right"
          positive
          type="submit"
          content="Submit"
        />
        <Button
          loading={submitting}
          onClick={() => closeForm()}
          floated="right"
          type="button"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
}
