# Mitigação de Vulnerabilidades no Projeto UmSushi

Este projeto possui uma estratégia de mitigação de vulnerabilidades baseada em auditoria automática com `npm audit`, integrada à pipeline de CI.

---

## Auditoria via CI/CD

A aplicação está configurada para rodar uma auditoria automática de segurança sempre que houver **push** ou **pull request** na branch `main`.

- Ferramenta usada: `npm audit`
- Arquivo de configuração: `.github/workflows/audit.yml`
- Política: a pipeline **falha automaticamente** se forem detectadas vulnerabilidades com severidade **alta** (`high`) ou **crítica** (`critical`).

---

# Auditoria local

Você também pode rodar a auditoria de segurança localmente com os comandos abaixo:

# Rodar auditoria
```bash
npm audit --audit-level=high

Corrigir automaticamente vulnerabilidades
 - npm audit fix

Corrigir forçando atualizações
 - npm audit fix --force

