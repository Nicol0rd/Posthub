import React, { Component } from 'react';
import { Container, Card, Button, TextArea, Form, Input, Header } from 'semantic-ui-react';

class Containertest extends Component{

	render(){
		return(
			<Container styled style = {style}>
			<Header style = {{color: 'olive'}} size = 'medium'> What's on your mind? </Header>
			<Form>
				<Form.Field id='form-button-control-public' control={Button} content='Post'/>
				<Form.Field id='form-textarea-control-opinion' control={TextArea} placeholder='Write Something' />
			</Form>
			

			</Container>

			)
	}

}

const style={
	position: "absolute",
	width: "500px",
	"z-index": "15",
	left: "40%",
	margin: "25px 0 0 0px",
	background: "Black"
};

export default Containertest;