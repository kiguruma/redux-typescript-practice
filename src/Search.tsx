import React from 'react'
import './App.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
type State = {
  searchText: string
}

class Search extends React.Component<{}, State> {
  state: State = {
    searchText: '',
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ searchText: event.target.value })
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    alert('A name was submitted: ' + this.state.searchText)
    event.preventDefault()
  }

  render() {
    return (
      <SearchWrap>
        <div>検索画面</div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.searchText}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div>
          <Link to="/ticket">チケット</Link>
        </div>
      </SearchWrap>
    )
  }
}
export default Search

const SearchWrap = styled.div`
  text-align: center;
`
