import './App.scss';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Header/Header';
import Account from '../Account/Account'
import GetTodos from '../Todos/GetTodos'

function App() {
  return (
    <Router>
    <Header />
    <div className='container mt25'>
      <Switch>
        <Route exact path='/' component={Account} />
        <Route path='/todos' component={GetTodos} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
