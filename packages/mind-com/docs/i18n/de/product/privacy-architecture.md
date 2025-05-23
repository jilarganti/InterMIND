# Regionale Datenschutzbestimmungen für KI-Meetings

## Einführung

InterMind ist eine Plattform für mehrsprachige Videomeetings mit KI-gestützter Echtzeitdolmetschung. Wir sind für Profis entwickelt — bei denen nicht nur die Botschaft zählt, sondern auch deren Vertraulichkeit.

> [!tip] Echtzeitdolmetschung. Muttersprachliches Verständnis. Keine Untertitel. Keine Verzögerung.

Um ein nahtloses Erlebnis zu bieten, integriert InterMind Drittanbieterdienste für Video, Audio, Cloud-Speicher, Echtzeitdolmetschung und Analytik. Diese Drittanbieter helfen uns, Leistung und Skalierbarkeit sicherzustellen — führen aber auch eine Ebene ein, die wir nicht direkt kontrollieren können.

Wir glauben an **Transparenz statt Versprechen**. Wir können Privatsphäre und Sicherheit nur für Komponenten garantieren, die unter unserer direkten Kontrolle stehen — unsere Software, Schnittstellenlogik und die Art und Weise, wie wir Daten weiterleiten. Für alles andere bieten wir Ihnen **die Macht der Wahl**.

Deshalb haben wir InterMind mit **regionsbasierter Vertraulichkeit** entwickelt: Sie wählen, wo Ihre Daten verarbeitet werden, welcher rechtliche Rahmen dafür gilt und welche KI-Modelle verwendet werden — basierend auf Ihrer ausgewählten Datenschutzzone.

## Zentrale Datenschutzprinzipien

### 1. **Geteiltes Verantwortungsmodell**

- InterMind **besitzt oder betreibt nicht** die zugrunde liegende Cloud-Infrastruktur oder LLMs (Large Language Models).
- Wir speichern keine Mediendateien und verarbeiten Ihre Sprache nicht direkt für das Modelltraining.
- Wir **kontrollieren** die Client-seitige Software, Routing-Regeln und Compliance-Logik — einschließlich der Region, durch die Ihre Daten fließen, welches Modell verwendet wird und unter welchen Bedingungen.

### 2. **Architektonische Transparenz**

- Sie können explizit sehen, welche Region für Ihre Sitzung aktiv ist und welche Gesetze gelten (z.B. GDPR in Europa, CCPA in den USA, PDPL in den VAE).
- Jede Sitzung läuft in einem festgelegten **Compliance-Modus**, und diese Konfiguration ist sichtbar und überprüfbar.

### 3. **Datenschutz standardmäßig**

- InterMind speichert oder verwendet Ihre Inhalte **niemals** für Training, Profiling oder kommerzielle Analysen.
- Wir bewahren keine Transkripte oder Medien auf, es sei denn, Sie fordern dies ausdrücklich an.
- Wenn Sie die Interpretation deaktivieren, **verlassen überhaupt keine Benutzerdaten Ihr Gerät**.

## Regionale Vertraulichkeit: So funktioniert es

Zu Beginn jeder Sitzung oder als Teil der Kontoeinstellungen Ihrer Organisation können Sie eine bevorzugte Datenschutzzone auswählen:

| Region        | Anwendbare Gesetze                                                                            | Infrastruktur                 | LLM-Anbieter               |
| ------------- | --------------------------------------------------------------------------------------------- | ----------------------------- | -------------------------- |
| Europa        | [GDPR](https://gdpr.eu)                                                                       | Nur EU-Rechenzentren          | EU-gehostet oder EU-konform|
| United States | [CCPA](https://oag.ca.gov/privacy/ccpa)                                                       | AWS / GCP / Azure (US)        | OpenAI US / Anthropic US   |
| UAE / MENA    | [PDPL](https://www.signzy.com/data-privacy-laws-in-the-uae-2025-everything-you-need-to-know/) | UAE- oder Bahrain-Cloud       | Regionale oder konforme LLMs|
| Asien / China | Lokale chinesische Datenschutzgesetze                                                        | Alibaba, Huawei, Tencent Cloud| Nur China-basierte LLMs    |

Diese Auswahl bestimmt, wie Ihre Video-, Audio- und interpretierten Inhalte verarbeitet werden und durch welche Gerichtsbarkeit.

Sie können:

- **Eine Standardregion** für Ihre Organisation festlegen
- **Die Region pro Sitzung überschreiben**
- **Bestimmte Regionen** komplett sperren

## Was InterMind garantiert

Wir implementieren strenge technische und rechtliche Schutzmaßnahmen in unserem Kontrollbereich:

### 1. **Lokale Ausführung zuerst**

Client-seitige Funktionen wie Spracherfassung und UI-Rendering werden wann immer möglich lokal ausgeführt.

### 2. **Datenminimierung**

Es werden nur die für die aktuelle Aufgabe notwendigen Minimaldaten übertragen.

### 3. **Ende-zu-Ende-Verschlüsselung**

Alle Audio-/Videodaten werden über verschlüsselte Kanäle übertragen. Interpretationsanfragen werden über sichere Proxys getunnelt und vermeiden öffentliche Exposition.

### 4. **Keine standardmäßige Speicherung**

Wir speichern Ihre Meetings, Transkripte oder Gespräche nur, wenn Sie dies ausdrücklich wünschen. Alle Speicherung ist regiongebunden.

## Rechtliche & regulatorische Konformität

InterMind unterstützt vollständige Kompatibilität mit:

- **GDPR** — Recht auf Zugriff, Löschung, Export und Einschränkung der Verarbeitung. Keine KI-Profilerstellung.
- **CCPA** — Kein Verkauf personenbezogener Daten, Opt-out-Optionen und transparente Erfassungspraktiken.
- **UAE PDPL** — Lokale Speicherung auf Anfrage, strenge Zugangskontrollen, keine internationalen Übertragungen ohne Einwilligung.
- **China DSL/PIPL** — Ausschließlich Verarbeitung in der Region, keine ausländische Weiterleitung bei Auswahl von China.

## Was wir garantieren können und was nicht

Wir verpflichten uns zu vollständiger Ehrlichkeit, nicht nur zu juristischen Formulierungen.

> InterMind **kann nicht garantieren**, wie Drittanbieter-LLMs oder Infrastrukturanbieter Daten verarbeiten, sobald diese unsere Kontrolle verlassen.

### Wir garantieren NICHT:

- Dass OpenAI, Anthropic oder andere LLM-Anbieter Eingabedaten nicht protokollieren oder speichern.
- Dass Cloud-Anbieter keinen Zugriff auf Medien haben, die durch ihre Systeme gestreamt werden (es sei denn, Sie nutzen eine sichere Enklave oder Enterprise-Bereitstellung).
- Dass Inhalte, die an ein Drittanbieter-Modell weitergegeben werden, außerhalb ihres Trainingsumfangs liegen (außer bei privatem Vertrag).

### Wir garantieren:

- Sie wissen immer **wo und wie** Ihre Daten verarbeitet werden.
- Sie haben Werkzeuge zur **Risikokontrolle** durch die Auswahl Ihrer Region und des Compliance-Modus.
- InterMind speichert oder nutzt Ihre Inhalte **niemals** - auch nicht vorübergehend - ohne Ihre Einwilligung.

## Vertrauensmodi & Datenschutzstufen

Sie können Ihre Sitzung an Ihre Vertraulichkeitsanforderungen anpassen:

| Vertrauensmodus  | Interpretation | Regionsübergreifender Transfer | Speicherung        | Am besten geeignet für                    |
| ---------------- | -------------- | ------------------------------ | ------------------ | ----------------------------------------- |
| 🔒 Nur lokal     | ❌             | ❌                             | ❌                 | Rechtliches, Behörden, interne Prüfungen  |
| 🔐 Regionsbegrenzt| ✅             | ✅ (nur innerhalb der Zone)    | ❌ oder nur Sitzung| Gesundheitswesen, Finanzen, Personalwesen |
| 🌐 Global Flex   | ✅             | ✅ (mehrere Regionen)          | ✅                 | Support, Vertrieb, multinationale Teams   |

## Was Sie direkt nutzen können

- Regionsspezifische LLM-Nutzung mit Echtzeit-Transparenz.
- Niemals Training oder Profiling Ihrer Inhalte.
- Keine Datenübertragung bei deaktivierter Interpretation.
- Optionale Datenspeicherung, immer regional gebunden.
- Vollständige Prüf- und Exportwerkzeuge für Unternehmenskunden.

## Fazit

> [!note] Datenschutz ist kein Versprechen — sondern eine Architektur.

InterMind versteckt sich nicht hinter vagen Zusicherungen. Stattdessen bieten wir Ihnen **Auswahlmöglichkeiten**, **Transparenz** und **Kontrolle**.

- Sie wählen Ihre Region.
- Sie wählen Ihr Interpretationsniveau.
- Sie entscheiden, welches Risiko Sie bereit sind einzugehen — und wir helfen Ihnen, auf jeder Ebene compliant zu bleiben.

**InterMind — entwickelt für Profis, gestützt durch Compliance, geleitet durch Vertrauen.**