import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form class="ui form">
          <div class="field">
            <label>Question 1</label>
            <input placeholder="Question 1" />
          </div>
          <div class="field">
            <label>Question 2</label>
            <input placeholder="Question 2" />
          </div>
          <button type="submit" class="ui button">Enviar</button>
        </form>
      </div>
    )
  }
}

export default Form;