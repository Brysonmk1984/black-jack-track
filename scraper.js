const https = require('https');
const odds = "https://wizardofvegas.com/guides/blackjack-survey/";
const test = "http://brysonkruk.com";

https.get(odds, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
});
