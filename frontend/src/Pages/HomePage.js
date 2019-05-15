import React, { Component } from 'react';
import {Accordion, Segment, Input, Button, Icon, Image} from 'semantic-ui-react';
import Axios from 'axios';
import LocalStorage from 'localStorage';

class HomePage extends Component {
	signOut(){
		LocalStorage.clear();
		window.location.href='/';
	}
  render() {
    return (
    	<div>
	    	<div style={{height: '30vh'}}></div>
	    	<Image
				src='https://i.ibb.co/qxzZPkQ/posthub.png'
				href='http://localhost:3000'
				target='_blank'
	  		/>
	  		<Button content = 'signout'
	  		onClick={this.signOut}
	  		/>
			</div>
		)
	}
}
export default HomePage;
