(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/js/App.js":[function(require,module,exports){
var Parent = require('./Parent.js');
var Child = require('./Child.js');

React.render(React.createElement(Parent, null), document.getElementById('app'));

},{"./Child.js":"/Users/moshe/Documents/ReactBot/src/js/Child.js","./Parent.js":"/Users/moshe/Documents/ReactBot/src/js/Parent.js"}],"/Users/moshe/Documents/ReactBot/src/js/Child.js":[function(require,module,exports){
var Child = React.createClass({displayName: "Child",
  render: function(){
    return (
      React.createElement("div", null, 
        "and this is the ", React.createElement("b", null, this.props.name), "."
      )
    )
  }
});

module.exports = Child;

},{}],"/Users/moshe/Documents/ReactBot/src/js/Parent.js":[function(require,module,exports){
var Child = require('./Child.js');

var Parent = React.createClass({displayName: "Parent",
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("div", null, " This is the parent. "), 
        React.createElement(Child, {name: "child"})
      )
    )
  }
});

module.exports = Parent;


},{"./Child.js":"/Users/moshe/Documents/ReactBot/src/js/Child.js"}]},{},["./src/js/App.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbW9zaGUvRG9jdW1lbnRzL1JlYWN0Qm90L3NyYy9qcy9BcHAuanMiLCIvVXNlcnMvbW9zaGUvRG9jdW1lbnRzL1JlYWN0Qm90L3NyYy9qcy9DaGlsZC5qcyIsIi9Vc2Vycy9tb3NoZS9Eb2N1bWVudHMvUmVhY3RCb3Qvc3JjL2pzL1BhcmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNwQyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7O0FBRWxDLEtBQUssQ0FBQyxNQUFNLENBQUMsb0JBQUMsTUFBTSxFQUFBLElBQUEsQ0FBRyxDQUFBLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7O0FDSHhELElBQUksMkJBQTJCLHFCQUFBO0VBQzdCLE1BQU0sRUFBRSxVQUFVO0lBQ2hCO01BQ0Usb0JBQUEsS0FBSSxFQUFBLElBQUMsRUFBQTtBQUFBLFFBQUEsa0JBQUEsRUFDYSxvQkFBQSxHQUFFLEVBQUEsSUFBQyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBUyxDQUFBLEVBQUEsR0FBQTtBQUFBLE1BQ3BDLENBQUE7S0FDUDtHQUNGO0FBQ0gsQ0FBQyxDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLOzs7QUNWdEIsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDOztBQUVsQyxJQUFJLDRCQUE0QixzQkFBQTtFQUM5QixNQUFNLEVBQUUsVUFBVTtJQUNoQjtNQUNFLG9CQUFBLEtBQUksRUFBQSxJQUFDLEVBQUE7UUFDSCxvQkFBQSxLQUFJLEVBQUEsSUFBQyxFQUFBLHVCQUEyQixDQUFBLEVBQUE7UUFDaEMsb0JBQUMsS0FBSyxFQUFBLENBQUEsQ0FBQyxJQUFBLEVBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQTtNQUNqQixDQUFBO0tBQ1A7R0FDRjtBQUNILENBQUMsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBQYXJlbnQgPSByZXF1aXJlKCcuL1BhcmVudC5qcycpO1xudmFyIENoaWxkID0gcmVxdWlyZSgnLi9DaGlsZC5qcycpO1xuXG5SZWFjdC5yZW5kZXIoPFBhcmVudCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiLCJ2YXIgQ2hpbGQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgYW5kIHRoaXMgaXMgdGhlIDxiPnt0aGlzLnByb3BzLm5hbWV9PC9iPi5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hpbGQ7IiwidmFyIENoaWxkID0gcmVxdWlyZSgnLi9DaGlsZC5qcycpO1xuXG52YXIgUGFyZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+IFRoaXMgaXMgdGhlIHBhcmVudC4gPC9kaXY+XG4gICAgICAgIDxDaGlsZCBuYW1lPVwiY2hpbGRcIi8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcmVudDtcbiJdfQ==
