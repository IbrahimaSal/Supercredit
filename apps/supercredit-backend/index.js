const express = require('express');
const { default: ParseServer, ParseGraphQLServer } = require('parse-server');
const ParseDashboard = require('parse-dashboard');

const app = express();

const parseServer = new ParseServer({
  databaseURI: 'postgres://postgres:postgres@localhost:5432/postgres',
  appId: 'supercredit',
  masterKey: 'supercredit',
  serverURL: 'http://localhost:1337/parse',
});

app.use('/parse', parseServer.app);

app.listen(1337, () => {
  console.log('Parse Server is running on http://localhost:1337/parse');
});
