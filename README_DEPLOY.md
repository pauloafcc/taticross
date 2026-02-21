# TATICROSS — Guia de Publicação no Vercel

## Status: ✅ Pronto para Publicação

Este projeto está completamente configurado para publicação no Vercel com domínio personalizado **taticross.com.br**.

---

## 📋 Pré-requisitos

Antes de começar, você precisa de:

1. **Conta GitHub** - [Criar conta](https://github.com/signup)
2. **Conta Vercel** - [Criar conta](https://vercel.com/signup)
3. **Domínio registrado** - taticross.com.br (registrado no Registro.br)

---

## 🚀 Passo 1: Fazer Push para GitHub

### 1.1 Criar Repositório no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. Preencha os dados:
   - **Repository name**: `taticross`
   - **Description**: `Loja de moda fitness feminina TATICROSS`
   - **Visibility**: Public ou Private (sua escolha)
3. Clique em "Create repository"

### 1.2 Fazer Push do Código

Execute os comandos abaixo no terminal:

```bash
cd /home/ubuntu/taticross

# Adicionar todos os arquivos
git add .

# Criar commit inicial
git commit -m "Initial TATICROSS commit - ready for production"

# Renomear branch para main (se necessário)
git branch -M main

# Adicionar remote do GitHub
git remote add origin https://github.com/SEU_USUARIO/taticross.git

# Fazer push para GitHub
git push -u origin main
```

**Substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub.**

---

## 🎯 Passo 2: Conectar ao Vercel

### 2.1 Acessar Vercel

1. Acesse [vercel.com/dashboard](https://vercel.com/dashboard)
2. Clique em "Add New..." → "Project"

### 2.2 Importar Repositório

1. Clique em "Import Git Repository"
2. Selecione GitHub (conecte sua conta se necessário)
3. Procure por "taticross" e clique em "Import"

### 2.3 Configurar Projeto

Na tela de configuração, verifique:

- **Framework Preset**: Vite
- **Build Command**: `pnpm run build`
- **Output Directory**: `dist/public`
- **Install Command**: `pnpm install`

Todos esses campos já estão pré-configurados no arquivo `vercel.json`.

### 2.4 Deploy

1. Clique em "Deploy"
2. Aguarde o build completar (geralmente 2-3 minutos)
3. Você receberá uma URL temporária: `https://taticross-xxxxx.vercel.app`

---

## 🌐 Passo 3: Configurar Domínio Personalizado

### 3.1 Adicionar Domínio no Vercel

1. No dashboard do Vercel, vá para **Settings** → **Domains**
2. Clique em "Add Domain"
3. Digite: `taticross.com.br`
4. Clique em "Add"

### 3.2 Configurar DNS no Registro.br

1. Acesse [registro.br](https://www.registro.br)
2. Faça login em sua conta
3. Vá para **Meus Domínios** → **Gerenciar DNS**
4. Localize o domínio `taticross.com.br`
5. Adicione os seguintes registros:

| Tipo | Nome | Valor | TTL |
|------|------|-------|-----|
| A | @ | 76.76.19.89 | 3600 |
| CNAME | www | cname.vercel-dns.com | 3600 |

6. Clique em "Salvar"

### 3.3 Aguardar Propagação

- A propagação de DNS pode levar **24 a 48 horas**
- Você pode verificar o status em: [DNS Checker](https://dnschecker.org)
- Verifique com o comando:
  ```bash
  nslookup taticross.com.br
  ```

### 3.4 Validar HTTPS

Após a propagação, o Vercel emitirá automaticamente um certificado SSL/TLS. Você verá um ✅ verde no Vercel quando estiver pronto.

---

## ✅ Checklist Final

Antes de considerar o site "ao vivo", verifique:

- [ ] Repositório GitHub criado e código enviado
- [ ] Projeto importado no Vercel
- [ ] Build completou com sucesso
- [ ] URL temporária do Vercel funciona
- [ ] Domínio adicionado no Vercel
- [ ] Registros DNS configurados no Registro.br
- [ ] DNS propagou (aguarde 24-48h)
- [ ] HTTPS está ativo (certificado válido)
- [ ] Site acessível em `https://taticross.com.br`
- [ ] Site acessível em `https://www.taticross.com.br`
- [ ] Todas as páginas carregam corretamente
- [ ] Imagens e assets carregam sem problemas

---

## 🔧 Configurações Adicionais (Opcional)

### Redirecionamento WWW

Para garantir que `www.taticross.com.br` redirecione para `taticross.com.br`:

1. No Vercel, vá para **Settings** → **Domains**
2. Clique em "Edit" para `www.taticross.com.br`
3. Marque "Redirect to primary domain"

### Analytics e Monitoramento

Configure no Vercel:

1. **Vercel Analytics**: Ativado automaticamente
2. **Speed Insights**: Vá para **Settings** → **Analytics** e ative
3. **Google Analytics**: Adicione código de rastreamento no `client/index.html`

---

## 🐛 Troubleshooting

### Problema: Build falha no Vercel

**Solução:**
1. Verifique os logs no Vercel (clique no build que falhou)
2. Certifique-se de que `pnpm install` funciona localmente
3. Verifique se há erros de TypeScript: `pnpm run check`

### Problema: Domínio não resolve

**Solução:**
1. Aguarde 24-48 horas para propagação de DNS
2. Verifique registros DNS com `nslookup taticross.com.br`
3. Confirme que os registros foram salvos no Registro.br

### Problema: Certificado SSL não emite

**Solução:**
1. Aguarde 5-10 minutos após configurar o domínio
2. Verifique se o domínio está resolvendo corretamente
3. Tente remover e adicionar o domínio novamente no Vercel

### Problema: Site mostra erro 404

**Solução:**
1. Verifique se o build local funciona: `pnpm run build && pnpm run preview`
2. Confirme que `dist/public/index.html` existe
3. Verifique se o `vercel.json` está correto

---

## 📞 Suporte

- **Vercel Docs**: https://vercel.com/docs
- **Registro.br**: https://www.registro.br
- **GitHub Help**: https://docs.github.com

---

## 📝 Notas Importantes

1. **Atualizações Automáticas**: Qualquer push para `main` no GitHub dispara um novo deploy no Vercel automaticamente
2. **Variáveis de Ambiente**: Se precisar de variáveis secretas, configure em **Settings** → **Environment Variables** no Vercel
3. **Backups**: O código está seguro no GitHub - você pode recuperar qualquer versão anterior
4. **Performance**: O Vercel usa CDN global, então seu site será rápido em qualquer lugar do mundo

---

**Última atualização**: 21 de fevereiro de 2026  
**Versão**: 1.0  
**Status**: ✅ Pronto para publicação
