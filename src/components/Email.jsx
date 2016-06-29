var React = require('react');
var validator = require("email-validator");

var Email = React.createClass({
  getInitialState : function(){
      return {valid: true, value: ""}; 
  },
    
  onChange : function (e){
    var val = e.target.value;
    
    if(!(validator.validate(e.target.value))){
        this.setState({valid:false , value: e.target.value});  
    }
    else{
        this.setState({valid:true , value: e.target.value});                    
    }                           
  },
  
  render: function(){
    var formClass = this.state.valid ? "form-group":"form-group has-error"
    return(
            <div class={formClass}>
                <label for="emailID"> Email: </label> 
                    <input type='email' class='form-control' id = 'emailID' placeholder='Email' onChange = {this.onChange} 
                        value = {this.state.value}/>
                </div>
      );
    }
  });

module.exports = Email;