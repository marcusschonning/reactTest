var React = require('react');
var styles = require('../styles');

function MainContainer(props) {
	return(
		<div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles.transparentBg}>
			{props.children}
		</div>
	)
}

module.exports = MainContainer;
