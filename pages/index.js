import React from "react";
import {
  Container,
  Row,
  Col,
  Alert,
  Spinner,
  Button,
  Card,
} from "react-bootstrap";

export default function Home() {
  return (
    <Container
      fluid
      className="min-vh-100 d-flex justify-content-center align-items-center bg-light px-3"
    >
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={10} lg={6}>
          <Card className="text-center shadow-lg border-0 px-3 py-4">
            <Card.Body className="d-flex flex-column align-items-center">
              <i className="bi bi-bar-chart-line-fill display-3 text-primary mb-4" />

              <h1 className="fw-bold mb-3">Gestão de Carteira • Em Breve</h1>

              <p className="text-muted fs-5 mb-4 text-center">
                Estamos construindo uma plataforma poderosa para te ajudar a
                controlar seus investimentos com praticidade, clareza e
                segurança.
              </p>

              <Alert
                variant="info"
                className="d-inline-flex align-items-center justify-content-center gap-2 w-100"
              >
                <Spinner animation="border" size="sm" />
                <span>Lançamento previsto para os próximos meses</span>
              </Alert>

              <Button
                variant="primary"
                size="lg"
                className="mt-3 w-100"
                disabled
              >
                Seja avisado quando lançarmos
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
