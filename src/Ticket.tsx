import React from 'react'
import './App.css'
import Detail from './Detail'
import Sum from './Sum'

type State = {
  configure: {
    mainTitle: string
    subTitle?: string
    cost: number
    num: number
  }[]
  peopleSum: number
  sum: number
}

class Ticket extends React.Component<{}, State> {
  state: State = {
    configure: [
      {
        mainTitle: '大人',
        subTitle: '',
        cost: 1000,
        num: 0,
      },
      {
        mainTitle: '学生',
        subTitle: '中学生・高校生',
        cost: 700,
        num: 0,
      },
      {
        mainTitle: '子ども',
        subTitle: '小学生',
        cost: 300,
        num: 0,
      },
      {
        mainTitle: '幼児',
        subTitle: '未就学',
        cost: 0,
        num: 0,
      },
    ],
    peopleSum: 0,
    sum: 0,
  }

  handleChange = (e: React.ChangeEvent<HTMLSelectElement>, index: number) => {
    const value: number = Number(e.target.value)
    const copy_configure = this.state.configure.slice()
    copy_configure[index].num = value
    this.setState({ configure: copy_configure })
    const selectSum = copy_configure[index].num * copy_configure[index].cost
    this.setState((prevState) => {
      return {
        peopleSum: prevState.peopleSum + copy_configure[index].num,
        sum: prevState.sum + selectSum,
      }
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="main">
        {this.state.configure.map((item, index) => {
          return (
            <Detail
              configure={item}
              index={index}
              handleChange={this.handleChange}
            />
          )
        })}
        <Sum peopleSum={this.state.peopleSum} costSum={this.state.sum} />
      </div>
    )
  }
}
export default Ticket
