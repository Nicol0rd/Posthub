import React, { Component } from 'react';
import {Accordion, Segment, Input, Button, Icon, Image} from 'semantic-ui-react';
import Axios from 'axios';

class Home extends Component {

constructor(){
		super()
		this.state = { 
		  	email:"",
		  	name:"",
			pword:"",
			date:"dd/mm/yyyy"
		  }
  		this.handleEmail= this.handleEmail.bind(this);
		this.handleName = this.handleName.bind(this);
		this.handlePword = this.handlePword.bind(this);
		this.handleDate = this.handleDate.bind(this);
		this.checkError = this.checkError.bind(this);
	}
	handleEmail(e){
		this.setState({email: e.target.value})
	}
	handleName(e){
		this.setState({name: e.target.value})
	}
	handlePword(e){
		this.setState({pword: e.target.value})
	}
	handlePword2(e){
		this.setState({pword2: e.target.value})
	}
	handleDate(e){
		this.setState({date: e.target.value})
	}
	handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  	}
  	
  render() {
    const { activeIndex } = this.state

    return (
    	<div>
    	<Image
			src='https://i.ibb.co/qxzZPkQ/posthub.png'
			href='http://localhost:3000'
			target='_blank'
			styled style={logo}
  		/>
		<Accordion styled style = {style}>
		  <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}><Button fluid size="massive" styled style={button}>Log In</Button>
		  </Accordion.Title>
		  <Accordion.Content active={activeIndex === 0}>
		  	{/*Email*/}
			<Input
				label="Email"
				value = {this.state.email}
				onChange = {this.handleEmail} 
			/>
			{(this.state.email ==="")?<PrintError data="Email is required"/>:"":""}
			<br/>
			{/*Password*/}
			<Input 
				type="password"
				label="Password"
				value = {this.state.pword}
				onChange = {this.handlePword} 
			/>
				{(this.state.pword ==="")?<PrintError data="Password is required"/>:"":""}
			<br/>
			{/*Submit button*/}
			<Button 
				label="Submit"
				onClick={this.checkError}
			/>
			
		  </Accordion.Content>
		  <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}><Button fluid size="massive" styled style={button}>Sign Up</Button>
		  </Accordion.Title>
		  <Accordion.Content active={activeIndex === 1}>
		  {/*Email*/}
		  	<Input
				label="Email"
				value = {this.state.email}
				onChange = {this.handleEmail} 
			/>
			{(this.state.email ==="")?<PrintError data="Email is required"/>:"":""}
			<br/>
			{/*Name*/}
		  	<Input
				label="Name"
				value = {this.state.name}
				onChange = {this.handleName} 
			/>
			{(this.state.name ==="")?<PrintError data="Name is required"/>:"":""}
			<br/>
			{/*Password*/}
		  	<Input 
				type="password"
				label="Password"
				value = {this.state.pword}
				onChange = {this.handlePword} 
			/>
				{(this.state.pword ==="")?<PrintError data="Password is required"/>:"":""}
				<br/>
		  	{/*Birthday*/}
		  	<Input 
		  		type="date" 
		  		label="Birthday"
		  		value = {this.state.date}
		  		onChange = {this.handleDate}
		  	/>
		  	{(this.state.date ==="dd/mm/yyyy")?<PrintError data="Birthdate is required"/>:"":""}
		  	<br/>
		  	<Button 
				label="Submit"
				onClick={this.handleClick}
			/>
		  </Accordion.Content>
		</Accordion>
		</div>
    )
  }
}

class PrintError extends Component{
	render(){
		return(
			<span className="error-message">{this.props.data}</span>
		);
	}
}

class Login extends Component{
	constructor(props){
		super(props);
		Autobind(this);
		this.state = {
			firstName : '',
			lastName : '',
			email : '',
			password : '',
			confirmPassword	: '',
			isTeacher: ''
		}
	}
}

const style={
	position: "absolute",
	"background-color":"orange",
	width: "30%",
	top:"50%",
	left: "40%",
	margin: "-100px 0 0 -150px"
};

const button= {
	"text-align":"center",
	width:"100%",
	border: "solid 5px black",
	"border-radius": "10px",
	"background-color":"orange",
	"font-size":"40px"
};
const logo= {
	position: "absolute",
	top:"15%",
	width:"auto",
	left: "38%",
	border: "solid 5px black",
	"border-radius": "10px",
	margin: "-100px 0 0 -150px"
};
export default Home;
