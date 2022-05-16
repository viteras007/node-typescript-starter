import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({msg: 'Hello World!'});
})

app.listen(3333, () => console.log('Server is running!'));