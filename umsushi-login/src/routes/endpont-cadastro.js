import express from 'express';

const app = express();
app.use(express.json());

// endpoint para o cadastro//
app.post('/cadastro', (req, res) => {
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

// simulando uma resposta para teste do servidor//
 return res.status(201).json({
    mensagem: 'Cadastro realizado com sucesso!',
    dadosRecebidos: {
      nome,
      email,
      numero,
      data_de_nascimento,
      genero,
      cep,
      logradouro,
      bairro,
      numero_da_residencia,
      complemento
    }
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


/*return res.status(200).json({ mensagem: `Cadastro com ID ${id} deletado com sucesso!` });*/
});



// iniciar servidor //
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000'); 
});
// "http://" não pode ser mudado, mas depois das barras "//" pode colocar a API que vai ser usada//