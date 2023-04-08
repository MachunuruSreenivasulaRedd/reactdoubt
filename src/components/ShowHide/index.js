import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstHide: true,
    firstDisplay: 'display-none',
    secondHide: true,
    secondDisplay: 'display-none',
  }

  firstName = () => {
    const {firstHide, firstDisplay} = this.state
    if (firstHide === true) {
      this.setState({
        firstHide: false,
        firstDisplay: 'display-block',
      })
    } else {
      this.setState({
        firstHide: true,
        firstDisplay: 'display-none',
      })
    }
  }

  secondName = () => {
    const {secondHide, secondDisplay} = this.state
    if (secondHide === true) {
      this.setState({
        secondHide: false,
        secondDisplay: 'display-block',
      })
    } else {
      this.setState({
        secondHide: true,
        secondDisplay: 'display-none',
      })
    }
  }

  render() {
    const {firstHide, secondHide, firstDisplay, secondDisplay} = this.state
    return (
      <div className="container">
        <h1>Show/Hide</h1>
        <div>
          <button className="button" type="button" onClick={this.firstName}>
            Show/Hide Firstname
          </button>
          <p className={`box ${firstDisplay}`}>Joe</p>
        </div>
        <div>
          <button className="button" type="button" onClick={this.secondName}>
            Show/Hide Lastname
          </button>
          <p className={`box ${secondDisplay}`}>Jonas</p>
        </div>
      </div>
    )
  }
}

export default ShowHide
