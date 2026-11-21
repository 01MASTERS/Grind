import React from 'react'
import { Container, Navbar, Row, Col, Card, Alert, ListGroup, Badge } from 'react-bootstrap'
// import Parent from './Component/Parent'
import './App.css'

export default function App(): React.JSX.Element {
  return (
    <div>
      {/* React-Bootstrap Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm py-3">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold d-flex align-items-center gap-2">
            <span className="fs-4">⚛️</span>
            <span>React + TypeScript + Bootstrap</span>
          </Navbar.Brand>
          <Navbar.Text className="text-white-50">
            Minimal Starter Ready for Learning
          </Navbar.Text>
        </Container>
      </Navbar>

      {/* Main Content Area */}
      <Container className="my-4">
        {/* Welcome Alert */}
        <Alert variant="primary" className="border-0 shadow-sm mb-4">
          <Alert.Heading className="h4 d-flex align-items-center gap-2">
            🚀 Environment Ready!
          </Alert.Heading>
          <p className="mb-0">
            You now have <strong>React 19</strong>, <strong>TypeScript</strong>, and <strong>React-Bootstrap</strong> configured with <strong>Vite</strong>.
            Fast refresh is enabled and all TypeScript types are fully active.
          </p>
        </Alert>

        <Row className="g-4">
          {/* Interactive Parent-Child Demo */}
          {/* <Col lg={7}>
            <Parent />
          </Col> */}

          {/* Quick Learning Guide */}
          <Col lg={5}>
            <Card className="border-0 shadow-sm learning-card h-100">
              <Card.Header className="bg-success text-white fw-semibold d-flex justify-content-between align-items-center">
                <span>TypeScript in React</span>
                <Badge bg="light" text="dark">Key Concepts</Badge>
              </Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item className="px-0">
                    <strong className="text-success">Props Interface:</strong> Define component prop types using TypeScript <code>interface</code> or <code>type</code> (check <code>src/Component/Child.tsx</code>).
                  </ListGroup.Item>
                  <ListGroup.Item className="px-0">
                    <strong className="text-success">Typed State:</strong> Type your state with generics like <code>useState&lt;number&gt;(0)</code> (check <code>src/Component/Parent.tsx</code>).
                  </ListGroup.Item>
                  <ListGroup.Item className="px-0">
                    <strong className="text-success">Event Handlers:</strong> Type user actions like <code>onClick: () =&gt; void</code> or <code>onChange: (e: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; void</code>.
                  </ListGroup.Item>
                  <ListGroup.Item className="px-0">
                    <strong className="text-success">React-Bootstrap Components:</strong> Import typed components like <code>Button</code>, <code>Card</code>, <code>Navbar</code>, <code>Container</code>.
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
