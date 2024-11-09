import {Component} from 'react'
import './index.css'

class TabItem extends Component {
  changingTabs = () => {
    const {changeTab, details} = this.props
    changeTab(details.tabId)
  }

  render() {
    const {details, active} = this.props
    const {displayText} = details

    const activeTabStyle = active ? 'blue-color' : ''
    const activeHr = active ? 'blue-hr' : ''

    return (
      <li className="list-style">
        <button
          type="button"
          onClick={this.changingTabs}
          className={`tab-title ${activeTabStyle}`}
        >
          {displayText}
        </button>
        <hr className={`${activeHr}`} />
      </li>
    )
  }
}

export default TabItem
