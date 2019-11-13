import React from 'react';

class Form extends React.Component {
  handleClick = e => {
    console.log('hiciste click');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit} class="ui form">
          <div class="field">
            <label>Question 1</label>
            <input
              onChange={this.props.onSubmit} 
              placeholder="Question 1"
              value={this.props.formValues}  
            />
          </div>
          <div class="field">
            <label>Question 2</label>
            <input
              onChange={this.props.onSubmit}  
              placeholder="Question 2"
              value={this.props.formValues}
            />
              
          </div>
          <button 
            onClick={this.handleClick}
            type="submit" 
            class="ui button">Enviar</button>
        </form>
      </div>
    )
  }
}

export default Form;