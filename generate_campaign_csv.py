import csv
import os

target_files = [
    r"C:\Users\Solano\Desktop\campanha rg vidros\Campanha_BSB_Eletrica_Otimizada.csv",
    r"c:\mycelium\bsbeletrica\Campanha_BSB_Eletrica_Otimizada.csv"
]

campaign_name = "BSB Elétrica - Captação Fundo de Funil"
campaign_budget = "25"
final_url = "https://bsbeletrica.netlify.app/"

headers = [
    "Row Type", "Action", "Campaign status", "Campaign", "Campaign type", "Budget",
    "Ad group status", "Ad group", "Keyword status", "Keyword", "Type",
    "Ad status", "Headline 1", "Headline 2", "Headline 3", "Headline 4", "Headline 5",
    "Description 1", "Description 2", "Final URL"
]

ad_groups = [
    {
        "name": "Eletricista Urgente e 24h",
        "keywords": [
            ("eletricista urgente", "Exata"),
            ("eletricista urgente", "Frase"),
            ("eletricista 24 horas", "Exata"),
            ("eletricista 24 horas", "Frase"),
            ("eletricista de emergência", "Exata"),
            ("eletricista de emergência", "Frase"),
            ("eletricista perto de mim", "Exata"),
            ("eletricista perto de mim", "Frase"),
            ("curto circuito eletricista", "Exata"),
            ("curto circuito eletricista", "Frase"),
            ("disjuntor caindo urgente", "Exata"),
            ("disjuntor caindo urgente", "Frase")
        ],
        "ad": {
            "h1": "Eletricista 24h em Brasília",
            "h2": "Atendimento Rápido e Seguro",
            "h3": "Orçamento Grátis no WhatsApp",
            "h4": "Chegada Rápida no DF",
            "h5": "BSB Elétrica: Padrão NBR",
            "d1": "Emergência elétrica no DF? Disjuntor caindo ou sem luz? Atendimento rápido no WhatsApp!",
            "d2": "Eletricista qualificado em Brasília. Chegada rápida, segurança total e preço justo."
        }
    },
    {
        "name": "Eletricista Residencial e Predial",
        "keywords": [
            ("eletricista em brasília", "Exata"),
            ("eletricista em brasília", "Frase"),
            ("eletricista residencial df", "Exata"),
            ("eletricista residencial df", "Frase"),
            ("eletricista predial brasília", "Exata"),
            ("eletricista predial brasília", "Frase"),
            ("serviço de eletricista df", "Exata"),
            ("serviço de eletricista df", "Frase"),
            ("eletricista lago sul", "Exata"),
            ("eletricista lago sul", "Frase"),
            ("eletricista asa norte", "Exata"),
            ("eletricista asa norte", "Frase"),
            ("eletricista asa sul", "Exata"),
            ("eletricista asa sul", "Frase"),
            ("eletricista águas claras", "Exata"),
            ("eletricista águas claras", "Frase")
        ],
        "ad": {
            "h1": "Eletricista em Brasília DF",
            "h2": "Instalação Elétrica Segura",
            "h3": "Orçamento Rápido no WhatsApp",
            "h4": "Atendimento em Todo o DF",
            "h5": "BSB Soluções Elétricas",
            "d1": "Instalações e reparos elétricos residenciais e prediais no DF com padrão de excelência.",
            "d2": "Fiação, tomadas, disjuntores e iluminação. Atendimento com pontualidade e garantia."
        }
    },
    {
        "name": "Quadro de Luz e Disjuntores",
        "keywords": [
            ("troca de disjuntor", "Exata"),
            ("troca de disjuntor", "Frase"),
            ("montagem de quadro eletrico", "Exata"),
            ("montagem de quadro eletrico", "Frase"),
            ("reforma de quadro de luz", "Exata"),
            ("reforma de quadro de luz", "Frase"),
            ("quadro de distribuicao qdc", "Exata"),
            ("quadro de distribuicao qdc", "Frase"),
            ("instalacao de dr e dps", "Exata"),
            ("instalacao de dr e dps", "Frase"),
            ("disjuntor desarmando", "Exata"),
            ("disjuntor desarmando", "Frase")
        ],
        "ad": {
            "h1": "Troca de Disjuntores no DF",
            "h2": "Quadro de Luz e Distribuição",
            "h3": "Montagem de QDC Residencial",
            "h4": "Instalação de DR e DPS",
            "h5": "Peça Orçamento no WhatsApp",
            "d1": "Seu disjuntor desarma ou esquenta? Montagem e retrofit de quadros no padrão NBR 5410.",
            "d2": "Proteção completa para sua residência ou comércio. Chame a BSB Elétrica no WhatsApp!"
        }
    },
    {
        "name": "Padrão Neoenergia e CEB",
        "keywords": [
            ("instalacao padrao neoenergia", "Exata"),
            ("instalacao padrao neoenergia", "Frase"),
            ("padrao de energia ceb df", "Exata"),
            ("padrao de energia ceb df", "Frase"),
            ("desmembramento de padrao", "Exata"),
            ("desmembramento de padrao", "Frase"),
            ("poste padrao neoenergia", "Exata"),
            ("poste padrao neoenergia", "Frase"),
            ("aumento de carga neoenergia", "Exata"),
            ("aumento de carga neoenergia", "Frase"),
            ("remocao padrao de energia", "Exata"),
            ("remocao padrao de energia", "Frase")
        ],
        "ad": {
            "h1": "Padrão Neoenergia Brasília",
            "h2": "Instalação e Homologação",
            "h3": "Desmembramento de Padrão",
            "h4": "Poste Padrão CEB no DF",
            "h5": "Orçamento Rápido no WhatsApp",
            "d1": "Instalação, aumento de carga e desmembramento de padrão Neoenergia em Brasília e DF.",
            "d2": "Serviço técnico dentro de todas as normas da concessionária. Fale agora no WhatsApp!"
        }
    },
    {
        "name": "Iluminação Cênica e Fita LED",
        "keywords": [
            ("instalacao fita led sanca", "Exata"),
            ("instalacao fita led sanca", "Frase"),
            ("instalacao iluminacao cenica", "Exata"),
            ("instalacao iluminacao cenica", "Frase"),
            ("eletricista para luminarias", "Exata"),
            ("eletricista para luminarias", "Frase"),
            ("instalacao led dimerizavel", "Exata"),
            ("instalacao led dimerizavel", "Frase"),
            ("automacao de iluminacao df", "Exata"),
            ("automacao de iluminacao df", "Frase")
        ],
        "ad": {
            "h1": "Iluminação Cênica e Fita LED",
            "h2": "Instalação em Sancas no DF",
            "h3": "LED Dimerizável sem Flicker",
            "h4": "Acabamento de Alto Padrão",
            "h5": "Chame a BSB no WhatsApp",
            "d1": "Instalação profissional de fitas LED, trilhos e iluminação cênica de altíssimo padrão.",
            "d2": "Elimine ruídos e cintilação. Design luminotécnico com precisão técnica em Brasília."
        }
    }
]

rows = []
# 1. Campaign Row
rows.append([
    "Campaign", "Add", "Paused", campaign_name, "Search", campaign_budget,
    "", "", "", "", "", "", "", "", "", "", "", "", "", ""
])

# 2. Ad Group Rows
for ag in ad_groups:
    rows.append([
        "Ad group", "Add", "", campaign_name, "", "",
        "Enabled", ag["name"], "", "", "", "", "", "", "", "", "", "", "", ""
    ])

# 3. Keyword Rows
for ag in ad_groups:
    for kw, kw_type in ag["keywords"]:
        rows.append([
            "Keyword", "Add", "", campaign_name, "", "",
            "", ag["name"], "Enabled", kw, kw_type, "", "", "", "", "", "", "", "", ""
        ])

# 4. Responsive Search Ad Rows
for ag in ad_groups:
    ad = ag["ad"]
    # Validate character constraints
    for i, h in enumerate([ad["h1"], ad["h2"], ad["h3"], ad["h4"], ad["h5"]], 1):
        assert len(h) <= 30, f"Headline {i} too long: {h} ({len(h)})"
    assert len(ad["d1"]) <= 90, f"Desc 1 too long: {ad['d1']} ({len(ad['d1'])})"
    assert len(ad["d2"]) <= 90, f"Desc 2 too long: {ad['d2']} ({len(ad['d2'])})"

    rows.append([
        "Anúncio responsivo de pesquisa", "Add", "", campaign_name, "", "",
        "", ag["name"], "", "", "", "Paused",
        ad["h1"], ad["h2"], ad["h3"], ad["h4"], ad["h5"],
        ad["d1"], ad["d2"], final_url
    ])

for target in target_files:
    os.makedirs(os.path.dirname(target), exist_ok=True)
    with open(target, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(headers)
        writer.writerows(rows)
    print(f"Successfully wrote {len(rows)} rows to {target}")
