// Banco de preguntas tipo CASO CLÍNICO al estilo CACES Odontología
// Basadas en el formato oficial: escenario clínico con paciente, síntomas, hallazgos.
// Fuente: referencias oficiales del temario CACES y patrones de exámenes de habilitación.

const SIMULACRO_PREGUNTAS = [
  // ============ OPERATORIA DENTAL ============
  {
    componente: 'Operatoria',
    caso: 'Una niña de 6 años acude a consulta con su madre por dolor en los dientes inferiores. El examen clínico revela múltiples manchas blancas en los dientes 84 y 85, correspondientes a un ICDAS código 2. La radiografía de aleta de mordida muestra una radiolucidez que afecta esmalte y tercio externo de dentina en ambas piezas.',
    pregunta: '¿Cuál es la conducta clínica más apropiada?',
    opciones: [
      'Extracción de ambas piezas para evitar dolor posterior',
      'Restauración con amalgama en ambas piezas',
      'Restauración mínimamente invasiva (técnica ART o Hall) + control con flúor',
      'Solo aplicar barniz de flúor y observar 6 meses'
    ],
    correcta: 2,
    explicacion: 'La lesión ya afecta dentina externa, por lo que necesita restauración. La mínima intervención (ART / técnica Hall con corona SSC) es lo indicado en dentición temporal con caries progresiva.'
  },
  {
    componente: 'Operatoria',
    caso: 'Paciente de 25 años presenta lesiones cervicales en forma de cuña en vestibular de piezas 13, 14 y 15. Refiere que usa cepillo duro y cepilla con fuerza tras las comidas. No hay sensibilidad al frío ni al dulce.',
    pregunta: 'El diagnóstico más probable es:',
    opciones: [
      'Caries clase V',
      'Abrasión por técnica de cepillado incorrecta',
      'Erosión ácida',
      'Abfracción por bruxismo'
    ],
    correcta: 1,
    explicacion: 'La forma en cuña + antecedente de cepillado agresivo con cerdas duras es característica de abrasión mecánica.'
  },
  {
    componente: 'Operatoria',
    caso: 'Paciente de 35 años con bruxismo diagnosticado presenta desgaste oclusal generalizado. En cervical de piezas posteriores aparecen lesiones cuneiformes angulares sin relación con el cepillado.',
    pregunta: 'Estas lesiones cervicales corresponden a:',
    opciones: [
      'Erosión gástrica',
      'Abfracción',
      'Caries incipiente',
      'Hipoplasia del esmalte'
    ],
    correcta: 1,
    explicacion: 'La abfracción es la pérdida cervical por microfracturas del esmalte debidas a la flexión oclusal en pacientes con bruxismo o interferencias.'
  },
  {
    componente: 'Operatoria',
    caso: 'Paciente adulto acude por sensibilidad en la pieza 46. En el examen clínico se aprecia una cavitación oclusal con esmalte ennegrecido y sombra grisácea subyacente. La radiografía muestra radiolucidez extensa hasta la dentina profunda, sin compromiso pulpar.',
    pregunta: '¿Qué código ICDAS y conducta corresponde?',
    opciones: [
      'ICDAS 2 — barniz de flúor',
      'ICDAS 4 — restauración directa con resina, considerar recubrimiento pulpar indirecto',
      'ICDAS 6 — extracción',
      'ICDAS 0 — observación'
    ],
    correcta: 1,
    explicacion: 'La sombra oscura de dentina subyacente + cavitación limitada corresponde a ICDAS 4. Se restaura con resina y recubrimiento pulpar indirecto (ionómero/CaOH) si es profunda.'
  },
  {
    componente: 'Operatoria',
    caso: 'Se planea restauración clase II con resina compuesta en pieza 26 en un adulto joven. Ya se realizó el aislamiento absoluto y remoción de tejido cariado.',
    pregunta: 'Al aplicar el sistema adhesivo etch-and-rinse, el tiempo de grabado adecuado con ácido fosfórico al 37% en esmalte y dentina es:',
    opciones: [
      'Esmalte 5 s / dentina 5 s',
      'Esmalte 30 s / dentina 15 s',
      'Esmalte 60 s / dentina 60 s',
      'Esmalte 15 s / dentina 30 s'
    ],
    correcta: 1,
    explicacion: 'Esmalte requiere 30 s (crea el patrón de grabado), dentina solo 15 s (evita colapso del colágeno y sensibilidad post).'
  },

  // ============ ODONTOPEDIATRÍA ============
  {
    componente: 'Odontopediatría',
    caso: 'Niño de 4 años acude a consulta por primera vez, llorando y aferrado a su madre. No permite que se le examine con espejo. Comportamiento categoría 2 de Frankl.',
    pregunta: 'La técnica de manejo de conducta más apropiada como primera opción es:',
    opciones: [
      'Restricción física con Papoose Board',
      'Sedación consciente con óxido nitroso',
      'Técnica decir-mostrar-hacer + refuerzo positivo',
      'Anestesia general'
    ],
    correcta: 2,
    explicacion: 'Frankl 2 (negativo) responde bien a técnicas comunicativas no farmacológicas como decir-mostrar-hacer (Addelston) y refuerzo positivo antes de escalar.'
  },
  {
    componente: 'Odontopediatría',
    caso: 'Paciente pediátrico de 8 años sufre caída con avulsión completa del diente 11. Los padres lo traen a consulta 25 minutos después, con el diente en un vaso de leche fría.',
    pregunta: '¿Cuál es la conducta correcta?',
    opciones: [
      'No reimplantar por riesgo de infección',
      'Reimplantar inmediatamente y ferulizar 2 semanas con férula semirrígida',
      'Extraer el resto y colocar mantenedor',
      'Colocar corona provisional sin reimplantar'
    ],
    correcta: 1,
    explicacion: 'En dientes permanentes avulsionados con <60 min y buen medio de conservación (leche fría), el reimplante inmediato con férula semirrígida por 2 semanas es el estándar.'
  },
  {
    componente: 'Odontopediatría',
    caso: 'Niño de 3 años presenta caídas de biberón nocturno. Al examen se observa destrucción coronaria severa de incisivos superiores con exposición pulpar y molares con caries ICDAS 5. No coopera con anestesia local convencional.',
    pregunta: 'El diagnóstico principal es:',
    opciones: [
      'Amelogénesis imperfecta',
      'Caries de la primera infancia (severa)',
      'Fluorosis',
      'Hipoplasia'
    ],
    correcta: 1,
    explicacion: 'La CPI severa se relaciona típicamente al biberón nocturno endulzado y afecta primero incisivos superiores y molares.'
  },
  {
    componente: 'Odontopediatría',
    caso: 'Niña de 8 años con diagnóstico de hipomineralización molar-incisivo (HMI). Presenta opacidades blancoamarillentas asimétricas en primeros molares permanentes con sensibilidad al frío y al cepillado.',
    pregunta: 'La conducta clínica más apropiada es:',
    opciones: [
      'Extracción inmediata de los cuatro molares',
      'Sellador de fosas + aplicación de barniz de flúor + control del dolor',
      'Blanqueamiento inmediato',
      'Prótesis fija metal-cerámica'
    ],
    correcta: 1,
    explicacion: 'La HMI se maneja con enfoque preventivo: desensibilización, selladores/resinas, barniz de flúor trimestral y controles frecuentes. Extracción solo cuando el molar es no restaurable.'
  },
  {
    componente: 'Odontopediatría',
    caso: 'Paciente de 5 años con dolor espontáneo nocturno en pieza 75. Radiografía muestra caries profunda con exposición pulpar y radiolucidez en furca.',
    pregunta: 'El tratamiento indicado es:',
    opciones: [
      'Pulpotomía con formocresol',
      'Recubrimiento pulpar directo con hidróxido de calcio',
      'Pulpectomía + obturación con pasta reabsorbible (óxido de zinc-eugenol)',
      'Sellador'
    ],
    correcta: 2,
    explicacion: 'La radiolucidez en furca indica necrosis pulpar con compromiso radicular. En deciduo se realiza pulpectomía con pasta reabsorbible (OZE o pasta yodoformada).'
  },

  // ============ CIRUGÍA ============
  {
    componente: 'Cirugía',
    caso: 'Paciente de 22 años acude por dolor severo, trismus y edema submandibular derecho iniciado hace 3 días. Presenta pieza 48 semierupcionada con opérculo eritematoso y drenaje purulento. Temperatura 38.5°C.',
    pregunta: 'El diagnóstico y tratamiento inicial es:',
    opciones: [
      'Alveolitis seca — curetaje',
      'Pericoronaritis aguda supurada — irrigación, antibiótico (amoxicilina 500 mg c/8h) y AINE',
      'Quiste dentígero — enucleación inmediata',
      'Osteomielitis mandibular — resección quirúrgica'
    ],
    correcta: 1,
    explicacion: 'El cuadro es típico de pericoronaritis aguda supurada del tercer molar semierupcionado. Manejo inicial: irrigación bajo opérculo, antibiótico y AINE. Exodoncia una vez controlado el proceso agudo.'
  },
  {
    componente: 'Cirugía',
    caso: 'Paciente masculino de 65 años con hipertensión controlada (150/85) requiere exodoncia de pieza 26. Toma losartán 50 mg/día.',
    pregunta: '¿Cuál es la conducta más apropiada respecto al vasoconstrictor?',
    opciones: [
      'Contraindicar la exodoncia',
      'Usar anestésico sin vasoconstrictor obligatoriamente',
      'Se puede usar lidocaína 2% + epinefrina 1:100.000 limitando a 2 cartuchos, con aspiración negativa',
      'Duplicar dosis de vasoconstrictor por su edad'
    ],
    correcta: 2,
    explicacion: 'En HTA controlada se permite epinefrina limitando a 2 cartuchos (0.04 mg de epinefrina). La aspiración obligatoria evita inyección intravascular.'
  },
  {
    componente: 'Cirugía',
    caso: 'Cinco días después de la extracción de pieza 46, paciente regresa con dolor intenso, irradiado al oído, halitosis y alveolo sin coágulo visible con tejido óseo expuesto.',
    pregunta: 'El diagnóstico es:',
    opciones: [
      'Alveolitis seca (osteítis alveolar)',
      'Absceso periapical',
      'Osteomielitis',
      'Comunicación bucosinusal'
    ],
    correcta: 0,
    explicacion: 'Dolor intenso 3-5 días post-exodoncia + alveolo vacío sin coágulo + halitosis es el cuadro clásico de alveolitis seca.'
  },
  {
    componente: 'Cirugía',
    caso: 'Paciente presenta celulitis bilateral con edema y elevación del piso de boca, dificultad para tragar y voz gutural. Origen: pieza 46 con caries profunda.',
    pregunta: 'El diagnóstico y conducta son:',
    opciones: [
      'Absceso vestibular — drenaje ambulatorio',
      'Angina de Ludwig — emergencia médica, traslado hospitalario para manejo de vía aérea y antibioticoterapia IV',
      'Sialoadenitis — antibiótico oral y observación',
      'Faringitis viral — reposo'
    ],
    correcta: 1,
    explicacion: 'La Angina de Ludwig (celulitis bilateral de espacios submandibulares, sublinguales y submentonianos) es una emergencia médica por compromiso de la vía aérea.'
  },
  {
    componente: 'Cirugía',
    caso: 'Paciente diabético descompensado con osteoporosis, en tratamiento con ácido zoledrónico IV desde hace 3 años, requiere extracción de pieza 36 por caries irrecuperable.',
    pregunta: 'La principal complicación a prevenir es:',
    opciones: [
      'Alveolitis',
      'Osteonecrosis mandibular relacionada a medicamentos (MRONJ)',
      'Trismus',
      'Hemorragia'
    ],
    correcta: 1,
    explicacion: 'El uso crónico de bifosfonatos IV (zoledronato) es factor de alto riesgo para MRONJ. Evaluar riesgo/beneficio, considerar tratamiento conservador y protocolos preventivos.'
  },

  // ============ REHABILITACIÓN ORAL ============
  {
    componente: 'Rehabilitación',
    caso: 'Paciente edéntulo parcial superior con ausencia de piezas 15, 16 y 17 (extremo libre unilateral).',
    pregunta: 'Esta situación corresponde a la clasificación de Kennedy:',
    opciones: [
      'Clase I',
      'Clase II',
      'Clase III',
      'Clase IV'
    ],
    correcta: 1,
    explicacion: 'Kennedy II: extremo libre unilateral. Kennedy I sería bilateral.'
  },
  {
    componente: 'Rehabilitación',
    caso: 'Se planifica corona totalmente cerámica en pieza 21 con disilicato de litio. La preparación debe garantizar el espesor adecuado y una línea de terminación apropiada.',
    pregunta: 'La línea de terminación recomendada es:',
    opciones: [
      'Filo de cuchillo',
      'Hombro recto (90°) o hombro biselado',
      'Chamfer profundo únicamente',
      'Sin línea de terminación'
    ],
    correcta: 1,
    explicacion: 'Las cerámicas puras (feldespáticas y disilicato) requieren hombro a 90° para mejor resistencia y distribución de fuerzas.'
  },
  {
    componente: 'Rehabilitación',
    caso: 'Paciente rehabilitado con prótesis total superior desde hace 2 meses refiere que se le cae al hablar. Al examen, el sellado periférico está deficiente y hay reabsorción severa del reborde alveolar.',
    pregunta: 'La retención de una prótesis total superior depende principalmente de:',
    opciones: [
      'Adhesivos comerciales',
      'Sellado periférico + adhesión + cohesión + presión atmosférica',
      'Ganchos metálicos',
      'Implantes obligatorios'
    ],
    correcta: 1,
    explicacion: 'La retención en prótesis total depende físicamente del sellado periférico, la adhesión (saliva-mucosa-prótesis), cohesión de la saliva y presión atmosférica.'
  },
  {
    componente: 'Rehabilitación',
    caso: 'Paciente con tratamiento endodóncico en pieza 21 y pérdida coronaria del 70%. Presenta 2 mm de estructura dental sana coronal.',
    pregunta: '¿Cuál es la restauración indicada?',
    opciones: [
      'Restauración directa con resina sin poste',
      'Poste de fibra de vidrio + reconstrucción con resina + corona totalmente cerámica',
      'Extracción e implante inmediato',
      'Amalgama sin corona'
    ],
    correcta: 1,
    explicacion: 'Con >50% de pérdida coronaria + endodoncia, el estándar es poste (fibra de vidrio por módulo similar a dentina), reconstrucción y corona con efecto férula mínimo de 1.5-2 mm.'
  },
  {
    componente: 'Rehabilitación',
    caso: 'Paciente con parafunción severa y desgaste generalizado. En el examen se identifica pérdida de dimensión vertical de oclusión.',
    pregunta: 'La dimensión vertical de reposo (DVR) supera a la DVO en aproximadamente:',
    opciones: [
      '0 mm',
      '2-4 mm (espacio libre interoclusal)',
      '8-10 mm',
      '15-20 mm'
    ],
    correcta: 1,
    explicacion: 'El espacio libre interoclusal (freeway space) es la diferencia entre DVR y DVO: normalmente 2-4 mm.'
  },

  // ============ ENDODONCIA ============
  {
    componente: 'Endodoncia',
    caso: 'Hombre de 20 años que hace un mes se realizó tratamiento endodóncico en pieza 31. Acude por sensibilidad localizada al frío, dolor leve circunscrito a la percusión. Radiografía muestra obturación adecuada sin lesión periapical.',
    pregunta: 'La conducta más apropiada es:',
    opciones: [
      'Retratamiento endodóncico inmediato',
      'Extracción',
      'Ajuste oclusal + control clínico en 1 mes (sospecha de trauma oclusal)',
      'Cirugía periapical'
    ],
    correcta: 2,
    explicacion: 'Molestia leve postratamiento (síndrome de diente fisurado o trauma oclusal) suele resolver con ajuste oclusal. No hay indicación para retratamiento sin evidencia de fracaso.'
  },
  {
    componente: 'Endodoncia',
    caso: 'Paciente con dolor pulsátil, espontáneo, prolongado en pieza 46, que irradia al oído. La respuesta al frío es intensa y prolongada. Radiografía: caries profunda que compromete el techo cameral.',
    pregunta: 'El diagnóstico es:',
    opciones: [
      'Pulpitis reversible',
      'Pulpitis irreversible sintomática',
      'Necrosis pulpar',
      'Periodontitis apical crónica'
    ],
    correcta: 1,
    explicacion: 'Dolor espontáneo, prolongado, irradiado + respuesta intensa y prolongada al frío = pulpitis irreversible sintomática. Requiere tratamiento endodóncico o pulpectomía de urgencia.'
  },
  {
    componente: 'Endodoncia',
    caso: 'Durante la instrumentación de un molar mandibular, se observa que el líquido irrigador contamina el vestíbulo y el paciente reporta dolor intenso súbito con edema facial en aumento.',
    pregunta: 'Se trata de un accidente por:',
    opciones: [
      'Extrusión de hipoclorito de sodio al periápice',
      'Fractura de instrumento',
      'Reacción alérgica al látex',
      'Perforación de furca'
    ],
    correcta: 0,
    explicacion: 'El accidente por hipoclorito produce dolor súbito, edema, equimosis y a veces necrosis. Manejo: irrigar con suero, analgesia, corticoide, antibiótico y monitoreo estricto.'
  },
  {
    componente: 'Endodoncia',
    caso: 'Paciente con endodoncia realizada hace 2 años. Actualmente presenta absceso periapical con fístula en pieza 22. Radiografía muestra obturación deficiente con radiolucidez apical.',
    pregunta: 'La conducta más apropiada es:',
    opciones: [
      'Extracción inmediata',
      'Retratamiento endodóncico ortógrado',
      'Solo antibiótico',
      'Blanqueamiento interno'
    ],
    correcta: 1,
    explicacion: 'Obturación deficiente + lesión periapical persistente = indicación de retratamiento ortógrado. Cirugía apical solo si el retratamiento no es posible o falla.'
  },

  // ============ PERIODONCIA ============
  {
    componente: 'Periodoncia',
    caso: 'Paciente de 15 años acude para control. Al examen se identifica sangrado al sondaje generalizado, biofilm evidente y bolsas ≤3 mm sin pérdida de inserción clínica.',
    pregunta: 'Según la clasificación 2017, corresponde a:',
    opciones: [
      'Periodontitis estadio I grado A',
      'Gingivitis inducida por biofilm generalizada',
      'Periodontitis estadio III grado C',
      'Salud periodontal'
    ],
    correcta: 1,
    explicacion: 'Sangrado + biofilm sin pérdida de inserción ni bolsas verdaderas = gingivitis inducida por biofilm. Es reversible.'
  },
  {
    componente: 'Periodoncia',
    caso: 'Al atender a un paciente de 15 años en el consultorio, usted confirma que la técnica de cepillado no es la adecuada. Le recomienda la técnica de BASS.',
    pregunta: 'La técnica de BASS se caracteriza por:',
    opciones: [
      'Cepillado horizontal enérgico',
      'Cerdas en ángulo de 45° al surco gingival con movimientos vibratorios cortos',
      'Movimientos rotatorios verticales',
      'Solo uso de hilo dental'
    ],
    correcta: 1,
    explicacion: 'La técnica de BASS coloca las cerdas a 45° hacia el surco gingival con movimientos vibratorios cortos que limpian el margen y el surco. Ideal en pacientes con gingivitis.'
  },
  {
    componente: 'Periodoncia',
    caso: 'Paciente fumador de 45 años (20 cigarrillos/día por 20 años) con diabetes mal controlada. Presenta bolsas periodontales de 6-9 mm en múltiples sitios, movilidad grado II y pérdida ósea >50% en el 40% de los sitios.',
    pregunta: 'La clasificación 2017 más probable es:',
    opciones: [
      'Estadio I grado A localizado',
      'Estadio III grado C generalizado',
      'Gingivitis',
      'Salud con inflamación leve'
    ],
    correcta: 1,
    explicacion: 'Pérdida >50% en 40% de sitios + tabaquismo + diabetes descompensada = Estadio III (severidad), Grado C (progresión rápida), generalizado (>30%).'
  },
  {
    componente: 'Periodoncia',
    caso: 'Paciente con pieza 46 que presenta bolsa periodontal de 7 mm en furca vestibular. Se puede sondar horizontalmente 4 mm pero no atraviesa completamente.',
    pregunta: 'Según la clasificación de Hamp, la lesión de furca es:',
    opciones: [
      'Grado I',
      'Grado II',
      'Grado III',
      'Grado IV'
    ],
    correcta: 1,
    explicacion: 'Grado I <3 mm; Grado II >3 mm sin atravesar; Grado III atraviesa por completo. Este es Grado II.'
  },
  {
    componente: 'Periodoncia',
    caso: 'Paciente joven con dolor severo, papilas interdentales con aspecto en cráter, sangrado abundante, pseudomembranas grisáceas y halitosis fétida. Fiebre 38°C.',
    pregunta: 'El diagnóstico y tratamiento son:',
    opciones: [
      'Periodontitis crónica — RAR únicamente',
      'GUNA (gingivitis ulceronecrotizante) — desbridamiento suave + clorhexidina + metronidazol 250 mg c/8h',
      'Aftas menores — corticoide tópico',
      'Estomatitis herpética — aciclovir'
    ],
    correcta: 1,
    explicacion: 'La GUNA tiene la triada característica: dolor, sangrado, papilas en cráter + halitosis. Tratamiento: desbridamiento no traumático + antiséptico + metronidazol.'
  },

  // ============ PATOLOGÍA ============
  {
    componente: 'Patología',
    caso: 'Hombre de 60 años, fumador crónico, presenta úlcera indolora en borde lateral izquierdo de lengua de 3 semanas de evolución, con bordes indurados y elevados. Adenopatía cervical ipsilateral.',
    pregunta: 'El diagnóstico presuntivo y conducta son:',
    opciones: [
      'Afta mayor — corticoide tópico',
      'Carcinoma epidermoide — biopsia inmediata y derivación a cirugía maxilofacial/oncología',
      'Herpes recurrente — aciclovir',
      'Traumatismo — retirar causa'
    ],
    correcta: 1,
    explicacion: 'Úlcera >2 semanas + bordes indurados + adenopatía + tabaquismo = alta sospecha de carcinoma epidermoide. Biopsia obligatoria.'
  },
  {
    componente: 'Patología',
    caso: 'Paciente masculino de 30 años presenta lesión asintomática asociada a la corona de un tercer molar inferior incluido. Radiografía muestra imagen radiolúcida unilocular bien delimitada alrededor de la corona.',
    pregunta: 'El diagnóstico más probable es:',
    opciones: [
      'Ameloblastoma',
      'Quiste dentígero (folicular)',
      'Quiste radicular',
      'Osteoma'
    ],
    correcta: 1,
    explicacion: 'El quiste dentígero rodea la corona de un diente incluido, típicamente terceros molares.'
  },
  {
    componente: 'Patología',
    caso: 'Paciente presenta placa blanca en mucosa yugal, homogénea, que no se remueve al raspado, con 2 meses de evolución. Antecedente de tabaquismo intenso.',
    pregunta: 'El diagnóstico y conducta son:',
    opciones: [
      'Candidiasis — nistatina',
      'Leucoplasia — biopsia y control',
      'Liquen plano — corticoide',
      'Línea alba — solo control'
    ],
    correcta: 1,
    explicacion: 'Placa blanca no removible + diagnóstico de exclusión = leucoplasia, con potencial premaligno. Biopsia obligatoria y eliminación del factor irritativo.'
  },
  {
    componente: 'Patología',
    caso: 'Paciente embarazada de 6 meses presenta masa nodular rojiza-violácea en encía marginal de piezas 12-13, sangrante al menor contacto, de 3 semanas de evolución.',
    pregunta: 'El diagnóstico más probable es:',
    opciones: [
      'Ameloblastoma',
      'Granuloma piógeno (tumor del embarazo)',
      'Sarcoma de Kaposi',
      'Épulis fisurado'
    ],
    correcta: 1,
    explicacion: 'El granuloma piógeno gestacional aparece con frecuencia por cambios hormonales + irritación local (placa/cálculo). Suele regresar post-parto; si persiste, se reseca.'
  },
  {
    componente: 'Patología',
    caso: 'Paciente adulto joven, VIH positivo, presenta placas blancas en bordes laterales de la lengua, no removibles al raspado, con aspecto "peludo" o corrugado.',
    pregunta: 'El diagnóstico es:',
    opciones: [
      'Candidiasis pseudomembranosa',
      'Leucoplasia vellosa (asociada a virus Epstein-Barr)',
      'Liquen plano reticular',
      'Lengua geográfica'
    ],
    correcta: 1,
    explicacion: 'La leucoplasia vellosa (EBV) es una lesión característica en pacientes inmunocomprometidos (VIH), no removible al raspado.'
  },

  // ============ FARMACOLOGÍA ============
  {
    componente: 'Farmacología',
    caso: 'Paciente adulto de 70 kg sin comorbilidades requiere anestesia con lidocaína 2% + epinefrina 1:100.000 para múltiples exodoncias.',
    pregunta: '¿Cuántos cartuchos de 1.8 mL como máximo se pueden usar?',
    opciones: [
      'Máximo 3 cartuchos',
      'Máximo 7 cartuchos',
      'Máximo 13 cartuchos (aprox. 500 mg total)',
      'Sin límite'
    ],
    correcta: 2,
    explicacion: 'Dosis máx lidocaína = 7 mg/kg (máx 500 mg). Un cartucho = 36 mg (1.8 mL × 20 mg/mL). 500/36 ≈ 13.8 cartuchos.'
  },
  {
    componente: 'Farmacología',
    caso: 'Niña de 20 kg con celulitis facial post-extracción. Sin alergias conocidas. Requiere antibiótico oral.',
    pregunta: 'La dosis pediátrica correcta de amoxicilina es:',
    opciones: [
      '10 mg/kg/día en 1 dosis',
      '25-50 mg/kg/día dividido en 3 dosis (aprox. 500 mg c/8h)',
      '100 mg/kg/día',
      '5 mg/kg/día'
    ],
    correcta: 1,
    explicacion: 'Amoxicilina pediátrica: 25-50 mg/kg/día en 3 dosis. Para 20 kg: 500-1000 mg/día = ~250-500 mg cada 8 horas.'
  },
  {
    componente: 'Farmacología',
    caso: 'Paciente con antecedente de reemplazo valvular aórtico protésico requiere exodoncia. Sin alergia a penicilinas.',
    pregunta: 'La profilaxis antibiótica correcta según AHA es:',
    opciones: [
      'Amoxicilina 500 mg c/8h por 7 días desde la exodoncia',
      'Amoxicilina 2 g VO en dosis única 30-60 min antes del procedimiento',
      'Metronidazol 500 mg 24 h antes',
      'No requiere profilaxis'
    ],
    correcta: 1,
    explicacion: 'Válvula protésica es indicación de profilaxis. Régimen AHA: amoxicilina 2 g VO 30-60 min antes.'
  },
  {
    componente: 'Farmacología',
    caso: 'Paciente asmático con alergia a AINEs por síndrome de Samter (asma + poliposis + intolerancia a AAS) requiere analgesia postoperatoria.',
    pregunta: 'El analgésico de elección es:',
    opciones: [
      'Ibuprofeno 600 mg c/6h',
      'Ketorolaco 10 mg c/6h',
      'Paracetamol 1 g c/6-8h (o tramadol si dolor moderado-severo)',
      'Diclofenaco 50 mg c/8h'
    ],
    correcta: 2,
    explicacion: 'En intolerancia a AINEs (asmáticos aspirino-sensibles), el paracetamol es seguro. En dolor mayor, tramadol.'
  },
  {
    componente: 'Farmacología',
    caso: 'Paciente con candidiasis pseudomembranosa oral extensa, portador de prótesis total superior.',
    pregunta: 'El tratamiento tópico de elección es:',
    opciones: [
      'Aciclovir 200 mg c/6h',
      'Nistatina en suspensión 100.000 UI/mL, enjuague y deglución 4-5 veces/día por 7-14 días',
      'Amoxicilina 500 mg c/8h',
      'Clorhexidina 0.12% únicamente'
    ],
    correcta: 1,
    explicacion: 'Nistatina oral 100.000 UI/mL por 7-14 días es el tratamiento tópico estándar. Además: desinfectar la prótesis (evita reservorio).'
  },

  // ============ MEDICINA INTERNA / URGENCIAS ============
  {
    componente: 'Medicina Interna',
    caso: 'Durante una exodoncia, paciente diabético tipo 2 comienza con temblor, sudoración fría, palidez y confusión. Aún está consciente y puede tragar.',
    pregunta: 'La conducta inmediata es:',
    opciones: [
      'Aplicar insulina IM',
      'Administrar 15 g de glucosa oral (jugo azucarado, azúcar, glucosa gel), esperar 15 min y verificar',
      'Iniciar RCP',
      'Adrenalina 0.3 mg IM'
    ],
    correcta: 1,
    explicacion: 'Hipoglicemia leve consciente: regla del 15 (15 g glucosa VO, esperar 15 min, revalorar). Si inconsciente: glucagón 1 mg IM.'
  },
  {
    componente: 'Medicina Interna',
    caso: 'Paciente recibe anestésico local con lidocaína 2% con epinefrina. A los 2 minutos presenta urticaria generalizada, dificultad respiratoria, broncoespasmo audible y PA 70/40.',
    pregunta: 'El tratamiento inmediato es:',
    opciones: [
      'Difenhidramina 50 mg VO',
      'Adrenalina 0.3-0.5 mg IM en cara anterolateral del muslo (1:1000), decúbito supino con piernas elevadas, O2, traslado urgente',
      'Salbutamol únicamente',
      'Corticoide oral y esperar'
    ],
    correcta: 1,
    explicacion: 'Shock anafiláctico: adrenalina IM es de primera línea, salva la vida. Antihistamínicos y corticoides son coadyuvantes secundarios.'
  },
  {
    componente: 'Medicina Interna',
    caso: 'En la consulta, un paciente con epilepsia sufre crisis tónico-clónica generalizada.',
    pregunta: '¿Qué NO se debe hacer?',
    opciones: [
      'Proteger la cabeza y retirar objetos peligrosos',
      'Colocar en decúbito lateral tras la fase clónica',
      'Introducir objetos en la boca para evitar mordedura de lengua',
      'Cronometrar la duración de la crisis'
    ],
    correcta: 2,
    explicacion: 'NUNCA introducir objetos en la boca durante crisis convulsiva: riesgo de lesiones dentales, atragantamiento o mordidas al reanimador.'
  },
  {
    componente: 'Medicina Interna',
    caso: 'Paciente adulto en el sillón dental sufre paro cardiorrespiratorio presenciado. Está solo el odontólogo.',
    pregunta: '¿Cuál es la relación compresiones:ventilaciones y la frecuencia recomendada?',
    opciones: [
      '15:2 a 60/min',
      '30:2 a 100-120 compresiones/min, profundidad 5-6 cm',
      '5:1 a 40/min',
      'Solo ventilaciones'
    ],
    correcta: 1,
    explicacion: 'RCP adulto (AHA 2020): 30:2 con un rescatador, 100-120 compresiones/min, profundidad 5-6 cm, permitir retorno completo del tórax.'
  },
  {
    componente: 'Medicina Interna',
    caso: 'Paciente embarazada de 32 semanas requiere tratamiento periodontal. Al reclinarla en el sillón dental, refiere mareo, palidez, náuseas y taquicardia.',
    pregunta: 'La causa más probable es y el manejo:',
    opciones: [
      'Hipoglicemia — dar glucosa',
      'Síndrome de vena cava inferior — colocar en decúbito lateral izquierdo o semisentada',
      'Anafilaxia — adrenalina IM',
      'Crisis asmática — salbutamol'
    ],
    correcta: 1,
    explicacion: 'El útero grávido comprime la vena cava en decúbito supino, causando hipotensión y bradicardia refleja. Solución: decúbito lateral izquierdo o semisentada.'
  },
  {
    componente: 'Medicina Interna',
    caso: 'Paciente con warfarina por fibrilación auricular acude para exodoncia simple. Trae INR de hoy: 2.8.',
    pregunta: 'La conducta correcta es:',
    opciones: [
      'Suspender warfarina 5 días antes',
      'Proceder con la exodoncia sin suspender warfarina, usando medidas hemostáticas locales (sutura, ácido tranexámico, esponja de gelatina)',
      'Contraindicar el procedimiento',
      'Cambiar a heparina 24 h antes'
    ],
    correcta: 1,
    explicacion: 'INR ≤3.5 permite exodoncias simples sin suspender warfarina, usando medidas locales de hemostasia. Suspender aumenta riesgo tromboembólico.'
  },
  {
    componente: 'Medicina Interna',
    caso: 'Paciente con hemofilia A moderada acude a exodoncia por caries irrecuperable en pieza 46.',
    pregunta: 'La conducta apropiada incluye:',
    opciones: [
      'Proceder sin coordinación',
      'Coordinar con hematólogo: reposición de factor VIII pre-procedimiento + ácido tranexámico tópico/oral + sutura + esponja de gelatina',
      'Administrar únicamente vitamina K',
      'Aplicar solo hielo'
    ],
    correcta: 1,
    explicacion: 'En hemofilia se coordina con hematología para reposición de factor VIII previo, más medidas hemostáticas locales agresivas (tranexámico, sutura, gelatina).'
  },
  {
    componente: 'Medicina Interna',
    caso: 'Paciente adulto con asma acude a control. Al recibir mala noticia respecto al tratamiento, inicia disnea aguda, sibilancias audibles y opresión torácica.',
    pregunta: 'La conducta inicial es:',
    opciones: [
      'Colocar en decúbito supino y darle agua',
      'Sentar al paciente, administrar 2-4 puffs de salbutamol c/20 min, oxígeno; si no mejora → adrenalina 0.3-0.5 mg IM y traslado',
      'Iniciar RCP inmediatamente',
      'Adrenalina intravenosa'
    ],
    correcta: 1,
    explicacion: 'Crisis asmática: sentar al paciente, salbutamol (broncodilatador), O2. Si no responde a broncodilatadores → adrenalina y traslado.'
  },
  {
    componente: 'Medicina Interna',
    caso: 'Paciente joven, ansioso, al recibir anestesia local presenta palidez súbita, sudoración, náusea y pérdida de conciencia breve. Pulso y respiración conservados.',
    pregunta: 'El diagnóstico y manejo son:',
    opciones: [
      'Anafilaxia — adrenalina IM',
      'Síncope vasovagal — Trendelenburg (piernas elevadas), aflojar ropa, O2',
      'Paro cardíaco — RCP',
      'Convulsión — diazepam IV'
    ],
    correcta: 1,
    explicacion: 'El síncope vasovagal es la urgencia más frecuente en la consulta. Se maneja con Trendelenburg y suele recuperarse en <2 min.'
  }
];
