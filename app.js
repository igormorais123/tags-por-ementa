// ==========================================
// TAGS POR EMENTA - INTEIA
// Sistema de classificação automática de projetos legislativos
// ==========================================

// Base de conhecimento: Sinônimos → Tag Oficial
const SINONIMOS = {
    // Códigos
    "código penal": "Código Penal (CP)",
    "codigo penal": "Código Penal (CP)",
    "cp": "Código Penal (CP)",
    "decreto-lei 2.848": "Código Penal (CP)",
    "decreto-lei 2848": "Código Penal (CP)",
    "dl 2848": "Código Penal (CP)",
    "art. 121": "Código Penal (CP)",
    "art. 155": "Código Penal (CP)",
    "art. 157": "Código Penal (CP)",
    
    "código civil": "Código Civil (CC)",
    "codigo civil": "Código Civil (CC)",
    "cc": "Código Civil (CC)",
    "lei 10.406": "Código Civil (CC)",
    "lei 10406": "Código Civil (CC)",
    
    "código de processo civil": "Código de Processo Civil (CPC)",
    "codigo de processo civil": "Código de Processo Civil (CPC)",
    "cpc": "Código de Processo Civil (CPC)",
    "lei 13.105": "Código de Processo Civil (CPC)",
    "lei 13105": "Código de Processo Civil (CPC)",
    
    "código de processo penal": "Código de Processo Penal (CPP)",
    "codigo de processo penal": "Código de Processo Penal (CPP)",
    "cpp": "Código de Processo Penal (CPP)",
    "decreto-lei 3.689": "Código de Processo Penal (CPP)",
    "decreto-lei 3689": "Código de Processo Penal (CPP)",
    
    "código de trânsito": "Código de Trânsito (CTB)",
    "codigo de transito": "Código de Trânsito (CTB)",
    "ctb": "Código de Trânsito (CTB)",
    "lei 9.503": "Código de Trânsito (CTB)",
    
    "código de defesa do consumidor": "Código de Defesa do Consumidor (CDC)",
    "codigo de defesa do consumidor": "Código de Defesa do Consumidor (CDC)",
    "cdc": "Código de Defesa do Consumidor (CDC)",
    "lei 8.078": "Código de Defesa do Consumidor (CDC)",
    
    // Leis Especiais
    "maria da penha": "Lei Maria da Penha",
    "lei maria da penha": "Lei Maria da Penha",
    "lei 11.340": "Lei Maria da Penha",
    "lei 11340": "Lei Maria da Penha",
    "lmp": "Lei Maria da Penha",
    "violência doméstica": "Lei Maria da Penha",
    "violencia domestica": "Lei Maria da Penha",
    
    "eca": "ECA",
    "estatuto da criança": "ECA",
    "estatuto da crianca": "ECA",
    "estatuto da criança e do adolescente": "ECA",
    "lei 8.069": "ECA",
    "lei 8069": "ECA",
    
    "lei de drogas": "Lei de Drogas",
    "lei 11.343": "Lei de Drogas",
    "lei 11343": "Lei de Drogas",
    "tráfico de drogas": "Lei de Drogas",
    "trafico de drogas": "Lei de Drogas",
    "entorpecentes": "Lei de Drogas",
    
    "lei de execução penal": "Lei de Execução Penal (LEP)",
    "lei de execucao penal": "Lei de Execução Penal (LEP)",
    "lep": "Lei de Execução Penal (LEP)",
    "lei 7.210": "Lei de Execução Penal (LEP)",
    "lei 7210": "Lei de Execução Penal (LEP)",
    "execução penal": "Lei de Execução Penal (LEP)",
    "regime prisional": "Lei de Execução Penal (LEP)",
    
    "lei de improbidade": "Lei de Improbidade Administrativa",
    "improbidade administrativa": "Lei de Improbidade Administrativa",
    "lei 8.429": "Lei de Improbidade Administrativa",
    "lei 8429": "Lei de Improbidade Administrativa",
    
    "lei de licitações": "Lei de Licitações",
    "licitações": "Lei de Licitações",
    "licitacoes": "Lei de Licitações",
    "lei 14.133": "Lei de Licitações",
    "lei 14133": "Lei de Licitações",
    "lei 8.666": "Lei de Licitações",
    
    "lei de abuso de autoridade": "Lei de Abuso de Autoridade",
    "abuso de autoridade": "Lei de Abuso de Autoridade",
    "lei 13.869": "Lei de Abuso de Autoridade",
    
    "lei anticorrupção": "Lei Anticorrupção",
    "lei anticorrupcao": "Lei Anticorrupção",
    "lei 12.846": "Lei Anticorrupção",
    
    "lgpd": "LGPD",
    "lei geral de proteção de dados": "LGPD",
    "lei 13.709": "LGPD",
    "proteção de dados": "LGPD",
    
    "marco civil da internet": "Marco Civil da Internet",
    "lei 12.965": "Marco Civil da Internet",
    
    // Temas de Assunto
    "crimes contra a vida": "crimes contra a vida",
    "homicídio": "crimes contra a vida",
    "homicidio": "crimes contra a vida",
    "feminicídio": "crimes contra a vida",
    "feminicidio": "crimes contra a vida",
    "infanticídio": "crimes contra a vida",
    "aborto": "crimes contra a vida",
    
    "crimes contra o patrimônio": "crimes contra o patrimônio",
    "crimes contra o patrimonio": "crimes contra o patrimônio",
    "furto": "crimes contra o patrimônio",
    "roubo": "crimes contra o patrimônio",
    "estelionato": "crimes contra o patrimônio",
    "extorsão": "crimes contra o patrimônio",
    
    "crimes contra a administração": "crimes contra a administração pública",
    "corrupção": "crimes contra a administração pública",
    "corrupcao": "crimes contra a administração pública",
    "peculato": "crimes contra a administração pública",
    "prevaricação": "crimes contra a administração pública",
    "concussão": "crimes contra a administração pública",
    
    "crimes sexuais": "crimes sexuais",
    "estupro": "crimes sexuais",
    "assédio sexual": "crimes sexuais",
    "assedio sexual": "crimes sexuais",
    "importunação sexual": "crimes sexuais",
    
    "crimes cibernéticos": "crimes cibernéticos",
    "crimes ciberneticos": "crimes cibernéticos",
    "crimes virtuais": "crimes cibernéticos",
    "crimes digitais": "crimes cibernéticos",
    "invasão de dispositivo": "crimes cibernéticos",
    
    "garantias da carreira": "garantias da carreira",
    "direitos funcionais": "garantias da carreira",
    "estabilidade": "garantias da carreira",
    "inamovibilidade": "garantias da carreira",
    "vitaliciedade": "garantias da carreira",
    
    "remuneração": "remuneração",
    "remuneracao": "remuneração",
    "vencimentos": "remuneração",
    "subsídio": "remuneração",
    "subsidio": "remuneração",
    "gratificação": "remuneração",
    "gratificacao": "remuneração",
    "auxílio": "remuneração",
    "auxilio": "remuneração",
    
    "aposentadoria": "aposentadoria",
    "previdência": "aposentadoria",
    "previdencia": "aposentadoria",
    "pensão": "aposentadoria",
    "tempo de contribuição": "aposentadoria",
    
    "promoção": "promoção",
    "promocao": "promoção",
    "progressão": "promoção",
    "progressao": "promoção",
    "ascensão funcional": "promoção",
    
    "prazos processuais": "prazos processuais",
    "prazo": "prazos processuais",
    "contagem de prazo": "prazos processuais",
    
    "recursos": "recursos",
    "recurso": "recursos",
    "apelação": "recursos",
    "apelacao": "recursos",
    "agravo": "recursos",
    "embargos": "recursos",
    
    "competência": "competência",
    "competencia": "competência",
    "jurisdição": "competência",
    "jurisdicao": "competência",
    "foro": "competência",
    
    "medidas protetivas": "medidas protetivas",
    "medida protetiva": "medidas protetivas",
    
    "meio ambiente": "meio ambiente",
    "ambiental": "meio ambiente",
    "crimes ambientais": "meio ambiente",
    "desmatamento": "meio ambiente",
    
    "armas de fogo": "armas de fogo",
    "arma de fogo": "armas de fogo",
    "estatuto do desarmamento": "armas de fogo",
    "porte de arma": "armas de fogo",
    
    "servidor público": "servidores públicos",
    "servidores públicos": "servidores públicos",
    "servidor publico": "servidores públicos",
    "servidores publicos": "servidores públicos",
    "funcionalismo": "servidores públicos",
    
    "saúde pública": "saúde",
    "saude publica": "saúde",
    "sus": "saúde",
    "sistema único de saúde": "saúde",
    
    "educação": "educação",
    "educacao": "educação",
    "ensino": "educação",
    "escola": "educação",
    
    "segurança pública": "segurança pública",
    "seguranca publica": "segurança pública",
    "polícia": "segurança pública",
    "policia": "segurança pública",
};

// Padrões de impacto
const PADROES_IMPACTO = [
    { padrao: /\b(amplia|ampliar|ampliação|estende|estender|extensão|expande|expandir|garante|garantir|assegura|assegurar|inclui|incluir|beneficia|beneficiar)\b/gi, tag: "amplia direitos" },
    { padrao: /\b(restringe|restringir|restrição|limita|limitar|limitação|veda|vedar|proíbe|proibir|proibição|impede|impedir)\b/gi, tag: "restringe direitos" },
    { padrao: /\b(aumenta|aumentar|aumento|eleva|elevar|elevação|agrava|agravar|majora|majorar).{0,30}(pena|sanção|sancao|punição|punicao|multa)\b/gi, tag: "aumenta pena" },
    { padrao: /\b(reduz|reduzir|redução|diminui|diminuir|atenua|atenuar|minora|minorar).{0,30}(pena|sanção|sancao|punição|punicao|multa)\b/gi, tag: "reduz pena" },
    { padrao: /\b(altera|alterar|alteração|modifica|modificar|modificação|fixa|fixar|estabelece|estabelecer).{0,30}(prazo|prazos)\b/gi, tag: "altera prazos" },
    { padrao: /\b(cria|criar|criação|institui|instituir|instituição|estabelece|estabelecer).{0,30}(obrigação|obrigacao|dever|exigência|exigencia)\b/gi, tag: "cria obrigação" },
    { padrao: /\b(revoga|revogar|revogação|extingue|extinguir|extinção|suprime|suprimir|supressão)\b/gi, tag: "revoga" },
    { padrao: /\b(regulamenta|regulamentar|regulamentação|disciplina|disciplinar)\b/gi, tag: "regulamenta" },
    { padrao: /\b(cria|criar|institui|instituir).{0,30}(programa|política|politica|fundo|benefício|beneficio)\b/gi, tag: "cria programa" },
    { padrao: /\b(altera|alterar|modifica|modificar|transfere|transferir).{0,30}(competência|competencia|atribuição|atribuicao)\b/gi, tag: "altera competência" },
    { padrao: /\b(tipifica|tipificar|criminaliza|criminalizar|torna crime)\b/gi, tag: "tipifica crime" },
];

// Estado global
let resultadosLote = [];

// ==========================================
// FUNÇÕES PRINCIPAIS
// ==========================================

function analisarEmenta() {
    const ementa = document.getElementById('ementa-input').value.trim();
    if (!ementa) {
        alert('Por favor, cole uma ementa para analisar.');
        return;
    }
    
    const resultado = classificarEmenta(ementa);
    exibirResultado(resultado);
}

function classificarEmenta(ementa) {
    const textoNormalizado = ementa.toLowerCase();
    
    const tagsAssunto = new Set();
    const tagsCodigo = new Set();
    const tagsImpacto = new Set();
    
    // Buscar sinônimos no texto
    for (const [termo, tagOficial] of Object.entries(SINONIMOS)) {
        // Criar regex para o termo (word boundary)
        const regex = new RegExp(`\\b${escapeRegex(termo)}\\b`, 'gi');
        if (regex.test(textoNormalizado)) {
            // Classificar a tag
            if (tagOficial.includes('(C') || tagOficial.includes('Lei ') || tagOficial.includes('ECA') || tagOficial.includes('LGPD') || tagOficial.includes('Marco Civil')) {
                tagsCodigo.add(tagOficial);
            } else {
                tagsAssunto.add(tagOficial);
            }
        }
    }
    
    // Buscar padrões de impacto
    for (const { padrao, tag } of PADROES_IMPACTO) {
        if (padrao.test(ementa)) {
            tagsImpacto.add(tag);
        }
    }
    
    return {
        ementa,
        tagsAssunto: Array.from(tagsAssunto),
        tagsCodigo: Array.from(tagsCodigo),
        tagsImpacto: Array.from(tagsImpacto)
    };
}

function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function exibirResultado(resultado) {
    document.getElementById('results-section').classList.remove('hidden');
    
    // Tags de Assunto
    const containerAssunto = document.getElementById('tags-assunto');
    containerAssunto.innerHTML = resultado.tagsAssunto.length > 0 
        ? resultado.tagsAssunto.map(tag => `<span class="tag bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm cursor-pointer" onclick="copiarTag('${tag}')">${tag}</span>`).join('')
        : '<span class="text-gray-500 text-sm">Nenhuma tag identificada</span>';
    
    // Tags de Código
    const containerCodigo = document.getElementById('tags-codigo');
    containerCodigo.innerHTML = resultado.tagsCodigo.length > 0
        ? resultado.tagsCodigo.map(tag => `<span class="tag bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm cursor-pointer" onclick="copiarTag('${tag}')">${tag}</span>`).join('')
        : '<span class="text-gray-500 text-sm">Nenhuma tag identificada</span>';
    
    // Tags de Impacto
    const containerImpacto = document.getElementById('tags-impacto');
    containerImpacto.innerHTML = resultado.tagsImpacto.length > 0
        ? resultado.tagsImpacto.map(tag => `<span class="tag bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm cursor-pointer" onclick="copiarTag('${tag}')">${tag}</span>`).join('')
        : '<span class="text-gray-500 text-sm">Nenhuma tag identificada</span>';
    
    // Contagem
    const total = resultado.tagsAssunto.length + resultado.tagsCodigo.length + resultado.tagsImpacto.length;
    document.getElementById('tags-count').textContent = `(${total} tags encontradas)`;
    
    // Output para copiar
    document.getElementById('output-assunto').textContent = resultado.tagsAssunto.join('; ') || '-';
    document.getElementById('output-codigo').textContent = resultado.tagsCodigo.join('; ') || '-';
    document.getElementById('output-impacto').textContent = resultado.tagsImpacto.join('; ') || '-';
}

function copiarTag(tag) {
    navigator.clipboard.writeText(tag).then(() => {
        // Feedback visual
        const toast = document.createElement('div');
        toast.className = 'fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50';
        toast.textContent = `Tag copiada: ${tag}`;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2000);
    });
}

function copiarResultado() {
    const assunto = document.getElementById('output-assunto').textContent;
    const codigo = document.getElementById('output-codigo').textContent;
    const impacto = document.getElementById('output-impacto').textContent;
    
    const texto = `Tags Assunto: ${assunto}\nTags Código: ${codigo}\nTags Impacto: ${impacto}`;
    
    navigator.clipboard.writeText(texto).then(() => {
        const toast = document.createElement('div');
        toast.className = 'fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50';
        toast.textContent = 'Resultado copiado!';
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2000);
    });
}

function limparTudo() {
    document.getElementById('ementa-input').value = '';
    document.getElementById('results-section').classList.add('hidden');
}

// ==========================================
// PROCESSAMENTO EM LOTE
// ==========================================

function mostrarLoteTexto() {
    const section = document.getElementById('batch-text-section');
    section.classList.toggle('hidden');
}

function processarLote() {
    const texto = document.getElementById('batch-input').value.trim();
    if (!texto) {
        alert('Cole as ementas (uma por linha) para processar.');
        return;
    }
    
    const ementas = texto.split('\n').filter(e => e.trim());
    processarEmentas(ementas);
}

function processarArquivo(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const content = e.target.result;
        let ementas = [];
        
        if (file.name.endsWith('.csv')) {
            // Tentar parsear CSV
            const linhas = content.split('\n');
            const header = linhas[0].toLowerCase();
            const ementaCol = header.split(/[,;]/).findIndex(col => col.trim().includes('ementa'));
            
            if (ementaCol >= 0) {
                for (let i = 1; i < linhas.length; i++) {
                    const cols = linhas[i].split(/[,;]/);
                    if (cols[ementaCol]) {
                        ementas.push(cols[ementaCol].trim().replace(/^"|"$/g, ''));
                    }
                }
            } else {
                // Se não encontrar coluna ementa, tratar cada linha como ementa
                ementas = linhas.slice(1).filter(l => l.trim());
            }
        } else {
            // TXT: uma ementa por linha
            ementas = content.split('\n').filter(e => e.trim());
        }
        
        if (ementas.length > 0) {
            processarEmentas(ementas);
        } else {
            alert('Nenhuma ementa encontrada no arquivo.');
        }
    };
    reader.readAsText(file);
}

function processarEmentas(ementas) {
    resultadosLote = ementas.map((ementa, index) => ({
        id: index + 1,
        ...classificarEmenta(ementa)
    }));
    
    exibirResultadosLote();
}

function exibirResultadosLote() {
    document.getElementById('batch-results').classList.remove('hidden');
    document.getElementById('batch-count').textContent = `${resultadosLote.length} ementas processadas`;
    
    const tabela = `
        <table class="w-full text-sm">
            <thead>
                <tr class="bg-gray-700">
                    <th class="px-3 py-2 text-left">#</th>
                    <th class="px-3 py-2 text-left">Ementa</th>
                    <th class="px-3 py-2 text-left">Tags Assunto</th>
                    <th class="px-3 py-2 text-left">Tags Código</th>
                    <th class="px-3 py-2 text-left">Tags Impacto</th>
                </tr>
            </thead>
            <tbody>
                ${resultadosLote.map(r => `
                    <tr class="border-b border-gray-700 hover:bg-gray-700/50">
                        <td class="px-3 py-2">${r.id}</td>
                        <td class="px-3 py-2 max-w-xs truncate" title="${escapeHtml(r.ementa)}">${escapeHtml(r.ementa.substring(0, 80))}...</td>
                        <td class="px-3 py-2 text-amber-400">${r.tagsAssunto.join('; ') || '-'}</td>
                        <td class="px-3 py-2 text-green-400">${r.tagsCodigo.join('; ') || '-'}</td>
                        <td class="px-3 py-2 text-blue-400">${r.tagsImpacto.join('; ') || '-'}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
    
    document.getElementById('batch-table').innerHTML = tabela;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function exportarCSV() {
    if (resultadosLote.length === 0) {
        alert('Nenhum resultado para exportar.');
        return;
    }
    
    const headers = ['ID', 'Ementa', 'Tags Assunto', 'Tags Código', 'Tags Impacto'];
    const rows = resultadosLote.map(r => [
        r.id,
        `"${r.ementa.replace(/"/g, '""')}"`,
        `"${r.tagsAssunto.join('; ')}"`,
        `"${r.tagsCodigo.join('; ')}"`,
        `"${r.tagsImpacto.join('; ')}"`
    ]);
    
    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ementas_com_tags_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
}

// ==========================================
// INICIALIZAÇÃO
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Tags por Ementa - INTEIA - Carregado');
});
