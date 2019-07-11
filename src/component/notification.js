import React, { Component } from "react";
import '../style/notification.css';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };

    this.hideNotif = this.hideNotif.bind(this);
  }

  hideNotif() {
    const objc = document.getElementById('trigger');
    objc.classList.add('hide-notif');
    const objb = document.getElementById('triggerTwo');
    objb.classList.add('no-margin');
  }

  render() {
    return (
      <div >
      <div className="position-notif" id="trigger">
        <div className="container-fluid">
          <div className="row wrap-notif">
            <div className="grid-notif">
              <div className="row">
                <div className="col-md-10 col-xs-12"><p>By accessing and using this website, you acknowleadge that you have read and <br className="small-hide" /> understand our <span>Cookie Policy</span>, <span>Privacy Policy</span> and our <span>Terms of Service</span> </p></div>
                <div className="col-md-2 col-xs-2">
                  <button className="btn-pnl" onClick={this.hideNotif}>Got it</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Notification;