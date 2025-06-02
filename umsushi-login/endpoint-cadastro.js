import express from 'express';

let cadastros = [];
let nextId = 1;

const app = express();
app.use(express.json());

console.log('--- Servidor Express Iniciado ---');
console.log('Array cadastros inicializado como:', cadastros);
console.log('Próximo ID inicializado como:', nextId);

// endpoint para adicionar os dados//
app.post('/cadastro', (req, res) => {
  console.log('\n--- Requisição POST /cadastro recebida ---');
  console.log('Corpo da requisição (req.body):')

  const {
    nome,
    email,
    numero,
    data_de_nascimento,
    genero,
    senha,
    cep,
    logradouro,
    bairro,
    numero_da_residencia,
    complemento
  } = req.body;

  // Validação básica (campos obrigatórios)
  if (!nome || !email || !numero || !data_de_nascimento || !senha || !cep || !logradouro || !bairro || !numero_da_residencia) {
    return res.status(400).json({ mensagem: 'Preencha todos os campos obrigatórios.' });
  }

  // verificar a duplicidade de e-mails
  const emailExistente = cadastros.find(cadastro => cadastro.email === email);
  if (emailExistente) {
    return res.status(409).json({ mensagem: 'E-mail já cadastrado. Use outro e-mail.' });
  }

const novoCadastro = {
    id: nextId++,
    nome,
    email,
    numero,
    data_de_nascimento,
    genero,
    senha,
    cep,
    logradouro,
    bairro,
    numero_da_residencia,
    complemento
  };

  cadastros.push(novoCadastro);

  console.log('Novo cadastro criado e adicionado:', novoCadastro);
  console.log('Estado atual do array cadastros após POST:', cadastros);


  return res.status(201).json({
    mensagem: 'Cadastro realizado com sucesso!',
    dadosRecebidos: novoCadastro
  });
});

//ednpoint para pegar todos os dados
 app.get('/cadastro', (req, res) => {
  res.status(200).json(cadastros); 
});

//para pegar dados de um item//
app.put('/cadastro/:id', (req, res) => {
  const { id } = req.params;
  const dadosAtualizados = req.body;

  const index = cadastros.findIndex(c => c.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ mensagem: 'Cadastro não encontrado.' });
  }

  cadastros[index] = { ...cadastros[index], ...dadosAtualizados };

  res.status(200).json({
    mensagem: `Cadastro com ID ${id} atualizado com sucesso!`,
    cadastroAtualizado: cadastros[index]
  });
});

// ednpoint para atualizar dados//
app.put('/cadastro/:id', (req, res) => {
  const { id } = req.params;
  const dadosAtualizados = req.body;
 const index = cadastros.findIndex(c => c.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ mensagem: 'Cadastro não encontrado.' });
  }

  // verificando se o novo e-mail já está em uso por outro cadastro
  if (dadosAtualizados.email) {
    const emailEmUso = cadastros.find(c => c.email === dadosAtualizados.email && c.id !== parseInt(id));
    if (emailEmUso) {
      return res.status(409).json({ mensagem: 'E-mail já está em uso por outro cadastro.' });
    }
  }

cadastros[index] = { ...cadastros[index], ...dadosAtualizados };

  return res.status(200).json({
    mensagem: `Cadastro com ID ${id} atualizado com sucesso!`,
    cadastroAtualizado: cadastros[index]
  });

});

// endpoint para deletar dados//
app.delete('/cadastro/:id', (req, res) => {
  const { id } = req.params;
const index = cadastros.findIndex(c => c.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ mensagem: 'Cadastro não encontrado.' });
  }

  cadastros.splice(index, 1);


return res.status(200).json({ mensagem: `Cadastro com ID ${id} deletado com sucesso!` });
});



// iniciar servidor //
app.listen(3001, () => {
  console.log('Servidor rodando em http://localhost:3001'); 
});
