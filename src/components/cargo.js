import React from 'react';

class Cargo extends React.Component {
  state = {
    data: {},
  }

  componentDidMount() {
    this.fetchFilms();
  }
  
  fetchFilms = async () => {
    const response = await fetch('https://ghibliapi.herokuapp.com/films')
    const data = await response.json();
    console.log(data)
    this.setState({
      data: data,
    });
  };

  render() {
    return (
      <div>
        <h3>Información del films</h3>
        
        {console.log(this.state.data)}
          {/* {this.state.data.map(filmTitle => (
            <span>{filmTitle.id}</span>
          ))} */}
        
      </div>
    )
  }
}

export default Cargo;