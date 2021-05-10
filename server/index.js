const express = require('express');
const path = require('path');

const {
  getPage,
  parseString,
} = require('./parse');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('dist'));

app.post('/parse', async (req, res) => {
  const { url } = req.body;
  try {
    const pageText = await getPage(url);
    const count = parseString(pageText);
    res.send(count);
  } catch (error) {
    res.status(500).send({ error });
  }
})

app.get('/history', (req, res) => {
  console.log('history');
  res.status(200).send();
})

app.use((req, res) => res.status(404).end());

app.listen(port, () => {
  console.log(`listening 🙉 on ${port}`)
});

