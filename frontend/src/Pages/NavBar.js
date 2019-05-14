import React, { Component } from 'react'
import { Input, Label, Menu, Dropdown, Button, Header, Image } from 'semantic-ui-react'

class NavBar extends Component {
  state = { activeItem: 'inbox' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu vertical styled style = {style}>
        <Image
			src='https://i.ibb.co/qxzZPkQ/posthub.png'
			size='large'
			href='http://google.com'
			target='_blank'
			styled style={logo}
  		/>
  		<Header as='h2' dividing>Name</Header>
        <Dropdown text='Friends' className='link item'>
          <Dropdown.Menu>
            <Dropdown.Header content = 'Friend Requests'/>
            <Dropdown.Item>Jaeson</Dropdown.Item>
            <Dropdown.Item>Kyle</Dropdown.Item>
            <Dropdown.Item>Nicolo</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown text='Settings'  className='link item'>
          <Dropdown.Menu>
            <Dropdown.Header content = 'Edit'/>
            <Dropdown.Item>Name</Dropdown.Item>
            <Dropdown.Item>Email</Dropdown.Item>
            <Dropdown.Item>Password</Dropdown.Item>
            <Dropdown.Item>About</Dropdown.Item>
            <Dropdown.Item>Birthday</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item>
          <Input icon='search' placeholder='Search' />
        </Menu.Item>
      </Menu>
    )
  }
}

const style= {
	"text-align":"center",
	width:"18%",
    float:"left",
	position:"fixed",
	clear:"both",
	"border-radius": "10px",
	"margin-top": "1%",
	"margin-left": "1%",
	"background-color":"orange",
	"font-size":"20px",
	border: "solid 5px black"
};
const logo= {
	"text-align":"center",
	width:"100%",
	"border-radius": "10px",
	"background-color":"orange",
	"font-size":"40px"
};
document.body.style = 'background: #413B3B;';
export default NavBar;
