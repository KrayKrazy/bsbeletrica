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
            ("eletricista urgente", "Exact"),
            ("eletricista urgente", "Phrase"),
            ("eletricista 24 horas", "Exact"),
            ("eletricista 24 horas", "Phrase"),
            ("eletricista de emergência", "Exact"),
            ("eletricista de emergência", "Phrase"),
            ("eletricista perto de mim", "Exact"),
            ("eletricista perto de mim", "Phrase"),
            ("curto circuito eletricista", "Exact"),
            ("curto circuito eletricista", "Phrase"),
            ("disjuntor caindo urgente", "Exact"),
            ("disjuntor caindo urgente", "Phrase")
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
            ("eletricista em brasília", "Exact"),
            ("eletricista em brasília", "Phrase"),
            ("eletricista residencial df", "Exact"),
            ("eletricista residencial df", "Phrase"),
            ("eletricista predial brasília", "Exact"),
            ("eletricista predial brasília", "Phrase"),
            ("serviço de eletricista df", "Exact"),
            ("serviço de eletricista df", "Phrase"),
            ("eletricista lago sul", "Exact"),
            ("eletricista lago sul", "Phrase"),
            ("eletricista asa norte", "Exact"),
            ("eletricista asa norte", "Phrase"),
            ("eletricista asa sul", "Exact"),
            ("eletricista asa sul", "Phrase"),
            ("eletricista águas claras", "Exact"),
            ("eletricista águas claras", "Phrase")
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
            ("troca de disjuntor", "Exact"),
            ("troca de disjuntor", "Phrase"),
            ("montagem de quadro eletrico", "Exact"),
            ("montagem de quadro eletrico", "Phrase"),
            ("reforma de quadro de luz", "Exact"),
            ("reforma de quadro de luz", "Phrase"),
            ("quadro de distribuicao qdc", "Exact"),
            ("quadro de distribuicao qdc", "Phrase"),
            ("instalacao de dr e dps", "Exact"),
            ("instalacao de dr e dps", "Phrase"),
            ("disjuntor desarmando", "Exact"),
            ("disjuntor desarmando", "Phrase")
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
            ("instalacao padrao neoenergia", "Exact"),
            ("instalacao padrao neoenergia", "Phrase"),
            ("padrao de energia ceb df", "Exact"),
            ("padrao de energia ceb df", "Phrase"),
            ("desmembramento de padrao", "Exact"),
            ("desmembramento de padrao", "Phrase"),
            ("poste padrao neoenergia", "Exact"),
            ("poste padrao neoenergia", "Phrase"),
            ("aumento de carga neoenergia", "Exact"),
            ("aumento de carga neoenergia", "Phrase"),
            ("remocao padrao de energia", "Exact"),
            ("remocao padrao de energia", "Phrase")
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
            ("instalacao fita led sanca", "Exact"),
            ("instalacao fita led sanca", "Phrase"),
            ("instalacao iluminacao cenica", "Exact"),
            ("instalacao iluminacao cenica", "Phrase"),
            ("eletricista para luminarias", "Exact"),
            ("eletricista para luminarias", "Phrase"),
            ("instalacao led dimerizavel", "Exact"),
            ("instalacao led dimerizavel", "Phrase"),
            ("automacao de iluminacao df", "Exact"),
            ("automacao de iluminacao df", "Phrase")
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
