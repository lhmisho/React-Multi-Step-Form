import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'semantic-ui-react'
import MainForm from './components/MainForm';

function App() {
  return (
    <Container textAlign='center'>
      <MainForm />
    </Container>
  );
}

export default App;
