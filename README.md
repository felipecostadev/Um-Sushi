# Sistema de Autenticação e Perfil de Usuário

## O que o projeto faz
Este projeto implementa um sistema completo de autenticação e gerenciamento de perfil de usuário para aplicações de delivery/pedidos de restaurantes. Ele proporciona separação entre ambientes de cliente e proprietário de restaurante, oferecendo autenticação segura, cadastro de usuários, login e gerenciamento de perfil com histórico de pedidos.

## Por que o projeto é útil
A autenticação e o perfil do usuário são essenciais para:
- Acesso seguro a pedidos e informações pessoais
- Personalização da experiência do usuário
- Rastreamento de histórico de compras
- Manutenção de preferências do usuário
- Segurança do sistema com diferentes níveis de acesso
- Base para métricas de retenção e recompra

Sem identificação adequada, não há como rastrear histórico ou manter preferências, resultando em uma experiência genérica e insegura.

## Tecnologias Utilizadas
- **Frontend**: Next.js com proteção de rotas privadas e feedbacks visuais
- **Backend**: NestJS com guards e interceptors para autenticação e autorização
- **Autenticação**: JWT (JSON Web Tokens)
- **Segurança**: Bcrypt para criptografia de senhas
- **Armazenamento**: Session Storage para manutenção de estado do usuário
- **Dados**: Sistema de mocks para simulação do banco de dados
- **Hospedagem Frontend**: Vercel
- **Hospedagem Backend**: Render

## Instruções de Instalação

### Pré-requisitos
- Node.js (v14 ou superior)
- npm ou yarn

### Backend
```bash
# Clonar o repositório
git clone https://github.com/sua-organizacao/auth-sistema.git

# Entrar na pasta do backend
cd auth-sistema/backend

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env
# Editar o arquivo .env com suas configurações

# Iniciar o servidor em modo desenvolvimento
npm run start:dev
```

### Frontend
```bash
# Entrar na pasta do frontend
cd ../frontend

# Instalar dependências
npm install

# Iniciar a aplicação em modo desenvolvimento
npm run start
```

## Como usar o projeto

### Funcionalidades para Usuários
1. **Cadastro**: Acesse a página de cadastro e preencha o formulário com suas informações pessoais.
2. **Login**: Use seu e-mail e senha para acessar o sistema.
3. **Perfil**: Visualize e edite seus dados pessoais na página de perfil.
4. **Histórico de Pedidos**: Acesse seus pedidos anteriores e acompanhe o status dos pedidos atuais.

### Funcionalidades para Desenvolvedores
- Utilize o sistema de autenticação como base para implementação de novas funcionalidades
- Estenda o perfil de usuário para incluir preferências específicas de sua aplicação
- Personalize a experiência do usuário com base nos dados de perfil

## Deployment

O projeto utiliza uma arquitetura de deployment moderna, com serviços de hospedagem específicos para cada parte da aplicação:

### Frontend
- **Plataforma**: Vercel
- **Benefícios**:
  - Integração nativa com Next.js
  - Deploy automático a partir do GitHub
  - Previews para cada pull request
  - CDN global para melhor performance

### Backend
- **Plataforma**: Render
- **Benefícios**:
  - Escalonamento automático
  - Monitoramento integrado
  - Configuração simplificada para aplicações NestJS
  - Certificados SSL automáticos

As instruções detalhadas para configuração do deployment em ambas as plataformas serão fornecidas durante o desenvolvimento do projeto.

## Changelog

### v1.0.0 (Data de lançamento planejada)
- Implementação do sistema básico de autenticação
- Cadastro de usuários com validação
- Login seguro com JWT
- Página de perfil com dados pessoais
- Histórico de pedidos

## Sobre o Projeto Acadêmico

Este projeto foi desenvolvido por alunos do curso de Engenharia de Software da Universidade Católica do Salvador (UCSAL) como parte da disciplina de Processos de Software, sob a supervisão do Prof. Gilberto de Souza Leite.

### Objetivos Acadêmicos
- Aplicar conhecimentos de desenvolvimento web e segurança
- Implementar boas práticas de autenticação e autorização
- Desenvolver habilidades de trabalho em equipe e organização de código
- Simular um ambiente real de desenvolvimento de software
