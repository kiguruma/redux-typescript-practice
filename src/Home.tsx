import React from 'react'
import './App.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// type State = {

// }

class Home extends React.Component<{}, {}> {
  state = {}
  render() {
    return (
      <HomeWrap>
        <div>ホーム</div>
        <div>
          <Link to="/ticket">チケット</Link>
        </div>
        <div>
          <Link to="/search">検索</Link>
        </div>
      </HomeWrap>
    )
  }
}
export default Home

const HomeWrap = styled.div`
  text-align: center;
`
