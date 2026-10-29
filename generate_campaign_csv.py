# -*- coding: utf-8 -*-
"""
Script de geração da campanha Google Ads Otimizada para BSB Elétrica.
Compatível com o Google Ads Editor (Windows, UTF-8 BOM, sem violações de política ou CPC).
"""
import csv
import os

target_files = [
    r"C:\Users\Solano\Desktop\campanha rg vidros\Campanha_BSB_Eletrica_Otimizada.csv",
    r"c:\mycelium\bsbeletrica\Campanha_BSB_Eletrica_Otimizada.csv"
]

campaign_name = "BSB Elétrica - Captação Fundo de Funil"
campaign_budget = "25.00"
default_cpc = "3.50"
final_url = "https://bsbeletrica.netlify.app/"

headers = [
    "Row Type", "Action", "Campaign status", "Campaign", "Campaign type", "Budget", "Bid Strategy Type",
    "Ad group status", "Ad group", "Default max. CPC", "Max CPC",
    "Keyword status", "Keyword", "Type",
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
            "h1": "Eletricista 24 Horas DF",
            "h2": "Atendimento Rápido no DF",
            "h3": "Chegada em até 45 Minutos",
            "h4": "Curto Circuito e Queda",
            "h5": "BSB Elétrica Padrão NBR",
            "d1": "Emergência elétrica no DF? Atendimento imediato para curto e disjuntor.",
            "d2": "Eletricista qualificado em Brasília. Chegada rápida, segurança e preço justo."
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
            "h3": "Orçamento Rápido e Grátis",
            "h4": "Atendimento em Todo o DF",
            "h5": "BSB Soluções Elétricas",
            "d1": "Instalações e reparos elétricos residenciais e prediais com excelência técnica.",
            "d2": "Fiação, tomadas, disjuntores e iluminação. Pontualidade e garantia total no DF."
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
            "h2": "Quadro de Luz e QDC no DF",
            "h3": "Montagem de QDC Residencial",
            "h4": "Instalação de DR e DPS",
            "h5": "Orçamento Grátis e Rápido",
            "d1": "Disjuntor esquenta ou desarma? Montagem e retrofit de quadros na norma NBR 5410.",
            "d2": "Proteção completa para seu imóvel. Fale agora com a equipe da BSB Elétrica!"
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
            "h5": "Orçamento Direto Conosco",
            "d1": "Instalação, aumento de carga e desmembramento de padrão Neoenergia em Brasília.",
            "d2": "Serviço homologado dentro das normas Neoenergia e CEB. Atendimento no DF."
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
            "h1": "Iluminação e Fita LED DF",
            "h2": "Instalação em Sancas no DF",
            "h3": "LED Dimerizável sem Ruído",
            "h4": "Acabamento de Alto Padrão",
            "h5": "Chame a BSB Elétrica",
            "d1": "Instalação técnica de fitas LED, perfis e iluminação cênica de alto padrão.",
            "d2": "Elimine ruídos e cintilação. Design luminotécnico com precisão em Brasília DF."
        }
    }
]

def make_row(data):
    return [data.get(h, "") for h in headers]

rows = []

# 1. Campaign Row
rows.append(make_row({
    "Row Type": "Campaign",
    "Action": "Add",
    "Campaign status": "Paused",
    "Campaign": campaign_name,
    "Campaign type": "Search",
    "Budget": campaign_budget,
    "Bid Strategy Type": "Manual CPC"
}))

# 2. Ad Group Rows
for ag in ad_groups:
    rows.append(make_row({
        "Row Type": "Ad group",
        "Action": "Add",
        "Campaign": campaign_name,
        "Ad group status": "Enabled",
        "Ad group": ag["name"],
        "Default max. CPC": default_cpc,
        "Max CPC": default_cpc
    }))

# 3. Keyword Rows
for ag in ad_groups:
    for kw, kw_type in ag["keywords"]:
        rows.append(make_row({
            "Row Type": "Keyword",
            "Action": "Add",
            "Campaign": campaign_name,
            "Ad group": ag["name"],
            "Keyword status": "Enabled",
            "Keyword": kw,
            "Type": kw_type,
            "Max CPC": default_cpc
        }))

# 4. Responsive Search Ad Rows
for ag in ad_groups:
    ad = ag["ad"]
    # Strict validation of constraints
    for i, h in enumerate([ad["h1"], ad["h2"], ad["h3"], ad["h4"], ad["h5"]], 1):
        assert len(h) <= 30, f"Headline {i} too long: {h} ({len(h)})"
        assert ":" not in h, f"Headline {i} contains colon: {h}"
        assert "whatsapp" not in h.lower(), f"Headline {i} contains trademark: {h}"
    assert len(ad["d1"]) <= 90, f"Desc 1 too long: {ad['d1']} ({len(ad['d1'])})"
    assert len(ad["d2"]) <= 90, f"Desc 2 too long: {ad['d2']} ({len(ad['d2'])})"
    assert "whatsapp" not in ad["d1"].lower(), "Desc 1 contains trademark"
    assert "whatsapp" not in ad["d2"].lower(), "Desc 2 contains trademark"

    rows.append(make_row({
        "Row Type": "Anúncio responsivo de pesquisa",
        "Action": "Add",
        "Campaign": campaign_name,
        "Ad group": ag["name"],
        "Ad status": "Paused",
        "Headline 1": ad["h1"],
        "Headline 2": ad["h2"],
        "Headline 3": ad["h3"],
        "Headline 4": ad["h4"],
        "Headline 5": ad["h5"],
        "Description 1": ad["d1"],
        "Description 2": ad["d2"],
        "Final URL": final_url
    }))

for target in target_files:
    os.makedirs(os.path.dirname(target), exist_ok=True)
    # Write with utf-8-sig (UTF-8 BOM) so Windows and Google Ads Editor read accents accurately
    with open(target, "w", newline="", encoding="utf-8-sig") as f:
        writer = csv.writer(f)
        writer.writerow(headers)
        writer.writerows(rows)
    print(f"Successfully wrote {len(rows)} rows to {target}")
