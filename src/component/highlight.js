import React, { Component } from "react";
import '../style/highlight.css';

class Highlight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Highlight panel",
      listing: [
          {"id":"1","title":"Consult","content":"Our work then targeted, best practeses outcome social innovation synergy. Venture philantropy revolusionary inclusive policymaker relief. Use-centered program area scale", "font":"fa fa-comments"},
          {"id":"2","title":"Design","content":"Our work then targeted, best practeses outcome social innovation synergy. Venture philantropy revolusionary inclusive policymaker relief. Use-centered program area scale", "font":"fa fa-pencil"},
          {"id":"3","title":"Develop","content":"Our work then targeted, best practeses outcome social innovation synergy. Venture philantropy revolusionary inclusive policymaker relief. Use-centered program area scale", "font":"fa fa-archive"},
          {"id":"4","title":"Marketing","content":"Our work then targeted, best practeses outcome social innovation synergy. Venture philantropy revolusionary inclusive policymaker relief. Use-centered program area scale", "font":"fa fa-volume-up"},
          {"id":"4","title":"Manage","content":"Our work then targeted, best practeses outcome social innovation synergy. Venture philantropy revolusionary inclusive policymaker relief. Use-centered program area scale", "font":"fa fa-th-list"},
          {"id":"4","title":"Evolve","content":"Our work then targeted, best practeses outcome social innovation synergy. Venture philantropy revolusionary inclusive policymaker relief. Use-centered program area scale", "font":"fa fa-code"},
      ],
    };
  }
  
  render() {
    const print = this.state.listing.map(function(print, index){
        return (
          <div className="col-md-4 col-sm-6 col-xs-12" key={index}>
            <div className="col-12 list-area">
              <div className="row">
                <div className="col-12 title-text">
                  {print.title} <i className={print.font}></i>
                </div>
                <div className="col-12 content-text">
                  Our work then targeted, best practeses outcome social innovation synergy.  Venture philantropy revolusionary inclusive policymaker relief. Use-centered program area scale
                </div>
               </div>
             </div>
           </div>
                    )
                });          
    return (
      <div className="container-fluid">
        <div className="row bg-gray">
          
          <div className="col-12">
            <div className="wrap-title">
              <h1>How Can I Help You?</h1>
              <p>Our work then targeted, best practeses outcome social innovation synergy. <br className="small-hide"/> Venture philantropy revolusionary inclusive policymaker relief. Use-centered <br className="small-hide" /> program area scale</p>
            </div>
          </div>
          <div className="col-12 wrap-list">
            <div className="row">
              {print}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Highlight;