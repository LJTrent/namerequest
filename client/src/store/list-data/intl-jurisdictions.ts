const jurisdictions = [
  {
    "value": "TM",
    "SHORT_DESC": "TURKMENISTAN",
    "text": "TURKMENISTAN"
  },
  {
    "value": "TC",
    "SHORT_DESC": "TURKS AND CAICO",
    "text": "TURKS AND CAICOS ISLANDS"
  },
  {
    "value": "TV",
    "SHORT_DESC": "TUVALU",
    "text": "TUVALU"
  },
  {
    "value": "UG",
    "SHORT_DESC": "UGANDA",
    "text": "UGANDA"
  },
  {
    "value": "UA",
    "SHORT_DESC": "UKRAINE",
    "text": "UKRAINE"
  },
  {
    "value": "AE",
    "SHORT_DESC": "UNITED ARAB EMI",
    "text": "UNITED ARAB EMIRATES"
  },
  {
    "value": "GB",
    "SHORT_DESC": "UNITED KINGDOM",
    "text": "UNITED KINGDOM"
  },
  {
    "value": "UM",
    "SHORT_DESC": "UNITED STATES M",
    "text": "UNITED STATES MINOR OUTLYING ISLANDS"
  },
  {
    "value": "UY",
    "SHORT_DESC": "URUGUAY",
    "text": "URUGUAY"
  },
  {
    "value": "ME",
    "SHORT_DESC": "MONTENEGRO",
    "text": "MONTENEGRO"
  },
  {
    "value": "RS",
    "SHORT_DESC": "SERBIA",
    "text": "SERBIA"
  },
  {
    "value": "IM",
    "SHORT_DESC": "ISLE OF MAN",
    "text": "ISLE OF MAN"
  },
  {
    "value": "GG",
    "SHORT_DESC": "GUERNSEY",
    "text": "GUERNSEY"
  },
  {
    "value": "JE",
    "SHORT_DESC": "JERSEY",
    "text": "JERSEY"
  },
  {
    "value": "BQ",
    "SHORT_DESC": "BONAIRE",
    "text": "BONAIRE"
  },
  {
    "value": "CW",
    "SHORT_DESC": "CURACAO",
    "text": "CURACAO"
  },
  {
    "value": "SX",
    "SHORT_DESC": "ST MAAR DP",
    "text": "SINT MAARTEN(DUTCH PART)"
  },
  {
    "value": "SS",
    "SHORT_DESC": "STH SUDAN",
    "text": "SOUTH SUDAN"
  },
  {
    "value": "MF",
    "SHORT_DESC": "ST MART FP",
    "text": "SAINT MARTIN(FRENCH PART)"
  },
  {
    "value": "AX",
    "SHORT_DESC": "ALAND ISLANDS",
    "text": "ALAND ISLANDS"
  },
  {
    "value": "BL",
    "SHORT_DESC": "SAINT BARTHELEM",
    "text": "SAINT BARTHELEMY"
  },
  {
    "value": "TA",
    "SHORT_DESC": "TRISTAN DA CUNH",
    "text": "TRISTAN DA CUNHA"
  },
  {
    "value": "XZ",
    "SHORT_DESC": "KOSOVO",
    "text": "KOSOVO"
  },
  {
    "value": "UZ",
    "SHORT_DESC": "UZBEKISTAN",
    "text": "UZBEKISTAN"
  },
  {
    "value": "VU",
    "SHORT_DESC": "VANUATU",
    "text": "VANUATU"
  },
  {
    "value": "VE",
    "SHORT_DESC": "VENEZUELA",
    "text": "VENEZUELA"
  },
  {
    "value": "VN",
    "SHORT_DESC": "VIET NAM",
    "text": "VIET NAM"
  },
  {
    "value": "VG",
    "text": "VIRGIN ISLANDS",
    "SHORT_DESC": "VIRGIN ISLANDS"
  },
  {
    "value": "WF",
    "SHORT_DESC": "WALLIS AND FUTU",
    "text": "WALLIS AND FUTUNA"
  },
  {
    "value": "EH",
    "SHORT_DESC": "WESTERN SAHARA",
    "text": "WESTERN SAHARA"
  },
  {
    "value": "YE",
    "SHORT_DESC": "YEMEN",
    "text": "YEMEN"
  },
  {
    "value": "YU",
    "SHORT_DESC": "YUGOSLAVIA",
    "text": "YUGOSLAVIA"
  },
  {
    "value": "ZM",
    "SHORT_DESC": "ZAMBIA",
    "text": "ZAMBIA"
  },
  {
    "value": "ZW",
    "SHORT_DESC": "ZIMBABWE",
    "text": "ZIMBABWE"
  },
  {
    "value": "AF",
    "SHORT_DESC": "AFGHANISTAN",
    "text": "AFGHANISTAN"
  },
  {
    "value": "AL",
    "SHORT_DESC": "ALBANIA",
    "text": "ALBANIA"
  },
  {
    "value": "DZ",
    "SHORT_DESC": "ALGERIA",
    "text": "ALGERIA"
  },
  {
    "value": "AS",
    "SHORT_DESC": "AMERICAN SAMOA",
    "text": "AMERICAN SAMOA"
  },
  {
    "value": "AD",
    "SHORT_DESC": "ANDORRA",
    "text": "ANDORRA"
  },
  {
    "value": "AO",
    "SHORT_DESC": "ANGOLA",
    "text": "ANGOLA"
  },
  {
    "value": "AI",
    "SHORT_DESC": "ANGUILLA",
    "text": "ANGUILLA"
  },
  {
    "value": "AQ",
    "SHORT_DESC": "ANTARCTICA",
    "text": "ANTARCTICA"
  },
  {
    "value": "AG",
    "SHORT_DESC": "ANTIGUA AND BAR",
    "text": "ANTIGUA AND BARBUDA"
  },
  {
    "value": "AR",
    "SHORT_DESC": "ARGENTINA",
    "text": "ARGENTINA"
  },
  {
    "value": "AM",
    "SHORT_DESC": "ARMENIA",
    "text": "ARMENIA"
  },
  {
    "value": "AW",
    "SHORT_DESC": "ARUBA",
    "text": "ARUBA"
  },
  {
    "value": "AU",
    "SHORT_DESC": "AUSTRALIA",
    "text": "AUSTRALIA"
  },
  {
    "value": "AT",
    "SHORT_DESC": "AUSTRIA",
    "text": "AUSTRIA"
  },
  {
    "value": "AZ",
    "SHORT_DESC": "AZERBAIJAN",
    "text": "AZERBAIJAN"
  },
  {
    "value": "BS",
    "SHORT_DESC": "BAHAMAS",
    "text": "BAHAMAS"
  },
  {
    "value": "BH",
    "SHORT_DESC": "BAHRAIN",
    "text": "BAHRAIN"
  },
  {
    "value": "BD",
    "SHORT_DESC": "BANGLADESH",
    "text": "BANGLADESH"
  },
  {
    "value": "BB",
    "SHORT_DESC": "BARBADOS",
    "text": "BARBADOS"
  },
  {
    "value": "BY",
    "SHORT_DESC": "BELARUS",
    "text": "BELARUS"
  },
  {
    "value": "BE",
    "SHORT_DESC": "BELGIUM",
    "text": "BELGIUM"
  },
  {
    "value": "BZ",
    "SHORT_DESC": "BELIZE",
    "text": "BELIZE"
  },
  {
    "value": "BJ",
    "SHORT_DESC": "BENIN",
    "text": "BENIN"
  },
  {
    "value": "BM",
    "SHORT_DESC": "BERMUDA",
    "text": "BERMUDA"
  },
  {
    "value": "BT",
    "SHORT_DESC": "BHUTAN",
    "text": "BHUTAN"
  },
  {
    "value": "BO",
    "SHORT_DESC": "BOLIVIA",
    "text": "BOLIVIA"
  },
  {
    "value": "BA",
    "SHORT_DESC": "BOSNIA AND HERZ",
    "text": "BOSNIA AND HERZEGOVINA"
  },
  {
    "value": "BW",
    "SHORT_DESC": "BOTSWANA",
    "text": "BOTSWANA"
  },
  {
    "value": "BV",
    "SHORT_DESC": "BOUVET ISLAND",
    "text": "BOUVET ISLAND"
  },
  {
    "value": "BR",
    "SHORT_DESC": "BRAZIL",
    "text": "BRAZIL"
  },
  {
    "value": "IO",
    "SHORT_DESC": "BRITISH INDIAN ",
    "text": "BRITISH INDIAN OCEAN TERRITORY"
  },
  {
    "value": "BN",
    "SHORT_DESC": "BRUNEI DARUSSAL",
    "text": "BRUNEI DARUSSALAM"
  },
  {
    "value": "BG",
    "SHORT_DESC": "BULGARIA",
    "text": "BULGARIA"
  },
  {
    "value": "BF",
    "SHORT_DESC": "BURKINA FASO",
    "text": "BURKINA FASO"
  },
  {
    "value": "BI",
    "SHORT_DESC": "BURUNDI",
    "text": "BURUNDI"
  },
  {
    "value": "KH",
    "SHORT_DESC": "CAMBODIA",
    "text": "CAMBODIA"
  },
  {
    "value": "CM",
    "SHORT_DESC": "CAMEROON",
    "text": "CAMEROON"
  },
  {
    "value": "CV",
    "SHORT_DESC": "CAPE VERDE",
    "text": "CAPE VERDE"
  },
  {
    "value": "KY",
    "SHORT_DESC": "CAYMAN ISLANDS",
    "text": "CAYMAN ISLANDS"
  },
  {
    "value": "CF",
    "SHORT_DESC": "CENTRAL AFRICAN",
    "text": "CENTRAL AFRICAN REPUBLIC"
  },
  {
    "value": "TD",
    "SHORT_DESC": "CHAD",
    "text": "CHAD"
  },
  {
    "value": "CL",
    "SHORT_DESC": "CHILE",
    "text": "CHILE"
  },
  {
    "value": "CN",
    "SHORT_DESC": "CHINA",
    "text": "CHINA"
  },
  {
    "value": "CX",
    "SHORT_DESC": "CHRISTMAS ISLAN",
    "text": "CHRISTMAS ISLAND"
  },
  {
    "value": "CC",
    "SHORT_DESC": "COCOS (KEELING)",
    "text": "COCOS (KEELING) ISLANDS"
  },
  {
    "value": "CO",
    "SHORT_DESC": "COLOMBIA",
    "text": "COLOMBIA"
  },
  {
    "value": "KM",
    "SHORT_DESC": "COMOROS",
    "text": "COMOROS"
  },
  {
    "value": "CG",
    "SHORT_DESC": "CONGO",
    "text": "CONGO"
  },
  {
    "value": "CK",
    "SHORT_DESC": "COOK ISLANDS",
    "text": "COOK ISLANDS"
  },
  {
    "value": "CR",
    "SHORT_DESC": "COSTA RICA",
    "text": "COSTA RICA"
  },
  {
    "value": "CI",
    "SHORT_DESC": "COTE D''IVOIRE",
    "text": "COTE D''IVOIRE"
  },
  {
    "value": "HR",
    "SHORT_DESC": "CROATIA",
    "text": "CROATIA"
  },
  {
    "value": "CU",
    "SHORT_DESC": "CUBA",
    "text": "CUBA"
  },
  {
    "value": "CY",
    "SHORT_DESC": "CYPRUS",
    "text": "CYPRUS"
  },
  {
    "value": "CZ",
    "SHORT_DESC": "CZECH REPUBLIC",
    "text": "CZECH REPUBLIC"
  },
  {
    "value": "DK",
    "SHORT_DESC": "DENMARK",
    "text": "DENMARK"
  },
  {
    "value": "DJ",
    "SHORT_DESC": "DJIBOUTI",
    "text": "DJIBOUTI"
  },
  {
    "value": "DM",
    "SHORT_DESC": "DOMINICA",
    "text": "DOMINICA"
  },
  {
    "value": "DO",
    "SHORT_DESC": "DOMINICAN REPUB",
    "text": "DOMINICAN REPUBLIC"
  },
  {
    "value": "EC",
    "SHORT_DESC": "ECUADOR",
    "text": "ECUADOR"
  },
  {
    "value": "EG",
    "SHORT_DESC": "EGYPT",
    "text": "EGYPT"
  },
  {
    "value": "SV",
    "SHORT_DESC": "EL SALVADOR",
    "text": "EL SALVADOR"
  },
  {
    "value": "GQ",
    "SHORT_DESC": "EQUATORIAL GUIN",
    "text": "EQUATORIAL GUINEA"
  },
  {
    "value": "ER",
    "SHORT_DESC": "ERITREA",
    "text": "ERITREA"
  },
  {
    "value": "EE",
    "SHORT_DESC": "ESTONIA",
    "text": "ESTONIA"
  },
  {
    "value": "ET",
    "SHORT_DESC": "ETHIOPIA",
    "text": "ETHIOPIA"
  },
  {
    "value": "FK",
    "SHORT_DESC": "FALKLAND ISLAND",
    "text": "FALKLAND ISLANDS (MALVINAS)"
  },
  {
    "value": "FO",
    "SHORT_DESC": "FAROE ISLANDS",
    "text": "FAROE ISLANDS"
  },
  {
    "value": "FJ",
    "SHORT_DESC": "FIJI",
    "text": "FIJI"
  },
  {
    "value": "FI",
    "SHORT_DESC": "FINLAND",
    "text": "FINLAND"
  },
  {
    "value": "FR",
    "SHORT_DESC": "FRANCE",
    "text": "FRANCE"
  },
  {
    "value": "GF",
    "SHORT_DESC": "FRENCH GUIANA",
    "text": "FRENCH GUIANA"
  },
  {
    "value": "PF",
    "SHORT_DESC": "FRENCH POLYNESI",
    "text": "FRENCH POLYNESIA"
  },
  {
    "value": "TF",
    "SHORT_DESC": "FRENCH SOUTHERN",
    "text": "FRENCH SOUTHERN TERRITORIES"
  },
  {
    "value": "GA",
    "SHORT_DESC": "GABON",
    "text": "GABON"
  },
  {
    "value": "GM",
    "SHORT_DESC": "GAMBIA",
    "text": "GAMBIA"
  },
  {
    "value": "GE",
    "SHORT_DESC": "GEORGIA",
    "text": "GEORGIA"
  },
  {
    "value": "DE",
    "SHORT_DESC": "GERMANY",
    "text": "GERMANY"
  },
  {
    "value": "GH",
    "SHORT_DESC": "GHANA",
    "text": "GHANA"
  },
  {
    "value": "GI",
    "SHORT_DESC": "GIBRALTAR",
    "text": "GIBRALTAR"
  },
  {
    "value": "GR",
    "SHORT_DESC": "GREECE",
    "text": "GREECE"
  },
  {
    "value": "GL",
    "SHORT_DESC": "GREENLAND",
    "text": "GREENLAND"
  },
  {
    "value": "GD",
    "SHORT_DESC": "GRENADA",
    "text": "GRENADA"
  },
  {
    "value": "GP",
    "SHORT_DESC": "GUADELOUPE",
    "text": "GUADELOUPE"
  },
  {
    "value": "GU",
    "SHORT_DESC": "GUAM",
    "text": "GUAM"
  },
  {
    "value": "GT",
    "SHORT_DESC": "GUATEMALA",
    "text": "GUATEMALA"
  },
  {
    "value": "GN",
    "SHORT_DESC": "GUINEA",
    "text": "GUINEA"
  },
  {
    "value": "GW",
    "SHORT_DESC": "GUINEA-BISSAU",
    "text": "GUINEA-BISSAU"
  },
  {
    "value": "GY",
    "SHORT_DESC": "GUYANA",
    "text": "GUYANA"
  },
  {
    "value": "HT",
    "SHORT_DESC": "HAITI",
    "text": "HAITI"
  },
  {
    "value": "HM",
    "SHORT_DESC": "HEARD ISLAND AN",
    "text": "HEARD ISLAND AND MCDONALD ISLANDS"
  },
  {
    "value": "VA",
    "SHORT_DESC": "HOLY SEE (VATIC",
    "text": "HOLY SEE (VATICAN CITY STATE)"
  },
  {
    "value": "HN",
    "SHORT_DESC": "HONDURAS",
    "text": "HONDURAS"
  },
  {
    "value": "HK",
    "SHORT_DESC": "HONG KONG",
    "text": "HONG KONG"
  },
  {
    "value": "HU",
    "SHORT_DESC": "HUNGARY",
    "text": "HUNGARY"
  },
  {
    "value": "IS",
    "SHORT_DESC": "ICELAND",
    "text": "ICELAND"
  },
  {
    "value": "IN",
    "SHORT_DESC": "INDIA",
    "text": "INDIA"
  },
  {
    "value": "ID",
    "SHORT_DESC": "INDONESIA",
    "text": "INDONESIA"
  },
  {
    "value": "IR",
    "SHORT_DESC": "IRAN",
    "text": "IRAN"
  },
  {
    "value": "IQ",
    "SHORT_DESC": "IRAQ",
    "text": "IRAQ"
  },
  {
    "value": "IE",
    "SHORT_DESC": "IRELAND",
    "text": "IRELAND"
  },
  {
    "value": "IL",
    "SHORT_DESC": "ISRAEL",
    "text": "ISRAEL"
  },
  {
    "value": "IT",
    "SHORT_DESC": "ITALY",
    "text": "ITALY"
  },
  {
    "value": "JM",
    "SHORT_DESC": "JAMAICA",
    "text": "JAMAICA"
  },
  {
    "value": "JP",
    "SHORT_DESC": "JAPAN",
    "text": "JAPAN"
  },
  {
    "value": "JO",
    "SHORT_DESC": "JORDAN",
    "text": "JORDAN"
  },
  {
    "value": "KZ",
    "SHORT_DESC": "KAZAKHSTAN",
    "text": "KAZAKHSTAN"
  },
  {
    "value": "KE",
    "SHORT_DESC": "KENYA",
    "text": "KENYA"
  },
  {
    "value": "KI",
    "SHORT_DESC": "KIRIBATI",
    "text": "KIRIBATI"
  },
  {
    "value": "KP",
    "SHORT_DESC": "KOREA",
    "text": "DEMOCRATIC PEOPLE'S REPUBLIC OF KOREA"
  },
  {
    "value": "KR",
    "SHORT_DESC": "KOREA",
    "text": "SOUTH KOREA"
  },
  {
    "value": "KW",
    "SHORT_DESC": "KUWAIT",
    "text": "KUWAIT"
  },
  {
    "value": "KG",
    "SHORT_DESC": "KYRGYZSTAN",
    "text": "KYRGYZSTAN"
  },
  {
    "value": "LA",
    "SHORT_DESC": "LAOS",
    "text": "LAO PEOPLE''S DEMOCRATIC REPUBLIC"
  },
  {
    "value": "LV",
    "SHORT_DESC": "LATVIA",
    "text": "LATVIA"
  },
  {
    "value": "LB",
    "SHORT_DESC": "LEBANON",
    "text": "LEBANON"
  },
  {
    "value": "LS",
    "SHORT_DESC": "LESOTHO",
    "text": "LESOTHO"
  },
  {
    "value": "LR",
    "SHORT_DESC": "LIBERIA",
    "text": "LIBERIA"
  },
  {
    "value": "LY",
    "SHORT_DESC": "LIBYA",
    "text": "LIBYA"
  },
  {
    "value": "LI",
    "SHORT_DESC": "LIECHTENSTEIN",
    "text": "LIECHTENSTEIN"
  },
  {
    "value": "LT",
    "SHORT_DESC": "LITHUANIA",
    "text": "LITHUANIA"
  },
  {
    "value": "LU",
    "SHORT_DESC": "LUXEMBOURG",
    "text": "LUXEMBOURG"
  },
  {
    "value": "MO",
    "SHORT_DESC": "MACAO",
    "text": "MACAO"
  },
  {
    "value": "MK",
    "SHORT_DESC": "MACEDONIA",
    "text": "MACEDONIA"
  },
  {
    "value": "MG",
    "SHORT_DESC": "MADAGASCAR",
    "text": "MADAGASCAR"
  },
  {
    "value": "MW",
    "SHORT_DESC": "MALAWI",
    "text": "MALAWI"
  },
  {
    "value": "MY",
    "SHORT_DESC": "MALAYSIA",
    "text": "MALAYSIA"
  },
  {
    "value": "MV",
    "SHORT_DESC": "MALDIVES",
    "text": "MALDIVES"
  },
  {
    "value": "ML",
    "SHORT_DESC": "MALI",
    "text": "MALI"
  },
  {
    "value": "MT",
    "SHORT_DESC": "MALTA",
    "text": "MALTA"
  },
  {
    "value": "MH",
    "SHORT_DESC": "MARSHALL ISLAND",
    "text": "MARSHALL ISLANDS"
  },
  {
    "value": "MQ",
    "SHORT_DESC": "MARTINIQUE",
    "text": "MARTINIQUE"
  },
  {
    "value": "MR",
    "SHORT_DESC": "MAURITANIA",
    "text": "MAURITANIA"
  },
  {
    "value": "MU",
    "SHORT_DESC": "MAURITIUS",
    "text": "MAURITIUS"
  },
  {
    "value": "YT",
    "SHORT_DESC": "MAYOTTE",
    "text": "MAYOTTE"
  },
  {
    "value": "MX",
    "SHORT_DESC": "MEXICO",
    "text": "MEXICO"
  },
  {
    "value": "FM",
    "SHORT_DESC": "MICRONESIA",
    "text": "MICRONESIA"
  },
  {
    "value": "MD",
    "SHORT_DESC": "MOLDOVA",
    "text": "MOLDOVA"
  },
  {
    "value": "MC",
    "SHORT_DESC": "MONACO",
    "text": "MONACO"
  },
  {
    "value": "MN",
    "SHORT_DESC": "MONGOLIA",
    "text": "MONGOLIA"
  },
  {
    "value": "MS",
    "SHORT_DESC": "MONTSERRAT",
    "text": "MONTSERRAT"
  },
  {
    "value": "MA",
    "SHORT_DESC": "MOROCCO",
    "text": "MOROCCO"
  },
  {
    "value": "MZ",
    "SHORT_DESC": "MOZAMBIQUE",
    "text": "MOZAMBIQUE"
  },
  {
    "value": "MM",
    "SHORT_DESC": "MYANMAR",
    "text": "MYANMAR"
  },
  {
    "value": "NA",
    "SHORT_DESC": "NAMIBIA",
    "text": "NAMIBIA"
  },
  {
    "value": "NR",
    "SHORT_DESC": "NAURU",
    "text": "NAURU"
  },
  {
    "value": "NP",
    "SHORT_DESC": "NEPAL",
    "text": "NEPAL"
  },
  {
    "value": "AN",
    "SHORT_DESC": "NETHERLANDS ANT",
    "text": "NETHERLANDS ANTILLES"
  },
  {
    "value": "NL",
    "SHORT_DESC": "NETHERLANDS",
    "text": "NETHERLANDS"
  },
  {
    "value": "NC",
    "SHORT_DESC": "NEW CALEDONIA",
    "text": "NEW CALEDONIA"
  },
  {
    "value": "NZ",
    "SHORT_DESC": "NEW ZEALAND",
    "text": "NEW ZEALAND"
  },
  {
    "value": "NI",
    "SHORT_DESC": "NICARAGUA",
    "text": "NICARAGUA"
  },
  {
    "value": "NE",
    "SHORT_DESC": "NIGER",
    "text": "NIGER"
  },
  {
    "value": "NG",
    "SHORT_DESC": "NIGERIA",
    "text": "NIGERIA"
  },
  {
    "value": "NU",
    "SHORT_DESC": "NIUE",
    "text": "NIUE"
  },
  {
    "value": "NF",
    "SHORT_DESC": "NORFOLK ISLAND",
    "text": "NORFOLK ISLAND"
  },
  {
    "value": "MP",
    "SHORT_DESC": "NORTHERN MARIAN",
    "text": "NORTHERN MARIANA ISLANDS"
  },
  {
    "value": "NO",
    "SHORT_DESC": "NORWAY",
    "text": "NORWAY"
  },
  {
    "value": "OM",
    "SHORT_DESC": "OMAN",
    "text": "OMAN"
  },
  {
    "value": "PK",
    "SHORT_DESC": "PAKISTAN",
    "text": "PAKISTAN"
  },
  {
    "value": "PW",
    "SHORT_DESC": "PALAU",
    "text": "PALAU"
  },
  {
    "value": "PS",
    "SHORT_DESC": "PALESTINIAN TER",
    "text": "PALESTINIAN TERRITORY"
  },
  {
    "value": "PA",
    "SHORT_DESC": "PANAMA",
    "text": "PANAMA"
  },
  {
    "value": "PG",
    "SHORT_DESC": "PAPUA NEW GUINE",
    "text": "PAPUA NEW GUINEA"
  },
  {
    "value": "PY",
    "SHORT_DESC": "PARAGUAY",
    "text": "PARAGUAY"
  },
  {
    "value": "PE",
    "SHORT_DESC": "PERU",
    "text": "PERU"
  },
  {
    "value": "PH",
    "SHORT_DESC": "PHILIPPINES",
    "text": "PHILIPPINES"
  },
  {
    "value": "PN",
    "SHORT_DESC": "PITCAIRN",
    "text": "PITCAIRN"
  },
  {
    "value": "PL",
    "SHORT_DESC": "POLAND",
    "text": "POLAND"
  },
  {
    "value": "PT",
    "SHORT_DESC": "PORTUGAL",
    "text": "PORTUGAL"
  },
  {
    "value": "PR",
    "SHORT_DESC": "PUERTO RICO",
    "text": "PUERTO RICO"
  },
  {
    "value": "QA",
    "SHORT_DESC": "QATAR",
    "text": "QATAR"
  },
  {
    "value": "RE",
    "SHORT_DESC": "REUNION",
    "text": "REUNION"
  },
  {
    "value": "RO",
    "SHORT_DESC": "ROMANIA",
    "text": "ROMANIA"
  },
  {
    "value": "RU",
    "SHORT_DESC": "RUSSIAN FEDERAT",
    "text": "RUSSIAN FEDERATION"
  },
  {
    "value": "RW",
    "SHORT_DESC": "RWANDA",
    "text": "RWANDA"
  },
  {
    "value": "SH",
    "SHORT_DESC": "SAINT HELENA",
    "text": "SAINT HELENA"
  },
  {
    "value": "KN",
    "SHORT_DESC": "SAINT KITTS AND",
    "text": "SAINT KITTS AND NEVIS"
  },
  {
    "value": "LC",
    "SHORT_DESC": "SAINT LUCIA",
    "text": "SAINT LUCIA"
  },
  {
    "value": "PM",
    "SHORT_DESC": "SAINT PIERRE AN",
    "text": "SAINT PIERRE AND MIQUELON"
  },
  {
    "value": "VC",
    "SHORT_DESC": "SAINT VINCENT A",
    "text": "SAINT VINCENT AND THE GRENADINES"
  },
  {
    "value": "WS",
    "SHORT_DESC": "SAMOA",
    "text": "SAMOA"
  },
  {
    "value": "SM",
    "SHORT_DESC": "SAN MARINO",
    "text": "SAN MARINO"
  },
  {
    "value": "ST",
    "SHORT_DESC": "SAO TOME AND PR",
    "text": "SAO TOME AND PRINCIPE"
  },
  {
    "value": "SA",
    "SHORT_DESC": "SAUDI ARABIA",
    "text": "SAUDI ARABIA"
  },
  {
    "value": "SN",
    "SHORT_DESC": "SENEGAL",
    "text": "SENEGAL"
  },
  {
    "value": "SC",
    "SHORT_DESC": "SEYCHELLES",
    "text": "SEYCHELLES"
  },
  {
    "value": "SL",
    "SHORT_DESC": "SIERRA LEONE",
    "text": "SIERRA LEONE"
  },
  {
    "value": "SG",
    "SHORT_DESC": "SINGAPORE",
    "text": "SINGAPORE"
  },
  {
    "value": "SK",
    "SHORT_DESC": "SLOVAKIA",
    "text": "SLOVAKIA"
  },
  {
    "value": "SI",
    "SHORT_DESC": "SLOVENIA",
    "text": "SLOVENIA"
  },
  {
    "value": "SB",
    "SHORT_DESC": "SOLOMON ISLANDS",
    "text": "SOLOMON ISLANDS"
  },
  {
    "value": "SO",
    "SHORT_DESC": "SOMALIA",
    "text": "SOMALIA"
  },
  {
    "value": "ZA",
    "SHORT_DESC": "SOUTH AFRICA",
    "text": "SOUTH AFRICA"
  },
  {
    "value": "GS",
    "SHORT_DESC": "SOUTH GEORGIA A",
    "text": "SOUTH GEORGIA AND THE SOUTH SANDWICH ISL"
  },
  {
    "value": "ES",
    "SHORT_DESC": "SPAIN",
    "text": "SPAIN"
  },
  {
    "value": "LK",
    "SHORT_DESC": "SRI LANKA",
    "text": "SRI LANKA"
  },
  {
    "value": "SD",
    "SHORT_DESC": "SUDAN",
    "text": "SUDAN"
  },
  {
    "value": "SR",
    "SHORT_DESC": "SURINAME",
    "text": "SURINAME"
  },
  {
    "value": "SJ",
    "SHORT_DESC": "SVALBARD AND JA",
    "text": "SVALBARD AND JAN MAYEN"
  },
  {
    "value": "SZ",
    "SHORT_DESC": "SWAZILAND",
    "text": "SWAZILAND"
  },
  {
    "value": "SE",
    "SHORT_DESC": "SWEDEN",
    "text": "SWEDEN"
  },
  {
    "value": "CH",
    "SHORT_DESC": "SWITZERLAND",
    "text": "SWITZERLAND"
  },
  {
    "value": "SY",
    "SHORT_DESC": "SYRIAN ARAB REP",
    "text": "SYRIAN ARAB REPUBLIC"
  },
  {
    "value": "TW",
    "SHORT_DESC": "TAIWAN",
    "text": "TAIWAN"
  },
  {
    "value": "TJ",
    "SHORT_DESC": "TAJIKISTAN",
    "text": "TAJIKISTAN"
  },
  {
    "value": "TZ",
    "SHORT_DESC": "TANZANIA",
    "text": "TANZANIA"
  },
  {
    "value": "TH",
    "SHORT_DESC": "THAILAND",
    "text": "THAILAND"
  },
  {
    "value": "TL",
    "SHORT_DESC": "TIMOR-LESTE",
    "text": "TIMOR-LESTE"
  },
  {
    "value": "TG",
    "SHORT_DESC": "TOGO",
    "text": "TOGO"
  },
  {
    "value": "TK",
    "SHORT_DESC": "TOKELAU",
    "text": "TOKELAU"
  },
  {
    "value": "TO",
    "SHORT_DESC": "TONGA",
    "text": "TONGA"
  },
  {
    "value": "TT",
    "SHORT_DESC": "TRINIDAD AND TO",
    "text": "TRINIDAD AND TOBAGO"
  },
  {
    "value": "TN",
    "SHORT_DESC": "TUNISIA",
    "text": "TUNISIA"
  },
  {
    "value": "TR",
    "SHORT_DESC": "TURKEY",
    "text": "TURKEY"
  }
]

let jurisdictionsSorted = jurisdictions.sort((a, b) => {
  if (a.text >= b.text) {
    return 1
  }
  if (a.text <= b.text) {
    return -1
  }
  if (a.text === b.text) {
    return 0
  }
})

let usa = [
  {
    "value": "US",
    "SHORT_DESC": "UNITED STATES",
    "text": "UNITED STATES"
  }
]

jurisdictionsSorted = usa.concat(jurisdictionsSorted)

export default jurisdictionsSorted
