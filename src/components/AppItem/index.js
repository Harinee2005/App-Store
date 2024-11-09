import {Component} from 'react'
import './index.css'

class AppItem extends Component {
  render() {
    const {details} = this.props
    const {appName, imageUrl} = details
    return (
      <li className="app-container">
        <img className="app-image" src={imageUrl} alt={appName} />
        <p className="app-name">{appName}</p>
      </li>
    )
  }
}

export default AppItem
