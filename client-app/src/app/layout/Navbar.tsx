import { Button, Container, Menu } from "semantic-ui-react";

interface IProps {
  openForm: (id?: string) => void;
}

export default function Navbar({ openForm }: IProps) {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img src="/assets/images/logo.png" alt="logo" className="me-2" />{" "}
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item>
          <Button
            onClick={() => openForm()}
            positive
            content="Create Activity"
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
