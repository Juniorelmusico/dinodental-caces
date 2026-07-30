// Resúmenes por componente basados en la estructura oficial del CACES Odontología
// Fuente: PDF "ESTRUCTURA ODONTOLOGÍA" (CACES) y bibliografía referencial.

const COMPONENTES = [
  {
    id: 'operatoria',
    numero: 1,
    nombre: 'Operatoria Dental',
    emoji: '🦷',
    peso: 21,
    color: '#7ec8a6',
    descripcion: 'El componente con mayor peso del examen. Cubre caries, lesiones no cariosas y restauraciones directas.',
    subcomponentes: [
      {
        titulo: '1.1 Lesiones cariosas',
        contenido: `
          <h4 style="color:var(--verde-dark)">🧪 Saliva</h4>
          <p><strong>Composición:</strong> 99% agua + electrolitos (Na⁺, K⁺, Cl⁻, HCO₃⁻, Ca²⁺, PO₄³⁻, F⁻), proteínas (mucinas, amilasa, lisozima, lactoferrina, IgA secretora, estaterinas, histatinas), urea y compuestos orgánicos.</p>
          <p><strong>Funciones (mnemotecnia D-P-L-R-D):</strong></p>
          <ul>
            <li><strong>Digestiva:</strong> amilasa/ptialina inicia digestión de almidones; lipasa lingual.</li>
            <li><strong>Protectora:</strong> lubricación, formación de la película adquirida, barrera antimicrobiana (IgA, lisozima, lactoferrina, defensinas).</li>
            <li><strong>Lubricación:</strong> mucinas — permite fonación, masticación, deglución.</li>
            <li><strong>Remineralizante:</strong> aporta Ca²⁺, PO₄³⁻ y F⁻ sobresaturados que reparan el esmalte.</li>
            <li><strong>Diluyente/buffer:</strong> bicarbonato y fosfato neutralizan ácidos.</li>
          </ul>
          <p><strong>Flujo salival:</strong> no estimulado 0.3-0.4 mL/min; estimulado 1-2 mL/min. <strong>Hiposalivación:</strong> <0.1 mL/min no estimulado o <0.7 mL/min estimulado. Xerostomía = sensación subjetiva (no siempre coincide con hiposalivación medida).</p>
          <p><strong>Causas de hiposalivación:</strong> síndrome de Sjögren, radioterapia de cabeza y cuello, fármacos (antihistamínicos, antidepresivos tricíclicos, antihipertensivos, anticolinérgicos, diuréticos), diabetes descompensada, deshidratación, envejecimiento (con más medicación asociada).</p>
          <p><strong>Consecuencias:</strong> caries rampantes, candidiasis, disgeusia, glosodinia, dificultad para portar prótesis.</p>

          <h4 style="color:var(--verde-dark)">🦠 Etiología de la caries</h4>
          <p><strong>Modelo clásico (Keyes 1962) y modelo actual (Fejerskov & Manji):</strong> la caries es una enfermedad <strong>multifactorial, dinámica y biofilm-dependiente</strong>. Es un desequilibrio entre <strong>desmineralización-remineralización</strong>.</p>
          <p><strong>Factores primarios (Triada de Keyes + tiempo):</strong></p>
          <ul>
            <li><strong>Huésped susceptible:</strong> diente (morfología, mineralización), saliva.</li>
            <li><strong>Microbiota cariogénica:</strong> <em>Streptococcus mutans</em> (iniciador — acidogénico, acidúrico, produce polisacáridos extracelulares), <em>S. sobrinus</em>, <em>Lactobacillus</em> (progresión), <em>Actinomyces</em> (raíz), <em>Bifidobacterium</em>.</li>
            <li><strong>Sustrato:</strong> carbohidratos fermentables — sacarosa el más cariogénico.</li>
            <li><strong>Tiempo:</strong> exposiciones repetidas y prolongadas al pH ácido.</li>
          </ul>
          <p><strong>Factores moduladores:</strong> nivel socioeconómico, educación, hábitos, fluoruros, dieta, higiene, xerostomía, medicación.</p>
          <p><strong>pH crítico:</strong> 5.5 para esmalte; 6.2 para dentina/cemento. Debajo de estos valores hay desmineralización.</p>
          <p><strong>Curva de Stephan:</strong> tras la ingesta de carbohidratos el pH cae en 3-5 min y tarda 20-40 min en recuperarse por el buffer salival. Comidas frecuentes = pH crónico bajo.</p>

          <h4 style="color:var(--verde-dark)">🔬 Zonas histológicas de la lesión</h4>
          <p><strong>Esmalte (mancha blanca):</strong> desde la superficie hacia el interior:</p>
          <ol>
            <li><strong>Capa superficial:</strong> aparentemente sana (30 µm), pseudointacta por remineralización constante.</li>
            <li><strong>Cuerpo de la lesión:</strong> mayor pérdida mineral (25-50%).</li>
            <li><strong>Zona oscura:</strong> área de remineralización parcial.</li>
            <li><strong>Zona translúcida:</strong> frente de avance de la lesión, primer signo histológico.</li>
          </ol>
          <p><strong>Dentina:</strong></p>
          <ol>
            <li><strong>Zona de desintegración/necrosis:</strong> tejido reblandecido, contaminado.</li>
            <li><strong>Zona contaminada (infectada):</strong> alta carga bacteriana, colágeno degradado — <strong>debe eliminarse</strong>.</li>
            <li><strong>Zona afectada:</strong> desmineralizada pero con colágeno vital — <strong>remineralizable, se conserva</strong>.</li>
            <li><strong>Zona esclerótica/translúcida:</strong> dentina reactiva por depósito mineral en túbulos.</li>
            <li><strong>Dentina terciaria/reparadora:</strong> depositada por los odontoblastos como respuesta.</li>
          </ol>

          <h4 style="color:var(--verde-dark)">📋 ICDAS (International Caries Detection and Assessment System)</h4>
          <table style="width:100%; border-collapse:collapse; margin:1rem 0; font-size:0.9rem">
            <tr style="background:var(--verde-light)"><th style="padding:0.5rem; text-align:left">Código</th><th style="padding:0.5rem; text-align:left">Hallazgo</th><th style="padding:0.5rem; text-align:left">Tratamiento</th></tr>
            <tr><td style="padding:0.5rem"><strong>0</strong></td><td style="padding:0.5rem">Sano (sin cambios tras secado)</td><td style="padding:0.5rem">Prevención</td></tr>
            <tr><td style="padding:0.5rem"><strong>1</strong></td><td style="padding:0.5rem">Cambio visible <em>solo tras secar</em> 5 s con aire</td><td style="padding:0.5rem">Flúor tópico, sellador</td></tr>
            <tr><td style="padding:0.5rem"><strong>2</strong></td><td style="padding:0.5rem">Cambio visible con superficie húmeda (mancha blanca/marrón)</td><td style="padding:0.5rem">Flúor, sellador, remineralización</td></tr>
            <tr><td style="padding:0.5rem"><strong>3</strong></td><td style="padding:0.5rem">Ruptura localizada del esmalte, sin dentina expuesta</td><td style="padding:0.5rem">Sellador terapéutico / restauración mínima</td></tr>
            <tr><td style="padding:0.5rem"><strong>4</strong></td><td style="padding:0.5rem">Sombra oscura subyacente de dentina (con o sin ruptura)</td><td style="padding:0.5rem">Restauración conservadora</td></tr>
            <tr><td style="padding:0.5rem"><strong>5</strong></td><td style="padding:0.5rem">Cavidad con dentina visible (<50% de la superficie)</td><td style="padding:0.5rem">Restauración directa</td></tr>
            <tr><td style="padding:0.5rem"><strong>6</strong></td><td style="padding:0.5rem">Cavidad extensa con dentina visible (>50%)</td><td style="padding:0.5rem">Restauración amplia, endodoncia o extracción</td></tr>
          </table>

          <h4 style="color:var(--verde-dark)">📊 Índices epidemiológicos</h4>
          <ul>
            <li><strong>CPO-D (Klein & Palmer):</strong> dientes Cariados + Perdidos por caries + Obturados en dentición permanente. Sumar por individuo o promediar por grupo.</li>
            <li><strong>ceo-d:</strong> versión para dentición temporal — c (cariados), e (extraídos por caries; los perdidos por exfoliación NO cuentan), o (obturados).</li>
            <li><strong>CPO-S / ceo-s:</strong> mismo concepto pero por superficies (más sensible).</li>
            <li><strong>Índice OMS:</strong> CPO-D global (12 años como edad índice para vigilancia).</li>
            <li><strong>Interpretación OMS:</strong> muy bajo <1.2 · bajo 1.2-2.6 · moderado 2.7-4.4 · alto 4.5-6.5 · muy alto >6.6.</li>
          </ul>

          <h4 style="color:var(--verde-dark)">🔍 Diagnóstico diferencial (mancha blanca)</h4>
          <ul>
            <li><strong>Caries incipiente:</strong> localizada en zonas retentivas, opaca, se acentúa al secar.</li>
            <li><strong>Fluorosis:</strong> <em>bilateral, simétrica</em>, en zonas de menor retención, no cambia al secar. Grados de Dean: cuestionable, muy leve, leve, moderado, severo.</li>
            <li><strong>Hipomineralización molar-incisivo (HMI):</strong> opacidad demarcada blanquecina/amarilla en 1º molares permanentes ± incisivos. Puede desprenderse el esmalte tras erupción.</li>
            <li><strong>Hipoplasia:</strong> defecto cuantitativo (falta de esmalte) — fositas, surcos.</li>
            <li><strong>Amelogénesis imperfecta:</strong> hereditaria, generalizada.</li>
            <li><strong>Manchas extrínsecas:</strong> tabaco, café, clorhexidina, hierro — removibles con profilaxis.</li>
          </ul>

          <h4 style="color:var(--verde-dark)">💊 Manejo por riesgo cariogénico (CAMBRA)</h4>
          <p><strong>Bajo riesgo:</strong> pasta 1450 ppm 2 veces/día, revisión anual, dieta balanceada.</p>
          <p><strong>Moderado:</strong> + barniz F⁻ 5% cada 6 meses, selladores en fosas retentivas, control 4-6 meses.</p>
          <p><strong>Alto riesgo:</strong> + barniz de flúor cada 3 meses, pasta 5000 ppm (Duraphat 5000), clorhexidina 0.12% (2 semanas/mes), xilitol (5-10 g/día), ionómeros liberadores de F⁻, dieta estricta, control 3 meses.</p>
          <p><strong>Extremo (radiados, xerostómicos):</strong> flúor diario en cubetas, saliva artificial, pilocarpina.</p>

          <p style="background:#fff9e6; padding:0.7rem; border-radius:8px; border-left:3px solid var(--amarillo)">
            <strong>💡 Perla clínica:</strong> el <strong>flúor tópico</strong> actúa formando <strong>fluoruro de calcio (CaF₂)</strong> en la superficie, reservorio que se libera cuando el pH cae. Por eso su aplicación repetida en bajas concentraciones es más eficaz que dosis únicas altas.
          </p>
        `
      },
      {
        titulo: '1.2 Lesiones no cariosas',
        contenido: `
          <h4 style="color:var(--verde-dark)">📚 Definición</h4>
          <p>Pérdida irreversible de estructura dental <strong>sin participación bacteriana</strong>. Se clasifican por su etiología (mnemotecnia <strong>"A-A-A-E"</strong>).</p>

          <h4 style="color:var(--verde-dark)">🔬 Clasificación</h4>
          <ul>
            <li><strong>ABRASIÓN:</strong> desgaste por <em>fricción de un objeto externo</em>. Causas: cepillado con cerdas duras + técnica horizontal + pasta abrasiva; uñas, palillos, pipa, prótesis mal ajustadas, pinzas de peluquería.
              <br><em>Clínica:</em> lesión <strong>en cuña, superficie lisa y pulida, bordes definidos</strong>, en cervical vestibular (más en caninos y premolares del lado dominante).</li>
            <li><strong>EROSIÓN:</strong> disolución química <em>sin bacterias</em>. Causas <strong>intrínsecas</strong> (ERGE, vómitos crónicos: bulimia, hiperémesis gravídica) o <strong>extrínsecas</strong> (cítricos, bebidas carbonatadas, vino, jugos, exposición industrial a ácidos).
              <br><em>Clínica:</em> superficies <strong>lisas, brillantes, cóncavas ("cupping")</strong>. En erosión intrínseca: palatino de superiores. En extrínseca: vestibular. Restauraciones aparecen "elevadas" sobre la estructura.</li>
            <li><strong>ATRICIÓN:</strong> desgaste <em>diente-diente</em>. Causa: bruxismo, contactos oclusales anómalos.
              <br><em>Clínica:</em> facetas planas coincidentes en antagonistas, pérdida de anatomía oclusal e incisal, dientes acortados.</li>
            <li><strong>ABFRACCIÓN:</strong> microfracturas del esmalte cervical por <strong>flexión oclusal</strong> (bruxismo, interferencias).
              <br><em>Clínica:</em> lesión en cuña <strong>angulada</strong>, con bordes agudos, muy localizada, a menudo aislada (a diferencia de la abrasión que suele ser múltiple).</li>
          </ul>

          <h4 style="color:var(--verde-dark)">🎯 Diagnóstico diferencial de lesiones cervicales</h4>
          <table style="width:100%; border-collapse:collapse; font-size:0.85rem; margin:0.5rem 0">
            <tr style="background:var(--verde-light)"><th style="padding:0.4rem">Característica</th><th>Abrasión</th><th>Erosión</th><th>Abfracción</th></tr>
            <tr><td style="padding:0.4rem"><strong>Causa</strong></td><td>Cepillado</td><td>Ácidos</td><td>Fuerzas oclusales</td></tr>
            <tr><td style="padding:0.4rem"><strong>Forma</strong></td><td>Cuña redondeada</td><td>Cóncava lisa</td><td>Cuña angulada</td></tr>
            <tr><td style="padding:0.4rem"><strong>Bordes</strong></td><td>Suaves</td><td>Redondeados brillantes</td><td>Agudos</td></tr>
            <tr><td style="padding:0.4rem"><strong>Distribución</strong></td><td>Múltiple (lado dominante)</td><td>Palatino sup / vestibular</td><td>Aislada</td></tr>
          </table>

          <h4 style="color:var(--verde-dark)">💊 Tratamiento</h4>
          <ol>
            <li><strong>Identificar y eliminar la causa</strong> (esencial): corregir técnica de cepillado, tratamiento de ERGE con IBP, terapia psicológica en bulimia, ajuste oclusal, férula de descarga en bruxismo.</li>
            <li><strong>Desensibilización:</strong> pastas con nitrato de potasio, arginina, flúor, agentes con hidroxiapatita. Barnices desensibilizantes profesionales.</li>
            <li><strong>Restauración</strong> (cuando hay compromiso estructural, estético o sensibilidad):
              <ul>
                <li><strong>Ionómero de vidrio modificado con resina:</strong> ideal en cervical (libera flúor, se adhiere a dentina, tolera humedad).</li>
                <li><strong>Resina compuesta:</strong> mejor estética; adhesivo autograbante para reducir sensibilidad post.</li>
                <li><strong>Restauración con "sándwich":</strong> ionómero como base + resina en superficie.</li>
              </ul>
            </li>
            <li><strong>Prevención:</strong> cepillo suave, técnica de Bass modificada, enjuague con agua tras ácidos, esperar 30 min para cepillarse tras ácidos, chicles con xilitol.</li>
          </ol>

          <p style="background:#fff9e6; padding:0.7rem; border-radius:8px; border-left:3px solid var(--amarillo)">
            <strong>💡 Perla clínica:</strong> ante lesiones erosivas <strong>palatinas en incisivos superiores</strong> sin causa dietética clara, sospechar <strong>bulimia</strong>. Requiere abordaje multidisciplinario.
          </p>
        `
      },
      {
        titulo: '1.3 Procesos restauradores directos',
        contenido: `
          <h4 style="color:var(--verde-dark)">🔗 Adhesión a estructuras dentales</h4>
          <p><strong>Adhesión al esmalte:</strong> se logra por <strong>retención micromecánica</strong> en las microporosidades creadas por el ácido fosfórico (patrón tipo I: prismas periféricos disueltos; tipo II: núcleo disuelto; tipo III: sin patrón claro).</p>
          <p><strong>Adhesión a dentina:</strong> más compleja por su naturaleza húmeda, orgánica y tubular. Se basa en la <strong>capa híbrida</strong> (Nakabayashi 1982): infiltración del monómero adhesivo en el colágeno desmineralizado. Factores críticos: hidratación adecuada (wet bonding), tiempo de grabado (<20 s para evitar colapso), infiltración completa del adhesivo.</p>

          <h4 style="color:var(--verde-dark)">🧴 Clasificación de sistemas adhesivos</h4>
          <ul>
            <li><strong>Etch-and-rinse (grabado y lavado):</strong>
              <ul>
                <li><em>3 pasos:</em> ácido → primer → adhesivo (gold standard; Optibond FL, Scotchbond Multi-Purpose).</li>
                <li><em>2 pasos:</em> ácido → primer+adhesivo (Single Bond, Prime & Bond).</li>
              </ul>
            </li>
            <li><strong>Self-etch (autograbante):</strong>
              <ul>
                <li><em>2 pasos:</em> primer ácido → adhesivo (Clearfil SE Bond — considerado el mejor autograbante).</li>
                <li><em>1 paso:</em> todo en uno (menos duraderos).</li>
              </ul>
            </li>
            <li><strong>Universales:</strong> se usan en cualquier modalidad. Contienen 10-MDP (monómero que forma unión química estable con hidroxiapatita) — ejemplo: Scotchbond Universal, Single Bond Universal, All-Bond Universal.</li>
          </ul>
          <p><strong>Ácido fosfórico al 37%:</strong> esmalte 30 s (15 s en dientes deciduos), dentina máx 15 s. Lavar el doble del tiempo de grabado. Secar sin desecar la dentina (wet bonding).</p>

          <h4 style="color:var(--verde-dark)">🔪 Técnicas de remoción del tejido cariado</h4>
          <ul>
            <li><strong>Convencional (rotatoria):</strong> fresas redondas de acero o carburo a baja velocidad con refrigeración. Retirar dentina infectada; conservar dentina afectada (color amarillento a marrón, dureza intermedia).</li>
            <li><strong>Químico-mecánica:</strong>
              <ul>
                <li><em>Carisolv:</em> gel de aminoácidos + hipoclorito de sodio.</li>
                <li><em>Papacárie:</em> papaína + cloramina + azul de toluidina. Muy usado en niños (no requiere anestesia).</li>
              </ul>
            </li>
            <li><strong>Aire abrasivo:</strong> partículas de óxido de aluminio proyectadas — conservador, ideal en fosas y fisuras.</li>
            <li><strong>Láser Er:YAG:</strong> ablación selectiva de tejido cariado, sin anestesia en muchos casos.</li>
            <li><strong>ART (Atraumatic Restorative Treatment):</strong> instrumentos manuales (excavadores) + ionómero. Recomendado por OMS en poblaciones sin acceso a equipos.</li>
          </ul>

          <h4 style="color:var(--verde-dark)">🌱 Mínima intervención (MI) — Lanata</h4>
          <p>Cambio de paradigma que prioriza:</p>
          <ol>
            <li><strong>Detección temprana</strong> (ICDAS, radiografías, transiluminación, láser fluorescencia).</li>
            <li><strong>Evaluación de riesgo cariogénico</strong> individualizada.</li>
            <li><strong>Remineralización</strong> de lesiones no cavitadas (flúor, CPP-ACP, hidroxiapatita).</li>
            <li><strong>Preservación</strong> máxima de estructura sana y remineralizable.</li>
            <li><strong>Restauraciones adhesivas</strong> ultraconservadoras (túnel, slot, minicavidades) en vez de cavidades Black amplias.</li>
            <li><strong>Monitoreo</strong> y prevención continua.</li>
          </ol>

          <h4 style="color:var(--verde-dark)">🎨 Técnicas de restauración directa</h4>
          <p><strong>Clases de Black (sitio):</strong></p>
          <ul>
            <li><strong>Clase I:</strong> fosas y fisuras (oclusal, palatino de superiores, vestibular molar).</li>
            <li><strong>Clase II:</strong> proximal de posteriores.</li>
            <li><strong>Clase III:</strong> proximal de anteriores sin ángulo incisal.</li>
            <li><strong>Clase IV:</strong> proximal de anteriores <em>con</em> ángulo incisal.</li>
            <li><strong>Clase V:</strong> cervical (vestibular/lingual).</li>
            <li><strong>Clase VI (Simon):</strong> punta de cúspides o borde incisal.</li>
          </ul>

          <p><strong>Técnica incremental (resina):</strong> capas ≤ 2 mm, polimerizadas por 20-40 s cada una. Reduce el estrés de contracción de polimerización (2-3% volumétrica) y el gap marginal.</p>
          <p><strong>Técnica bulk-fill:</strong> resinas de baja contracción que se colocan en incrementos de hasta 4 mm.</p>
          <p><strong>Técnica de estratificación anatómica:</strong> dentina opaca + esmalte translúcido + tintes internos → alta estética en clase IV.</p>

          <h4 style="color:var(--verde-dark)">🥪 Técnicas sándwich (ionómero + resina)</h4>
          <ul>
            <li><strong>Sándwich cerrado:</strong> ionómero cubierto totalmente por resina — cavidades profundas sin exposición al medio bucal.</li>
            <li><strong>Sándwich abierto:</strong> ionómero expuesto al medio en la pared gingival — clases II con margen subgingival difícil de aislar.</li>
          </ul>
          <p><strong>Ventajas:</strong> liberación de flúor, adhesión química a dentina, biocompatibilidad, reducción de sensibilidad post.</p>

          <h4 style="color:var(--verde-dark)">🧱 Materiales de restauración directa</h4>
          <ul>
            <li><strong>Amalgama:</strong> aleación Ag-Sn-Cu con Hg. Durable, económica, pero no estética; su uso está disminuyendo por el Convenio de Minamata.</li>
            <li><strong>Resina compuesta:</strong> matriz orgánica (Bis-GMA, TEGDMA, UDMA) + relleno inorgánico (silica, cuarzo, zirconia). Estética, adhesiva.</li>
            <li><strong>Ionómero de vidrio:</strong> polvo (vidrio de fluoroaluminosilicato) + líquido (ácido poliacrílico). Adhesión química, libera flúor, biocompatible.</li>
            <li><strong>Ionómero modificado con resina (RMGIC):</strong> mejora propiedades mecánicas del ionómero clásico. Ideal en cervical y como base.</li>
            <li><strong>Compómero:</strong> híbrido entre resina y ionómero, menos usado hoy.</li>
          </ul>

          <p style="background:#fff9e6; padding:0.7rem; border-radius:8px; border-left:3px solid var(--amarillo)">
            <strong>💡 Perla clínica:</strong> <strong>siempre usar dique de goma</strong> en restauraciones adhesivas. La contaminación con saliva o sangre reduce la adhesión hasta un 40%.
          </p>
        `
      }
    ],
    bibliografia: [
      'Meyer-Lueckel, Paris & Ekstrand (2015). Manejo de la caries.',
      'Barrancos (2015). Operatoria Dental 5ª ed.',
      'Lanata (2022). Mínima intervención: cambio de paradigma.',
      'Malamed (2020). Manual de Anestesia Local 7ª ed.'
    ]
  },

  {
    id: 'odontopediatria',
    numero: 2,
    nombre: 'Odontopediatría',
    emoji: '👶',
    peso: 13,
    color: '#ffb3c6',
    descripcion: 'Manejo de conducta, desarrollo dental, caries en niños y traumatismos.',
    subcomponentes: [
      {
        titulo: '2.1 Manejo de conducta',
        contenido: `
          <h4 style="color:var(--verde-dark)">📊 Clasificación conductual de Frankl</h4>
          <ul>
            <li><strong>Tipo 1 (definitivamente negativo):</strong> rechaza tratamiento, llanto fuerte, temor.</li>
            <li><strong>Tipo 2 (negativo):</strong> renuente pero permite tratamiento con dificultad.</li>
            <li><strong>Tipo 3 (positivo):</strong> acepta con reservas, colaborador.</li>
            <li><strong>Tipo 4 (definitivamente positivo):</strong> excelente cooperación, se muestra interesado.</li>
          </ul>
          <p><strong>Clasificación de Wright:</strong> cooperador, potencialmente cooperador, no cooperador (por edad, temor, discapacidad).</p>

          <h4 style="color:var(--verde-dark)">💬 Técnicas de comunicación (no farmacológicas)</h4>
          <ul>
            <li><strong>Decir-Mostrar-Hacer (Addelston 1959):</strong> explicar con lenguaje adaptado a la edad → demostrar (en un dedo, un dedo del padre, con el eyector) → ejecutar. Es la base del manejo.</li>
            <li><strong>Control de voz:</strong> modular el volumen y tono para captar atención (voz firme sin gritar).</li>
            <li><strong>Refuerzo positivo:</strong> elogios verbales, calcomanías, cepillo nuevo, "castillo del rey valiente".</li>
            <li><strong>Distracción:</strong> música, video, hablar de temas que le gusten, kaleidoscopio.</li>
            <li><strong>Modelado:</strong> observar a otro niño (o hermano) cooperando exitosamente.</li>
            <li><strong>Comunicación no verbal:</strong> sonrisa, contacto visual, tono cálido.</li>
            <li><strong>Presencia/ausencia de padres:</strong> según edad y cooperación (>4 años en general sin padres).</li>
          </ul>

          <h4 style="color:var(--verde-dark)">🧠 Técnicas de modificación de conducta</h4>
          <ul>
            <li><strong>Desensibilización sistemática:</strong> exposición gradual al estímulo temido, empezando por lo menos aversivo.</li>
            <li><strong>Manejo por contingencia:</strong> refuerzo positivo tras comportamientos deseados; retirada de atención ante los negativos.</li>
            <li><strong>Imitación (modelado):</strong> ver a otro niño (video o real) tolerando el tratamiento.</li>
            <li><strong>Técnica HOME (Hand-Over-Mouth-Exercise):</strong> <em>controvertida y desaconsejada</em> actualmente por la AAPD.</li>
          </ul>

          <h4 style="color:var(--verde-dark)">🛡️ Estabilización protectora (restricción)</h4>
          <p>Uso de <strong>Papoose Board</strong>, sábana pediátrica, sujetadores manuales o cabezal Rainbow. Indicaciones estrictas:</p>
          <ul>
            <li>Tratamiento urgente que no puede diferirse.</li>
            <li>Fracaso de técnicas comunicativas.</li>
            <li>Paciente con discapacidad severa incapaz de cooperar.</li>
            <li><strong>Consentimiento informado escrito obligatorio.</strong></li>
            <li>Nunca como castigo.</li>
          </ul>

          <h4 style="color:var(--verde-dark)">💨 Sedación consciente</h4>
          <ul>
            <li><strong>Óxido nitroso/O₂:</strong> concentración 30-50% N₂O. Rápido inicio y recuperación (5 min). Requiere respiración nasal. Muy usado en pediatría (ansiolisis mínima-moderada).</li>
            <li><strong>Midazolam oral:</strong> 0.5 mg/kg (máx 15 mg) 30-45 min antes.</li>
            <li><strong>Hidroxicina:</strong> 1 mg/kg (efecto ansiolítico y antihistamínico).</li>
            <li><strong>Sedación profunda / anestesia general:</strong> por anestesiólogo en quirófano para niños muy pequeños, con discapacidad o necesidades múltiples.</li>
          </ul>

          <p style="background:#fff9e6; padding:0.7rem; border-radius:8px; border-left:3px solid var(--amarillo)">
            <strong>💡 Perla clínica:</strong> la <strong>primera consulta</strong> del niño debería ser <strong>antes del primer año</strong> (AAPD) o al erupcionar el primer diente. Consulta corta, "visita feliz", solo examen y educación a padres.
          </p>
        `
      },
      {
        titulo: '2.2 Desarrollo dental y anomalías',
        contenido: `
          <h4 style="color:var(--verde-dark)">🦷 Cronología de la dentición temporal</h4>
          <p><strong>Erupción (edad promedio):</strong></p>
          <ul>
            <li><strong>Incisivo central inferior:</strong> 6-10 meses.</li>
            <li><strong>Incisivo central superior:</strong> 8-12 meses.</li>
            <li><strong>Incisivo lateral superior:</strong> 9-13 meses.</li>
            <li><strong>Incisivo lateral inferior:</strong> 10-16 meses.</li>
            <li><strong>Primer molar temporal:</strong> 13-19 meses.</li>
            <li><strong>Canino:</strong> 16-23 meses.</li>
            <li><strong>Segundo molar temporal:</strong> 25-33 meses.</li>
          </ul>
          <p>La dentición temporal completa (20 piezas) se logra alrededor de los <strong>30 meses</strong>.</p>

          <h4 style="color:var(--verde-dark)">🔄 Recambio dental (dentición mixta)</h4>
          <p><strong>Etapas de Nolla</strong> (calcificación dental en 10 etapas del 0 al 10).</p>
          <p><strong>Erupción de permanentes:</strong></p>
          <ul>
            <li><strong>1º molar permanente ("molar de los 6 años"):</strong> 6 años (llave de la oclusión).</li>
            <li><strong>Incisivos centrales inferiores:</strong> 6-7 años.</li>
            <li><strong>Incisivos centrales superiores:</strong> 7-8 años.</li>
            <li><strong>Incisivos laterales:</strong> 7-9 años.</li>
            <li><strong>Caninos inferiores:</strong> 9-10 años.</li>
            <li><strong>Primer premolar:</strong> 10-11 años.</li>
            <li><strong>Segundo premolar:</strong> 11-12 años.</li>
            <li><strong>Caninos superiores:</strong> 11-12 años.</li>
            <li><strong>2º molar permanente ("molar de los 12"):</strong> 12 años.</li>
            <li><strong>3º molar (cordal):</strong> 17-25 años.</li>
          </ul>
          <p><strong>Espacio de deriva (Leeway):</strong> superior 0.9 mm/lado, inferior 1.7 mm/lado. Es la diferencia mesiodistal entre el "cluster" de canino-molares temporales y sus sucesores; permite el ajuste mesial del primer molar permanente.</p>

          <h4 style="color:var(--verde-dark)">⚠️ Anomalías del desarrollo</h4>
          <p><strong>De número:</strong></p>
          <ul>
            <li><strong>Anodoncia:</strong> ausencia total (muy rara).</li>
            <li><strong>Hipodoncia/agenesia:</strong> ausencia parcial. Más frecuente: <em>3º molares</em>, incisivos laterales superiores, 2º premolares.</li>
            <li><strong>Oligodoncia:</strong> agenesia de ≥6 dientes (excluyendo terceros molares) — asociada a displasia ectodérmica.</li>
            <li><strong>Supernumerarios:</strong> <em>mesiodens</em> (entre 11 y 21, más frecuente), paramolar, distomolar.</li>
          </ul>
          <p><strong>De forma:</strong></p>
          <ul>
            <li><strong>Geminación:</strong> intento de división de un germen — un solo diente con corona bífida y una raíz.</li>
            <li><strong>Fusión:</strong> unión de dos gérmenes distintos — dos raíces separadas.</li>
            <li><strong>Concrescencia:</strong> unión solo a nivel de cemento.</li>
            <li><strong>Dens invaginatus (dens in dente):</strong> invaginación del esmalte, frecuente en incisivos laterales superiores.</li>
            <li><strong>Dens evaginatus:</strong> tubérculo adicional en oclusal.</li>
            <li><strong>Taurodontismo:</strong> cámara pulpar elongada apicalmente (asociado a síndrome de Down).</li>
            <li><strong>Diente invaginado en forma de cono:</strong> incisivos conoides.</li>
          </ul>
          <p><strong>De tamaño:</strong> microdoncia (todo/aislada), macrodoncia.</p>
          <p><strong>De color:</strong></p>
          <ul>
            <li><strong>Tetraciclinas:</strong> tinción amarilla-gris-marrón intrínseca (contraindicadas <8 años y embarazo).</li>
            <li><strong>Amelogénesis imperfecta:</strong> alteración hereditaria del esmalte (hipoplásica, hipomadurativa, hipomineralizada).</li>
            <li><strong>Dentinogénesis imperfecta:</strong> alteración de la dentina, dientes ámbar-azulados translúcidos, obliteración de cámara pulpar.</li>
            <li><strong>Ictericia neonatal:</strong> tinción verdosa.</li>
          </ul>

          <h4 style="color:var(--verde-dark)">💧 Defectos del desarrollo del esmalte</h4>
          <ul>
            <li><strong>Fluorosis (índice de Dean):</strong> hipomineralización difusa <em>bilateral y simétrica</em> por exposición sistémica excesiva a flúor (>0.05 mg/kg/día) durante la formación. Grados: cuestionable → muy leve → leve → moderado → severo (con pitting y bandas marrones).</li>
            <li><strong>HMI (Hipomineralización Molar-Incisivo):</strong> opacidades <em>demarcadas asimétricas</em> en 1º molares permanentes ± incisivos permanentes. Etiología multifactorial (fiebre, hipoxia perinatal, antibióticos, infecciones respiratorias en los primeros años). Puede haber fracturas post-eruptivas del esmalte y alta sensibilidad.</li>
            <li><strong>Hipoplasia del esmalte:</strong> defecto cuantitativo (falta de esmalte) — fositas, surcos horizontales. Causa: traumatismo del diente temporal (Turner), infecciones sistémicas, prematuridad.</li>
          </ul>

          <h4 style="color:var(--verde-dark)">🚫 Hábitos nocivos y sus consecuencias</h4>
          <ul>
            <li><strong>Succión digital / chupete prolongado:</strong> mordida abierta anterior, protrusión de incisivos superiores, mordida cruzada posterior, paladar ojival.</li>
            <li><strong>Deglución atípica (empuje lingual):</strong> mordida abierta, diastema.</li>
            <li><strong>Respiración bucal:</strong> paladar ojival, incompetencia labial, cara larga adenoidea, mordida cruzada.</li>
            <li><strong>Onicofagia:</strong> desgaste incisal, atrición.</li>
            <li><strong>Bruxismo infantil:</strong> a menudo transitorio (asociado a recambio); observar.</li>
            <li><strong>Interposición labial/lingual:</strong> maloclusiones.</li>
          </ul>
          <p><strong>Manejo:</strong> educación al niño y padres, refuerzo positivo, rejilla lingual o placas ortopédicas si persiste tras los 4-5 años.</p>

          <p style="background:#fff9e6; padding:0.7rem; border-radius:8px; border-left:3px solid var(--amarillo)">
            <strong>💡 Perla clínica:</strong> el <strong>mesiodens</strong> puede impedir la erupción de los incisivos superiores. Ante un diente central superior sin erupcionar tras los 8 años, tomar radiografía oclusal y periapical para descartarlo.
          </p>
        `
      },
      {
        titulo: '2.3-2.5 Higiene, caries y prevención',
        contenido: `
          <p><strong>Higiene por edad:</strong> 0-3 años cepillado por padres con gasa/dedal, pasta con 1000 ppm F- (grano de arroz). 3-6 años supervisión, cantidad de arveja. >6 años cepillado autónomo supervisado.</p>
          <p><strong>Caries de la primera infancia (CPI):</strong> ≥1 superficie cariada, perdida u obturada en <71 meses. <strong>Caries del biberón:</strong> patrón típico afecta incisivos superiores.</p>
          <p><strong>Selladores:</strong> indicados en fosas y fisuras profundas de molares recién erupcionados y en pacientes de alto riesgo. Técnica: aislamiento absoluto/relativo, grabado 30s, lavado, secado, aplicación (resinoso o ionomérico).</p>
          <p><strong>Flúor:</strong></p>
          <ul>
            <li><strong>Barniz al 5% NaF (22.600 ppm):</strong> aplicación semestral en riesgo bajo/moderado, trimestral en alto.</li>
            <li><strong>Gel APF 1.23%:</strong> contraindicado en restauraciones cerámicas y composites (ácido).</li>
            <li><strong>Enjuagues 0.05% diario / 0.2% semanal.</strong></li>
            <li><strong>SDF (fluoruro de diamino de plata) al 38%:</strong> detiene caries; ennegrece.</li>
          </ul>
        `
      },
      {
        titulo: '2.6 Alteraciones pulpares en deciduos',
        contenido: `
          <p><strong>Diagnóstico:</strong> pruebas de vitalidad (poco confiables en niños), sintomatología, radiografía.</p>
          <p><strong>Tratamientos:</strong></p>
          <ul>
            <li><strong>Recubrimiento pulpar indirecto:</strong> dentina afectada residual + hidróxido de calcio/MTA/Biodentine.</li>
            <li><strong>Pulpotomía:</strong> pulpa cameral vital inflamada reversible; medicamentos: formocresol, sulfato férrico al 15.5%, MTA.</li>
            <li><strong>Pulpectomía:</strong> pulpa radicular necrótica; obturación con óxido de zinc-eugenol o pasta yodoformada (reabsorbibles).</li>
          </ul>
          <p><strong>Anestesia en niños:</strong> dosis máxima lidocaína 2% + epinefrina 1:100.000 = <strong>7 mg/kg</strong> (máx 500 mg). Articaína 4% = 7 mg/kg. Usar la mínima cantidad posible.</p>
        `
      },
      {
        titulo: '2.7 Traumatismos dentoalveolares',
        contenido: `
          <h4 style="color:var(--verde-dark)">📋 Clasificación de Andreasen (OMS)</h4>
          <p><strong>Lesiones de tejidos duros dentales y de la pulpa:</strong></p>
          <ul>
            <li><strong>Infracción (fisura):</strong> fractura incompleta del esmalte sin pérdida de estructura.</li>
            <li><strong>Fractura no complicada de corona:</strong> solo esmalte / esmalte-dentina sin exposición pulpar.</li>
            <li><strong>Fractura complicada de corona:</strong> con exposición pulpar.</li>
            <li><strong>Fractura no complicada corono-radicular:</strong> esmalte-dentina-cemento, sin pulpa expuesta.</li>
            <li><strong>Fractura complicada corono-radicular:</strong> con exposición pulpar.</li>
            <li><strong>Fractura radicular:</strong> cemento-dentina-pulpa. Puede ser en tercio apical, medio o cervical.</li>
          </ul>
          <p><strong>Lesiones de tejidos periodontales de sostén:</strong></p>
          <ul>
            <li><strong>Concusión:</strong> sin desplazamiento, dolor a la percusión.</li>
            <li><strong>Subluxación:</strong> movilidad aumentada sin desplazamiento; sangrado del surco.</li>
            <li><strong>Luxación lateral:</strong> desplazamiento en dirección no axial + fractura alveolar.</li>
            <li><strong>Luxación extrusiva:</strong> desplazamiento parcial fuera del alveolo.</li>
            <li><strong>Luxación intrusiva:</strong> desplazamiento hacia el hueso (peor pronóstico).</li>
            <li><strong>Avulsión:</strong> salida completa del alveolo.</li>
          </ul>
          <p><strong>Lesiones del hueso alveolar:</strong> conminución, fractura de la pared, fractura del proceso alveolar, fractura maxilar o mandibular.</p>
          <p><strong>Lesiones de tejidos blandos:</strong> laceración, contusión, abrasión.</p>

          <h4 style="color:var(--verde-dark)">🔍 Anamnesis y examen</h4>
          <p><strong>Historia clínica:</strong></p>
          <ul>
            <li><strong>Cuándo:</strong> tiempo transcurrido (crítico para avulsión).</li>
            <li><strong>Dónde:</strong> lugar (riesgo de contaminación → tétanos).</li>
            <li><strong>Cómo:</strong> mecanismo (evaluar otras lesiones asociadas).</li>
            <li><strong>Estado inmunización antitetánica.</strong></li>
            <li><strong>Antecedentes médicos:</strong> pérdida de conciencia, cefalea, vómito, amnesia (descartar TCE).</li>
          </ul>
          <p><strong>Examen clínico:</strong> tejidos blandos, alveolar, movilidad, oclusión, percusión, sensibilidad, transiluminación, cambio de color.</p>
          <p><strong>Pruebas:</strong> vitalidad térmica y eléctrica (pueden dar falso negativo hasta 3 meses post-trauma), radiografías (periapical, oclusal), CBCT si hay sospecha de fractura radicular.</p>

          <h4 style="color:var(--verde-dark)">🚑 Tratamiento urgente por tipo</h4>
          <p><strong>Fractura no complicada de corona:</strong> restauración con resina, monitorizar vitalidad. Si es de esmalte-dentina, cubrir dentina con ionómero o hidróxido de calcio antes de la resina.</p>
          <p><strong>Fractura complicada de corona (con exposición pulpar):</strong> según tiempo y tamaño de exposición:</p>
          <ul>
            <li><strong>Recubrimiento pulpar directo:</strong> exposición pequeña (<1 mm), <24 h, con MTA o hidróxido de calcio.</li>
            <li><strong>Pulpotomía parcial (Cvek):</strong> remover 2 mm de pulpa expuesta, colocar MTA — de elección en dientes jóvenes con ápice inmaduro para permitir apexogénesis.</li>
            <li><strong>Pulpectomía / endodoncia:</strong> si la pulpa está necrótica o el tiempo es prolongado.</li>
          </ul>
          <p><strong>Fractura radicular:</strong> reposición del fragmento coronario, ferulización semirrígida 4 semanas (12 semanas si es cervical).</p>
          <p><strong>Concusión:</strong> observación, dieta blanda 1 semana.</p>
          <p><strong>Subluxación:</strong> ferulización opcional 2 semanas si hay movilidad.</p>
          <p><strong>Luxación extrusiva/lateral:</strong> reposición + férula semirrígida 2 semanas (4 semanas en lateral con fractura alveolar).</p>
          <p><strong>Luxación intrusiva:</strong>
            <ul>
              <li><em>Diente inmaduro:</em> permitir reerupción espontánea (2-4 sem).</li>
              <li><em>Diente maduro:</em> reposicionar quirúrgicamente u ortodóncicamente + endodoncia (alto riesgo de necrosis).</li>
            </ul>
          </p>

          <h4 style="color:var(--verde-dark)">🦷 Avulsión — protocolo detallado</h4>
          <p><strong>DIENTE PERMANENTE avulsionado:</strong></p>
          <ol>
            <li><strong>En el lugar del accidente:</strong> tomar el diente por la <em>corona</em>, no tocar la raíz. Enjuagar con agua fría 10 s si está sucio. Reimplantar inmediatamente si es posible. Morder gasa para mantenerlo.</li>
            <li><strong>Medios de conservación (mejor a peor):</strong> <strong>HBSS (solución Hank)</strong> > leche fría > suero fisiológico > saliva (en vestíbulo del paciente adulto responsable) > agua (último recurso).</li>
            <li><strong>Tiempo extraoral seco crítico:</strong> <em>&lt;30 min</em> = pronóstico bueno; <em>30-60 min</em> = pronóstico reservado; <em>&gt;60 min</em> = necrosis segura del ligamento.</li>
            <li><strong>En consulta:</strong>
              <ul>
                <li>Si <60 min y con medio adecuado: enjuagar con SF, reimplantar suavemente, verificar posición con radiografía, ferulizar semirrígido 2 semanas, prescribir amoxicilina 500 mg c/8h x 7 días + enjuagues de clorhexidina 0.12% + refuerzo antitetánico si corresponde.</li>
                <li>Si >60 min seco (ápice cerrado): remover ligamento necrótico con gasa + fluoruro de sodio 2% (2 min) para reducir reabsorción por reemplazo, endodoncia extraoral, reimplantar, ferulización 4 semanas.</li>
                <li><strong>Endodoncia:</strong> a los 7-10 días post-reimplante en ápice cerrado. En ápice abierto se espera revascularización (control con vitalidad).</li>
              </ul>
            </li>
          </ol>
          <p><strong>DIENTE DECIDUO avulsionado:</strong> <strong>NO se reimplanta</strong>. Riesgo de daño al germen del diente permanente sucesor.</p>

          <h4 style="color:var(--verde-dark)">🩹 Ferulización</h4>
          <ul>
            <li><strong>Semirrígida (flexible):</strong> alambre 0.3-0.4 mm + resina, permite ligera movilidad fisiológica → cicatrización del ligamento sin anquilosis.</li>
            <li><strong>Rígida:</strong> solo en fracturas alveolares.</li>
          </ul>

          <h4 style="color:var(--verde-dark)">⚠️ Complicaciones y secuelas</h4>
          <ul>
            <li><strong>Necrosis pulpar:</strong> más frecuente en luxación intrusiva y avulsión.</li>
            <li><strong>Reabsorción radicular:</strong>
              <ul>
                <li><em>Inflamatoria interna/externa:</em> asociada a necrosis; se detiene con endodoncia.</li>
                <li><em>Por reemplazo (anquilosis):</em> raíz reemplazada por hueso; progresiva.</li>
                <li><em>De superficie:</em> autolimitada.</li>
              </ul>
            </li>
            <li><strong>Obliteración canalicular:</strong> dentina reparativa que oblitera el conducto — solo endodoncia si hay síntomas o lesión periapical.</li>
            <li><strong>Discoloración:</strong> gris (necrosis), rosa (reabsorción interna), amarilla (obliteración).</li>
          </ul>
          <p><strong>Secuelas en germen del diente permanente (por trauma del temporal):</strong> hipoplasia (mancha blanca/amarilla), dilaceración, detención de la formación radicular, duplicación radicular, malformación coronaria, erupción ectópica.</p>

          <p style="background:#fff9e6; padding:0.7rem; border-radius:8px; border-left:3px solid var(--amarillo)">
            <strong>💡 Perla clínica IADT 2020:</strong> ante una avulsión, si NO se puede reimplantar en el lugar, colocar el diente en <strong>leche fría</strong> (disponibilidad universal) y acudir en menos de 30 minutos.
          </p>
        `
      }
    ],
    bibliografia: [
      'Boj, Catalá, Mendoza, Planells & Cortés (2019). Odontopediatría.',
      'Assed (2018). Tratado de Odontopediatría 2ª ed.',
      'Dean (2018). McDonald y Avery 10ª ed.'
    ]
  },

  {
    id: 'cirugia',
    numero: 3,
    nombre: 'Cirugía',
    emoji: '🔪',
    peso: 13,
    color: '#f6c667',
    descripcion: 'Exodoncia, anestesia, infecciones odontogénicas y urgencias.',
    subcomponentes: [
      {
        titulo: '3.1 Diagnóstico clínico y complementario',
        contenido: `
          <p><strong>Anamnesis:</strong> antecedentes médicos, alergias, medicamentos (anticoagulantes, bifosfonatos), hábitos.</p>
          <p><strong>Imágenes:</strong> periapical (detalle apical/marginal), panorámica (visión general de maxilares, terceros molares), <strong>tomografía CBCT</strong> (3D: relación con canal mandibular, seno maxilar, implantes).</p>
          <p><strong>Laboratorio:</strong> BH, TP/TTP, INR (anticoagulados), glicemia, VIH, hepatitis según riesgo.</p>
        `
      },
      {
        titulo: '3.2 Anestesia',
        contenido: `
          <h4 style="color:var(--verde-dark)">🧠 Anatomía del nervio trigémino (V par craneal)</h4>
          <p>Es el mayor de los nervios craneales, con función sensitiva de la cara y motora de los músculos masticadores. Sale del ganglio de Gasser (semilunar) en tres ramas:</p>

          <p><strong>V1 - Oftálmico (sensitivo puro):</strong> lagrimal, frontal, nasociliar. Inerva frente, párpado superior, dorso nasal, córnea. <em>No relevante para anestesia dental</em>.</p>

          <p><strong>V2 - Maxilar (sensitivo puro):</strong> sale por foramen redondo mayor. Ramas para el maxilar:</p>
          <ul>
            <li><strong>Nervio infraorbitario:</strong> emerge por foramen infraorbitario; da ramas <em>alveolares superiores anteriores</em> (incisivos y caninos superiores) y <em>medio</em> (premolares y raíz mesiovestibular del 1º molar) [presente en 30-70%].</li>
            <li><strong>Alveolar superior posterior:</strong> molares superiores (excepto raíz MV del 1º molar).</li>
            <li><strong>Palatino mayor:</strong> mucosa palatina posterior desde 2º premolar hasta 3º molar.</li>
            <li><strong>Nasopalatino (esfenopalatino):</strong> mucosa palatina anterior (hasta caninos), emerge por foramen incisivo.</li>
          </ul>

          <p><strong>V3 - Mandibular (MIXTO: sensitivo y motor):</strong> sale por foramen oval. Ramas relevantes:</p>
          <ul>
            <li><strong>Nervio alveolar inferior:</strong> pieza clave. Entra al foramen mandibular (protegido por la <em>língula</em>), recorre el canal dentario, da ramas dentales/alveolares y termina como <strong>nervio mentoniano</strong> (por foramen mentoniano — sensibilidad del labio inferior y mucosa vestibular anterior) y <strong>nervio incisivo</strong> (incisivos y caninos inferiores).</li>
            <li><strong>Nervio lingual:</strong> corre paralelo y anterior al alveolar inferior; sensibilidad de los 2/3 anteriores de la lengua, piso de boca y encía lingual.</li>
            <li><strong>Nervio bucal (largo):</strong> mucosa vestibular de molares inferiores (NO piezas dentales, solo mucosa).</li>
            <li><strong>Nervio auriculotemporal, milohioideo</strong> (accesorio: puede inervar incisivos y molares inferiores).</li>
            <li><strong>Ramas motoras:</strong> maseterino, temporales profundos, pterigoideos → músculos masticadores.</li>
          </ul>

          <h4 style="color:var(--verde-dark)">💉 Técnicas de anestesia — MAXILAR</h4>
          <ul>
            <li><strong>Infiltrativa supraperióstica (paraapical):</strong> técnica más frecuente en maxilar por su hueso cortical delgado y poroso. Se deposita en fondo de vestíbulo apical al diente diana. Anestesia pulpa + tejidos vestibulares.</li>
            <li><strong>Bloqueo del nervio alveolar superior posterior (tuberosidad):</strong> molares superiores. Riesgo: hematoma del plexo pterigoideo (post-tuberosidad).</li>
            <li><strong>Bloqueo del alveolar superior anterior (infraorbitario):</strong> incisivos, canino y premolares superiores.</li>
            <li><strong>Bloqueo del nervio palatino mayor:</strong> a 1 cm mesial del foramen (2º-3º molar superior).</li>
            <li><strong>Bloqueo del nervio nasopalatino:</strong> por papila incisiva. <em>La más dolorosa</em>; usar anestesia tópica previa.</li>
          </ul>

          <h4 style="color:var(--verde-dark)">💉 Técnicas de anestesia — MANDIBULAR</h4>
          <p>El hueso cortical mandibular es denso → la infiltración raramente funciona para pulpa. Se requieren bloqueos tronculares.</p>
          <ul>
            <li><strong>Bloqueo del nervio alveolar inferior (Técnica de Spix, directa):</strong>
              <ul>
                <li><em>Referencias:</em> línea oclusal de los molares inferiores, borde anterior de la rama mandibular (línea oblicua interna), rafe pterigomandibular (medial), escotadura coronoidea (con dedo pulgar).</li>
                <li><em>Punto de inserción:</em> ~1 cm por encima del plano oclusal, en la unión del tercio medial con los 2/3 laterales del espacio entre los pulgar (línea oblicua) y el rafe.</li>
                <li><em>Angulación:</em> jeringa desde los premolares del lado contrario, paralela al plano oclusal.</li>
                <li><em>Profundidad:</em> hasta contactar hueso (~20-25 mm), retirar 1 mm, aspirar, depositar 1.5 mL. Anestesia el <em>alveolar inferior + lingual</em> (por proximidad).</li>
              </ul>
            </li>
            <li><strong>Técnica de Gow-Gates (bloqueo alto):</strong> más segura; se dirige hacia el cuello del cóndilo. Anestesia todo el V3 (incluye bucal, milohioideo, auriculotemporal).</li>
            <li><strong>Técnica de Vazirani-Akinosi (boca cerrada):</strong> ideal en trismus.</li>
            <li><strong>Bloqueo del nervio bucal:</strong> complemento en cirugía de molares inferiores (encía vestibular).</li>
            <li><strong>Bloqueo del nervio mentoniano/incisivo:</strong> por foramen mentoniano (entre premolares).</li>
            <li><strong>Técnicas complementarias:</strong>
              <ul>
                <li><em>Intraligamentaria (PDL):</em> jeringa a presión, anestesia rápida, 1 diente.</li>
                <li><em>Intraseptal:</em> aguja en tabique interdental óseo.</li>
                <li><em>Intraósea:</em> perforación cortical + inyección (STA, X-tip).</li>
                <li><em>Intrapulpar:</em> último recurso en pulpitis irreversible con anestesia fallida.</li>
              </ul>
            </li>
          </ul>

          <h4 style="color:var(--verde-dark)">⚠️ Accidentes y complicaciones</h4>
          <p><strong>Locales:</strong></p>
          <ul>
            <li><strong>Hematoma:</strong> post-tuberosidad (plexo pterigoideo), submandibular. Manejo: presión, frío 24 h, calor después, monitoreo.</li>
            <li><strong>Parestesia:</strong> lesión mecánica o química al nervio (más frecuente con articaína al 4% en bloqueo del alveolar inferior). Generalmente reversible en semanas-meses.</li>
            <li><strong>Parálisis facial transitoria:</strong> anestésico depositado en parótida (Spix muy posterior). Ojo: proteger córnea; se recupera con la duración del anestésico.</li>
            <li><strong>Trismus:</strong> por lesión del pterigoideo medial o inyecciones múltiples.</li>
            <li><strong>Necrosis por vasoconstrictor:</strong> más frecuente en paladar por menor vascularización.</li>
            <li><strong>Fractura de aguja:</strong> nunca introducir la aguja hasta el cono; nunca cambiar dirección con la aguja dentro del tejido.</li>
            <li><strong>Ulceración post-anestésica</strong> (autolesión por mordida).</li>
          </ul>

          <p><strong>Sistémicas:</strong></p>
          <ul>
            <li><strong>Reacción tóxica:</strong> por inyección intravascular o sobredosis. Fase 1 (excitación SNC): mareo, tinnitus, temblor, convulsiones. Fase 2 (depresión SNC): sedación, coma, paro respiratorio. Cardiovascular: bradicardia, hipotensión, paro. <em>Manejo:</em> soporte vital, oxígeno, benzodiacepina en convulsión.</li>
            <li><strong>Reacción psicógena/síncope:</strong> la más frecuente. Trendelenburg.</li>
            <li><strong>Reacción alérgica:</strong> rara con amidas (más al conservante metilparabeno o al sulfito antioxidante).</li>
            <li><strong>Crisis hipertensiva:</strong> por vasoconstrictor + patología no controlada.</li>
          </ul>

          <p style="background:#fff9e6; padding:0.7rem; border-radius:8px; border-left:3px solid var(--amarillo)">
            <strong>💡 Perla clínica:</strong> <strong>ASPIRAR SIEMPRE</strong> antes de inyectar. La aspiración positiva evita reacciones tóxicas y crisis por adrenalina IV. Es especialmente crítica en técnica de Spix (arteria alveolar inferior) y bloqueo alveolar superior posterior (plexo pterigoideo).
          </p>
        `
      },
      {
        titulo: '3.3 Técnica quirúrgica y exodoncia',
        contenido: `
          <p><strong>Instrumental:</strong> sindesmótomo, elevadores rectos y curvos (Winter, Cryer), fórceps específicos por pieza, mango de bisturí #3 + hoja #15, periostótomos, curetas, portagujas.</p>
          <p><strong>Fases:</strong></p>
          <ul>
            <li><strong>Preoperatorio:</strong> historia, examen, radiografía, plan.</li>
            <li><strong>Operatorio:</strong> asepsia, anestesia, sindesmotomía, luxación, prehensión, avulsión.</li>
            <li><strong>Postoperatorio:</strong> revisión alveolar, sutura si es necesario, indicaciones (frío, dieta blanda, no enjuague 24h, no fumar).</li>
          </ul>
          <p><strong>Complicaciones inmediatas:</strong> fractura radicular/coronaria, luxación de piezas vecinas, comunicación bucosinusal, fractura de tuberosidad/mandíbula, deglución/aspiración.</p>
          <p><strong>Complicaciones postoperatorias:</strong> <strong>alveolitis seca</strong> (3-5 días post, dolor intenso, alveolo vacío), alveolitis húmeda, infección, hemorragia, trismus.</p>
        `
      },
      {
        titulo: '3.4 Cirugía preprotésica',
        contenido: `
          <p><strong>Tejidos blandos:</strong> frenectomía labial/lingual, vestibuloplastia, remoción de épulis fisurado, hiperplasia por prótesis.</p>
          <p><strong>Tejidos duros:</strong> alveoloplastia, exostosis, torus palatino/mandibular, remodelado del proceso alveolar previo a prótesis.</p>
        `
      },
      {
        titulo: '3.5 Infecciones odontogénicas',
        contenido: `
          <h4 style="color:var(--verde-dark)">🦠 Origen y microbiología</h4>
          <p><strong>Fuentes principales:</strong> pulpar (caries → pulpitis → necrosis → periapical) y periodontal (bolsa periodontal → absceso).</p>
          <p><strong>Microbiología:</strong> polimicrobiana, mixta aerobio-anaerobio. Predominan:</p>
          <ul>
            <li><strong>Cocos aerobios Gram+:</strong> <em>Streptococcus viridans (mitis, anginosus, sanguinis)</em>.</li>
            <li><strong>Cocos anaerobios Gram+:</strong> <em>Peptostreptococcus</em>.</li>
            <li><strong>Bacilos anaerobios Gram−:</strong> <em>Prevotella, Fusobacterium, Porphyromonas</em>.</li>
          </ul>
          <p><strong>Evolución típica:</strong> serositis → celulitis → absceso.</p>

          <h4 style="color:var(--verde-dark)">🔥 Diferencias entre celulitis y absceso</h4>
          <table style="width:100%; border-collapse:collapse; font-size:0.9rem; margin:0.5rem 0">
            <tr style="background:var(--verde-light)"><th style="padding:0.5rem">Característica</th><th>Celulitis</th><th>Absceso</th></tr>
            <tr><td style="padding:0.4rem"><strong>Duración</strong></td><td>Aguda (&lt;5 días)</td><td>Crónica (&gt;5 días)</td></tr>
            <tr><td style="padding:0.4rem"><strong>Dolor</strong></td><td>Severo, difuso</td><td>Localizado</td></tr>
            <tr><td style="padding:0.4rem"><strong>Bordes</strong></td><td>Difusos</td><td>Bien definidos</td></tr>
            <tr><td style="padding:0.4rem"><strong>Palpación</strong></td><td>Dura (leñosa)</td><td>Fluctuante</td></tr>
            <tr><td style="padding:0.4rem"><strong>Pus</strong></td><td>No</td><td>Sí</td></tr>
            <tr><td style="padding:0.4rem"><strong>Bacterias</strong></td><td>Aerobias</td><td>Mixtas/anaerobias</td></tr>
          </table>

          <h4 style="color:var(--verde-dark)">🗺️ Espacios anatómicos</h4>
          <p><strong>Primarios maxilares:</strong></p>
          <ul>
            <li><strong>Vestibular:</strong> el más frecuente.</li>
            <li><strong>Palatino:</strong> tumefacción palatina.</li>
            <li><strong>Canino (fosa canina):</strong> edema del surco nasogeniano y párpado inferior. Riesgo de trombosis del seno cavernoso.</li>
            <li><strong>Bucal:</strong> entre buccinador y piel.</li>
            <li><strong>Infratemporal:</strong> por 3º molar superior.</li>
          </ul>
          <p><strong>Primarios mandibulares:</strong></p>
          <ul>
            <li><strong>Vestibular:</strong> el más frecuente.</li>
            <li><strong>Sublingual:</strong> por raíces por encima del milohioideo (incisivos, caninos, premolares). Eleva el piso de boca.</li>
            <li><strong>Submandibular:</strong> por raíces por debajo del milohioideo (molares).</li>
            <li><strong>Submentoniano:</strong> por incisivos inferiores.</li>
            <li><strong>Bucal.</strong></li>
          </ul>
          <p><strong>Secundarios y profundos (peligrosos):</strong> maseterino, pterigomandibular, temporal, parafaríngeo, retrofaríngeo, prevertebral, mediastínico.</p>

          <h4 style="color:var(--verde-dark)">🚨 Angina de Ludwig</h4>
          <p><strong>Definición:</strong> celulitis bilateral, rápidamente progresiva, de los espacios <em>submandibular, sublingual y submentoniano</em>. Origen frecuente: molares inferiores.</p>
          <p><strong>Clínica:</strong> edema pétreo, elevación de piso de boca ("lengua elevada"), voz gutural, disfagia, sialorrea, <strong>trismus, disnea, estridor</strong>. Fiebre alta, taquicardia.</p>
          <p><strong>Manejo:</strong> <strong>emergencia médica</strong> — traslado hospitalario inmediato, asegurar vía aérea (intubación despierta o cricotirotomía), drenaje quirúrgico bilateral, antibioticoterapia IV de amplio espectro (penicilina + metronidazol o ampicilina/sulbactam), UCI.</p>

          <h4 style="color:var(--verde-dark)">💊 Tratamiento farmacológico</h4>
          <p><strong>Principio: tratar el foco (endodoncia/exodoncia) + drenaje. El antibiótico es coadyuvante.</strong></p>
          <p><strong>Indicaciones de antibiótico:</strong> compromiso sistémico (fiebre, malestar), diseminación (celulitis, adenopatías), inmunosupresión, imposibilidad de tratamiento inmediato del foco, riesgo de endocarditis.</p>

          <p><strong>Esquemas (adulto):</strong></p>
          <ul>
            <li><strong>1ª línea:</strong> Amoxicilina 500 mg c/8h VO x 7 días (o 875 mg c/12h).</li>
            <li><strong>Infección moderada-severa:</strong> Amoxicilina + ácido clavulánico 875/125 mg c/12h o 500/125 mg c/8h.</li>
            <li><strong>Alergia a penicilina:</strong> Clindamicina 300 mg c/8h VO (excelente en hueso). Alternativa: azitromicina 500 mg c/24h x 3-5 días.</li>
            <li><strong>Anaerobios predominantes / periodontitis agresiva:</strong> Amoxicilina + Metronidazol 500 mg c/8h (esquema combinado).</li>
            <li><strong>Severa hospitalaria:</strong> ampicilina/sulbactam IV, ceftriaxona + metronidazol, piperacilina/tazobactam.</li>
          </ul>

          <h4 style="color:var(--verde-dark)">🦴 Osteomielitis maxilar</h4>
          <p>Infección del hueso medular; más frecuente en mandíbula (cortical grueso, vascularización terminal).</p>
          <p><strong>Formas:</strong></p>
          <ul>
            <li><strong>Aguda supurada:</strong> dolor intenso, fiebre, edema, movilidad de dientes, parestesia mentoniana (signo de Vincent), trismus. Radiografía: puede ser normal en fases iniciales.</li>
            <li><strong>Crónica supurada:</strong> radiolucidez con radiopacidades (secuestro óseo), fístulas de drenaje.</li>
            <li><strong>Osteomielitis crónica esclerosante difusa:</strong> radiopacidad, dolor recurrente.</li>
            <li><strong>Garré (periostitis proliferativa):</strong> en niños, "piel de cebolla" en radiografía.</li>
          </ul>
          <p><strong>Tratamiento:</strong> antibiótico prolongado (4-6 semanas) + secuestrectomía + descorticación en formas refractarias.</p>

          <h4 style="color:var(--verde-dark)">💥 Osteonecrosis de los maxilares por medicamentos (MRONJ)</h4>
          <p><strong>Definición (AAOMS):</strong> hueso expuesto en la región maxilofacial persistente por &gt;8 semanas, en paciente con antecedente de tratamiento con antirresortivos y/o antiangiogénicos, <em>sin</em> antecedente de radioterapia.</p>
          <p><strong>Medicamentos implicados:</strong></p>
          <ul>
            <li><strong>Bifosfonatos:</strong> alendronato, risedronato (VO); pamidronato, zoledronato (IV — mayor riesgo).</li>
            <li><strong>Antirresortivos monoclonales:</strong> denosumab (anti-RANKL).</li>
            <li><strong>Antiangiogénicos:</strong> bevacizumab, sunitinib.</li>
          </ul>
          <p><strong>Factores de riesgo:</strong> vía IV, potencia del fármaco, duración &gt;3 años, procedimientos invasivos (exodoncias, implantes), corticoides, diabetes, tabaquismo, quimioterapia.</p>
          <p><strong>Estadios (AAOMS):</strong> 0 (síntomas sin exposición ósea), 1 (hueso expuesto asintomático), 2 (con infección), 3 (extensión más allá del hueso alveolar, fístula extraoral, fractura patológica).</p>
          <p><strong>Prevención:</strong> examen bucal completo <strong>antes</strong> de iniciar terapia; eliminar focos infecciosos y piezas sin pronóstico. Evitar cirugía invasiva durante el tratamiento IV. Educación en higiene, controles cada 3-6 meses.</p>
          <p><strong>Manejo:</strong> conservador (enjuagues clorhexidina, antibiótico, analgesia); quirúrgico solo en estadios avanzados. La suspensión del bifosfonato ("drug holiday") es <em>controvertida</em>.</p>

          <p style="background:#fff9e6; padding:0.7rem; border-radius:8px; border-left:3px solid var(--amarillo)">
            <strong>💡 Perla clínica:</strong> ante un paciente con parestesia del labio inferior espontánea (signo de Vincent) sin trauma, considerar <strong>osteomielitis mandibular</strong> o incluso <strong>metástasis</strong>. No ignorar.
          </p>
        `
      },
      {
        titulo: '3.6 Urgencias en cirugía',
        contenido: `
          <p><strong>Heridas bucofaciales:</strong> limpieza abundante, control de hemorragia, sutura por planos (mucosa, muscular, piel). Profilaxis antitetánica.</p>
          <p><strong>Traumatismos alveolodentarios:</strong> reducir fractura alveolar, ferulizar dientes desplazados, radiografía de control.</p>
        `
      }
    ],
    bibliografia: [
      'Hupp, Ellis & Tucker (2020). Cirugía Oral y Maxilofacial 7ª ed.',
      'Escoda & Aytés (2015). Tratado de Cirugía Bucal.',
      'Donado & Martínez (2025). Cirugía bucal 6ª ed.'
    ]
  },

  {
    id: 'rehabilitacion',
    numero: 4,
    nombre: 'Rehabilitación Oral',
    emoji: '👑',
    peso: 12,
    color: '#c8a6ff',
    descripcion: 'Oclusión, prótesis fija, removible, total y rehabilitación de dientes endodonciados.',
    subcomponentes: [
      {
        titulo: '4.1 Oclusión',
        contenido: `
          <h4 style="color:var(--verde-dark)">⚙️ Sistema estomatognático</h4>
          <p>Unidad funcional integrada por: dientes, ATM, músculos (masticadores + suprahioideos + infrahioideos + faciales), articulación dentaria (contactos), SNC (regulación).</p>
          <p><strong>Funciones:</strong> masticación, deglución, fonación, respiración, estética/expresión.</p>

          <h4 style="color:var(--verde-dark)">🦴 Articulación temporomandibular (ATM)</h4>
          <p><strong>Tipo:</strong> <em>ginglimoartrodial</em> (combina rotación y traslación). Bilateral, sinovial, con disco articular.</p>
          <p><strong>Componentes:</strong></p>
          <ul>
            <li><strong>Cóndilo mandibular</strong> (superficie articular convexa cubierta de fibrocartílago).</li>
            <li><strong>Fosa mandibular y eminencia articular</strong> del temporal.</li>
            <li><strong>Disco articular:</strong> bicóncavo, fibrocartilaginoso, avascular en el centro. Divide en compartimiento superior (traslación) e inferior (rotación).</li>
            <li><strong>Cápsula y ligamentos:</strong> temporomandibular (lateral, principal), esfenomandibular, estilomandibular.</li>
            <li><strong>Membrana sinovial + líquido sinovial.</strong></li>
          </ul>
          <p><strong>Movimientos:</strong></p>
          <ul>
            <li><strong>Rotación (0-25 mm de apertura):</strong> compartimiento inferior; puro movimiento de bisagra.</li>
            <li><strong>Traslación (>25 mm):</strong> compartimiento superior; el cóndilo se desliza hacia adelante y abajo por la eminencia.</li>
            <li>Apertura máxima normal: <strong>40-55 mm</strong>.</li>
            <li>Lateralidad: 10-12 mm hacia cada lado.</li>
            <li>Protrusión: 8-10 mm.</li>
          </ul>
          <p><strong>Músculos elevadores (cierre):</strong> masetero, temporal, pterigoideo medial.</p>
          <p><strong>Depresores (apertura):</strong> pterigoideo lateral (haz inferior), suprahioideos (digástrico, milohioideo, geniohioideo).</p>
          <p><strong>Protrusor:</strong> pterigoideo lateral (haces superior e inferior actúan coordinados).</p>

          <h4 style="color:var(--verde-dark)">🔬 Fisiopatología de la oclusión y ATM</h4>
          <p><strong>Trastornos temporomandibulares (TTM):</strong></p>
          <ul>
            <li><strong>Musculares (mialgia, dolor miofascial):</strong> los más frecuentes. Dolor difuso, puntos gatillo.</li>
            <li><strong>Discales:</strong>
              <ul>
                <li><em>Desplazamiento discal con reducción:</em> click de apertura y cierre.</li>
                <li><em>Desplazamiento sin reducción (bloqueo cerrado):</em> apertura limitada (&lt;35 mm), desviación al lado afectado.</li>
              </ul>
            </li>
            <li><strong>Artralgias:</strong> capsulitis, sinovitis.</li>
            <li><strong>Osteoartritis:</strong> crepitación, degeneración.</li>
            <li><strong>Anquilosis:</strong> fusión ósea/fibrosa.</li>
            <li><strong>Luxación mandibular:</strong> el cóndilo sobrepasa la eminencia y no puede regresar.</li>
          </ul>
          <p><strong>Diagnóstico:</strong> criterios DC/TMD; RM (gold standard para disco), CBCT (hueso), examen clínico.</p>

          <h4 style="color:var(--verde-dark)">📏 Dimensión vertical</h4>
          <ul>
            <li><strong>DVO (oclusión):</strong> distancia entre puntos anatómicos (subnasal-mentón) con dientes en máxima intercuspidación.</li>
            <li><strong>DVR (reposo/postural):</strong> mandíbula en posición postural, sin contacto dental. Depende del tono muscular equilibrado (isotónico).</li>
            <li><strong>Espacio libre interoclusal (freeway space):</strong> DVR − DVO = <strong>2-4 mm</strong>. Fundamental preservar en rehabilitación.</li>
          </ul>
          <p><strong>Métodos para determinar DVO:</strong> métrico (compás de Willis), fonético (sonido /s/, /m/), deglución, resistencia muscular, cefalometría.</p>

          <h4 style="color:var(--verde-dark)">🎯 Posiciones mandibulares fundamentales</h4>
          <ul>
            <li><strong>Máxima intercuspidación (MIC) o oclusión habitual:</strong> posición con máximo número de contactos dentarios. Depende de los dientes.</li>
            <li><strong>Relación céntrica (RC):</strong> posición del cóndilo <em>más superior, anterior y medial</em> en la fosa articular, con el disco correctamente interpuesto. Es <em>independiente de los dientes</em>, reproducible y aceptada como posición terapéutica en rehabilitación total.</li>
            <li><strong>Discrepancia RC-MIC (slide):</strong> normal &lt;1 mm; si &gt;2 mm sugiere interferencia oclusal.</li>
            <li><strong>Oclusión céntrica:</strong> contacto dentario en RC (cuando MIC coincide con RC).</li>
            <li><strong>Posición postural:</strong> tono muscular equilibrado, mandíbula "flotando" sin contacto.</li>
          </ul>

          <h4 style="color:var(--verde-dark)">🛡️ Oclusión mutuamente protegida</h4>
          <p>Concepto de <strong>Stallard y Stuart</strong> (gnatología):</p>
          <ul>
            <li><strong>En MIC (oclusión):</strong> los <em>posteriores</em> (por su eje robusto y disposición) protegen a los anteriores del contacto axial excesivo. Los anteriores están ligeramente sin contacto (o muy leve).</li>
            <li><strong>En excursiones (protrusión / lateralidad):</strong> los <em>anteriores</em> (o el canino en lateralidad) protegen a los posteriores desocluyéndolos (desoclusión posterior).</li>
          </ul>

          <h4 style="color:var(--verde-dark)">🦷 Guías oclusales</h4>
          <ul>
            <li><strong>Guía anterior (protrusión):</strong> incisivos superiores guían el movimiento hacia adelante, desocluyendo posteriores.</li>
            <li><strong>Guía canina (lateralidad):</strong> canino del lado de trabajo desocluye posteriores. Ideal en dentición natural sana.</li>
            <li><strong>Función en grupo:</strong> varios dientes posteriores comparten la guía en lateralidad. Aceptable cuando la guía canina no existe o el canino es débil.</li>
            <li><strong>Oclusión balanceada bilateral:</strong> contactos simultáneos en ambos lados durante lateralidad. Indicada en <strong>prótesis totales</strong> (mejor estabilidad).</li>
            <li><strong>Balanceada unilateral (monoplano):</strong> solo lado de trabajo.</li>
          </ul>

          <h4 style="color:var(--verde-dark)">🎯 Contactos oclusales</h4>
          <ul>
            <li><strong>Contactos de trabajo:</strong> del lado del movimiento.</li>
            <li><strong>Contactos de balance/no trabajo:</strong> del lado opuesto — <em>interferencias</em> si son prematuros.</li>
            <li><strong>Interferencia protrusiva:</strong> contactos posteriores durante protrusión.</li>
            <li><strong>Prematuridad:</strong> contacto único que impide asentamiento completo.</li>
          </ul>

          <h4 style="color:var(--verde-dark)">📐 Determinantes de la oclusión</h4>
          <ul>
            <li><strong>Posteriores (condileos):</strong> inclinación de la eminencia articular, ángulo de Bennett (~15°), curvas de Spee y Wilson.</li>
            <li><strong>Anteriores:</strong> guía canina y anterior, overbite, overjet.</li>
          </ul>

          <p style="background:#fff9e6; padding:0.7rem; border-radius:8px; border-left:3px solid var(--amarillo)">
            <strong>💡 Perla clínica:</strong> los <strong>tratamientos oclusales</strong> conservadores (férula miorrelajante estabilizadora tipo Michigan) son <em>primera línea</em> en trastornos musculares. La cirugía y el ajuste oclusal irreversible se reservan para casos muy seleccionados.
          </p>
        `
      },
      {
        titulo: '4.2 Prótesis fija',
        contenido: `
          <p><strong>Indicaciones:</strong> restaurar dientes muy destruidos, reemplazar dientes ausentes con pilares adecuados, mejorar estética/función.</p>
          <p><strong>Contraindicaciones:</strong> mala higiene, enfermedad periodontal activa, pilares con soporte inadecuado, edad muy joven (cámara pulpar amplia).</p>
          <p><strong>Principios biomecánicos:</strong> <strong>Ley de Ante:</strong> superficie radicular de pilares ≥ superficie radicular de dientes a reemplazar.</p>
          <p><strong>Componentes puente fijo:</strong> retenedor, conector, póntico.</p>
          <p><strong>Preparaciones:</strong></p>
          <ul>
            <li><strong>Hombro (90°):</strong> para coronas totalmente cerámicas.</li>
            <li><strong>Chamfer / bisel:</strong> metal-cerámica.</li>
            <li><strong>Filo de cuchillo:</strong> restauraciones metálicas.</li>
          </ul>
          <p><strong>Materiales cerámicos:</strong></p>
          <ul>
            <li><strong>Feldespática:</strong> alta estética, baja resistencia (carillas).</li>
            <li><strong>Disilicato de litio (e.max):</strong> estética + resistencia (400 MPa), coronas anteriores/premolares.</li>
            <li><strong>Zirconia:</strong> alta resistencia (900-1200 MPa), coronas posteriores, puentes largos.</li>
          </ul>
          <p><strong>Cementos:</strong> ionómero (convencional/reforzado), fosfato de zinc, resinosos (autoadhesivos, autograbantes, convencionales).</p>
        `
      },
      {
        titulo: '4.3 Prótesis parcial removible',
        contenido: `
          <p><strong>Clasificación de Kennedy:</strong></p>
          <ul>
            <li><strong>Clase I:</strong> extremos libres bilaterales.</li>
            <li><strong>Clase II:</strong> extremo libre unilateral.</li>
            <li><strong>Clase III:</strong> brecha bilateral o unilateral con pilares en ambos extremos.</li>
            <li><strong>Clase IV:</strong> brecha anterior única cruzando línea media.</li>
          </ul>
          <p><strong>Reglas de Applegate:</strong> los espacios posteriores adicionales se cuentan como modificaciones; la clase IV no admite modificaciones.</p>
          <p><strong>Componentes:</strong> conector mayor y menor, retenedores directos e indirectos (ganchos: Ackers, RPI, RPA), apoyos oclusales, base, dientes.</p>
          <p><strong>Diseño:</strong> respeta principios biomecánicos: soporte, retención, estabilidad, reciprocidad.</p>
          <p><strong>Materiales:</strong> estructura metálica (cromo-cobalto), acetal, valplast (nylon termoplástico), Ti-Zr.</p>
        `
      },
      {
        titulo: '4.4 Prótesis total',
        contenido: `
          <p><strong>Rebordes edéntulos:</strong> zona de soporte primario (paladar duro, tuberosidades, reborde inferior) y secundario. Anatomía del sellado periférico.</p>
          <p><strong>Principios mecánicos:</strong></p>
          <ul>
            <li><strong>Retención:</strong> adhesión, cohesión, presión atmosférica, sellado periférico.</li>
            <li><strong>Estabilidad:</strong> resistencia al desplazamiento horizontal.</li>
            <li><strong>Soporte:</strong> resistencia al desplazamiento vertical hacia tejidos.</li>
          </ul>
          <p><strong>Impresiones:</strong> primaria con alginato o compuesto → cubeta individual → impresión definitiva con silicona pesada/liviana o polisulfuros/poliéter, con sellado periférico.</p>
          <p><strong>Montaje:</strong> arco facial + articulador semiajustable, registro RC.</p>
        `
      },
      {
        titulo: '4.5 Rehabilitación de dientes endodonciados',
        contenido: `
          <p><strong>Consideraciones:</strong> pérdida de estructura, deshidratación, fragilidad. La conservación de <strong>estructura coronaria remanente</strong> (efecto férula ≥1.5-2 mm) es el mejor predictor de éxito.</p>
          <p><strong>Postes:</strong> indicados cuando la estructura remanente es insuficiente para retener la restauración.</p>
          <ul>
            <li><strong>Fibra de vidrio:</strong> módulo elástico similar a dentina, estéticos, adhesivos.</li>
            <li><strong>Metálicos colados:</strong> mayor rigidez, indicados en dientes muy destruidos con conductos amplios/ovalados.</li>
          </ul>
          <p><strong>Contraindicaciones:</strong> conductos con curvatura severa, calcificados, fractura vertical.</p>
          <p><strong>Cementación:</strong> resinosa dual + protocolo adhesivo. Preparación del conducto: desobturación conservando 4-5 mm de gutapercha apical.</p>
        `
      }
    ],
    bibliografia: [
      'Alonso (2019). Desoclusión.',
      'Shillingburg et al. (2006). Fundamentos Esenciales en Prótesis Fija 3ª ed.',
      'Okeson (2019). Tratamiento de Oclusión y Afecciones TM 8ª ed.',
      'Rosenstiel, Land & Fujimoto (2016). Prótesis fija contemporánea 5ª ed.',
      'Carr, McGivney & Brown (2006). McCracken Prótesis Parcial Removible 11ª ed.',
      'Shen, Rawls & Esquivel-Upshaw (2022). Phillips. Ciencia de los Materiales Dentales.'
    ]
  },

  {
    id: 'endodoncia',
    numero: 5,
    nombre: 'Endodoncia',
    emoji: '🩺',
    peso: 9,
    color: '#ff9f7a',
    descripcion: 'Diagnóstico de patología pulpar y periapical, tratamiento endodóncico y complicaciones.',
    subcomponentes: [
      {
        titulo: '5.1 Diagnóstico pulpar y periapical',
        contenido: `
          <p><strong>Pruebas de vitalidad:</strong></p>
          <ul>
            <li><strong>Térmicas (frío):</strong> Endo-Ice, dióxido de carbono. Prueba más confiable.</li>
            <li><strong>Térmicas (calor):</strong> gutapercha calentada.</li>
            <li><strong>Eléctricas:</strong> vitalómetro.</li>
            <li><strong>Percusión (vertical/horizontal):</strong> valora estado periapical y periodontal.</li>
            <li><strong>Palpación:</strong> inflamación apical.</li>
            <li><strong>Cavitaria/mecánica:</strong> última opción.</li>
          </ul>
          <p><strong>Clasificación AAE de enfermedades pulpares:</strong></p>
          <ul>
            <li><strong>Pulpa normal.</strong></li>
            <li><strong>Pulpitis reversible:</strong> dolor breve a estímulos, cede al retirar. Tratamiento: eliminar causa.</li>
            <li><strong>Pulpitis irreversible sintomática:</strong> dolor espontáneo, prolongado, irradiado. TX endodóncico.</li>
            <li><strong>Pulpitis irreversible asintomática.</strong></li>
            <li><strong>Necrosis pulpar.</strong></li>
            <li><strong>Previamente tratado / iniciado.</strong></li>
          </ul>
          <p><strong>Enfermedades periapicales:</strong> periodontitis apical sintomática/asintomática, absceso apical agudo/crónico, osteítis condensante.</p>
          <p><strong>Imagenología:</strong> radiografía periapical (técnica paralelismo), <strong>CBCT</strong> para casos complejos (reabsorciones, perforaciones, conductos accesorios).</p>
        `
      },
      {
        titulo: '5.2 Tratamiento endodóncico',
        contenido: `
          <h4 style="color:var(--verde-dark)">🎯 Fases del tratamiento endodóncico</h4>
          <ol>
            <li>Anestesia + aislamiento absoluto (dique de goma obligatorio).</li>
            <li>Acceso coronario y cavitario.</li>
            <li>Localización y cateterización de conductos.</li>
            <li>Conductometría (longitud de trabajo).</li>
            <li>Preparación biomecánica (instrumentación + irrigación).</li>
            <li>Secado y obturación tridimensional.</li>
            <li>Restauración coronaria definitiva.</li>
          </ol>

          <h4 style="color:var(--verde-dark)">💉 Anestesia para endodoncia</h4>
          <p>En pulpitis irreversible aguda la anestesia troncular puede fallar por acidosis local. Estrategias:</p>
          <ul>
            <li>Anestésico de mayor liposolubilidad: <strong>articaína 4% + epi 1:100.000</strong> (excelente difusión).</li>
            <li>Refuerzos: intraligamentario (PDL), intraseptal, intraóseo (X-tip, STA), intrapulpar.</li>
            <li>Premedicar con AINE 1 h antes (ibuprofeno 600 mg) para reducir la inflamación pulpar.</li>
          </ul>

          <h4 style="color:var(--verde-dark)">🔑 Acceso coronario</h4>
          <p><strong>Objetivos:</strong> visión directa de los conductos, eliminación completa del techo cameral, extensión suficiente para instrumentación sin interferencias.</p>
          <p><strong>Forma de contorno según pieza:</strong></p>
          <ul>
            <li><strong>Incisivos y caninos:</strong> triangular (base incisal) o rectangular en superiores; palatino (superiores) o lingual (inferiores).</li>
            <li><strong>Premolares superiores:</strong> oval buco-lingual.</li>
            <li><strong>Premolares inferiores:</strong> oval.</li>
            <li><strong>Molares superiores:</strong> triangular (base mesial) — 3-4 conductos: MV, MV2 (si presente), DV, palatino.</li>
            <li><strong>Molares inferiores:</strong> trapezoidal (base mesial) — 3-4 conductos: MV, ML, distal (a veces dos).</li>
          </ul>

          <h4 style="color:var(--verde-dark)">📏 Conductometría (longitud de trabajo)</h4>
          <ul>
            <li><strong>Constricción apical:</strong> el punto ideal de terminación, generalmente 0.5-1 mm antes del ápice radiográfico.</li>
            <li><strong>Ápice radiográfico:</strong> extremo más apical visible en radiografía.</li>
            <li><strong>Foramen apical:</strong> el orificio de salida (puede estar desviado lateralmente).</li>
            <li><strong>Localizador apical electrónico:</strong> mide impedancia; el más preciso (Root ZX). Se combina siempre con radiografía de conductometría.</li>
            <li><strong>Regla:</strong> restar 0.5-1 mm a la longitud tentativa.</li>
          </ul>

          <h4 style="color:var(--verde-dark)">⚙️ Instrumentación</h4>
          <p><strong>Manual:</strong></p>
          <ul>
            <li><em>Limas K (Kerr):</em> corte por rotación + tracción.</li>
            <li><em>Limas H (Hedström):</em> corte por tracción; nunca rotar.</li>
            <li><em>Limas C+ / K-Flex:</em> flexibles para conductos curvos.</li>
          </ul>
          <p><strong>Técnicas manuales:</strong></p>
          <ul>
            <li><strong>Step-back (Paso atrás):</strong> se establece lima maestra apical (LMA) a la longitud de trabajo, luego limas de mayor calibre 1 mm más cortas cada vez (escalonado coronal). Ideal en conductos curvos.</li>
            <li><strong>Crown-down (Corono-apical):</strong> se inicia con limas grandes en tercio coronal y se progresa apicalmente con limas más pequeñas. Reduce empuje apical de detritus.</li>
            <li><strong>Técnica híbrida.</strong></li>
          </ul>
          <p><strong>Mecanizada (NiTi rotatorio / reciprocante):</strong></p>
          <ul>
            <li><em>ProTaper (Universal, Next, Gold):</em> conicidades progresivas variables.</li>
            <li><em>WaveOne Gold / Reciproc Blue:</em> reciprocantes, un solo instrumento en muchos casos.</li>
            <li><em>Ventajas:</em> más rápida, mejor forma cónica, menor riesgo de errores; requiere torque control.</li>
          </ul>

          <h4 style="color:var(--verde-dark)">💧 Irrigación</h4>
          <p><strong>Objetivos:</strong> limpieza mecánica, disolución de tejido orgánico, eliminación de barrillo dentinario, acción antimicrobiana.</p>
          <ul>
            <li><strong>Hipoclorito de sodio (NaOCl) 2.5-5.25%:</strong> el más importante. Disuelve tejido orgánico y necrótico; bactericida potente. Usar tibio (37°C) para mayor eficacia. <em>Cuidado:</em> no debe extruirse al periápice (accidente por hipoclorito).</li>
            <li><strong>EDTA 17% (Tubuliclean, RC-Prep):</strong> quelante que elimina el barrillo dentinario (smear layer) permitiendo penetración de irrigantes y sellado. Aplicar 1-3 min al final.</li>
            <li><strong>Clorhexidina 2%:</strong> antimicrobiano de amplio espectro, sustantividad. Alternativa cuando no se puede usar NaOCl. <em>Nunca mezclar con NaOCl</em> (forma paracloroanilina — potencialmente tóxica).</li>
            <li><strong>Ácido cítrico 10% / Suero fisiológico / MTAD:</strong> otros irrigantes.</li>
            <li><strong>Activación de irrigantes:</strong> sónica (EndoActivator), ultrasónica (PUI), láser (LAI), presión negativa (EndoVac). Mejora la limpieza en el tercio apical.</li>
          </ul>

          <h4 style="color:var(--verde-dark)">🕯️ Medicación intraconducto</h4>
          <ul>
            <li><strong>Hidróxido de calcio (Ca(OH)₂):</strong> el más usado. Antimicrobiano por pH alcalino (12.5), disuelve tejido necrótico. Ideal entre citas en casos con infección persistente. Cambio cada 1-4 semanas.</li>
            <li><strong>Formocresol, paramonoclorofenol alcanforado:</strong> antiguos, más tóxicos.</li>
            <li><strong>Antibióticos (LSTR):</strong> pasta triple (ciprofloxacino + metronidazol + minociclina).</li>
          </ul>

          <h4 style="color:var(--verde-dark)">🎯 Obturación endodóncica</h4>
          <p><strong>Objetivos (Schilder):</strong> obturación tridimensional hermética con conicidad uniforme, límite apical en constricción, sin sobreobturación, sin espacios vacíos.</p>
          <p><strong>Materiales:</strong></p>
          <ul>
            <li><strong>Gutapercha:</strong> núcleo principal (75% gutapercha + 15% óxido de zinc + resinas + colorantes).</li>
            <li><strong>Cementos selladores:</strong>
              <ul>
                <li><em>Zinquenólicos:</em> Endomethasone, Tubli-Seal (base óxido de zinc-eugenol).</li>
                <li><em>Resinosos:</em> AH Plus, AH-26 (base epoxi). Excelente sellado, insoluble.</li>
                <li><em>Biocerámicos:</em> BC Sealer, EndoSequence — el estándar moderno. Biocompatibles, hidrofílicos, expansión.</li>
                <li><em>Silicónicos:</em> RoekoSeal, GuttaFlow.</li>
                <li><em>Hidróxido de calcio:</em> Sealapex, Apexit.</li>
              </ul>
            </li>
          </ul>

          <h4 style="color:var(--verde-dark)">🔧 Técnicas de obturación</h4>
          <ul>
            <li><strong>Condensación lateral:</strong> técnica de referencia. Se coloca cono maestro (calibre = LMA) + cemento, se compacta lateralmente con espaciadores + conos accesorios (finger spreaders, hand spreaders).</li>
            <li><strong>Condensación vertical caliente (Schilder):</strong> gutapercha reblandecida con calor y compactada verticalmente con condensadores.</li>
            <li><strong>Onda continua de condensación (Buchanan):</strong> variante de la vertical con System B + Obtura.</li>
            <li><strong>Termoplastificada / inyectable:</strong> Obtura III, Calamus.</li>
            <li><strong>Núcleo carrier:</strong> Thermafil, Guttacore.</li>
            <li><strong>Monocono biocerámico:</strong> moderno, un cono ajustado al calibre final + cemento biocerámico.</li>
          </ul>

          <p style="background:#fff9e6; padding:0.7rem; border-radius:8px; border-left:3px solid var(--amarillo)">
            <strong>💡 Perla clínica:</strong> el <strong>éxito endodóncico a largo plazo depende tanto de la endodoncia como de la restauración coronaria</strong>. Un tratamiento endodóncico impecable puede fracasar por filtración coronaria si no se sella con corona/restauración adecuada en tiempo oportuno.
          </p>
        `
      },
      {
        titulo: '5.3 Retratamiento y cirugía periapical',
        contenido: `
          <p><strong>Retratamiento ortógrado:</strong> cuando hay sintomatología persistente, lesión sin regresión, obturación deficiente, filtración coronaria. Desobturación con solventes (cloroformo, xilol, eucaliptol) + instrumentación + reobturación.</p>
          <p><strong>Cirugía periapical (apicectomía):</strong> cuando el retratamiento no es posible o falla (perforaciones, instrumentos fracturados no removibles, quistes grandes). Incluye legrado, apicectomía (3 mm), obturación retrógrada con MTA/biocerámico.</p>
        `
      },
      {
        titulo: '5.4 Complicaciones y urgencias',
        contenido: `
          <p><strong>Urgencias:</strong></p>
          <ul>
            <li><strong>Pulpitis irreversible:</strong> pulpectomía o pulpotomía de urgencia.</li>
            <li><strong>Absceso apical agudo:</strong> drenaje (vía conducto o incisión), antibiótico si compromiso sistémico.</li>
            <li><strong>Flare-up:</strong> reagudización entre citas; drenaje, ajuste oclusal, analgesia.</li>
          </ul>
          <p><strong>Accidentes:</strong></p>
          <ul>
            <li>Fractura de instrumento.</li>
            <li>Perforación (bandeo, ápice, furca).</li>
            <li>Transporte apical, escalón, zip.</li>
            <li>Sobreobturación / subobturación.</li>
            <li>Extrusión de irrigante (accidente por hipoclorito).</li>
            <li>Deglución/aspiración de instrumento (usar dique de goma).</li>
          </ul>
        `
      }
    ],
    bibliografia: [
      'Canalda & Brau (2019). Endodoncia 4ª ed.',
      'Berman & Hargreaves (2022). Cohen. Vías de la pulpa 12ª ed.',
      'Soares & Goldberg (2012). Endodoncia 2ª ed.',
      'Lopes & Siqueira Jr. (2020). Endodoncia. Biología y Técnica 4ª ed.'
    ]
  },

  {
    id: 'periodoncia',
    numero: 6,
    nombre: 'Periodoncia',
    emoji: '🌱',
    peso: 9,
    color: '#5aa584',
    descripcion: 'Anatomía periodontal, diagnóstico, clasificación 2017 y tratamiento periodontal.',
    subcomponentes: [
      {
        titulo: '6.1 Anatomía periodontal',
        contenido: `
          <p><strong>Periodonto de protección:</strong> encía (libre, insertada, interdental), unión mucogingival.</p>
          <p><strong>Periodonto de inserción:</strong> cemento, ligamento periodontal (fibras: crestales, horizontales, oblicuas, apicales, interradiculares), hueso alveolar.</p>
          <p><strong>Tejido de inserción supracrestal (antes "ancho biológico"):</strong> 2.04 mm en promedio = epitelio de unión (0.97 mm) + tejido conectivo (1.07 mm). Debe respetarse al restaurar (mínimo 3 mm entre margen de restauración y cresta ósea).</p>
        `
      },
      {
        titulo: '6.2 Exámenes diagnósticos',
        contenido: `
          <p><strong>Salud periodontal:</strong> encía rosa coral, forma festoneada, textura punteada, sin sangrado al sondaje (SS ≤10%), profundidad de sondaje ≤3 mm, sin pérdida de inserción.</p>
          <p><strong>Enfermedad periodontal:</strong> encía eritematosa, edematosa, sangrado al sondaje, bolsas periodontales, pérdida de inserción clínica y ósea (radiográfica).</p>
          <p><strong>Índices:</strong> O'Leary (placa), Löe & Silness (gingival), sangrado al sondaje.</p>
          <p><strong>Sondaje periodontal:</strong> 6 puntos por diente. Registrar: PD, PIC (pérdida inserción clínica), recesión, sangrado, supuración, movilidad, furcación (Hamp: I <3mm, II >3mm no atraviesa, III atraviesa).</p>
        `
      },
      {
        titulo: '6.3 Etiopatogenia',
        contenido: `
          <p><strong>Microorganismos:</strong> disbiosis del biofilm subgingival. Complejo rojo de Socransky: <strong>P. gingivalis, T. forsythia, T. denticola</strong>. Complejo naranja: F. nucleatum, P. intermedia. También A. actinomycetemcomitans (agresiva).</p>
          <p><strong>Factores de riesgo modificadores:</strong> <strong>tabaquismo</strong> (el más importante), <strong>diabetes descompensada</strong>, estrés.</p>
          <p><strong>Predisponentes:</strong> anatómicos (surcos palatogingivales, proyecciones de esmalte), iatrogénicos (márgenes desbordantes, prótesis mal ajustadas), hormonales (embarazo, pubertad).</p>
        `
      },
      {
        titulo: '6.4 Clasificación 2017 (AAP/EFP)',
        contenido: `
          <h4 style="color:var(--verde-dark)">🌐 Marco general de la nueva clasificación</h4>
          <p>Consenso mundial de la <strong>World Workshop 2017</strong> (AAP/EFP) — publicado en 2018. Reemplaza la clasificación de 1999 (que separaba periodontitis crónica y agresiva) por un sistema de <strong>estadificación y gradación</strong>, similar al oncológico.</p>

          <h4 style="color:var(--verde-dark)">✅ Salud periodontal y enfermedades gingivales</h4>
          <ul>
            <li><strong>Salud periodontal en periodonto intacto:</strong> sin sangrado al sondaje (SS &lt;10%), PS ≤3 mm, sin pérdida ósea, sin pérdida de inserción.</li>
            <li><strong>Salud periodontal en periodonto reducido:</strong> paciente periodontal estable tras tratamiento — pérdida de inserción sin actividad inflamatoria.</li>
            <li><strong>Gingivitis inducida por biofilm:</strong> inflamación gingival <em>sin pérdida de inserción</em>. Puede ser modificada por factores sistémicos (embarazo, diabetes, pubertad) o factores locales (biofilm, márgenes desbordantes).</li>
            <li><strong>Agrandamiento gingival farmacológico:</strong> ciclosporina, fenitoína, nifedipino/amlodipino.</li>
            <li><strong>Enfermedades gingivales NO inducidas por biofilm:</strong>
              <ul>
                <li>Genéticas: fibromatosis gingival hereditaria.</li>
                <li>Infecciones específicas: gingivoestomatitis herpética, candidiasis.</li>
                <li>Inflamatorias/inmunes: liquen plano, pénfigo/penfigoide, lupus.</li>
                <li>Reactivas: granuloma piogénico, fibroma.</li>
                <li>Neoplásicas.</li>
                <li>Endocrinas, nutricionales (déficit vitamina C = escorbuto).</li>
                <li>Traumáticas.</li>
              </ul>
            </li>
          </ul>

          <h4 style="color:var(--verde-dark)">🩸 Periodontitis</h4>
          <p>Se clasifica por <strong>estadio</strong> (severidad + complejidad + extensión) y <strong>grado</strong> (progresión + factores de riesgo).</p>

          <p><strong>ESTADIO (basado en pérdida de inserción clínica interproximal y pérdida ósea radiográfica del sitio peor afectado):</strong></p>
          <table style="width:100%; border-collapse:collapse; font-size:0.85rem; margin:0.5rem 0">
            <tr style="background:var(--verde-light)"><th style="padding:0.5rem">Estadio</th><th>PIC</th><th>Pérdida ósea</th><th>Complejidad</th><th>Pérdida dentaria por periodontitis</th></tr>
            <tr><td style="padding:0.4rem"><strong>I (leve)</strong></td><td>1-2 mm</td><td>Coronal &lt;15%</td><td>PS ≤4 mm, horizontal</td><td>0</td></tr>
            <tr><td style="padding:0.4rem"><strong>II (moderado)</strong></td><td>3-4 mm</td><td>Coronal 15-33%</td><td>PS ≤5 mm, horizontal</td><td>0</td></tr>
            <tr><td style="padding:0.4rem"><strong>III (severo con potencial pérdida)</strong></td><td>≥5 mm</td><td>Extendida al tercio medio-apical</td><td>PS ≥6 mm, PO vertical ≥3 mm, furcación II/III, colapso oclusal moderado</td><td>≤4</td></tr>
            <tr><td style="padding:0.4rem"><strong>IV (avanzado con pérdida dentaria y disfunción)</strong></td><td>≥5 mm</td><td>Extensa</td><td>Además: disfunción masticatoria, movilidad ≥2, colapso oclusal severo, migración, &lt;10 dientes remanentes</td><td>≥5</td></tr>
          </table>

          <p><strong>GRADO (progresión y respuesta a la terapia):</strong></p>
          <table style="width:100%; border-collapse:collapse; font-size:0.85rem; margin:0.5rem 0">
            <tr style="background:var(--verde-light)"><th style="padding:0.5rem">Grado</th><th>Evidencia de progresión</th><th>% pérdida ósea / edad</th><th>Modificadores de riesgo</th></tr>
            <tr><td style="padding:0.4rem"><strong>A (lenta)</strong></td><td>Sin pérdida en 5 años</td><td>&lt;0.25</td><td>No fumadora, normoglucémica</td></tr>
            <tr><td style="padding:0.4rem"><strong>B (moderada)</strong></td><td>&lt;2 mm en 5 años</td><td>0.25-1.0</td><td>&lt;10 cig/día, HbA1c &lt;7%</td></tr>
            <tr><td style="padding:0.4rem"><strong>C (rápida)</strong></td><td>≥2 mm en 5 años</td><td>&gt;1.0</td><td>≥10 cig/día, HbA1c ≥7%</td></tr>
          </table>

          <p><strong>EXTENSIÓN:</strong></p>
          <ul>
            <li><strong>Localizada:</strong> &lt;30% de sitios afectados.</li>
            <li><strong>Generalizada:</strong> ≥30% de sitios.</li>
            <li><strong>Patrón molar-incisivo:</strong> primeros molares e incisivos (antes conocida como "agresiva localizada juvenil").</li>
          </ul>

          <h4 style="color:var(--verde-dark)">📝 Cómo diagnosticar (paso a paso)</h4>
          <ol>
            <li>Establecer si es <strong>salud, gingivitis o periodontitis</strong> (PIC ≥1 mm interproximal en ≥2 dientes no adyacentes).</li>
            <li>Determinar el <strong>estadio</strong> según el sitio peor afectado.</li>
            <li>Determinar la <strong>extensión</strong>.</li>
            <li>Determinar el <strong>grado</strong> (con radiografías seriadas o % pérdida ósea/edad).</li>
            <li>Ejemplo diagnóstico completo: <em>"Periodontitis estadio III, grado C, generalizada, en un paciente diabético mal controlado y fumador severo"</em>.</li>
          </ol>

          <h4 style="color:var(--verde-dark)">🧬 Periodontitis como manifestación sistémica</h4>
          <p>Enfermedades que afectan al periodonto: síndrome de Papillon-Lefèvre, Down, Kindler, Chediak-Higashi, hipofosfatasia, neutropenias, diabetes.</p>
          <p><strong>Enfermedades periodontales necrotizantes (GUNA/PUNA):</strong> gingivitis, periodontitis y estomatitis necrotizante — asociadas a estrés, malnutrición, VIH, inmunosupresión.</p>

          <h4 style="color:var(--verde-dark)">🔩 Enfermedades y condiciones periimplantares (nuevo apartado 2017)</h4>
          <ul>
            <li><strong>Salud periimplantar:</strong> sin signos clínicos de inflamación.</li>
            <li><strong>Mucositis periimplantar:</strong> inflamación de la mucosa <em>sin</em> pérdida ósea.</li>
            <li><strong>Periimplantitis:</strong> inflamación + pérdida ósea progresiva.</li>
            <li><strong>Deficiencias de tejidos duros y blandos periimplantares.</strong></li>
          </ul>

          <p style="background:#fff9e6; padding:0.7rem; border-radius:8px; border-left:3px solid var(--amarillo)">
            <strong>💡 Perla clínica:</strong> el <strong>tabaquismo</strong> aumenta el riesgo de periodontitis 5-20 veces. Además <em>enmascara</em> el sangrado gingival (vasoconstricción de la nicotina) — no confiarse en un sondaje sin sangrado en un fumador.
          </p>
        `
      },
      {
        titulo: '6.5 Tratamiento periodontal',
        contenido: `
          <p><strong>Fases (Lindhe):</strong></p>
          <ul>
            <li><strong>Fase sistémica:</strong> control de factores sistémicos (diabetes, HTA, tabaco).</li>
            <li><strong>Fase higiénica (etiológica/causal):</strong> motivación, instrucción de higiene, control mecánico (cepillado, interdental) y químico (clorhexidina 0.12%), <strong>raspaje y alisado radicular (RAR)</strong>.</li>
            <li><strong>Reevaluación (6-8 semanas):</strong> si persisten bolsas ≥5 mm con sangrado → fase correctiva.</li>
            <li><strong>Fase correctiva (quirúrgica):</strong> cirugía resectiva (gingivectomía, colgajo modificado Widman), regenerativa (RTG con membranas, injertos, EMD/proteínas del esmalte), cirugía mucogingival, alargamiento coronario.</li>
            <li><strong>Fase de mantenimiento:</strong> controles cada 3-6 meses según riesgo.</li>
            <li><strong>Fase de urgencia:</strong> absceso periodontal (drenaje + RAR + antibiótico si diseminación), GUNA (metronidazol 250 mg c/8h + limpieza).</li>
          </ul>
        `
      }
    ],
    bibliografia: [
      'Newman, Takei, Klokkevold & Carranza (2014). Periodontología Clínica de Carranza 11ª ed.',
      'Lindhe & Lang (2017). Periodontología Clínica e Implantología 6ª ed.',
      'SAP - Clasificación AAP-EFP 2017 con aclaraciones 2020.'
    ]
  },

  {
    id: 'patologia',
    numero: 7,
    nombre: 'Patología Bucal',
    emoji: '🔬',
    peso: 8,
    color: '#ff6b6b',
    descripcion: 'Lesiones de tejidos duros y blandos, síndromes sistémicos con manifestaciones bucales.',
    subcomponentes: [
      {
        titulo: '7.1 Lesiones de tejidos duros',
        contenido: `
          <p><strong>Tumores malignos:</strong></p>
          <ul>
            <li><strong>Carcinoma epidermoide (CEC):</strong> el más frecuente. Zonas de alto riesgo: borde lateral de lengua, piso de boca. Factores: tabaco, alcohol, VPH-16.</li>
            <li><strong>Osteosarcoma, condrosarcoma.</strong></li>
          </ul>
          <p><strong>Quistes odontogénicos:</strong></p>
          <ul>
            <li><strong>Radicular (periapical):</strong> el más frecuente, inflamatorio, en ápice de diente necrótico.</li>
            <li><strong>Dentígero:</strong> alrededor de la corona de diente no erupcionado (frecuente en 3ºM).</li>
            <li><strong>Queratoquiste (tumor odontogénico queratoquístico):</strong> agresivo, alta recidiva, asociado a síndrome de Gorlin.</li>
            <li><strong>De erupción, gingival, lateral periodontal, calcificante (Gorlin).</strong></li>
          </ul>
          <p><strong>Quistes no odontogénicos:</strong> del conducto nasopalatino (globulomaxilar), nasolabial.</p>
          <p><strong>Tumores benignos:</strong> ameloblastoma (agresivo local, recidivante), odontoma (compuesto/complejo — más frecuente), mixoma odontogénico, cementoblastoma.</p>
        `
      },
      {
        titulo: '7.2 Patología de tejidos blandos',
        contenido: `
          <p><strong>Lesiones vasculares (rojas):</strong></p>
          <ul>
            <li><strong>Hemangioma:</strong> proliferación benigna de vasos, generalmente congénito.</li>
            <li><strong>Granuloma piógeno:</strong> masa vascular rojiza, sangrante, asociado a irritación local o embarazo.</li>
            <li><strong>Sarcoma de Kaposi:</strong> asociado a VIH/SIDA.</li>
          </ul>
          <p><strong>Lesiones blancas:</strong></p>
          <ul>
            <li><strong>Reactivas:</strong> línea alba, mordisqueo crónico (morsicatio buccarum).</li>
            <li><strong>Infecciosas:</strong> <strong>candidiasis pseudomembranosa</strong> (removible al raspar), leucoplasia vellosa (VEB en VIH).</li>
            <li><strong>Inmunológicas:</strong> liquen plano (estrías de Wickham), lupus.</li>
          </ul>
          <p><strong>ETS bucales:</strong> sífilis (chancro primario, condiloma plano secundario, goma terciario), gonorrea (faringitis), VIH (candidiasis, sarcoma de Kaposi, leucoplasia vellosa).</p>
          <p><strong>Lesiones precancerosas:</strong> leucoplasia (blanca no removible), eritroplasia (roja, mayor riesgo de displasia), queilitis actínica, fibrosis submucosa.</p>
          <p><strong>Lesiones vesiculares/ulcerativas:</strong> herpes simple (recurrente en labio), varicela-zóster, aftas (RAS mayor/menor/herpetiforme), síndrome de Behçet, pénfigo/penfigoide.</p>
          <p><strong>Patologías de lengua:</strong> lengua geográfica (glositis migratoria benigna), lengua fisurada, glositis romboidal media, macroglosia, anquiloglosia, glosodinia (síndrome de boca ardiente).</p>
        `
      },
      {
        titulo: '7.3 Síndromes sistémicos con manifestaciones bucales',
        contenido: `
          <p><strong>Ejemplos frecuentes:</strong></p>
          <ul>
            <li><strong>Síndrome de Down:</strong> macroglosia, hipodoncia, ATM laxa, mayor riesgo periodontal.</li>
            <li><strong>Síndrome de Sjögren:</strong> xerostomía + xeroftalmia (autoinmune).</li>
            <li><strong>Síndrome de Gorlin (nevoide basocelular):</strong> queratoquistes múltiples.</li>
            <li><strong>Gardner:</strong> osteomas, poliposis intestinal.</li>
            <li><strong>Papillon-Lefèvre:</strong> hiperqueratosis palmoplantar + periodontitis severa temprana.</li>
            <li><strong>Peutz-Jeghers:</strong> máculas melánicas peribucales + poliposis.</li>
            <li><strong>Marfan / Ehlers-Danlos:</strong> hipermovilidad articular.</li>
          </ul>
        `
      }
    ],
    bibliografia: [
      'Ceccotti, Sforza, Carzoglio, Luberti & Flichman (2007). El Diagnóstico en Clínica Estomatológica.',
      'Neville, Damm, Allen & Chi (2015). Patología Oral y Maxilofacial 4ª ed.'
    ]
  },

  {
    id: 'farmacologia',
    numero: 8,
    nombre: 'Farmacología',
    emoji: '💊',
    peso: 8,
    color: '#a6c8ff',
    descripcion: 'Anestésicos locales, analgésicos, antibacterianos, antivirales y antimicóticos.',
    subcomponentes: [
      {
        titulo: '8.1 Anestésicos locales',
        contenido: `
          <h4 style="color:var(--verde-dark)">⚙️ Mecanismo de acción</h4>
          <p>Los anestésicos locales (AL) son <strong>bases débiles</strong> (pKa 7.5-9.0). En equilibrio: forma <em>no ionizada</em> (liposoluble, atraviesa la membrana nerviosa) y forma <em>ionizada</em> (bloquea el canal desde dentro).</p>
          <p><strong>Mecanismo:</strong> <em>bloqueo reversible de canales de Na⁺ dependientes de voltaje</em> desde el interior del axón → impide despolarización → bloqueo de la conducción del impulso nervioso.</p>
          <p><strong>Fibras nerviosas afectadas (en orden de bloqueo):</strong> autonómicas > dolor (Aδ, C) > temperatura > tacto > presión > motor. Por eso la sensación termoalgésica se pierde antes que el tacto/motor.</p>
          <p><strong>Factores que afectan la anestesia:</strong> pH tisular (inflamación → acidosis → menos forma no ionizada → menor difusión → <em>anestesia difícil en pulpitis</em>), pKa del fármaco, liposolubilidad (potencia), unión a proteínas (duración).</p>

          <h4 style="color:var(--verde-dark)">📚 Clasificación y estructura</h4>
          <ul>
            <li><strong>Ésteres (metabolismo plasmático por colinesterasas):</strong> procaína, benzocaína (tópica), tetracaína, cocaína. <em>Mayor riesgo alérgico</em> (metabolito PABA). Casi no se usan como inyectables en odontología moderna.</li>
            <li><strong>Amidas (metabolismo hepático):</strong> lidocaína, mepivacaína, prilocaína, articaína (mixto: éster hepático + esterasa plasmática), bupivacaína, etidocaína. Alergia excepcional.</li>
          </ul>

          <h4 style="color:var(--verde-dark)">💉 Anestésicos usados en odontología</h4>
          <table style="width:100%; border-collapse:collapse; font-size:0.85rem; margin:0.5rem 0">
            <tr style="background:var(--verde-light)"><th style="padding:0.4rem">Anestésico</th><th>Dosis máx</th><th>Duración pulpar</th><th>Comentarios</th></tr>
            <tr><td style="padding:0.4rem"><strong>Lidocaína 2% + epi 1:100.000</strong></td><td>7 mg/kg (máx 500 mg)</td><td>60 min</td><td>Estándar de oro, más usada</td></tr>
            <tr><td style="padding:0.4rem"><strong>Mepivacaína 3% sin vaso</strong></td><td>6.6 mg/kg (máx 400 mg)</td><td>20-40 min</td><td>Cortos procedimientos, cardiópatas</td></tr>
            <tr><td style="padding:0.4rem"><strong>Mepivacaína 2% + epi/levonordefrina</strong></td><td>6.6 mg/kg</td><td>50 min</td><td></td></tr>
            <tr><td style="padding:0.4rem"><strong>Articaína 4% + epi 1:100.000 o 1:200.000</strong></td><td>7 mg/kg (máx 500 mg)</td><td>60-75 min</td><td>Alta difusión ósea (maxilar), mayor riesgo de parestesia en Spix</td></tr>
            <tr><td style="padding:0.4rem"><strong>Prilocaína 4% sin/con felipresina</strong></td><td>8 mg/kg (máx 600 mg)</td><td>40-60 min</td><td>Riesgo metahemoglobinemia si dosis alta</td></tr>
            <tr><td style="padding:0.4rem"><strong>Bupivacaína 0.5% + epi</strong></td><td>1.3 mg/kg (máx 90 mg)</td><td>90-180 min (post 4-9 h)</td><td>Cirugías largas, analgesia postoperatoria</td></tr>
          </table>

          <h4 style="color:var(--verde-dark)">🧮 Cálculo de dosis (importante)</h4>
          <p><strong>Concentración → mg por mL:</strong></p>
          <ul>
            <li>1% = 10 mg/mL</li>
            <li>2% = 20 mg/mL (lidocaína) → 1 cartucho 1.8 mL = <strong>36 mg</strong></li>
            <li>3% = 30 mg/mL (mepivacaína) → 1 cartucho 1.8 mL = <strong>54 mg</strong></li>
            <li>4% = 40 mg/mL (articaína) → 1 cartucho 1.8 mL = <strong>72 mg</strong></li>
          </ul>
          <p><strong>Ejemplo:</strong> paciente 70 kg con lidocaína 2%: 70 × 7 = 490 mg → 490/36 ≈ <strong>13 cartuchos</strong> (dosis máxima teórica).</p>
          <p><strong>Ejemplo pediátrico:</strong> niño 20 kg con lidocaína: 20 × 4.4 mg/kg = 88 mg → 88/36 = <strong>2.4 cartuchos</strong>. (Se usa 4.4 mg/kg en niños con vasoconstrictor).</p>

          <h4 style="color:var(--verde-dark)">💊 Vasoconstrictores</h4>
          <p><strong>Función:</strong> retardan absorción sistémica → prolongan duración, reducen sangrado, disminuyen toxicidad y aumentan profundidad.</p>
          <ul>
            <li><strong>Epinefrina (adrenalina):</strong> concentraciones 1:50.000 (0.02 mg/mL), 1:100.000 (0.01 mg/mL), 1:200.000 (0.005 mg/mL). Un cartucho de 1:100.000 contiene <strong>0.018 mg</strong> de epinefrina.</li>
            <li><strong>Norepinefrina, levonordefrina, felipresina (Octapressin).</strong></li>
          </ul>
          <p><strong>Dosis máxima de epinefrina:</strong></p>
          <ul>
            <li><em>Paciente sano:</em> 0.2 mg (≈11 cartuchos de 1:100.000).</li>
            <li><em>Cardiópata:</em> 0.04 mg (≈2 cartuchos de 1:100.000).</li>
          </ul>
          <p><strong>Contraindicaciones al vasoconstrictor:</strong></p>
          <ul>
            <li><em>Absolutas o casi:</em> IAM &lt;6 meses, arritmias severas descontroladas, angina inestable, hipertiroidismo no controlado, feocromocitoma.</li>
            <li><em>Relativas (usar con precaución):</em> HTA no controlada (≥180/110), embarazo (dosis normal es segura), interacción con antidepresivos tricíclicos e IMAO.</li>
          </ul>

          <h4 style="color:var(--verde-dark)">⚠️ Reacciones adversas</h4>
          <ul>
            <li><strong>Toxicidad sistémica:</strong>
              <ul>
                <li><em>SNC (bifásico):</em> Excitación (ansiedad, tinnitus, gusto metálico, tremor, convulsiones) → depresión (somnolencia, coma, paro respiratorio).</li>
                <li><em>Cardiovascular:</em> bradicardia, hipotensión, arritmias, paro (más con bupivacaína).</li>
                <li><em>Manejo:</em> soporte ABC, O₂, benzodiacepina (diazepam 5-10 mg IV) si convulsión, monitoreo, emulsión lipídica 20% en toxicidad grave.</li>
              </ul>
            </li>
            <li><strong>Alergia verdadera:</strong> rara con amidas. Más común al conservante metilparabeno (retirado en la mayoría de las presentaciones dentales) o al metabisulfito de sodio (antioxidante del vasoconstrictor).</li>
            <li><strong>Metahemoglobinemia:</strong> prilocaína a dosis altas o benzocaína tópica. Manejo: azul de metileno 1 mg/kg IV.</li>
            <li><strong>Crisis hipertensiva:</strong> por inyección intravascular de vasoconstrictor.</li>
          </ul>

          <p style="background:#fff9e6; padding:0.7rem; border-radius:8px; border-left:3px solid var(--amarillo)">
            <strong>💡 Perla clínica:</strong> el <strong>anestésico sin vasoconstrictor</strong> (mepivacaína 3%) es útil en procedimientos cortos y en pacientes cardiópatas de alto riesgo, pero <em>tiene menor duración pulpar</em> (~20 min). No es "más seguro" per se: el propio anestésico también tiene toxicidad.
          </p>
        `
      },
      {
        titulo: '8.2 Analgésicos y antiinflamatorios',
        contenido: `
          <p><strong>Dosis en adultos (más usados en odontología):</strong></p>
          <ul>
            <li><strong>Paracetamol:</strong> 500-1000 mg c/6-8h (máx 4 g/día). Hepatotoxicidad. Elección en embarazo.</li>
            <li><strong>Ibuprofeno:</strong> 400-600 mg c/6-8h (máx 2400 mg/día). AINE de primera línea.</li>
            <li><strong>Meloxicam:</strong> 7.5-15 mg c/24h. COX-2 preferencial.</li>
            <li><strong>Ketorolaco:</strong> 10 mg VO c/6h (máx 5 días). Potente, uso corto.</li>
            <li><strong>Diclofenaco:</strong> 50 mg c/8h. Potente.</li>
            <li><strong>Etoricoxib:</strong> 60-120 mg/día. COX-2 selectivo. Riesgo cardiovascular.</li>
            <li><strong>Celecoxib:</strong> 100-200 mg c/12h. COX-2 selectivo.</li>
            <li><strong>Tramadol:</strong> 50-100 mg c/6-8h. Opioide débil.</li>
            <li><strong>Dexametasona:</strong> 4-8 mg (dosis única) preoperatoria para reducir edema post cirugía.</li>
          </ul>
          <p><strong>Dosis pediátricas:</strong></p>
          <ul>
            <li><strong>Paracetamol:</strong> 10-15 mg/kg c/4-6h.</li>
            <li><strong>Ibuprofeno:</strong> 5-10 mg/kg c/6-8h (>6 meses).</li>
            <li><strong>Naproxeno:</strong> 5-7 mg/kg c/12h.</li>
            <li><strong>Dexametasona:</strong> 0.15-0.3 mg/kg.</li>
          </ul>
          <p><strong>Reacciones adversas AINE:</strong> gastrolesivos, nefrotoxicidad, hipertensión, antiagregación (aspirina), broncoespasmo (asmáticos aspirino-sensibles).</p>
          <p><strong>Interacciones:</strong> anticoagulantes (↑ sangrado), IECA/diuréticos (↓ efecto), litio (↑ toxicidad).</p>
        `
      },
      {
        titulo: '8.3 Antibacterianos',
        contenido: `
          <p><strong>Betalactámicos (aminopenicilinas):</strong></p>
          <ul>
            <li><strong>Amoxicilina:</strong> 500 mg c/8h (o 875 mg c/12h) x 7 días. Primera línea en infecciones odontogénicas.</li>
            <li><strong>Amoxicilina + ácido clavulánico:</strong> 500/125 mg c/8h o 875/125 mg c/12h. Amplía espectro contra β-lactamasas.</li>
            <li><strong>Cefalexina/cefadroxilo:</strong> alternativa en alergia no grave a penicilina.</li>
          </ul>
          <p><strong>Macrólidos:</strong></p>
          <ul>
            <li><strong>Azitromicina:</strong> 500 mg c/24h x 3-5 días. Uso en alérgicos a penicilina.</li>
          </ul>
          <p><strong>Lincosamidas:</strong></p>
          <ul>
            <li><strong>Clindamicina:</strong> 300 mg c/6-8h. Excelente penetración ósea. Alergia a penicilina, infecciones severas. Riesgo: colitis pseudomembranosa (C. difficile).</li>
          </ul>
          <p><strong>Nitroimidazoles:</strong></p>
          <ul>
            <li><strong>Metronidazol:</strong> 250-500 mg c/8h. Anaerobios. Combinado con amoxicilina en periodontitis agresiva. Evitar alcohol (efecto disulfiram).</li>
          </ul>
          <p><strong>Otros:</strong> tetraciclinas (250 mg c/6h; teñir dientes en <8 años y embarazo), quinolonas (ciprofloxacina 500 mg c/12h).</p>
          <p><strong>Dosis pediátricas:</strong></p>
          <ul>
            <li><strong>Amoxicilina:</strong> 25-50 mg/kg/día en 3 dosis.</li>
            <li><strong>Amoxi-clav:</strong> 40-45 mg/kg/día en 2-3 dosis.</li>
            <li><strong>Azitromicina:</strong> 10 mg/kg/día x 3-5 días.</li>
          </ul>
          <p><strong>Profilaxis antibiótica (AHA 2021):</strong> indicada en procedimientos con sangrado en pacientes con: válvula protésica, endocarditis previa, cardiopatía congénita cianótica no reparada o reparada con defecto residual, trasplante cardíaco con valvulopatía. <strong>Régimen:</strong> amoxicilina 2 g VO 30-60 min antes (niños 50 mg/kg). Alérgicos: clindamicina 600 mg (niños 20 mg/kg) — actualmente se prefiere azitromicina o cefalexina por riesgo de C. difficile con clindamicina.</p>
        `
      },
      {
        titulo: '8.4 Antivirales y antimicóticos',
        contenido: `
          <p><strong>Antivirales para VHS-1:</strong></p>
          <ul>
            <li><strong>Aciclovir:</strong> tópico 5% c/2-4h por 4 días; oral 200-400 mg 5 veces/día x 5-7 días (primario o severo).</li>
            <li><strong>Valaciclovir / famciclovir:</strong> mejor biodisponibilidad.</li>
          </ul>
          <p><strong>Antimicóticos para C. albicans:</strong></p>
          <ul>
            <li><strong>Nistatina:</strong> suspensión 100.000 UI/mL, enjuague y deglución 4-5 veces/día x 7-14 días. Tópico.</li>
            <li><strong>Miconazol gel oral 2%:</strong> tópico.</li>
            <li><strong>Fluconazol:</strong> 100-200 mg/día x 7-14 días. Sistémico (infecciones extensas o refractarias).</li>
            <li><strong>Ketoconazol:</strong> hepatotoxicidad, menos usado.</li>
          </ul>
        `
      }
    ],
    bibliografia: [
      'Tripathi (2011). Farmacología en Odontología.',
      'Lorenzo et al. (2025). Velázquez. Farmacología básica y clínica 20ª ed.',
      'Espinosa (2012). Farmacología y Terapéutica en Odontología.'
    ]
  },

  {
    id: 'medicina',
    numero: 9,
    nombre: 'Medicina Interna',
    emoji: '❤️',
    peso: 7,
    color: '#ff8fa8',
    descripcion: 'Manejo odontológico de pacientes con enfermedades sistémicas y urgencias médicas.',
    subcomponentes: [
      {
        titulo: '9.1 Enfermedades metabólicas',
        contenido: `
          <p><strong>Diabetes mellitus:</strong></p>
          <ul>
            <li><strong>Tipo I:</strong> autoinmune, insulinodependiente.</li>
            <li><strong>Tipo II:</strong> resistencia a insulina, más frecuente.</li>
            <li><strong>Manifestaciones bucales:</strong> xerostomía, candidiasis, periodontitis (relación bidireccional), abscesos recurrentes, cicatrización lenta.</li>
            <li><strong>Manejo:</strong> citas cortas matinales; verificar glucemia (idealmente <180 mg/dL); no suspender medicación; no realizar procedimientos con Hb glicosilada >8-9% salvo urgencia; profilaxis antibiótica en descompensados.</li>
            <li><strong>Hipoglicemia (<70 mg/dL):</strong> confusión, sudoración, temblor. Manejo: glucosa oral 15 g (jugo, azúcar); si inconsciente, glucagón 1 mg IM.</li>
          </ul>
          <p><strong>Hipotiroidismo:</strong> bradicardia, fatiga, macroglosia. Sensibilidad a sedantes/opioides. Evitar sobre-dosificación de vasoconstrictores.</p>
          <p><strong>Hipertiroidismo:</strong> taquicardia, temblor. <strong>Evitar epinefrina si no está controlado</strong> (riesgo de crisis tirotóxica).</p>
          <p><strong>Osteoporosis y bifosfonatos:</strong> <strong>MRONJ</strong> (osteonecrosis mandibular relacionada a medicamentos). Prevención: evaluación bucal previa al inicio, evitar cirugías invasivas en pacientes con IV (zoledronato) o con >4 años de bifosfonatos orales; considerar drug holiday (controvertido).</p>
        `
      },
      {
        titulo: '9.2 Enfermedades respiratorias',
        contenido: `
          <p><strong>Asma:</strong> paciente debe traer su inhalador (salbutamol) a la consulta. Evitar AAS y AINEs si asmático aspirino-sensible. Evitar estrés (desencadenante).</p>
          <p><strong>Crisis asmática:</strong> disnea, sibilancias. Manejo: posición sentado, 2-4 puffs de salbutamol (repetir c/20 min), O2, si severa → adrenalina 0.3-0.5 mg SC/IM + traslado.</p>
          <p><strong>EPOC:</strong> evitar posición supina completa (disnea), oxigenoterapia cautelosa (retenedores de CO2), evitar depresores respiratorios (opioides, benzodiacepinas altas dosis).</p>
        `
      },
      {
        titulo: '9.3 Embarazo',
        contenido: `
          <p><strong>Trimestres:</strong></p>
          <ul>
            <li><strong>1er trimestre:</strong> organogénesis; solo urgencias.</li>
            <li><strong>2do trimestre (14-20 sem):</strong> <strong>periodo ideal</strong> para tratamientos electivos.</li>
            <li><strong>3er trimestre:</strong> evitar posición supina prolongada (síndrome de vena cava inferior → decúbito lateral izquierdo o semisentada).</li>
          </ul>
          <p><strong>Fármacos seguros:</strong> lidocaína con epinefrina (categoría B, en dosis normales), paracetamol, amoxicilina, cefalexina, clindamicina.</p>
          <p><strong>Contraindicados:</strong> tetraciclinas (tinción dental fetal), metronidazol (1er trim), AINEs (3er trim → cierre precoz de ductus), benzodiacepinas.</p>
          <p><strong>Radiografía:</strong> permitida con protección (delantal plomado + collarín tiroideo) — la dosis es muy baja.</p>
          <p><strong>Enfermedades gingivales del embarazo:</strong> gingivitis del embarazo, granuloma piogénico (tumor del embarazo). Higiene reforzada.</p>
        `
      },
      {
        titulo: '9.4 Urgencias en Odontología',
        contenido: `
          <h4 style="color:var(--verde-dark)">🚨 Kit de emergencia básico</h4>
          <ul>
            <li>Fuente de O₂ portátil con máscara y cánula nasal.</li>
            <li>Ambú (bolsa-válvula-mascarilla).</li>
            <li>Aspirador portátil.</li>
            <li>Adrenalina 1:1000 (ampollas 1 mg/mL) o autoinyector.</li>
            <li>Antihistamínico (difenhidramina 50 mg).</li>
            <li>Corticoide (hidrocortisona 100-500 mg o metilprednisolona 40-125 mg).</li>
            <li>Broncodilatador (salbutamol inhalado).</li>
            <li>Nitroglicerina sublingual.</li>
            <li>Aspirina masticable 300 mg.</li>
            <li>Glucosa oral / glucagón 1 mg IM.</li>
            <li>Benzodiacepina (diazepam / midazolam).</li>
            <li>Solución salina 0.9% + equipo IV.</li>
            <li>Tensiómetro, oxímetro, glucómetro, termómetro.</li>
            <li>DEA (desfibrilador externo automático).</li>
          </ul>

          <h4 style="color:var(--verde-dark)">😵 Síncope vasovagal (la urgencia MÁS frecuente)</h4>
          <p><strong>Causa:</strong> respuesta vagal excesiva por ansiedad, dolor, ver sangre, ayuno, calor. Bradicardia + vasodilatación → hipoperfusión cerebral.</p>
          <p><strong>Pródromo:</strong> mareo, náusea, sudoración, palidez, visión borrosa, bostezos.</p>
          <p><strong>Signos:</strong> pérdida de conciencia breve, hipotensión, bradicardia; a veces movimientos clónicos breves (síncope convulsivo). Recupera al recostarse.</p>
          <p><strong>Manejo:</strong>
            <ol>
              <li>Detener el procedimiento.</li>
              <li>Posición Trendelenburg (decúbito supino con piernas elevadas 30-45°).</li>
              <li>Aflojar ropa ajustada.</li>
              <li>O₂ suplementario 100% con mascarilla.</li>
              <li>Monitorizar (PA, pulso, saturación).</li>
              <li>Amoníaco inhalatorio (sales) si demora.</li>
              <li>Recuperación en 1-2 min. Si &gt;3 min, buscar otra causa.</li>
            </ol>
          </p>

          <h4 style="color:var(--verde-dark)">💥 Shock anafiláctico</h4>
          <p><strong>Definición:</strong> reacción de hipersensibilidad tipo I generalizada, potencialmente mortal. Mediada por IgE + degranulación de mastocitos → liberación masiva de histamina.</p>
          <p><strong>Clínica (aparición en minutos):</strong></p>
          <ul>
            <li><em>Piel/mucosas:</em> urticaria generalizada, prurito, angioedema, flushing.</li>
            <li><em>Respiratorio:</em> broncoespasmo (sibilancias), estridor por edema laríngeo, disnea.</li>
            <li><em>Cardiovascular:</em> hipotensión (PA sistólica &lt;90 o caída &gt;30%), taquicardia, shock.</li>
            <li><em>GI:</em> náuseas, vómitos, cólico, diarrea.</li>
          </ul>
          <p><strong>Manejo (protocolo):</strong></p>
          <ol>
            <li><strong>Adrenalina IM 0.3-0.5 mg (1:1000)</strong> en cara <em>anterolateral del muslo</em> (adulto). Niños: 0.01 mg/kg (máx 0.3 mg). <em>Puede repetirse c/5-15 min.</em></li>
            <li>Llamar al SEM (911) — traslado hospitalario.</li>
            <li>Decúbito supino con piernas elevadas (si no hay disnea; si disnea → semisentada).</li>
            <li>Retirar posible desencadenante (látex, medicamento).</li>
            <li>O₂ alto flujo (100%, 10-15 L/min).</li>
            <li>Vía IV, soluciones cristaloides (SF 0.9% 1-2 L rápido si hipotensión).</li>
            <li>Coadyuvantes (NO reemplazan la adrenalina):
              <ul>
                <li>Antihistamínico H₁: difenhidramina 25-50 mg IV/IM (o clorfeniramina 10 mg).</li>
                <li>Antihistamínico H₂: ranitidina 50 mg IV.</li>
                <li>Corticoide: hidrocortisona 200 mg IV o metilprednisolona 125 mg IV (previene reacción bifásica).</li>
                <li>Broncoespasmo persistente: salbutamol nebulizado.</li>
              </ul>
            </li>
            <li>Monitoreo continuo. Traslado obligatorio (riesgo de fase bifásica 6-24 h).</li>
          </ol>

          <h4 style="color:var(--verde-dark)">🫁 Crisis asmática</h4>
          <p><strong>Clínica:</strong> disnea, sibilancias, uso de músculos accesorios, tos, opresión torácica. Sat O₂ ↓. Habla entrecortada.</p>
          <p><strong>Severidad:</strong> leve (FEV1 &gt;70%), moderada (50-70%), severa (&lt;50%), riesgo vital (silencio auscultatorio = alarma).</p>
          <p><strong>Manejo:</strong></p>
          <ol>
            <li>Detener procedimiento, sentar al paciente (posición Fowler).</li>
            <li>O₂ suplementario.</li>
            <li>Salbutamol inhalado: 2-4 puffs (con espaciador si posible) o nebulización 2.5-5 mg. Repetir c/20 min hasta 3 veces.</li>
            <li>Bromuro de ipratropio nebulizado (moderada-severa).</li>
            <li>Corticoide: prednisona 40-60 mg VO o hidrocortisona 200 mg IV.</li>
            <li>Si no responde o severa: adrenalina 0.3-0.5 mg IM + traslado.</li>
            <li>Traslado hospitalario en toda crisis moderada-severa.</li>
          </ol>

          <h4 style="color:var(--verde-dark)">🫗 Broncoaspiración / Obstrucción de vía aérea</h4>
          <p><strong>Prevención:</strong> uso <em>obligatorio</em> de dique de goma, gasas cuadradas retenidas, aspiración adecuada.</p>
          <p><strong>Manejo:</strong></p>
          <ol>
            <li>Girar la cabeza y sentar al paciente.</li>
            <li>Aspiración con succión potente.</li>
            <li>Si respira y tose: dejarlo toser, monitorizar.</li>
            <li>Si obstrucción total (no puede toser/hablar/respirar): <strong>maniobra de Heimlich</strong> (5 compresiones abdominales) alternando con 5 golpes interescapulares.</li>
            <li>Si pierde conciencia: RCP con revisión de vía aérea.</li>
            <li>Todo objeto aspirado (real o sospecha) obliga a rayos X de tórax y evaluación por neumología.</li>
          </ol>

          <h4 style="color:var(--verde-dark)">⚡ Crisis convulsiva</h4>
          <p><strong>Manejo (fase ictal):</strong></p>
          <ol>
            <li><strong>NO introducir NADA en la boca.</strong></li>
            <li>Proteger cabeza con almohadillado.</li>
            <li>Retirar objetos peligrosos del entorno.</li>
            <li>Aflojar ropa del cuello.</li>
            <li>Cronometrar duración (&gt;5 min = estatus epiléptico).</li>
            <li>Reclinar sillón, girar al paciente en decúbito lateral tras la fase clónica (posición de recuperación).</li>
            <li>O₂ suplementario.</li>
          </ol>
          <p><strong>Si convulsión &gt;5 min o convulsiones repetidas:</strong></p>
          <ul>
            <li>Diazepam 5-10 mg IV lento (o midazolam 5-10 mg IM/bucal).</li>
            <li>Solicitar SEM y trasladar.</li>
          </ul>
          <p><strong>Post-ictal:</strong> confusión, somnolencia, cefalea. Vigilar respiración, mantener en decúbito lateral, monitoreo.</p>

          <h4 style="color:var(--verde-dark)">🍬 Hipoglicemia</h4>
          <p><strong>Definición:</strong> glucemia &lt;70 mg/dL con síntomas.</p>
          <p><strong>Clínica:</strong> temblor, sudoración, palpitaciones, palidez, hambre, confusión, ansiedad; en severa: convulsiones, coma.</p>
          <p><strong>Manejo (regla del 15):</strong></p>
          <ul>
            <li><em>Consciente:</em> 15 g de carbohidratos rápidos (gel de glucosa, medio vaso de jugo, 3 sobres de azúcar). Esperar 15 min y verificar glucemia. Repetir si &lt;70.</li>
            <li><em>Inconsciente:</em> glucagón 1 mg IM/SC (o glucosa 25% 20-50 mL IV) + SEM.</li>
            <li>Al recuperar: alimentar con hidrato complejo (galletas, sándwich) para evitar recurrencia.</li>
          </ul>

          <h4 style="color:var(--verde-dark)">💔 Dolor torácico / IAM</h4>
          <p><strong>Sospecha:</strong> dolor retroesternal opresivo, irradia a brazo izquierdo/mandíbula/cuello, diaforesis, náusea, disnea, angustia.</p>
          <p><strong>Manejo (MONA):</strong></p>
          <ul>
            <li><strong>M</strong>orfina (si dolor persistente y no hay contraindicación).</li>
            <li><strong>O</strong>xígeno si Sat &lt;94%.</li>
            <li><strong>N</strong>itroglicerina 0.4 mg SL c/5 min (máx 3 dosis) si PA &gt;90.</li>
            <li><strong>A</strong>spirina 300 mg masticada.</li>
            <li>Llamar al SEM, decúbito semisentado, monitorizar, tranquilizar.</li>
          </ul>

          <h4 style="color:var(--verde-dark)">🧠 ACV (accidente cerebrovascular)</h4>
          <p><strong>Signos FAST:</strong> Face (asimetría facial), Arm (debilidad braquial), Speech (habla anormal), Time (tiempo — 911 inmediato).</p>
          <p>Reclinar cabeza 30°, O₂, monitoreo, NO dar aspirina ni antihipertensivos, traslado urgente. La ventana terapéutica para trombolisis es de 4.5 h desde el inicio.</p>

          <p style="background:#fff9e6; padding:0.7rem; border-radius:8px; border-left:3px solid var(--amarillo)">
            <strong>💡 Perla clínica:</strong> las <strong>3 urgencias más frecuentes</strong> en la consulta odontológica son: <em>síncope vasovagal, hipoglicemia y crisis asmática</em>. Estar preparado para las tres cubre &gt;80% de los eventos.
          </p>
        `
      },
      {
        titulo: '9.5 Enfermedades cardiovasculares',
        contenido: `
          <p><strong>Endocarditis bacteriana:</strong> infección del endocardio (frecuente por Streptococcus viridans en boca). Profilaxis antibiótica (ver 8.3) solo en pacientes de alto riesgo con procedimientos que causen sangrado gingival.</p>
          <p><strong>Hipertensión (JNC 8/ACC-AHA 2017):</strong></p>
          <ul>
            <li><strong>Normal:</strong> <120/80</li>
            <li><strong>Elevada:</strong> 120-129/<80</li>
            <li><strong>HTA I:</strong> 130-139/80-89</li>
            <li><strong>HTA II:</strong> ≥140/≥90</li>
            <li><strong>Crisis:</strong> ≥180/≥120 → NO tratar, referir</li>
          </ul>
          <p>En HTA controlada: proceder con precauciones (limitar epinefrina a 0.04 mg = 2 cartuchos de 1:100.000), citas cortas, control de ansiedad.</p>
          <p><strong>Hipotensión:</strong> ortostática por levantar rápido del sillón.</p>
          <p><strong>Fiebre reumática:</strong> secuela de faringitis por Streptococcus β-hemolítico grupo A. Puede dejar cardiopatía valvular. Estos pacientes SÍ requieren profilaxis antibiótica solo si tienen valvulopatía significativa.</p>
        `
      },
      {
        titulo: '9.6 Trastornos de coagulación',
        contenido: `
          <p><strong>Hemofilia:</strong></p>
          <ul>
            <li><strong>A:</strong> déficit de factor VIII (más frecuente).</li>
            <li><strong>B:</strong> déficit de factor IX (enfermedad de Christmas).</li>
          </ul>
          <p>Manejo: coordinar con hematólogo; puede requerir reposición de factor previo a procedimientos; uso de <strong>ácido tranexámico</strong> (Espercil) tópico/oral, esponjas hemostáticas, sutura.</p>
          <p><strong>Von Willebrand:</strong> déficit del factor de von Willebrand (más común, autosómico). Desmopresina (DDAVP) preprocedimiento en tipo 1.</p>
          <p><strong>Paciente anticoagulado:</strong></p>
          <ul>
            <li><strong>Warfarina:</strong> verificar INR el día del procedimiento. <strong>INR ≤3.5</strong> permite exodoncias simples sin suspender.</li>
            <li><strong>NOACs (dabigatrán, rivaroxabán, apixabán):</strong> vida media corta; en cirugías menores no suspender o suspender 24h si alto riesgo de sangrado.</li>
            <li><strong>Antiagregantes (AAS, clopidogrel):</strong> NO suspender en cirugías odontológicas de rutina.</li>
            <li>Medidas locales: sutura, ácido tranexámico, celulosa oxidada, esponjas de gelatina.</li>
          </ul>
        `
      },
      {
        titulo: '9.7 Soporte vital básico (RCP)',
        contenido: `
          <h4 style="color:var(--verde-dark)">🔗 Cadena de supervivencia (AHA)</h4>
          <ol>
            <li>Reconocimiento y activación del SEM (911).</li>
            <li>RCP precoz de alta calidad.</li>
            <li>Desfibrilación temprana (DEA).</li>
            <li>Soporte vital avanzado (SVA) por personal capacitado.</li>
            <li>Cuidados post-paro cardíaco (hospital).</li>
            <li>Recuperación integral.</li>
          </ol>

          <h4 style="color:var(--verde-dark)">🧑 RCP en adulto (BLS AHA 2020)</h4>
          <ol>
            <li><strong>Seguridad:</strong> verificar seguridad del entorno.</li>
            <li><strong>Respuesta:</strong> "¿Está bien?" + estímulo tactil.</li>
            <li><strong>Activar SEM + pedir DEA</strong> (si solo, primero llamar; si víctima infantil, primero RCP 2 min).</li>
            <li><strong>Verificar respiración y pulso simultáneamente (≤10 s):</strong> observar tórax, pulso carotídeo.</li>
            <li><strong>Iniciar RCP:</strong>
              <ul>
                <li><strong>C</strong>ompresiones: 30 compresiones en el centro del pecho (mitad inferior del esternón).
                  <ul>
                    <li>Frecuencia: <strong>100-120/min</strong>.</li>
                    <li>Profundidad: <strong>5-6 cm</strong>.</li>
                    <li>Permitir retorno completo del tórax entre compresiones.</li>
                    <li>Minimizar interrupciones (&lt;10 s).</li>
                  </ul>
                </li>
                <li><strong>A</strong>bertura de vía aérea (maniobra frente-mentón; si trauma cervical: tracción mandibular).</li>
                <li><strong>B</strong>reathings (ventilaciones): 2 ventilaciones (boca-boca con barrera o Ambú), cada una de 1 s, viendo elevación torácica.</li>
                <li>Relación <strong>30:2</strong> (1 o 2 rescatadores en adultos).</li>
              </ul>
            </li>
            <li><strong>Usar DEA en cuanto llegue:</strong> encenderlo, colocar parches (uno paraesternal derecho, otro apical izquierdo), seguir instrucciones. Reanudar RCP inmediatamente tras descarga o cuando el DEA lo indique.</li>
            <li>Continuar hasta llegada de SVA o recuperación.</li>
          </ol>

          <h4 style="color:var(--verde-dark)">👦 RCP pediátrico (1 año a pubertad)</h4>
          <ul>
            <li><strong>Frecuencia:</strong> 100-120 compresiones/min.</li>
            <li><strong>Profundidad:</strong> ~1/3 del diámetro anteroposterior del tórax (≈5 cm).</li>
            <li><strong>Técnica:</strong> talón de una mano (o 2 si el niño es grande).</li>
            <li><strong>Relación:</strong>
              <ul>
                <li>1 rescatador: 30:2.</li>
                <li>2 rescatadores: <strong>15:2</strong>.</li>
              </ul>
            </li>
            <li>Activar SEM tras 2 min de RCP (si el evento no es presenciado y estás solo).</li>
            <li>DEA con parches pediátricos si &lt;25 kg; parches de adulto si no hay pediátricos.</li>
          </ul>

          <h4 style="color:var(--verde-dark)">👶 RCP lactante (&lt;1 año)</h4>
          <ul>
            <li><strong>Compresiones:</strong>
              <ul>
                <li>1 rescatador: 2 dedos en el centro del pecho (inmediatamente por debajo de línea intermamilar).</li>
                <li>2 rescatadores: técnica de 2 pulgares con manos rodeando el tórax.</li>
              </ul>
            </li>
            <li><strong>Profundidad:</strong> ~4 cm (1/3 diámetro AP).</li>
            <li><strong>Ventilaciones:</strong> boca-boca-nariz.</li>
            <li><strong>Relación:</strong> 30:2 (1 rescatador) / 15:2 (2 rescatadores).</li>
          </ul>

          <h4 style="color:var(--verde-dark)">🔌 Uso del DEA</h4>
          <ol>
            <li>Encender el equipo.</li>
            <li>Colocar los parches: uno paraesternal derecho (bajo la clavícula) + otro en línea axilar media izquierda.</li>
            <li>El equipo analiza el ritmo; alejar al reanimador durante análisis y descarga.</li>
            <li>Si indica descarga: asegurar que nadie toque a la víctima → aplicar descarga.</li>
            <li>Reanudar RCP inmediatamente x 2 min → nuevo análisis.</li>
            <li>Continuar hasta recuperación, llegada de SVA o agotamiento.</li>
          </ol>

          <h4 style="color:var(--verde-dark)">🫁 Obstrucción de la vía aérea por cuerpo extraño (OVACE)</h4>
          <ul>
            <li><strong>Adulto/niño consciente:</strong> 5 compresiones abdominales (Heimlich) alternadas con 5 golpes interescapulares.</li>
            <li><strong>Lactante consciente:</strong> 5 golpes en la espalda (interescapulares) alternados con 5 compresiones torácicas con 2 dedos (NO abdominales — riesgo de lesión hepática).</li>
            <li><strong>Inconsciente:</strong> iniciar RCP + revisar boca antes de ventilar; si visible: retirar con pinzas/dedo (nunca a ciegas).</li>
          </ul>

          <h4 style="color:var(--verde-dark)">💊 Fármacos en SVA (referencia)</h4>
          <p>La mayoría no se aplican en consulta odontológica pero conviene conocer: adrenalina 1 mg IV c/3-5 min (asistolia/AESP/FV), amiodarona 300 mg (FV/TV sin pulso), atropina 0.5 mg (bradicardia sintomática).</p>

          <p style="background:#fff9e6; padding:0.7rem; border-radius:8px; border-left:3px solid var(--amarillo)">
            <strong>💡 Perla clínica:</strong> las <strong>compresiones de alta calidad</strong> son el pilar del BLS: frecuencia y profundidad correctas, retorno completo, mínimas interrupciones y no ventilar en exceso. La supervivencia extrahospitalaria del paro cardíaco depende críticamente de RCP precoz + DEA.
          </p>
        `
      }
    ],
    bibliografia: [
      'Loscalzo et al. (2022). Harrison. Principios de Medicina Interna 21ª ed.',
      'Castellanos, Díaz & Lee (2015). Medicina en Odontología 3ª ed.',
      'AHA Guidelines RCP 2020.'
    ]
  }
];
