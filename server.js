const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

app.use(express.static('app/public'));

require("./app/routing/api-route")(app);
require("./app/routing/html-route")(app);


app.listen(port, () => console.log('Listening on port %s', port));