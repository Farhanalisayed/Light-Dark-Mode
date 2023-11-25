// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    lightMode: true,
    className: 'lighty',
    heading: 'light',
    text: 'Dark Mode',
  }

  isClicked = () => {
    let {lightMode} = this.state
    if (lightMode === true) {
      this.setState({
        lightMode: false,
        className: 'darky',
        heading: 'dark',
        text: 'Light Mode',
      })
    } else {
      this.setState({
        lightMode: true,
        className: 'lighty',
        heading: 'light',
        text: 'Dark Mode',
      })
    }
  }

  render() {
    let {lightMode, className, heading, text} = this.state

    return (
      <div className={className}>
        <h1 className={heading}>Click To Change Mode</h1>
        <button onClick={this.isClicked}>{text}</button>
      </div>
    )
  }
}
export default LightDarkMode
