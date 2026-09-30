#!/usr/bin/env bash

# ==============================================================================
# Script de Deploy Automático para GitHub Pages
# ==============================================================================

set -e

echo ""
echo "✨ Iniciando Deploy Automático do Portfólio High-End no GitHub Pages..."
echo "----------------------------------------------------------------------"

# Verificar se o usuário do GitHub foi passado ou solicitar
if [ -z "$1" ]; then
  read -p "👉 Digite o seu nome de usuário do GitHub: " GITHUB_USER
else
  GITHUB_USER="$1"
fi

if [ -z "$GITHUB_USER" ]; then
  echo "❌ Usuário do GitHub não informado. Abortando."
  exit 1
fi

REPO_NAME="${GITHUB_USER}.github.io"
REPO_URL="https://github.com/${GITHUB_USER}/${REPO_NAME}.git"

echo ""
echo "📦 Configurando repositório remoto para: $REPO_URL"

# Garantir que a branch se chama main
git branch -M main

# Configurar remote origin
if git remote | grep -q 'origin'; then
  git remote set-url origin "$REPO_URL"
else
  git remote add origin "$REPO_URL"
fi

echo "🚀 Enviando arquivos para o GitHub..."
echo "ℹ️  Se o Git pedir login, use o seu usuário e Personal Access Token (ou autorize via navegador)."
echo ""

git push -u origin main

echo ""
echo "🎉 SUCESSO ABSOLUTO!"
echo "----------------------------------------------------------------------"
echo "Sua landing page estará ativa em alguns instantes em:"
echo "👉 https://${GITHUB_USER}.github.io"
echo "----------------------------------------------------------------------"
