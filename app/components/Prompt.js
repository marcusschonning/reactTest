var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;
var MainContainer = require('./MainContainer');

function Prompt (props) {
	return(
		<MainContainer>
			<h1>{props.header}</h1>
			<div className="col-sm-12">
				<form onSubmit={props.onSubmitUser}>
					<div className="form-group">
						<input
							className="form-control"
							placeholder="Github Username"
							onChange={props.onUpdateUser}
							value={props.username}
							type="text"
						/>
					</div>
					<div className="form-group col-sm-4 col-sm-offset-4">

						<button className="btn btn-lg btn-success" type="submit">
							Continue
						</button>
					</div>
				</form>
			</div>
		</MainContainer>
	)
}
Prompt.propTypes = {
	header: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	onSubmitUser: PropTypes.func.isRequired,
	onUpdateUser: PropTypes.func.isRequired
}

module.exports = Prompt;
