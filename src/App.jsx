import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Navbar,Nav,Row,Col } from 'react-bootstrap'
import bg from './bg-1.png';

function App() {
  console.log(bg);

  return (
      <div className='App'>
        <Navbar bg="dark" data-bs-theme="dark" fixed="top">
          <Container> 
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          </Container>
        </Navbar>

        <div className="main-bg" style={{backgroundImage:`url(${bg})`}}></div>
        <div>
          <Row>
          <Col sm>
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col sm>
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col sm>
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
        </Row>
        </div>
      </div>
  )

}

export default App
