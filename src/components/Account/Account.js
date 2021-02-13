import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { Card, Form, Button } from 'react-bootstrap';

const AccountView = () => {
  const [FormCard, setFormCard] = useState('login');
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const Login = () => {
    console.log('Login: ', username, password)

    fetch('http://localhost:3001/users', {
      method: 'POST',
      body: JSON.stringify({username: username, password: password})
    })
    .then(response => {
      console.log('Login: ', response)
    })
    
  }

  const Register = () => {
    console.log('Register: ', username, password)
  }


  return (
      <div className="col-4 offset-4 mt100">

        {FormCard === 'register' ?
        <Card style={{ width: '18rem', margin: '0 auto' }}>
          <Card.Body>
            <Card.Title className="mb40">Register</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Please complete the form below to register</Card.Subtitle>
            <Form.Group>
              <Form.Control
              placeholder="Enter email"
              size="sm"
                onChange={event => {
                  setUsername(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
              placeholder="Enter password"
              type="password"
              size="sm"
              onChange={event => {
                setPassword(event.target.value);
              }}
            />
            </Form.Group>
            {/* <div className="error mt10 mb10">{error}</div> */}
            <Button
              variant="primary" 
              size="sm" 
              block
              onClick={() => {
                Register(username, password);
              }}
            >
          Register
        </Button>
            {/* {error ?
            <div className="error">{error}</div>
            : null
            } */}
            <div className="text-center mt20">
              <small><Card.Link onClick={() => setFormCard('login')}>Have an account? Login here</Card.Link></small>
            </div>
          </Card.Body>
        </Card>
      : null
      }
      {FormCard === 'login' ?
      <Card style={{ width: '18rem', margin: '0 auto' }}>
          <Card.Body>
            <Card.Title className="mb40">Login</Card.Title>
            <Form.Group>
              <Form.Control
              placeholder="Enter email"
              size="sm"
                onChange={event => {
                  setUsername(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
              placeholder="Enter password"
              type="password"
              size="sm"
              onChange={event => {
                setPassword(event.target.value);
              }}
            />
            </Form.Group>
            {/* <div className="error mt10 mb10">{error}</div> */}
            <Button
              variant="primary" 
              size="sm" 
              block
              onClick={() => {
                Login(username, password);
              }}
            >
          Login
        </Button>
        <div className="text-center mt20">
          <small>
          {/* <Card.Link onClick={() => setFormCard('password')}>Forget Password</Card.Link> */}
          <Card.Link onClick={() => setFormCard('register')}>No account yet? Register here</Card.Link>
          </small>
        </div>
            {/* <div className="text-center mt25 pt10"  style={{borderTop: 'solid 1px #ebebeb'}}>
              <small>
              <p><span style={{display: 'block'}}>Or</span>
              Register with Google</p>
              </small>
              <Button variant="light" size="sm">
                <i className="fab fa-google" onClick={signInWithGoogle} style={{color: 'rgb(234, 67, 53)', cursor: 'pointer'}}></i>
              </Button> 
            </div>*/}
          </Card.Body>
        </Card>
      : null
      }

      </div>
    )

  }

  const Account = () => {
    const [user, setUser] = useState( {loggedIn: false} );
    const [error, setError] = useState("");
  
    useEffect(() => {
      
    }, []);
  
  
    if (user.loggedIn) {
    return (
      <>
      <Router>
        <Switch>
  
          <Route exact path='/' />
          
        </Switch>
      </Router>
      </>
    ) 
  
    }else{
    if(sessionStorage.getItem('userDataUid')) {
      return (
        <>
        <Router>
        <Switch>
  
          <Route exact path='/' />
          
        </Switch>

        </Router>
        </>
      )
    }else{
      return (
        <Router>
        <AccountView />
        {/* <Route path='/registration' component={Login} /> */}
        </Router>
      )
    }
    
    }
    
  }
  
  export default Account;

