import React from 'react'
import './App.css'

type State = {
  count: string
}

type Props = {
  configure: {
    mainTitle: string
    subTitle?: string
    cost: number
    num: number
  }
  index: number
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>, index: number) => void
}

class Detail extends React.Component<Props, State> {
  state: State = {
    count: '0',
  }

  render() {
    const selectNum = (): JSX.Element | undefined => {
      const items = []
      for (let i = 0; i < 99; i++) {
        items.push(<option value={i}>{i}</option>)
      }
      return <>{items}</>
    }
    return (
      <div className="section">
        <div className="party">
          <div>{this.props.configure.mainTitle}</div>
        </div>
        <div className="party">
          <div>{this.props.configure.subTitle}</div>
        </div>
        <div className="total-amount">
          {this.props.configure.cost}
          <span>円</span>
        </div>
        <div className="party">
          <select
            name="pets"
            id="pet-select"
            onChange={(e) => this.props.handleChange(e, this.props.index)}
          >
            {selectNum()}
          </select>
          <span>名様</span>
        </div>
      </div>
    )
  }
}
export default Detail
