import React, { Component } from "react";
import '../style/header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Header panel",
      messages: [],
    };

    // this.onSend = this.onSend.bind(this);
  }
  
  // handleChange(event) {
  //   this.setState({ [event.target.id]: event.target.value });
  // }

  // componentWillMount() {
  //   this.setState({
  //     messages: [
  //       {
  //         id: 1,
  //         text: 'Hello developer',
  //         createdAt: new Date(),
  //         user: {
  //           id: 2,
  //           name: 'React',
  //           avatar: 'https://facebook.github.io/react/img/logo_og.png',
  //         },
  //       },
  //     ],
  //   });
  // }

  // onSend(messages = []) {
  //   this.setState((previousState) => ({
  //     messages: GiftedChat.append(previousState.messages, messages),
  //   }));
  // }

  render() {
    return (
      <div className="container-fluid bg-main-res"  id="triggerTwo">
        <div className="row bg-main">
          <div className="col-12 bg-blue">
            <div className="logo"></div>
            <div className="wrap-content-header">
              <h2>​Hello! I’m Indra Putra</h2>
              <h3><b>Consult, Design and Develop Website</b></h3>
              <p>Have something greate in mind? Feel free to contact me. <br /> I'll help you to make it happend</p>
              <button>LET'S MAKE CONTACT</button>
            </div>  

          
          </div>
        </div>
      </div>
    );
  }
}

export default Header;