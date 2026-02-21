#!/bin/bash

# Script para fazer push do código TATICROSS para GitHub
# Use este script para enviar o código para o repositório

cd /home/ubuntu/taticross

# Configurar Git (se necessário)
git config user.email "pauloafcc@gmail.com"
git config user.name "Paulo AFCC"

# Remover remote anterior (se existir)
git remote remove origin 2>/dev/null

# Adicionar novo remote com credenciais
# NOTA: Substitua o token pelo seu Personal Access Token do GitHub
git remote add origin https://pauloafcc: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@github.com/pauloafcc/taticross.git

# Fazer push para main
git push -u origin main

echo "✅ Push concluído! Seu código está no GitHub."
echo "Acesse: https://github.com/pauloafcc/taticross"
