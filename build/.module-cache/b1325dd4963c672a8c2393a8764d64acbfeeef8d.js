var HelloWorld = React.createClass({displayName: "HelloWorld",
	render: function(){
		return (
				React.createElement("div", null, 
					React.createElement("h1", null, " Hello World "), 
					React.createElement("p", null, " This is my React Project ")
				)
			);
	}
});