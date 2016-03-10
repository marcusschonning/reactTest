var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var styles = require('../styles');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');

function puke (obj) {
	return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}
function StartOver (props) {
	return (
		<div className='col-sm-12' style={styles.space}>
			<Link to='/playerOne'>
				<button className='btn btn-lg btn-danger'>
					Play again
				</button>
			</Link>
		</div>
	)
}

function Results(props) {
	if(props.isLoading) {
		return(
			<Loading speed={800} text={'Loading'} />
		)
	}
	if (props.scores[0] === props.scores[1]) {
		return (
			<MainContainer>
				<h1>It's a tie!</h1>
				<StartOver />
			</MainContainer>
		)
	}
	winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
	loosingIndex = winningIndex === 0 ? 1 : 0;

	return(
		<MainContainer>
			<h1>Results</h1>
			<div className='col-sm-8 col-sm-offset-2'>
				<UserDetailsWrapper header='Winner'>
					<UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
				</UserDetailsWrapper>
				<UserDetailsWrapper header='Looser'>
					<UserDetails score={props.scores[loosingIndex]} info={props.playersInfo[loosingIndex]} />
				</UserDetailsWrapper>
			</div>
			<StartOver />
		</MainContainer>
	)
}

Results.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	scores: PropTypes.array.isRequired
};

module.exports = Results;
