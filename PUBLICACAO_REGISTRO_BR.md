# Guia Completo: Publicação TATICROSS em Servidor Externo e Configuração no Registro.br

## Visão Geral

Este documento fornece instruções passo a passo para publicar o site **TATICROSS** em um servidor externo e configurar um domínio personalizado através do Registro.br. O processo envolve três etapas principais: preparação do projeto, publicação em servidor externo e configuração de domínio.

---

## Parte 1: Preparação do Projeto para Publicação

### 1.1 Verificar Dependências

Antes de publicar, certifique-se de que todas as dependências estão instaladas e o projeto está funcionando corretamente:

```bash
cd /home/ubuntu/taticross
pnpm install
pnpm run build
```

### 1.2 Gerar Build de Produção

O comando acima gera uma versão otimizada do site em `dist/`:

```bash
pnpm run build
```

Isso criará:
- `dist/public/` - Arquivos estáticos (HTML, CSS, JavaScript)
- `dist/index.js` - Servidor Node.js (se aplicável)

### 1.3 Testar Build Localmente

Para verificar se o build funciona corretamente:

```bash
pnpm run preview
```

Acesse `http://localhost:4173` para validar que tudo está funcionando.

---

## Parte 2: Publicação em Servidor Externo

### 2.1 Opções de Hospedagem Recomendadas

Para um site estático como TATICROSS, as seguintes plataformas são ideais:

| Plataforma | Tipo | Preço | Melhor Para |
|---|---|---|---|
| **Vercel** | Serverless | Gratuito até 100GB | Máximo desempenho, deploy automático |
| **Netlify** | Serverless | Gratuito até 100GB | Simplicidade, CMS integrado |
| **GitHub Pages** | Estático | Gratuito | Projetos open-source, simplicidade |
| **AWS S3 + CloudFront** | CDN | Pago (variável) | Escalabilidade, controle total |
| **Render** | Serverless | Gratuito (limitado) | Alternativa a Vercel/Netlify |

### 2.2 Publicação via Vercel (Recomendado)

#### Passo 1: Criar Conta no Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Sign Up"
3. Autentique com GitHub, GitLab ou email

#### Passo 2: Conectar Repositório GitHub
1. Faça push do projeto para GitHub:
   ```bash
   cd /home/ubuntu/taticross
   git init
   git add .
   git commit -m "Initial TATICROSS commit"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/taticross.git
   git push -u origin main
   ```

2. No Vercel, clique em "New Project"
3. Selecione "Import Git Repository"
4. Escolha o repositório `taticross`

#### Passo 3: Configurar Deploy
1. **Framework Preset**: Selecione "Other" (ou "Vite" se disponível)
2. **Build Command**: `pnpm run build`
3. **Output Directory**: `dist/public`
4. **Install Command**: `pnpm install`
5. Clique em "Deploy"

O site estará disponível em `https://taticross.vercel.app` (URL temporária).

### 2.3 Publicação via Netlify

#### Passo 1: Criar Conta no Netlify
1. Acesse [netlify.com](https://netlify.com)
2. Clique em "Sign Up"
3. Autentique com GitHub

#### Passo 2: Conectar Repositório
1. Clique em "New site from Git"
2. Escolha GitHub e selecione o repositório `taticross`

#### Passo 3: Configurar Build
1. **Build command**: `pnpm run build`
2. **Publish directory**: `dist/public`
3. Clique em "Deploy site"

O site estará disponível em `https://taticross-xxxxx.netlify.app`.

### 2.4 Publicação via GitHub Pages

#### Passo 1: Configurar Repositório
1. No GitHub, vá para **Settings** → **Pages**
2. Em "Source", selecione "GitHub Actions"

#### Passo 2: Criar Workflow GitHub Actions
Crie o arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v3
        with:
          node-version: '22'
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm run build
      - uses: actions/upload-pages-artifact@v2
        with:
          path: 'dist/public'
      - uses: actions/deploy-pages@v2
```

#### Passo 3: Deploy Automático
O site será publicado automaticamente em `https://seu-usuario.github.io/taticross`.

---

## Parte 3: Configuração de Domínio Personalizado

### 3.1 Registrar Domínio no Registro.br

#### Passo 1: Acessar o Registro.br
1. Acesse [registro.br](https://www.registro.br)
2. Clique em "Registrar Domínio"

#### Passo 2: Buscar Disponibilidade
1. Digite "taticross" no campo de busca
2. Escolha a extensão desejada (`.com.br`, `.com`, `.shop`, etc.)
3. Verifique a disponibilidade

#### Passo 3: Registrar Domínio
1. Clique em "Registrar"
2. Preencha seus dados pessoais/empresariais
3. Escolha o período de registro (1 a 10 anos)
4. Efetue o pagamento

**Custo**: Varia de R$ 30 a R$ 150 por ano, dependendo da extensão.

### 3.2 Configurar DNS no Registro.br

Após registrar o domínio, você precisa apontar os servidores DNS para sua plataforma de hospedagem.

#### Para Vercel:

1. No Registro.br, acesse **Meus Domínios** → **Gerenciar DNS**
2. Adicione os seguintes registros:

| Tipo | Nome | Valor |
|---|---|---|
| A | @ | 76.76.19.89 |
| CNAME | www | cname.vercel-dns.com |

3. Clique em "Salvar"

#### Para Netlify:

1. No Netlify, vá para **Site Settings** → **Domain Management**
2. Clique em "Add Custom Domain"
3. Digite seu domínio (ex: `taticross.com.br`)
4. Copie os **nameservers** fornecidos pelo Netlify
5. No Registro.br, substitua os nameservers padrão pelos do Netlify

#### Para GitHub Pages:

1. No Registro.br, adicione os seguintes registros A:

| Tipo | Nome | Valor |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | seu-usuario.github.io |

2. No GitHub, vá para **Settings** → **Pages**
3. Em "Custom domain", digite seu domínio
4. Clique em "Save"

### 3.3 Validar Configuração de DNS

Após configurar, aguarde 24-48 horas para propagação de DNS. Para verificar:

```bash
# Verificar registros A
nslookup taticross.com.br

# Verificar registros CNAME
nslookup www.taticross.com.br
```

Ou use ferramentas online como [DNS Checker](https://dnschecker.org).

---

## Parte 4: Configuração de SSL/TLS

### 4.1 Certificado Automático

A maioria das plataformas (Vercel, Netlify, GitHub Pages) fornece **SSL/TLS automático e gratuito** via Let's Encrypt. Você não precisa fazer nada adicional.

### 4.2 Verificar HTTPS

Após configurar o domínio, acesse `https://taticross.com.br` para verificar se o certificado está ativo.

---

## Parte 5: Configurações Adicionais

### 5.1 Redirecionamento de WWW

Para garantir que `www.taticross.com.br` redirecione para `taticross.com.br`:

**No Vercel:**
1. Vá para **Project Settings** → **Domains**
2. Adicione `www.taticross.com.br` como domínio adicional
3. Marque "Redirect to primary domain"

**No Netlify:**
1. Vá para **Site Settings** → **Domain Management**
2. Configure redirecionamento em `_redirects` ou `netlify.toml`

### 5.2 Configurar Email Corporativo (Opcional)

Se desejar usar email corporativo (`contato@taticross.com.br`):

1. Acesse seu painel de hospedagem
2. Configure registros MX (Mail Exchange) para um serviço como:
   - Google Workspace
   - Microsoft 365
   - Zoho Mail

### 5.3 Monitoramento e Analytics

Configure ferramentas de monitoramento:

- **Google Analytics**: Adicione código de rastreamento no `client/index.html`
- **Vercel Analytics**: Ativado automaticamente no Vercel
- **Uptime Monitoring**: Use ferramentas como Pingdom ou UptimeRobot

---

## Parte 6: Checklist de Publicação

Antes de considerar o site "ao vivo", verifique:

- [ ] Build local funciona sem erros (`pnpm run build`)
- [ ] Site está acessível em servidor externo
- [ ] Domínio está registrado no Registro.br
- [ ] DNS está configurado corretamente
- [ ] HTTPS está ativo (certificado válido)
- [ ] Redirecionamento www → domínio principal funciona
- [ ] Todas as imagens e assets carregam corretamente
- [ ] Navegação e links internos funcionam
- [ ] Formulários (se houver) funcionam corretamente
- [ ] Site é responsivo em dispositivos móveis
- [ ] Performance é aceitável (teste com Google PageSpeed Insights)
- [ ] SEO básico está configurado (meta tags, sitemap.xml)

---

## Parte 7: Troubleshooting

### Problema: Domínio não resolve

**Solução:**
1. Aguarde 24-48 horas para propagação de DNS
2. Limpe cache do navegador (Ctrl+Shift+Del)
3. Verifique registros DNS com `nslookup` ou ferramentas online

### Problema: Certificado SSL inválido

**Solução:**
1. Verifique se o domínio está configurado corretamente
2. Aguarde 5-10 minutos para emissão do certificado
3. Limpe cache e tente novamente

### Problema: Site mostra erro 404

**Solução:**
1. Verifique se o build foi realizado corretamente
2. Confirme que o diretório de saída está correto (`dist/public`)
3. Verifique se há arquivo `index.html` no diretório

### Problema: Performance lenta

**Solução:**
1. Ative compressão Gzip/Brotli (geralmente automático)
2. Configure CDN (Vercel/Netlify fazem isso automaticamente)
3. Otimize imagens (use formatos WebP)
4. Minimize CSS/JavaScript

---

## Suporte e Recursos

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **GitHub Pages Docs**: https://pages.github.com
- **Registro.br**: https://www.registro.br
- **Let's Encrypt**: https://letsencrypt.org

---

## Próximos Passos

Após publicação bem-sucedida:

1. Configure monitoramento e alertas
2. Implemente Google Analytics
3. Configure backup automático
4. Estabeleça processo de atualização de conteúdo
5. Monitore performance e SEO regularmente

---

**Última atualização**: 21 de fevereiro de 2026  
**Versão**: 1.0
