#  Um Sushi - Tela de Login (Backend)
// Equipe: Arthur Amorim, Ariely Paim, Allan Brito, Diogo Teixeira, Joaquim Calmon, Vitor Santos.

Este projeto é a base backend para a funcionalidade de login do sistema **Um Sushi**. Ele foi desenvolvido com foco em autenticação de usuários, seguindo boas práticas de organização e alocação de pessoas.
##  Estrutura de Pastas

A estrutura do projeto foi organizada de forma modular para garantir clareza, manutenção e escalabilidade:

# Controllers
Responsáveis por lidar com as requisições HTTP relacionadas ao login.

# Middlewares
Contém funções que são executadas entre a requisição e o controlador.
###  Models
Modelos de dados da aplicação. Neste caso, inclui o modelo de `User`, com campos como email, senha (hash) e permissões.

# Routes
Define as rotas relacionadas ao login, como:
- `POST /login`
- `POST /register`
- `GET /me` 
# Services
Lógica de autenticação e validação de usuários. Contém as regras de negócio: verificação de credenciais, geração de token, cadastro seguro, etc.

#  utils
Funções auxiliares, como:
- Geração e verificação de tokens JWT
- Hash de senhas com bcrypt
- Validações genéricas

---


