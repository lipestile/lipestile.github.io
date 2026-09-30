#!/usr/bin/env bash

# ==============================================================================
# Script de Deploy Automático para Felipe Carvalho - GitHub Pages
# ==============================================================================

set -e

GITHUB_USER="felipecarvalho"
REPO_NAME="${GITHUB_USER}.github.io"
REPO_URL="https://github.com/${GITHUB_USER}/${REPO_NAME}.git"

echo ""
echo "✨ Iniciando Deploy do Portfólio de Felipe Carvalho..."
echo "📦 Repositório de Destino: $REPO_URL"
echo "----------------------------------------------------------------------"

# Garantir que a branch principal é a main
git branch -M main

# Configurar remote origin
if git remote | grep -q 'origin'; then
  git remote set-url origin "$REPO_URL"
else
  git remote add origin "$REPO_URL"
fi

echo "🚀 Enviando arquivos para o GitHub..."
echo "ℹ️  Dica: Se solicitado, autentique com seu usuário do GitHub e Personal Access Token (ou chave SSH)."
echo ""

git push -u origin main

echo ""
echo "🎉 SUCESSO! Landing page publicada com sucesso!"
echo "----------------------------------------------------------------------"
echo "Acesse em alguns instantes no seu endereço oficial:"
echo "👉 https://${GITHUB_USER}.github.io"
echo "----------------------------------------------------------------------"
