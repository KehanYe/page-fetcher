const fs = require('fs');
const request = require('request');

const fetcher = function(args) {
  args = process.argv.slice(2);
  console.group(args);
  
  const url = args[0];
  const localFile = args[1];

  request(`${url}`, (error, response, body) => {
    fs.writeFile(`${localFile}`, body, err => {
      // console.log(body)
      if (err) {
        console.error(err);
        return;
      }
      if (error) {
        console.log('error', error); //Print the error if one occured
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${localFile}`);
      }
    });
  });
};

fetcher();