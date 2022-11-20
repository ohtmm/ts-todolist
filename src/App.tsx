import React from 'react';
import './App.css';
import Layout from './components/Layout';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <Layout>
      <TodoList />
    </Layout>
  );
}

export default App;
