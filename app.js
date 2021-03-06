import express from 'express';
import routes from './lib/routes';
import bodyParser from 'body-parser';


let app = express();

app.use(express.static(__dirname + '/public'));
app.use('/assets', express.static(__dirname + '/assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(routes());

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
