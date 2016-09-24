const request = require('request');

let start = function(req, res) {
  request('http://ec2-107-23-82-233.compute-1.amazonaws.com:8080/job/theq-build-unittest/5900/api/json?pretty=true', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      body = JSON.parse(body);

      let buildStatus = {
        status: body.result,
        author: body.changeSet.items[0].author.fullName
      };

      res.send(buildStatus);
    }
  }).auth('pipeline', 'laird-time-defrost', true);
}

exports.start = start;