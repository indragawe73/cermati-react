import React, { Component } from "react";
import Notification from '../component/notification';
import Header from '../component/header';
import Highlight from '../component/highlight';
import Footer from '../component/footer';
import Popup from '../component/popup';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "welcome to My Home react",
      messages: [],
      token: 'false',
      time: 36000
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.renewTime = this.renewTime.bind(this);
    this.timeLeft = this.timeLeft.bind(this);
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
      this.timeLeft();

      var timer = window.localStorage.getItem('time');
      console.log('timer', timer)

      if (timer > 0) {
        this.setState({
          time: timer
        }) 
      } else {
        this.renewTime();
      }
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  renewTime() {
      const objc = document.getElementById('triggerDown');
      objc.style.bottom = 0;
      objc.classList.remove('hide-popup');
      this.setState({
        time: 36000
      })
  }

  handleScroll(event) {
    var token = window.localStorage.getItem('token');
    console.log(document.documentElement.scrollTop, token)
    var height = 643 / 3;
    if (document.documentElement.scrollTop > height) {
      var timer = window.localStorage.getItem('time');
      if(token == 'false') {
        console.log('masuk')
        this.renewTime(); 
        window.localStorage.setItem('token', true);

      } else {
        console.log('masuk-2')
        if(timer < 1) {
          this.renewTime(); 
        }
      }
    }
  }

  timeLeft() {
      const self = this;
      setInterval(function(){ 
        if(self.state.time < 1) {
          self.renewTime()
        } else {

          self.setState({
            time: self.state.time - 1
          })
          console.log(self.state.time)          
          window.localStorage.setItem('time', self.state.time);
        }
      }, 1000);
  }


  render() {
    return (
      <div>
        <Notification />
        <Header />
        <Highlight />
        <Footer />
        <Popup />
      </div>
    );
  }
}

export default HomeContainer;