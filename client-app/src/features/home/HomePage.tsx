import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";

export default function HomePage() {
  return (
    <Container style={{ marginTop: "7em" }}>
      <h1>Home Page</h1>
      <p>
        Go to{" "}
        <Link to="/activities" className="fw-bold">
          Activities
        </Link>
      </p>
    </Container>
  );
}
