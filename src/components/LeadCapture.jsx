var React = require('react');
var Name = require('./Name.jsx');
var Email = require('./Email.jsx');


var LeadCapture = React.createClass({
    
    render : function(){
        return(
            <div className = "col-sm-3">
              <div className = "panel panel-default">
                  <div className="panel-body">          
                  <Name nameType='First'/>
                  <Email/>
                  <button className= "btn btn-primary" onClick = {this.onSubmit}>Submit</button>
                  </div>
              </div>
            </div>
        );
    }
});

module.exports = LeadCapture;