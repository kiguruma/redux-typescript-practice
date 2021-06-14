import React from 'react'
import './App.css'

type Props = {
  peopleSum: number
  costSum: number
}

class Sum extends React.Component<Props, {}> {
  render() {
    return (
      <div className="sum-div">
        <div>
          <input
            className="sumInput"
            type="text"
            id="name"
            name="name"
            value={this.props.peopleSum}
          />
          <span>名様</span>
        </div>
        <div>
          <span>合計</span>
          <input
            className="sumInput"
            type="text"
            id="name"
            name="name"
            value={this.props.costSum}
          />
          <span>円</span>
        </div>
      </div>
    )
  }
}
export default Sum
