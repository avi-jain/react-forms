var React = require('react');

var Name = React.createClass({
  render: function(){
    return(
        <div>
                <div class="form-group">
                <label for="Name">Name:</label>
                    <input type='text' class='form-control' id = 'name' placeholder='Name'/>
                </div>
        </div>
    );
  }
});