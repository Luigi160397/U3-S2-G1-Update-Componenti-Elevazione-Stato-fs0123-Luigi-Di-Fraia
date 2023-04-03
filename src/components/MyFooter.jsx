import { Container, Row, Col } from "react-bootstrap";

const MyFooter = () => (
  <Container fluid className="bg-light py-5">
    <Row className="justify-content-center">
      <Col>
        <p>©EpiBooks - 2023</p>
      </Col>
    </Row>
  </Container>
);

export default MyFooter;
