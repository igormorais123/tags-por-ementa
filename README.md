# Tags por Ementa

Sistema de classificação automática de projetos legislativos por análise de ementa.

Desenvolvido por [INTEIA - Inteligência Estratégica](https://inteia.com.br)

## 🚀 Funcionalidades

- **Análise individual**: Cole uma ementa e receba tags sugeridas automaticamente
- **Processamento em lote**: Processe múltiplas ementas de uma vez (CSV ou texto)
- **Exportação**: Exporte resultados em CSV para usar no Excel
- **Taxonomia padronizada**: Sistema de sinônimos que normaliza termos automaticamente

## 📋 Tipos de Tags

### Tags de Assunto
Temas identificados na ementa: crimes contra a vida, garantias da carreira, remuneração, etc.

### Tags de Código/Lei
Códigos e leis especiais mencionados: Código Penal (CP), Lei Maria da Penha, ECA, etc.

### Tags de Impacto
Tipo de alteração proposta: amplia direitos, aumenta pena, altera prazos, etc.

## 🔧 Como Usar

### Online
Acesse: https://inteia.com.br/tagsporementa

### Local
1. Clone o repositório
2. Abra `index.html` no navegador
3. Pronto! Não precisa de servidor.

## 📁 Estrutura

```
tags-por-ementa/
├── index.html      # Página principal
├── app.js          # Lógica de classificação
├── README.md       # Documentação
└── vercel.json     # Config para deploy Vercel
```

## 🔄 Adicionando Novos Sinônimos

Edite o objeto `SINONIMOS` em `app.js`:

```javascript
const SINONIMOS = {
    "termo encontrado": "Tag Oficial",
    // ...
};
```

## 🚀 Deploy

### Vercel (recomendado)
```bash
vercel --prod
```

### Netlify
Arraste a pasta para o Netlify Drop.

### GitHub Pages
Ative Pages nas configurações do repositório.

## 📄 Licença

MIT - Use livremente.

---

Desenvolvido com 🧡 por INTEIA
