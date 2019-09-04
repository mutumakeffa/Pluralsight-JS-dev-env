// configure the express server 

import express from 'express';   // we call express
import { join } from 'path';         //we'll need reference to path as well
import open from 'open';         //open our site on the browser
import webpack from 'webpack';
import config from '../webpack.config.dev';


const port = 3000;                      //port we will use on the browser
const app = express();                  //create an instance of express and assign it to variable app
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath

}));

//Tell express which routes to handle (routing)
app.get('/', function(_req, res){
    res.sendFile(join(__dirname, '../src/index.html'));
});

//Tell express to listen on the port we defined above
app.listen(port, function(err){
    if(err){
        console.log(err); 
    }else{
        open('http://localhost:' + port);
    }
});