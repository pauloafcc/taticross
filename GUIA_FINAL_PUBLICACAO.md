# 🚀 TATICROSS — Guia Final de Publicação

## ✅ Status: Pronto para Ir Ao Vivo

Seu projeto está **100% configurado** e o código foi enviado para GitHub. Agora você precisa de apenas 3 passos para publicar o site em `taticross.com.br`.

---

## 📋 Informações Importantes

| Item | Valor |
|------|-------|
| **Repositório GitHub** | https://github.com/pauloafcc/taticross |
| **Domínio** | taticross.com.br |
| **Plataforma** | Vercel (recomendado) |
| **Build Command** | `pnpm run build` |
| **Output Directory** | `dist/public` |
| **Tempo Estimado** | 15-30 minutos (+ 24-48h de propagação DNS) |

---

## 🎯 Passo 1: Criar Conta no Vercel e Importar Repositório

### 1.1 Acessar Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Sign Up"
3. Escolha "Continue with GitHub"
4. Autorize o Vercel a acessar seus repositórios

### 1.2 Importar Projeto

1. Após fazer login, clique em "Add New..." → "Project"
2. Clique em "Import Git Repository"
3. Procure por "taticross" na lista de repositórios
4. Clique em "Import"

### 1.3 Configurar Projeto

Na tela de configuração, verifique se está assim:

```
Framework Preset: Vite
Build Command: pnpm run build
Output Directory: dist/public
Install Command: pnpm install
```

Todos esses valores já estão configurados no arquivo `vercel.json`. Clique em "Deploy".

### 1.4 Aguardar Deploy

O Vercel começará a fazer build do seu projeto. Isso leva entre 2-5 minutos. Você verá:

1. ✅ "Building..."
2. ✅ "Deploying..."
3. ✅ "Ready" (com uma URL como `https://taticross-xxxxx.vercel.app`)

**Anote essa URL temporária** — você a usará para testar antes de configurar o domínio.

---

## 🌐 Passo 2: Adicionar Domínio no Vercel

### 2.1 Acessar Configurações de Domínio

1. No dashboard do Vercel, clique em **Settings** (engrenagem)
2. Vá para **Domains**
3. Clique em "Add Domain"

### 2.2 Adicionar Domínio

1. Digite: `taticross.com.br`
2. Clique em "Add"
3. O Vercel mostrará as instruções de DNS

**Importante**: O Vercel fornecerá registros DNS para você configurar. Anote-os!

---

## 🔧 Passo 3: Configurar DNS no Registro.br

### 3.1 Acessar Painel do Registro.br

1. Acesse [registro.br](https://www.registro.br)
2. Faça login com suas credenciais
3. Vá para **Meus Domínios**
4. Clique em **Gerenciar DNS** para `taticross.com.br`

### 3.2 Adicionar Registros DNS

O Vercel fornecerá registros específicos. Geralmente, você precisará adicionar:

**Opção A: Registros A e CNAME (Mais comum)**

| Tipo | Nome | Valor | TTL |
|------|------|-------|-----|
| A | @ | 76.76.19.89 | 3600 |
| CNAME | www | cname.vercel-dns.com | 3600 |

**Opção B: Nameservers (Se o Vercel indicar)**

Se o Vercel pedir para usar nameservers, substitua os nameservers padrão pelos fornecidos pelo Vercel.

### 3.3 Salvar Configurações

1. Após adicionar os registros, clique em "Salvar"
2. Aguarde a confirmação

---

## ⏱️ Aguardar Propagação de DNS

Após configurar os registros DNS, você precisa aguardar a **propagação global**, que pode levar:

- **Melhor caso**: 15-30 minutos
- **Caso típico**: 2-4 horas
- **Pior caso**: 24-48 horas

### Como Verificar se Já Propagou

**Opção 1: Usar DNS Checker Online**

1. Acesse [dnschecker.org](https://dnschecker.org)
2. Digite: `taticross.com.br`
3. Se todos os servidores mostram o IP correto (76.76.19.89), está pronto!

**Opção 2: Usar Terminal**

```bash
nslookup taticross.com.br
```

Se retornar o IP 76.76.19.89, está funcionando!

---

## ✅ Verificação Final

Após a propagação de DNS, verifique:

| Item | Como Verificar |
|------|---|
| **Site acessível** | Acesse https://taticross.com.br no navegador |
| **WWW redireciona** | Acesse https://www.taticross.com.br |
| **HTTPS funciona** | Verifique o cadeado 🔒 na barra de endereço |
| **Certificado válido** | Clique no cadeado → "Certificado" |
| **Conteúdo carrega** | Verifique se o logo, imagens e texto aparecem |
| **Navegação funciona** | Clique nos links do menu |

---

## 🔒 Certificado SSL/TLS

O Vercel emite automaticamente um certificado SSL/TLS gratuito via Let's Encrypt. Você **não precisa fazer nada** — é automático!

Após a propagação de DNS, o certificado estará ativo em 5-10 minutos.

---

## 📊 Resumo de Ações

| Ação | Status | Tempo |
|------|--------|-------|
| ✅ Código enviado para GitHub | Concluído | - |
| ✅ Projeto criado no Vercel | Próximo passo | 5 min |
| ✅ Deploy no Vercel | Próximo passo | 2-5 min |
| ✅ Domínio adicionado no Vercel | Próximo passo | 1 min |
| ✅ DNS configurado no Registro.br | Próximo passo | 2 min |
| ⏳ Propagação DNS | Aguardar | 15 min - 48h |
| ✅ Site ao vivo | Resultado final | - |

---

## 🆘 Troubleshooting

### Problema: Vercel mostra erro "Build failed"

**Solução:**
1. Clique no build que falhou para ver os logs
2. Procure por mensagens de erro
3. Verifique se há problemas de TypeScript: `pnpm run check`
4. Tente fazer novo deploy

### Problema: Domínio não resolve

**Solução:**
1. Aguarde 24-48 horas para propagação
2. Verifique registros DNS com `nslookup taticross.com.br`
3. Confirme que os registros foram salvos no Registro.br
4. Tente limpar cache do navegador (Ctrl+Shift+Del)

### Problema: HTTPS mostra erro de certificado

**Solução:**
1. Aguarde 5-10 minutos após configurar o domínio
2. Verifique se o domínio está resolvendo corretamente
3. Tente remover e adicionar o domínio novamente no Vercel

### Problema: Site mostra erro 404

**Solução:**
1. Verifique se o build foi bem-sucedido no Vercel
2. Confirme que o `vercel.json` está correto
3. Verifique se `dist/public/index.html` existe

### Problema: Imagens não carregam

**Solução:**
1. Verifique se as URLs das imagens estão corretas
2. Confirme que os assets estão em `client/public/`
3. Teste o site localmente: `pnpm run preview`

---

## 📞 Próximos Passos (Após Publicação)

1. **Teste Completo**: Acesse o site em diferentes dispositivos (mobile, tablet, desktop)
2. **Google Analytics**: Configure rastreamento de visitantes
3. **Email Corporativo**: Configure `contato@taticross.com.br` (opcional)
4. **Backups**: Configure backups automáticos
5. **Monitoramento**: Configure alertas de uptime

---

## 🎯 Links Rápidos

- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub Repositório**: https://github.com/pauloafcc/taticross
- **Registro.br**: https://www.registro.br
- **DNS Checker**: https://dnschecker.org
- **Vercel Docs**: https://vercel.com/docs

---

## 📝 Notas Importantes

1. **Atualizações Automáticas**: Qualquer push para `main` no GitHub dispara novo deploy no Vercel
2. **Domínio Permanente**: Após configurar, o domínio fica associado ao projeto
3. **Certificado Automático**: O HTTPS é automático e renova sozinho
4. **Performance**: O Vercel usa CDN global — seu site será rápido em qualquer lugar

---

## ✨ Parabéns!

Seu site **TATICROSS** está pronto para ir ao vivo! Siga os 3 passos acima e seu site estará acessível em `https://taticross.com.br` em menos de 1 hora (incluindo propagação de DNS).

**Dúvidas?** Consulte os links de suporte acima ou a documentação do Vercel.

---

**Última atualização**: 21 de fevereiro de 2026  
**Versão**: 2.0  
**Status**: ✅ Pronto para Publicação
