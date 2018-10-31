import React, { Component } from 'react';
import logo from './logo.svg';
import colleges from './colleges';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.url = "https://s3.amazonaws.com/collegevine-assets/schools/$1-thumb.jpg";
    this.state = {
      incorrectCollegeImages: [],
    }
  }

  toggleIncorrectImage(id) {
    if (this.state.incorrectCollegeImages.indexOf(id) >= 0) {
      this.setState({ incorrectCollegeImages: this.state.incorrectCollegeImages.filter((imgId) => imgId !== id)});
    } else {
      this.setState({incorrectCollegeImages: [...this.state.incorrectCollegeImages, id]});
    }
  }

  render() {
    return (
      <span>
        {colleges.map((value, index) => {
          return <div className={this.state.incorrectCollegeImages.indexOf(value.id) >= 0 ? 'college-block incorrect-image': 'college-block'}>
              <img src={this.url.replace('$1', value.id)} />
              <p>{value.college}</p>
              <input type="checkbox" onClick={() => this.toggleIncorrectImage(value.id)} /> Incorrect Image
          </div>
        })}
      </span>
    );
  }
}

export default App;
