const formatDate = (timeInSeconds) => {
	let timeString = '';
	let hourString = '';
	let minuteString = '';
	let secondsString = '';
	if (timeInSeconds >= 3600) {
		hourString += Math.floor(timeInSeconds / 3600) + 'h'
	};
	if ((timeInSeconds % 3600) >= 60 && (timeInSeconds % 3600) !== 0 ) {
		minuteString += Math.floor((timeInSeconds % 3600) / 60) + 'm';
	};
	if (((timeInSeconds % 3600) % 60) < 60 && ((timeInSeconds % 3600) % 60) !== 0) {
		secondsString += ((timeInSeconds % 3600) % 60) + 's';
	};
	if (hourString !== '' && (minuteString !== '' || secondsString !== '')){
		hourString += ' ';
	};
	if (minuteString !== '' && secondsString !== ''){
		minuteString += ' ';
	};
	timeString = hourString + minuteString + secondsString;
	if (timeString === '') {
		timeString = '0s';
	};
	return timeString;

};

module.exports = formatDate;
