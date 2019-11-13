import React from 'react';
import './App.css';
import Form from './components/form';
import Cargo from './components/cargo';

function App() {
  
  const avatar = 'https://pbs.twimg.com/profile_images/893186595628568577/_s7IyOr5_400x400.jpg';

  return (
    <>
      <header className="App-header">
        <h1>title</h1>
      </header>

      <div class="ui grid container ">
        <div class="row">
          <div class="five wide column">
            <img src={avatar} class="ui medium circular image" />
            <Cargo></Cargo>
          </div>
          <div class="ten wide column">
            <Form></Form>
          </div>
        </div>
      </div>
      <footer></footer>
    </>
  );
}

export default App;
