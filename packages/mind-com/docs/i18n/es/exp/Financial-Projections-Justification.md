# Justificación de proyecciones financieras (Año 1–3) <Badge type="success" text="actualizado" />

Este documento explica los supuestos detrás del modelo financiero de InterMind para el crecimiento de usuarios, ingresos (ARR) y economía unitaria durante los primeros tres años.

## Crecimiento de clientes

| Año | Cuentas de pago | Justificación                                                                                                                                                            |
| --- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | 1,600           | Lanzamiento inicial en 5 mercados emergentes (MX, BR, TR, TH, ID), adopción temprana por usuarios B2B enfocados en exportación. Alta demanda de alternativas en inglés. |
| 2   | 15,600          | SEO localizado y campañas pagadas en más de 10 países, efectos de red a través de reuniones con clientes, escalamiento del embudo freemium. Las integraciones Zoom/CRM impulsan la adquisición del mercado medio. |
| 3   | 72,000          | Crecimiento viral a través de UX "habla en tu idioma", integraciones verticales profundas (ERP, incorporación, legal), programas de revendedores en EU/MENA.           |

## Ingresos recurrentes anuales (ARR)

| Año | ARR         | Supuestos principales                                                                                                                    |
| --- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | $705,600    | 1,600 cuentas de pago × 1.5 licencias promedio × $24.50/mes → conversión freemium conservadora + programas B2B piloto.                |
| 2   | $8,985,600  | 15,600 cuentas de pago × 2.0 licencias promedio × $24.00/mes → conversión freemium mejorada + adquisición B2B activa.                 |
| 3   | $50,760,000 | 72,000 cuentas de pago × 2.5 licencias promedio × $23.50/mes → madurez del producto, escalamiento de mercado medio, ventas adicionales (almacenamiento, zonas de privacidad). |

## Licencias por cuenta: segmentación realista

### **Información clave:** Más del 80% permanecerá como usuario único, pero el crecimiento del mercado medio crea un promedio más alto

| Segmento             | Distribución A1   | Distribución A2     | Distribución A3   |
| -------------------- | ----------------- | ------------------- | ----------------- |
| **Solo/Freelance**   | 83% (1.0 lic/cta) | 81.5% (1.0 lic/cta) | 80% (1.0 lic/cta) |
| **Pequeña empresa**  | 15% (2.0 lic/cta) | 15% (3.0 lic/cta)   | 15% (4.0 lic/cta) |
| **Mercado medio**    | 2% (18.5 lic/cta) | 3.5% (21.0 lic/cta) | 5% (22.0 lic/cta) |
| **Promedio ponderado** | **1.5 lic/cta**   | **2.0 lic/cta**     | **2.5 lic/cta**   |

### **Lógica de crecimiento de licencias:**

**A1:** Adopción piloto — equipos mínimos probando el producto, principalmente usuarios individuales  
**A2:** Implementación departamental — expansión a departamentos de ventas/soporte dentro de cuentas existentes, comienza la penetración del mercado medio  
**A3:** Adopción a nivel departamental — las empresas del mercado medio escalan a través de múltiples equipos y departamentos

## CAC (Costo de Adquisición de Clientes)

| Año | CAC Promedio | Justificación                                                                                                                                             |
| --- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | $95          | Combinación de búsqueda pagada, ventas dirigidas por fundadores y pilotos de bajo costo. Campañas a nivel país con palabras clave de alta intención (ej., "como hablar ingles reuniones"). |
| 2   | $90          | CAC disminuye debido a métricas de embudo mejoradas, incorporación localizada y marketing de contenidos. Los canales orgánicos y de referidos se fortalecen. |
| 3   | $85          | Eficiencia de CAC por programas de revendedores, integraciones con socios y modelado de atribución maduro.                                               |

## LTV (Valor de vida del cliente)

| Año | LTV    | Base de cálculo                                                                                     |
| --- | ------ | --------------------------------------------------------------------------------------------------- |
| 1   | $178.9 | ARPU $36.8/mes × 4.9 meses de permanencia promedio (usuarios tempranos, alta rotación en segmento freemium). |
| 2   | $308.0 | ARPU $48.0/mes × 6.4 meses de permanencia promedio (mejor retención, clientes B2B más fieles).     |
| 3   | $470.0 | ARPU $58.8/mes × 8.0 meses de permanencia promedio (domina mercado medio; mayor ACV + renovaciones + ventas adicionales, 10% rotación). |

## Margen bruto

| Año | Margen | Factores                                                                                                                  |
| --- | ------ | ------------------------------------------------------------------------------------------------------------------------- |
| 1   | 73%    | Costo de cómputo del stack de traducción de voz (~$0.08/min/usuario), ancho de banda, infraestructura mínima. Desarrollo amortizado. |
| 2   | 77%    | Optimización de modelos, mejor utilización de GPU, descuentos de proveedores LLM, migración a infraestructura híbrida (inferencia en el borde). |
| 3   | 80%    | Modelos de voz/LLM propios, infraestructura de auto-escalado, infraestructura fija por usuario. Funciones B2B con precios más altos y bajos costos marginales. |

## Métricas clave de economía unitaria

| Métrica                           | Año 1  | Año 2  | Año 3  | Valor objetivo |
| --------------------------------- | ------ | ------ | ------ | -------------- |
| **LTV/CAC**                       | 1.9    | 3.4    | 5.5    | >3.0           |
| **Período de recuperación**       | 8.5 me | 5.8 me | 4.2 me | <12 me         |
| **Retención bruta de ingresos**   | 85%    | 88%    | 90%    | >85%           |
| **Retención neta de ingresos**    | 95%    | 115%   | 130%   | >110%          |

## Supuestos críticos del modelo

### **Estrategia de precios:**

- Optimización ligera de precios a lo largo de los años para aumentar el LTV
- Nivel de mercado medio con características premium en A2-A3
- Descuentos por volumen para cuentas de múltiples asientos

### **Evolución de la segmentación de clientes:**

- **A1:** Enfoque en adoptadores tempranos de PyMEs (alta rotación, adopción rápida)
- **A2:** Expansión al mercado medio a través de integraciones y alianzas
- **A3:** Escalamiento del mercado medio con éxito del cliente dedicado y despliegues multidepartamentales

### **Expansión geográfica:**

- Mercados emergentes primero (CAC más bajo, mayor tasa de crecimiento)
- Mercados desarrollados después (LTV más alto, adquisición más compleja)

## Riesgos y mitigación

**Escenarios positivos no incluidos:**

- Monetización de API (planeada para Y2)
- Licenciamiento de marca blanca para clientes de mercado medio
- Integraciones de marketplace (Zoom App Store, Microsoft Teams)

**Los supuestos de costos consideran:**

- Métodos de pago localizados y fluctuaciones de divisas
- Cumplimiento legal (PDPL/GDPR) y costos de soporte
- Presión competitiva en precios

**Validación de precios:**

- Comparado con herramientas SaaS similares (Zoom, DeepL Pro, Otter AI)
- Pruebas de sensibilidad de precios en segmentos objetivo
- Análisis de disposición a pagar a través de programas piloto

> **Conclusión:** Estas proyecciones equilibran la ambición de crecimiento con una economía SaaS disciplinada — apuntando a ratios LTV/CAC sostenibles (>5x para Y3) y márgenes brutos del 80%+ con segmentación realista de la base de clientes.