import express from 'express';
import axios from 'axios';

const router = express.Router();

router.post('/ask', async (req, res) => {
  const { message } = req.body;
  if (!message || !String(message).trim()) {
    return res.status(400).json({ error: 'Message is required.' });
  }

  try {
    const model = process.env.OLLAMA_MODEL || 'llama3.2:1b';
    const response = await axios.post('http://localhost:11434/api/generate', {
      model,
      prompt: `Reply in 2-4 short helpful sentences.\nUser: ${String(message)}`,
      stream: false,
      keep_alive: '30m',
      options: {
        num_predict: 120,
        temperature: 0.4
      }
    }, {
      timeout: 45000
    });

    res.json({ reply: response.data.response });
  } catch (err) {
    const reason = err.code === 'ECONNREFUSED'
      ? 'Ollama is not running on port 11434.'
      : err.code === 'ECONNABORTED'
      ? 'Ollama timed out while generating a response.'
      : 'Failed to get response from Ollama model.';
    console.error('Ollama Error:', err.message);
    res.status(500).json({ error: reason });
  }
});

export default router;
