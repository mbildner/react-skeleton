var Child = require('./Child.js');

var Parent = React.createClass({
  render: function(){
    return (
      <div>
        <div> This is the parent. </div>
        <Child name="child"/>
      </div>
    )
  }
});

module.exports = Parent;
