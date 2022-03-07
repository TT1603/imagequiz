import React, { Component } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Container fluid>
          <Row>
            <Col>
            <Header/>
            </Col>
          </Row>
  
          <Row>
            <Col>
            <Menu/>
            </Col>
          </Row>
  
          <Routes>  
            <Route path="/register" element={<Register />}></Route>
            
            <Route path="/login" element={<Login />}></Route>
            
            <Route path="/" element={<Home />}></Route>
          </Routes>
  
          <Row>
            <Col>
            <Footer/>
            </Col>
          </Row>
          
        </Container>
      </HashRouter>
    );
  }
}

export default App;
