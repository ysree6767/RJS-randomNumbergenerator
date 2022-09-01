// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  generateRandomNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)

    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="number-container">
          <h2>Random Number</h2>
          <p> Generate a random number in the range of 0 to 100</p>
          <button
            className="button"
            type="button"
            onClick={this.generateRandomNumber}
          >
            {' '}
            Generate
          </button>
          <p className="number"> {count} </p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
