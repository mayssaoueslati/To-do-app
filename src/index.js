const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the To-Do API');
});

app.post('/todos', (req, res) => {
  const { title, description } = req.body;
  res.status(201).json({ title, description });
});

app.get('/todos', (req, res) => {
  res.status(200).json([]);
});

module.exports = app;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}
