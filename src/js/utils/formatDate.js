const formatDate = date => {

	let dd = date.getDate();
	let mm = date.getMonth() + 1;
	let yyyy = date.getFullYear();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let sec = date.getSeconds();

	if (dd < 10) {
		dd = '0' + dd;
	}

	if (mm < 10) {
		mm = '0' + mm;
	}

	if (hours < 10) {
		hours = '0' + hours;
	}

	if (minutes < 10) {
		minutes = '0' + minutes;
	}

	if (sec < 10) {
		sec = '0' + sec;
	}

	return `${yyyy}.${mm}.${dd} ${hours}:${minutes}:${sec}`
};

export default formatDate;