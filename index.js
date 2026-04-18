import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

// 🔹 Middlewares
app.use(cors());
app.use(express.json());

// 🔹 Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Erro MongoDB:', err));

// 🔹 Rota de teste (importante)
app.get('/', (req, res) => {
  res.send('Servidor rodando 🚀');
});

// 🔹 Exemplo de rota
app.get('/dashboard/:userId', (req, res) => {
  res.json({
    mensagem: "Backend funcionando",
    userId: req.params.userId
  });
});

// 🔹 Porta (ESSENCIAL para o Render)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
