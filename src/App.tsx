import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Ticket from './Ticket'
import Home from './Home'
import Search from './Search'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ticket" exact component={Ticket} />
        <Route path="/search" exact component={Search} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}
export default App
