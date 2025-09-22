# Datenschutz für KI-Meetings

## Einführung

InterMind ist eine Plattform für mehrsprachige Videobesprechungen mit KI-gestützter Live-Dolmetschung. Wir sind für Fachleute entwickelt — wo nicht nur die Nachricht wichtig ist, sondern auch die Privatsphäre dieser Nachricht.

Um eine nahtlose Erfahrung zu bieten, integriert InterMind Drittanbieter-Services für Video, Audio, Cloud-Speicher, Echtzeit-Dolmetschung und Analytik. Diese Drittanbieter helfen uns dabei, Leistung und Skalierbarkeit sicherzustellen — aber sie führen auch eine Ebene ein, die wir nicht direkt kontrollieren können.

Wir glauben an **Transparenz statt Versprechen**. Wir können nur Privatsphäre und Sicherheit für Komponenten garantieren, die unter unserer direkten Kontrolle stehen — unsere Software, Schnittstellenlogik und wie wir Daten weiterleiten. Für alles andere bieten wir Ihnen **die Macht der Wahl**.

Deshalb haben wir InterMind mit **regionsbasierter Vertraulichkeit** entwickelt: Sie wählen, wo Ihre Daten verarbeitet werden, welcher rechtliche Rahmen sie regelt und welche KI-Modelle verwendet werden — basierend auf Ihrer gewählten Privatsphäre-Zone.

> **Was ist eine Privatsphäre-Zone?**  
> _Eine konfigurierbare Region (EU, USA, Asien), die bestimmt, wo Ihre Daten verarbeitet werden und unter welchem rechtlichen Rahmen._

## Grundlegende Datenschutzprinzipien

### 1. **Geteiltes Verantwortungsmodell**

- InterMind **besitzt oder betreibt nicht** die zugrundeliegende Cloud-Infrastruktur oder LLMs (große Sprachmodelle).
- Wir speichern Ihre Mediendateien nicht und verarbeiten Ihre Sprache nicht direkt für das Modelltraining.
- Wir **kontrollieren** die clientseitige Software, Routing-Regeln und Compliance-Logik — einschließlich der Region, durch die Ihre Daten fließen, welches Modell verwendet wird und unter welchen Bedingungen.

### 2. **Architektonische Transparenz**

- Sie können explizit sehen, welche Region für Ihre Sitzung aktiv ist und welche Gesetze gelten (z.B. DSGVO in Europa, CCPA in den USA, PDPL in den VAE).
- Jede Sitzung läuft in einem bestimmten **Compliance-Modus**, und diese Konfiguration ist sichtbar und überprüfbar.

### 3. **Datenschutz standardmäßig**

- InterMind speichert **niemals** Ihre Inhalte oder verwendet sie für Training, Profilerstellung oder kommerzielle Analysen wieder.
- Wir behalten keine Transkripte oder Medien, es sei denn, Sie fordern dies ausdrücklich an.
- Wenn Sie die Interpretation deaktivieren, **verlassen überhaupt keine Benutzerdaten Ihr Gerät**.

## Regionsbasierte Vertraulichkeit: So funktioniert es

Zu Beginn jeder Sitzung oder als Teil der Kontoeinstellungen Ihrer Organisation können Sie eine bevorzugte Datenschutzzone auswählen:

| Region        | Anwendbare Gesetze                                                                               | Infrastruktur                 | LLM-Anbieter              |
| ------------- | --------------------------------------------------------------------------------------------- | ------------------------------ | -------------------------- |
| Europa        | [DSGVO](https://gdpr.eu)                                                                       | Nur EU-Rechenzentren           | EU-gehostet oder EU-konform  |
| Vereinigte Staaten | [CCPA](https://oag.ca.gov/privacy/ccpa)                                                       | AWS / GCP / Azure (US)         | OpenAI US / Anthropic US   |
| VAE / MENA    | [PDPL](https://www.signzy.com/data-privacy-laws-in-the-uae-2025-everything-you-need-to-know/) | VAE oder Bahrain Cloud           | Regionale oder konforme LLMs |
| Asien / China  | Lokale chinesische Datenschutzgesetze                                                                    | Alibaba, Huawei, Tencent Cloud | Nur China-basierte LLMs      |

Diese Auswahl bestimmt, wie Ihre Video-, Audio- und interpretierten Inhalte verarbeitet werden und unter welcher Gerichtsbarkeit.

Sie können:

- **Eine Standardregion** für Ihre Organisation festlegen
- **Die Region pro Sitzung überschreiben**
- **Bestimmte Regionen** vollständig auf die schwarze Liste setzen

## Was InterMind garantiert

Wir implementieren strenge technische und rechtliche Schutzmaßnahmen in unserem Kontrollbereich:

### 1. **Lokale Ausführung zuerst**

Client-seitige Funktionen wie Sprachaufnahme und UI-Rendering werden nach Möglichkeit lokal verarbeitet.

### 2. **Datenminimierung**

Nur die für die aktuelle Aufgabe notwendigen Mindestdaten werden übertragen.

### 3. **Ende-zu-Ende-Verschlüsselung**

Alle Audio-/Videodaten werden über verschlüsselte Kanäle übertragen. Dolmetschanfragen werden über sichere Proxys geleitet und vermeiden so öffentliche Exposition.

### 4. **Keine standardmäßige Speicherung**

Wir speichern Ihre Meetings, Transkripte oder Gespräche nicht, es sei denn, Sie stimmen dem zu. Jede Speicherung ist regionsgebunden.

## Rechtliche und regulatorische Compliance

InterMind unterstützt vollständige Kompatibilität mit:

- **DSGVO** — Recht auf Zugang, Löschung, Export und Einschränkung der Verarbeitung. Kein KI-Profiling.
- **CCPA** — Kein Verkauf personenbezogener Daten, Opt-out-Optionen und transparente Erhebungspraktiken.
- **UAE PDPL** — Lokale Speicherung auf Anfrage, strenge Zugangskontrollen, keine internationalen Übertragungen ohne Zustimmung.
- **China DSL/PIPL** — Nur regionale Verarbeitung, kein ausländisches Routing bei Auswahl von China.

## Was wir garantieren können und was nicht

Wir verpflichten uns zu vollständiger Ehrlichkeit, nicht nur zu Juristensprache.

> InterMind kann nicht garantieren, wie Drittanbieter-LLMs oder Infrastrukturanbieter Daten verarbeiten, sobald sie unsere Kontrolle verlassen.

### Wir garantieren NICHT:

- Dass OpenAI, Anthropic oder andere LLM-Anbieter Eingabedaten nicht protokollieren oder speichern.
- Dass Cloud-Hosts keinen Zugang zu Medien haben, die durch ihre Systeme gestreamt werden (es sei denn, Sie verwenden eine sichere Enklave oder Enterprise-Bereitstellung).
- Dass Inhalte, die an ein Drittanbieter-Modell weitergegeben werden, außerhalb ihres Trainingsbereichs liegen (es sei denn unter privatem Vertrag).

### Wir garantieren:

- Sie wissen immer **wo und wie** Ihre Daten verarbeitet werden.
- Sie haben Werkzeuge zur **Risikokontrolle** durch Auswahl Ihrer Region und Ihres Compliance-Modus.
- InterMind speichert oder nutzt **niemals** Ihre Inhalte aus — auch nicht vorübergehend — ohne Ihre Zustimmung.

## Vertrauensmodi & Datenschutzstufen

Sie können Ihre Sitzung an Ihre Vertraulichkeitsanforderungen anpassen:

| Vertrauensmodus  | Interpretation | Regionsübergreifende Übertragung | Speicherung        | Am besten geeignet für              |
| ---------------- | -------------- | --------------------------------- | ------------------ | ----------------------------------- |
| 🔒 Nur lokal     | ❌             | ❌                                | ❌                 | Recht, Behörden, interne Prüfungen  |
| 🔐 Regionssperre | ✅             | ✅ (nur innerhalb der Zone)       | ❌ oder nur Sitzung| Gesundheitswesen, Finanzen, HR      |
| 🌐 Global flexibel | ✅           | ✅ (mehrere Regionen)             | ✅                 | Support, Vertrieb, multinationale Teams |

## Was Sie sofort erhalten

- Regionsspezifische LLM-Nutzung mit Transparenz in Echtzeit.
- Keine Schulung oder Profilerstellung Ihrer Inhalte — niemals.
- Null Datenübertragung, wenn die Interpretation deaktiviert ist.
- Optionale Datenspeicherung, immer regional gebunden.
- Vollständige Audit- und Export-Tools für Unternehmenskunden.

## Fazit

> Datenschutz ist kein Versprechen — es ist eine Architektur.

InterMind versteckt sich nicht hinter vagen Zusicherungen. Stattdessen geben wir Ihnen **Wahlmöglichkeiten**, **Transparenz** und **Kontrolle**.

- Sie wählen Ihre Region.
- Sie wählen Ihr Interpretationsniveau.
- Sie entscheiden, welches Risiko Sie bereit sind zu akzeptieren — und wir helfen Ihnen, auf jeder Ebene compliant zu bleiben.

**InterMind — entwickelt für Profis, unterstützt durch Compliance, geleitet von Vertrauen.**