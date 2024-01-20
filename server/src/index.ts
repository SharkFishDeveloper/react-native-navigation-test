
import express from 'express';
import cors from 'cors';


const port = 3000;
const app = express();
app.use(cors({
    // origin: 'http://localhost:8081',
}));

app.get('/', (req, res) => {
    res.json({message:'Connection to backend'});
});
app.get('/about', (req, res) => {
    res.send('About page');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log('Ts-node connected');
    console.log('Ts-node duplicate');
    console.log('Ts-node duplicate');
});
