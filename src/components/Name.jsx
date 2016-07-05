var React = require('react');

var Name = React.createClass({
    getInitialState : function(){
      return {input : ""}; 
    },
    onChange :function(e){
        this.setState({input : e.target.value});
    },
    render: function(){
    return(
        <div>
                <div className="form-group">
                <label for="Name">{this.props.nameType + ' Name'}</label>
                    <input type='text' className='form-control' id = 'name' 
                        placeholder={this.props.nameType + ' Name'}
                        onChange= {this.onChange} value = {this.state.input} />
                </div>
        </div>
    );
  }
});

module.exports = Name;