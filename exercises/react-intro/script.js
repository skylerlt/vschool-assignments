var React = require("react");
var ReactDom = require("react-dom");

var helloWorld = React.createClass({
    render: function () {
        return ( < h1 > Hello World! < /h1>)
    }
});

ReactDom.render(
<Hello World/>, document.getElementById('app')
);
