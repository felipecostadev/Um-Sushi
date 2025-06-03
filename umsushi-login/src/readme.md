#  Um Sushi - Tela de Login (Backend)

Este projeto é a base backend para a funcionalidade de login do sistema **Um Sushi**. Ele foi desenvolvido com foco em autenticação de usuários, seguindo boas práticas de organização e alocação de pessoas.
##  Estrutura de Pastas

A estrutura do projeto foi organizada de forma modular para garantir clareza, manutenção e escalabilidade:

# Controllers
Responsáveis por lidar com as requisições HTTP relacionadas ao login.
Define as rotas relacionadas ao login, como:
- `POST /login`
- `POST /register`
- `GET /me`

#  Models
Modelos de dados da aplicação. Neste caso, inclui o modelo de `User`, com campos como email, senha (hash) e permissões.

# Services
Lógica de autenticação e validação de usuários. Contém as regras de negócio: verificação de credenciais, geração de token, cadastro seguro, etc.

---


