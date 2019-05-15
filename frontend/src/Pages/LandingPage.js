import React, { Component } from 'react';
import Axios from 'axios';
import { Button, Form, Segment, Divider,Header,Icon,Grid,Message } from 'semantic-ui-react';
import Autobind from 'react-autobind';
import LocalStorage from 'localStorage';

class LandingPage extends Component{
	render(){
		return(
			<div><SegmentDivider /></div>
		)
	}
}


class LogIn extends Component{
	constructor(){
		super()
		Autobind(this)
		this.state ={
			email:"",
			password:""
		}
	}

	handleEmail(e){
		this.setState({email: e.target.value})
	}
	handlePassword(e){
		this.setState({password: e.target.value})
	}
	handleLogIn(e){
		var input = this.state;
		Axios.post('http://localhost:8080/user/log-in',
			{
			email: input.email,
			password: input.password
			}
		)
		.then(res=>{
			let userData = {
				_id: res._id,
				name: res.name,
				email: res.email,
				password : res.password,
				about : res.about,
				birthday: res.birthday
			}
			LocalStorage.setItem("loggedIn", "true");
			LocalStorage.setItem("userData", JSON.stringify(userData));
			window.location.href='/';
		})
	}

	componentWillMount(){
		let self = this;
		if(LocalStorage.getItem("loggedIn")=="true"){
			const user = JSON.parse(LocalStorage.getItem("userData"));
			self.setState({
				_id : user._id,
				email : user.email,
				password : user.password,
				name: user.name,
				about : user.about,
				birthday: user.birthday
			})
			console.log(user);
			window.location.href='/home';
		}
	}
	render(){
		return(
			<div>
				 	<Form onSubmit={this.handleLogIn}>
			          	<Form.Group>
				            <Form.Input
				            	placeholder='Email'
				            	onChange={this.handleEmail}
				            />
				            <Form.Input
				            	placeholder='Password'
				            	type = "password"
				            	onChange={this.handlePassword}
				            />
			            	<Form.Button content='Log In'/>
			          </Form.Group>
		        </Form>
		    </div>
		)
	}
}



class SignUp extends Component{
	constructor(){
		super()
		Autobind(this);
		this.state = {
			name: "",
			email: "",
			password: "",
			birthday: ""
		}
	}

		handleName(e){
			this.setState({name: e.target.value})
		}
		handleEmail(e){
		this.setState({email: e.target.value})
		}
		handlePassword(e){
			this.setState({password: e.target.value})
		}
		handleBirthday(e){
			this.setState({birthday: e.target.value})
		}
		handleSubmit(e){
			var input = this.state;
			Axios.post('http://localhost:8080/user/signup',
				{ 
					name: input.name,
					email: input.email,
					password: input.password,
					birthday: input.birthday
				}
			)
			.then(res => {
				console.log(res);
				console.log(res.body);
			})

		}

		render() {
			return(
				<div>
				 	<Form onSubmit={this.handleSubmit}>
			          	<Form.Group>
				            <Form.Input 
				            	placeholder='Name' 
				            	onChange={this.handleName} 
				            />
				            <Form.Input
				            	placeholder='Email'
				            	onChange={this.handleEmail}
				            />
				            <Form.Input
				            	placeholder='Password'
				            	type = "password"
				            	onChange={this.handlePassword}
				            />
				            <Form.Input
				            	placeholder="birthday"
				            	type = "date"
				            	onChange ={this.handleBirthday}
				            />
			            	<Form.Button content='Submit'/>
			          </Form.Group>
		        </Form>
		    </div>
		)
	}
}

class SegmentDivider extends Component {
	render(){
		return(
			<Segment placeholder>
			    <Grid columns={2} stackable textAlign='center'>
			      <Divider vertical>Or</Divider>

			      <Grid.Row verticalAlign='middle'>
			        <Grid.Column>
			          <Header icon>
			            <Icon name='user' />
			            Log In
			            <LogIn/>
			          </Header>

			          
			        </Grid.Column>

			        <Grid.Column>
			          <Header icon>
			            <Icon name='user plus' />
			            SignUp
			            <SignUp/>
			          </Header>
			        </Grid.Column>
			      </Grid.Row>
			    </Grid>
		  	</Segment>
		)
	}  
}


  

export default LandingPage
