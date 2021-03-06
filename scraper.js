const https = require('https');
const http = require('http');
const odds = "https://wizardofvegas.com/guides/blackjack-survey/";
const test = "http://brysonkruk.com";

module.exports = {
	scrapeOdds : function(){
		https.get(odds, (res) => {
			console.log('in main scrape');
		  console.log('statusCode:', res.statusCode);
		  console.log('headers:', res.headers);

		  res.on('data', (d) => {
		    process.stdout.write(d);
		  });

		}).on('error', (e) => {
		  console.error(e);
		});
	},
	scrapeTest : function(){
		http.get(test, (res) => {
		  console.log('statusCode:', res.statusCode);
		  console.log('headers:', res.headers);
		 
		  res.on('data', (d) => {
		    process.stdout.write(d);
		  });

		}).on('error', (e) => {
		  console.error(e);
		});
	}
};


