import api from './api';

export default {
  // Send a question to the server route `/api/chat/query` and
  // normalize the response to { reply: string } so callers can
  // consistently read `response.reply`.
  async ask(question) {
    const res = await api.post('/chat/query', { question });
    const data = res.data ?? {};
    const reply = data.answer || data.reply || data;
    return { reply };
  }
};
