const api_key = 'AIzaSyDqvoC8xc_hHGMQLtNaUT7GBsbUTB_uHyo';
const baseURL = 'https://www.googleapis.com/youtube/v3/playlistItems';
const pid = 'PLHtvRFLN5v-W5bQjvyH8QTdQQhgflJ3nu';
const num = 5;
const resultURL = `${baseURL}?key=${api_key}&part=snippet&playlistId=${pid}&maxResults=${num}`;

fetch(resultURL)
	.then((data) => data.json())
	.then((json) => {
		console.log(json);
	});