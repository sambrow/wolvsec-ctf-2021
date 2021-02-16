let secret = require('./secret.js');
let express = require('express');
let app = express();

app.get('/', function(req, res) {
    res.sendFile(__filename);
});

let isInteresting = (value) => {
    if (typeof value === 'string') {
        let upperValue = value.toUpperCase();
        if (upperValue !== 'KEVIN') {
            let lowerValue = upperValue.toLowerCase();
            if (lowerValue === 'kevin') {
                return true;
            }
        }
    }
    return false;
}

app.get('/flag', function(req, res) {
    if (isInteresting(req.query.value)) {
        res.send(secret.flag);
    }
    else {
        res.send('Sorry, that is not an interesting value.');
    }
});

let port = 31337;
app.listen(port, () => {
    console.log('express listening on ' + port);
});
