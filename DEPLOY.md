# Deploy para VPS Hostinger (GitHub Actions + SSH)

O deploy é feito automaticamente via **GitHub Actions** em cada push na branch `main`, ou manualmente pelo botão "Run workflow" em **Actions**.

## O que a pipeline faz

1. **Build** do projeto Vite/React em `sisconecta-ta-2026` (`npm ci` + `npm run build`).
2. **Deploy** da pasta `dist/` para a VPS via **SSH** com **rsync** (só envia arquivos alterados).

## Secrets necessários no GitHub

Em **Settings → Secrets and variables → Actions** do repositório, crie:

| Secret | Descrição | Exemplo |
|--------|-----------|---------|
| `SSH_PRIVATE_KEY` | Chave privada SSH (conteúdo do arquivo, ex: `id_rsa`) usada para acessar a VPS | Conteúdo de `~/.ssh/id_rsa` |
| `SSH_HOST` | IP ou hostname da VPS Hostinger | `123.45.67.89` ou `vps123.hostinger.com` |
| `SSH_USER` | Usuário SSH na VPS | `root` ou `u123456789` (conforme painel Hostinger) |
| `REMOTE_PATH` | Caminho absoluto no servidor onde o site deve ficar (pasta que receberá o conteúdo de `dist/`) | `/home/u123456789/domains/meusite.com/public_html` |

### Como obter na Hostinger

- **SSH**: no painel Hostinger, em **VPS → SSH Access** você vê usuário, host e pode usar ou criar uma chave.
- **REMOTE_PATH**: geralmente é o diretório do domínio/site (ex.: `public_html` do domínio que você configurou na VPS).

## Chave SSH na VPS

A chave pública correspondente a `SSH_PRIVATE_KEY` deve estar em `~/.ssh/authorized_keys` do usuário `SSH_USER` na VPS. Se ainda não configurou:

1. Gere um par de chaves (se não tiver): `ssh-keygen -t ed25519 -C "github-deploy" -f deploy_key`.
2. No servidor: `mkdir -p ~/.ssh && echo "SUA_CHAVE_PUBLICA" >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys`.

## Execução manual

Em **Actions → Deploy to Hostinger VPS → Run workflow** você pode rodar o deploy sem dar push.

## Observações

- O **rsync** usa `--delete`: arquivos que existem no servidor e não existem mais no `dist/` são removidos (mantém o site alinhado ao build).
- O workflow usa **Node 20** e **npm ci** para build reproduzível.
