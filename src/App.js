import React from 'react';
import MongoDataComponent from './components/MongoDataComponent';
import './App.css'; // Import your CSS file for styling
import MyComponent from './components/MyComponent'; // Check the file path
import Snowflake from './components/Snowflake';

const App = () => { 
  const numberOfSnowflakes = 50;

  return (
    <div className="app-container">
      <h1>Data From MongoDB</h1>
      <MongoDataComponent />
      <MyComponent />
      {[...Array(numberOfSnowflakes)].map((_, index) => (
        <Snowflake key={index} />
      ))}
    </div>
  );
};

export default App;
