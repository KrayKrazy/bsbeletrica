# -*- coding: utf-8 -*-
import csv
import os

target_files = [
    r"C:\Users\Solano\Desktop\campanha rg vidros\Locais_BSB_Eletrica.csv",
    r"c:\mycelium\bsbeletrica\Locais_BSB_Eletrica.csv"
]

campaign_name = "BSB Elétrica - Captação Fundo de Funil"

locations = [
    ("Sobradinho, Federal District, Brazil", "9199182"),
    ("Recanto das Emas, Federal District, Brazil", "9231123"),
    ("Ceilandia, Federal District, Brazil", "9219142"),
    ("Aguas Claras, Federal District, Brazil", "9198361"),
    ("Guara I, Federal District, Brazil", "9257517"),
    ("Guara II, Federal District, Brazil", "9221878"),
    ("Taguatinga, Federal District, Brazil", "9198672"),
    ("Samambaia, Federal District, Brazil", "9199049")
]

headers = ["Campaign", "Location", "ID"]
rows = [[campaign_name, loc[0], loc[1]] for loc in locations]

for target in target_files:
    os.makedirs(os.path.dirname(target), exist_ok=True)
    with open(target, "w", newline="", encoding="utf-8-sig") as f:
        writer = csv.writer(f)
        writer.writerow(headers)
        writer.writerows(rows)
    print(f"Generated {len(rows)} location rows in {target}")
