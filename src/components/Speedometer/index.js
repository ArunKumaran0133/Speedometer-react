import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(previousSpeed => ({speed: previousSpeed.speed + 10}))
    }
  }

  applyBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(previousSpeed => ({speed: previousSpeed.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="title">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speed-tracker">Speed is {speed}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            className="button button-1"
            type="button"
            onClick={this.accelerate}
          >
            Accelerate
          </button>
          <button
            className="button button-2"
            type="button"
            onClick={this.applyBrake}
          >
            Apply brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
