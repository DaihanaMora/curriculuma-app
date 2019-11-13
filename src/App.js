import React from 'react';
import './App.css';
import Form from './components/form';
import Cargo from './components/cargo';

// function App() {
class App extends React.Component {
  state = {
    form: {
      questionOne: '',
      questionTwo: '',
    },
  };

  handleChange = e => {
    this.setState({
      form: {
        ... this.setState.form,
        [e.target.questionOne]: e.target.value,
      },
    });
  };

  handleSubmit = e => {
    e.preventSubmit() 

    // try {
    //   await  api.badges.create(this.state.form);
    // } catch(error) { console.log('no guardo')}
  }

  
  render() {
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
              <Cargo 
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
              />
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
}

export default App;
