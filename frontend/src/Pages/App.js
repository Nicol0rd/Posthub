import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { Input, Label, Menu, Dropdown,Accordion, Card, Segment, Button, Checkbox, Header} from 'semantic-ui-react'
import Wall from './Wall.js'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      user: localStorage.getItem('username'),
      activeIndex: 0,
      data:[]
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.signup = this.signup.bind(this);
  }
	
	handleItemClick = (e, { username }) => this.setState({ activeItem: username })
	
	handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }
	
	signup(e) {
    e.preventDefault();

	const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    fetch('http://localhost:3001/signup',
      {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(result => {
        alert(result.message)
      })

  }
  login(e) {
    e.preventDefault();
    const data = {
      username: document.getElementById('login-username').value,
      password: document.getElementById('login-password').value
    }
    fetch('http://localhost:3001/login',
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(result => {
        alert(result.message)
        if (result.success) {
          this.setState({ user: result.userData.username })

          localStorage.setItem('username', result.userData.username)

          const cookies = new Cookies();

          cookies.set(
            'auth-token',
            result.token,
            {
              path: 'localhost:3001/',
              maxAge: 60*120
            }
          )
        }
      })

  }

  logout(e) {
    e.preventDefault();
	this.setState({ user: '' })
    localStorage.removeItem('name')
    const cookies = new Cookies()
    cookies.remove('auth-token')
  
  }

  render() {
  	const { activeItem } = this.state
  	const { activeIndex } = this.state
    return (			
      <div style={{background:"pink", width:"100%", height:"100%"}}>
      	{this.state.user!==""?(<Menu vertical styled style = {style}>
		{this.state.user===""?
		(""):(<Menu.Item>
          <Header size='small'>{this.state.user}</Header>
        </Menu.Item>)} 
		
        <Dropdown text='My Gloo' style = {{background: 'brown'}} className='link item'>
          <Dropdown.Menu>
            <Dropdown.Header content = 'Glooboble' style = {{background: 'orange'}}/>
            <Dropdown.Item>Inner Gloo</Dropdown.Item>
            <Dropdown.Item>Help</Dropdown.Item>
            <Dropdown.Item onClick={this.logout}>Sign out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown text='Blobs' style = {{background: '#5F9EA0'}} className='link item'>
          <Dropdown.Menu>
            <Dropdown.Header  content = 'Blobbing Requests' style = {{background: 'teal'}}/>
            <Dropdown.Item><Card size = 'tiny'>
                              <Card.Content>
                                  <Card.Header>
                                    Faptain Americana
                                  </Card.Header>
                              </Card.Content>
                              <Card.Content extra>
                                <div className='ui two buttons'>
                                  <Button basic color='green'>Approve</Button>
                                  <Button basic color='red'>Decline</Button>
                                </div>
                              </Card.Content>
                           </Card>
            </Dropdown.Item>
            <Dropdown.Item><Card size = 'tiny'>
                              <Card.Content>
                                  <Card.Header>
                                    Thot Odinsheson
                                  </Card.Header>
                              </Card.Content>
                              <Card.Content extra>
                                <div className='ui two buttons'>
                                  <Button basic color='green'>Approve</Button>
                                  <Button basic color='red'>Decline</Button>
                                </div>
                              </Card.Content>
                           </Card>
            </Dropdown.Item>

          </Dropdown.Menu>
        </Dropdown>

        <Dropdown text='Gloo Trail' style = {{background: '#B8860B'}} className='link item'>
          <Dropdown.Menu>
            <Dropdown.Header content = 'New Trails' style = {{background: '#A0522D'}}/>
            <Dropdown.Item>Reactjs Tutorial</Dropdown.Item>
            <Dropdown.Item>CSS got Pregnant</Dropdown.Item>
            <Dropdown.Item>1 Boy no Cups</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown text='Droplets' style = {{background: 'olive'}} className='link item'>
          <Dropdown.Menu>
            <Dropdown.Header content = 'Recent Drops' style = {{background: '#556B2F'}}/>
            <Dropdown.Item>Sext Me</Dropdown.Item>
            <Dropdown.Item>Marraige Proposal</Dropdown.Item>
            <Dropdown.Item>Hey...</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item style = {{background: 'black'}}>
          <Input icon='search' placeholder='Gloo Search' />
        </Menu.Item>

        <Menu.Item>
          <Label>Searchable</Label>
          <Checkbox toggle/>
        </Menu.Item>

        <Menu.Item>
          <Label>Accepting Requests</Label>
          <Checkbox toggle/>
        </Menu.Item>

      </Menu>):""}
            <div>
              {this.state.user==="" ?
              (
	            <Accordion styled style = {styleA}>
				  <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}><Button fluid color="red" size="massive">Log In</Button>
				  </Accordion.Title>
				  <Accordion.Content active={activeIndex === 0}>
					<Input label="User Name" id="login-username"/><br/>
					<Input type="password" label="Password" id="login-password"/><br/>
					<Button onClick={this.login}>Log In</Button>
				  </Accordion.Content>
				  <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}><Button fluid color="violet" size="massive">Sign Up</Button>
				  </Accordion.Title>
				  <Accordion.Content active={activeIndex === 1}>
				  	<Input label="Email" id="email" type="text"/>
				  	<Input label="Account Name" id="username" type="text"/><br/>
				  	<Input type="password" label="Password" id="password" /><br/>
				  	<Input type="password" label="Repeat Password"/><br/>
				  	<Button onClick={this.signup}>Sign Up</Button>
				  </Accordion.Content>
				</Accordion>
	            ):<Wall/>}
            </div>
      </div>
    );
  }
}
const style={
  position: "absolute",
  width: "250px",
  margin: "25px 0 0 10px"
};

const styleA={
	position: "absolute",
	width: "400px",
	"z-index": "15",
	top:"40%",
	left: "45%",
	margin: "-100px 0 0 -150px"
};
