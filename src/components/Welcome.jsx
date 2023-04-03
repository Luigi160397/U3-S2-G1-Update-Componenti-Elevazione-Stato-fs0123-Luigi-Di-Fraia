import { Container } from "react-bootstrap";

const Welcome = () => (
  <Container fluid className="bg-light shadow-sm" style={{ paddingBlock: "100px" }}>
    <h1 className="display-2">Benvenuto su EpiBooks!</h1>
    <p className="lead">La tua lettura a portata di click!</p>
  </Container>
);

export default Welcome;
