import React from "react";
import Head from "next/head";
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  Image,
} from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Head>
        <title>WalletMind</title>
        <link rel="icon" href="favicon.png" />
      </Head>
      {/* Navbar */}
      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#">
            <i className="bi bi-wallet2 me-2 text-primary"></i>
            <strong>WalletMind</strong>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#features">Funcionalidades</Nav.Link>
            <Nav.Link href="#start">Como Começar</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Hero */}
      <Container fluid className="bg-light py-5 text-dark">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <h1 className="fw-bold display-5">
                Controle suas finanças sem complicação
              </h1>
              <p className="lead mt-3">
                O WalletMind te ajuda a entender para onde seu dinheiro está
                indo — de forma simples, visual e descomplicada.
              </p>

              {/* Botão centralizado com destaque */}
              <div className="d-flex justify-content-md-start justify-content-center mt-4">
                <Button
                  variant="warning"
                  size="lg"
                  className="px-4 py-2 fw-semibold shadow-sm"
                  disabled
                >
                  🚀 Lançamento em breve
                </Button>
              </div>
            </Col>

            <Col md={6} className="text-center mt-4 mt-md-0">
              <Image
                src="/walletmind-illustration.svg"
                alt="Ilustração WalletMind"
                fluid
                style={{ maxHeight: "430px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Funcionalidades */}
      <Container id="features" className="py-5">
        <h2 className="text-center fw-bold mb-5">Por que usar o WalletMind?</h2>
        <Row className="g-4">
          <Col md={4} className="text-center">
            <i className="bi bi-graph-up-arrow display-4 text-success mb-3"></i>
            <h5>Visualize seus gastos</h5>
            <p className="text-muted">
              Gráficos e categorias claras pra você entender cada centavo.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <i className="bi bi-phone display-4 text-primary mb-3"></i>
            <h5>Gestão no seu bolso</h5>
            <p className="text-muted">
              Controle tudo direto do celular, de forma rápida e intuitiva.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <i className="bi bi-stars display-4 text-warning mb-3"></i>
            <h5>Descomplique sua vida</h5>
            <p className="text-muted">
              Chega de planilhas complicadas. Tenha leveza ao gerenciar sua
              grana.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Rodapé */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} WalletMind. Todos os direitos
          reservados.
        </p>
      </footer>
    </>
  );
}
