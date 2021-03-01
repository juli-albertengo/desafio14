import express, {Application, Request, Response} from 'express';
import path from 'path'

const app:Application = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.listen('8080', () => {
    console.log('App is listening on port 8080');
})

app.get('/', (req:Request, res:Response) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})
