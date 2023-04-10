import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'Adepegba Adegoke',
      bio: 'On a Journey to be a Full-Stack Developer.',
      imgSrc: 'https://wallpapersafari.com/w/Vwmyh9',
      profession: 'Software Developer'
    },
    shows: false,
    intervalId: null,
    mountedTime: null
  };

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState({ mountedTime: Date.now() });
    }, 1000);
    this.setState({ intervalId, mountedTime: Date.now() });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { person, shows, mountedTime} = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {shows && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>{person.profession}</p>
          </div>
        )}
        <p>Component mounted since {Math.round((Date.now() - mountedTime) / 1000)} seconds.</p>
      </div>
    );
  }
}

export default App;
