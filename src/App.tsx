import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Layout from './components/Layout';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [filterName, setFilterName] = useState<string>('All');
  const filterSelect = (filterValue: string) => {
    setFilterName(filterValue);
  };
  return (
    <Layout>
      <Header onSelect={filterSelect} />
      <TodoList filter={filterName} />
    </Layout>
  );
}

export default App;
