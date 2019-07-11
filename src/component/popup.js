import React, { Component } from "react";
import '../style/popup.css';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };

    this.hideNotifDown = this.hideNotifDown.bind(this);
  }

  hideNotifDown() {
    const objc = document.getElementById('triggerDown');
    objc.classList.add('hide-popup');
    window.localStorage.setItem('time', 36000);
  }

  render() {
    return (
        <div className="wrap-popup hide-popup" id="triggerDown">
          <div className="time" onClick={this.hideNotifDown}>
            <i className="fa fa-times"></i>
          </div>
        	<div className="col-12">
        		​<h2>Get Latest Updates in web technologies</h2>
            <p>I writed article related to web technologis, such us design trend, development <br className="small-hide" /> tools, UI/UX case studies and reviews, and more. sign up to my newsletter to get <br className="small-hide" /> them all.</p>
            <form className="row">
              <div className="col-12">
                <input className="col-md-9 col-xs-12 input-email" type="email" placeholder="Email address" />
                <button className="col-md-3 col-xs-12" type="submit">Count me in!</button>
              </div>
            </form>
      		</div>
      	</div>
    );
  }
}

export default Popup;