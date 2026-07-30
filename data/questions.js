// Banco de preguntas por componente (estilo CACES Odontología)
// Formato: { pregunta, opciones: [], correcta: index, explicacion }

const PREGUNTAS = {

  operatoria: [
    {
      pregunta: '¿Cuál es la principal función de la saliva relacionada con la caries dental?',
      opciones: ['Digestión de proteínas', 'Remineralización y capacidad buffer', 'Coagulación sanguínea', 'Lubricación exclusivamente'],
      correcta: 1,
      explicacion: 'La saliva neutraliza los ácidos gracias al bicarbonato y aporta calcio y fosfato para la remineralización del esmalte.'
    },
    {
      pregunta: 'Según la clasificación ICDAS, ¿qué representa el código 2?',
      opciones: ['Diente sano', 'Cambio visible en esmalte tras secado con aire', 'Mancha blanca/marrón visible con superficie húmeda', 'Cavidad con dentina expuesta'],
      correcta: 2,
      explicacion: 'ICDAS 2 corresponde a un cambio visible en el esmalte que se aprecia sin necesidad de secar el diente.'
    },
    {
      pregunta: 'En el índice CPO-D, la letra "P" representa:',
      opciones: ['Placa bacteriana', 'Dientes perdidos por caries', 'Dientes pulpotomizados', 'Prevalencia de caries'],
      correcta: 1,
      explicacion: 'CPO-D: Cariados, Perdidos (por caries) y Obturados en dentición permanente.'
    },
    {
      pregunta: '¿Cuál es la zona de dentina que puede remineralizarse y NO debe eliminarse?',
      opciones: ['Zona infectada', 'Zona afectada', 'Zona necrótica', 'Zona desintegrada'],
      correcta: 1,
      explicacion: 'La dentina afectada (interna) está desmineralizada pero conserva colágeno vital y puede remineralizarse. La infectada sí debe removerse.'
    },
    {
      pregunta: 'La abfracción se caracteriza por:',
      opciones: ['Desgaste por fricción diente-diente', 'Disolución química por ácidos', 'Microfracturas en cervical por flexión oclusal', 'Cavidad en fosa oclusal'],
      correcta: 2,
      explicacion: 'La abfracción se debe a microfracturas del esmalte cervical por fuerzas de flexión (bruxismo, oclusión traumática).'
    },
    {
      pregunta: '¿Cuánto tiempo debe grabarse el esmalte con ácido fosfórico al 37%?',
      opciones: ['5 segundos', '15 segundos', '30 segundos', '60 segundos'],
      correcta: 2,
      explicacion: 'El esmalte se graba 30 segundos y la dentina 15 segundos con ácido fosfórico al 37%.'
    },
    {
      pregunta: 'La técnica incremental de resina compuesta se usa para:',
      opciones: ['Ahorrar material', 'Reducir la contracción de polimerización', 'Aumentar la resistencia mecánica', 'Mejorar el color'],
      correcta: 1,
      explicacion: 'Al aplicar capas ≤2 mm se disminuye la contracción de polimerización y el estrés en la interfase adhesiva.'
    },
    {
      pregunta: '¿Cuál es la principal característica de la fluorosis dental?',
      opciones: ['Manchas asimétricas unilaterales', 'Opacidades bilaterales y simétricas', 'Cavidades activas profundas', 'Lesiones cervicales'],
      correcta: 1,
      explicacion: 'La fluorosis produce hipomineralización simétrica y bilateral, a diferencia de la HMI o la hipoplasia local.'
    },
    {
      pregunta: 'El principio de mínima intervención propone:',
      opciones: ['Eliminar toda la dentina afectada', 'Preservar la estructura dental sana y remineralizable', 'Realizar cavidades amplias de Black', 'Usar amalgama siempre'],
      correcta: 1,
      explicacion: 'Lanata: preservar tejido remineralizable y realizar restauraciones adhesivas conservadoras.'
    },
    {
      pregunta: '¿Cuál es el principal microorganismo cariogénico?',
      opciones: ['Porphyromonas gingivalis', 'Streptococcus mutans', 'Candida albicans', 'Fusobacterium nucleatum'],
      correcta: 1,
      explicacion: 'S. mutans es acidogénico y acidúrico, principal responsable del inicio de la caries.'
    },
    {
      pregunta: 'La técnica sándwich abierto en operatoria dental utiliza:',
      opciones: ['Solo amalgama', 'Ionómero + resina compuesta', 'Solo cerómero', 'Zirconia'],
      correcta: 1,
      explicacion: 'El ionómero de vidrio se coloca en la base o pared gingival y encima resina compuesta, aprovechando la liberación de flúor y adhesión.'
    },
    {
      pregunta: 'En dentina, un sistema autograbante:',
      opciones: ['No requiere grabado ácido separado', 'Requiere ácido fosfórico obligatorio', 'Solo se usa en esmalte', 'Se aplica antes del ionómero'],
      correcta: 0,
      explicacion: 'Los autograbantes contienen monómeros ácidos y no requieren grabado separado con ácido fosfórico, reduciendo sensibilidad postoperatoria.'
    },
    {
      pregunta: '¿Cuál es la principal diferencia entre erosión y atrición?',
      opciones: ['Ninguna, son sinónimos', 'Erosión es química, atrición es mecánica por contacto dentario', 'La atrición es infecciosa', 'La erosión solo ocurre en niños'],
      correcta: 1,
      explicacion: 'Erosión = disolución química (ERGE, cítricos). Atrición = desgaste por contactos oclusales (bruxismo).'
    },
    {
      pregunta: 'Un paciente presenta lesión cervical en forma de cuña sin sensibilidad. Diagnóstico más probable:',
      opciones: ['Caries clase V', 'Abrasión por cepillado', 'Fluorosis', 'Hipoplasia'],
      correcta: 1,
      explicacion: 'Las lesiones cervicales por cepillado (abrasión) forman una cuña característica en la unión cemento-esmalte.'
    },
    {
      pregunta: 'La hipomineralización molar-incisivo (HMI) afecta principalmente a:',
      opciones: ['Segundos molares deciduos', 'Primeros molares permanentes e incisivos permanentes', 'Terceros molares', 'Caninos temporales'],
      correcta: 1,
      explicacion: 'HMI afecta característicamente 1º molares permanentes ± incisivos permanentes.'
    }
  ],

  odontopediatria: [
    {
      pregunta: 'La técnica "decir-mostrar-hacer" fue descrita por:',
      opciones: ['Frankl', 'Addelston', 'Piaget', 'Erickson'],
      correcta: 1,
      explicacion: 'Addelston describió esta técnica de manejo de conducta basada en explicación, demostración y ejecución.'
    },
    {
      pregunta: 'La dosis máxima de lidocaína 2% con epinefrina en un niño es:',
      opciones: ['3.5 mg/kg', '5 mg/kg', '7 mg/kg', '10 mg/kg'],
      correcta: 2,
      explicacion: '7 mg/kg (máx 500 mg) es la dosis máxima de lidocaína con epinefrina en pediatría.'
    },
    {
      pregunta: 'En un caso de avulsión de un diente deciduo, la conducta correcta es:',
      opciones: ['Reimplantar inmediatamente', 'Reimplantar tras 30 minutos', 'NO reimplantar', 'Reimplantar solo si hay ferulización'],
      correcta: 2,
      explicacion: 'La avulsión de dientes deciduos NO se reimplanta por riesgo de dañar el germen del diente permanente.'
    },
    {
      pregunta: '¿Cuál es el mejor medio de conservación para un diente permanente avulsionado?',
      opciones: ['Agua corriente', 'Alcohol', 'HBSS o leche fría', 'Al ambiente seco'],
      correcta: 2,
      explicacion: 'HBSS (solución de Hank) es ideal; en su ausencia, leche fría o suero fisiológico. Evitar agua o secado.'
    },
    {
      pregunta: 'La cantidad de pasta dental fluorada (1000 ppm) recomendada para niños de 0-3 años es:',
      opciones: ['Cantidad de arveja', 'Cantidad de grano de arroz', 'Un cepillo lleno', 'No usar pasta con flúor'],
      correcta: 1,
      explicacion: 'De 0-3 años: cantidad "grano de arroz" (0.1 g); de 3-6 años: "arveja" (0.25 g).'
    },
    {
      pregunta: 'En una pulpotomía de un molar deciduo con sulfato férrico 15.5%, ¿cuál es el objetivo?',
      opciones: ['Momificar toda la pulpa', 'Hemostasia y preservar pulpa radicular vital', 'Necrosar la pulpa', 'Rellenar el conducto'],
      correcta: 1,
      explicacion: 'El sulfato férrico 15.5% actúa como hemostático manteniendo vital y funcional la pulpa radicular.'
    },
    {
      pregunta: 'La caries de la primera infancia (CPI) se define como:',
      opciones: ['Cualquier caries en niños de 12 años', 'Presencia de ≥1 superficie cariada, perdida u obturada en menores de 71 meses', 'Solo caries del biberón', 'Caries en dentición permanente'],
      correcta: 1,
      explicacion: 'CPI se define en niños <71 meses (6 años) con al menos una superficie afectada.'
    },
    {
      pregunta: '¿Cuál es la principal indicación de un sellador de fosas y fisuras?',
      opciones: ['Todos los dientes de todos los pacientes', 'Fosas y fisuras profundas de molares recién erupcionados o pacientes de alto riesgo', 'Solo dientes anteriores', 'Solo dientes con caries cavitada'],
      correcta: 1,
      explicacion: 'Los selladores están indicados en fosas retentivas de molares recientemente erupcionados y pacientes con alto riesgo cariogénico.'
    },
    {
      pregunta: 'La concentración de flúor en un barniz de NaF al 5% es aproximadamente:',
      opciones: ['500 ppm', '5000 ppm', '22.600 ppm', '100.000 ppm'],
      correcta: 2,
      explicacion: 'El barniz de NaF al 5% contiene aproximadamente 22.600 ppm de flúor.'
    },
    {
      pregunta: '¿A qué edad erupciona típicamente el primer molar permanente?',
      opciones: ['4 años', '6 años', '9 años', '12 años'],
      correcta: 1,
      explicacion: 'El primer molar permanente erupciona alrededor de los 6 años (llave de la oclusión).'
    },
    {
      pregunta: 'Un mesiodens es:',
      opciones: ['Fusión de dos dientes', 'Un diente supernumerario en línea media maxilar', 'Un diente deciduo persistente', 'Un canino ectópico'],
      correcta: 1,
      explicacion: 'El mesiodens es el diente supernumerario más frecuente, ubicado entre los incisivos centrales superiores.'
    },
    {
      pregunta: 'La succión digital prolongada suele producir:',
      opciones: ['Mordida cruzada anterior', 'Mordida abierta anterior + protrusión superior', 'Diastema mandibular', 'Sobremordida profunda'],
      correcta: 1,
      explicacion: 'La succión digital genera mordida abierta anterior con protrusión de incisivos superiores y compresión maxilar.'
    },
    {
      pregunta: 'En una fractura complicada de corona (con exposición pulpar) en un diente joven permanente, el tratamiento de elección conservador es:',
      opciones: ['Pulpectomía inmediata', 'Recubrimiento pulpar directo o pulpotomía parcial (Cvek)', 'Extracción', 'Solo restauración'],
      correcta: 1,
      explicacion: 'En dientes jóvenes se prefiere preservar vitalidad con recubrimiento directo o pulpotomía parcial (Cvek) usando MTA o hidróxido de calcio.'
    },
    {
      pregunta: 'La amelogénesis imperfecta se caracteriza por:',
      opciones: ['Alteración del esmalte de origen genético', 'Alteración adquirida por fluorosis', 'Solo afecta molares', 'Enfermedad infecciosa'],
      correcta: 0,
      explicacion: 'Es una enfermedad hereditaria que afecta la formación del esmalte de todos los dientes (deciduos y permanentes).'
    },
    {
      pregunta: 'El uso de fluoruro de diamino de plata (SDF) al 38% tiene como principal efecto adverso:',
      opciones: ['Alergia frecuente', 'Coloración negra de la caries detenida', 'Dolor intenso', 'Sensibilidad al frío'],
      correcta: 1,
      explicacion: 'El SDF detiene las lesiones cariosas pero tiñe de negro el tejido afectado, lo que limita su uso estético.'
    }
  ],

  cirugia: [
    {
      pregunta: 'El nervio alveolar inferior es rama de:',
      opciones: ['V1 Oftálmico', 'V2 Maxilar', 'V3 Mandibular', 'VII Facial'],
      correcta: 2,
      explicacion: 'El nervio alveolar inferior es rama del V3 (mandibular), rama motora-sensitiva del trigémino.'
    },
    {
      pregunta: 'La técnica de Spix se usa para bloquear:',
      opciones: ['Nervio alveolar superior posterior', 'Nervio alveolar inferior + lingual', 'Nervio nasopalatino', 'Nervio infraorbitario'],
      correcta: 1,
      explicacion: 'La técnica de Spix bloquea el nervio alveolar inferior (y frecuentemente el lingual) en la espina de Spix.'
    },
    {
      pregunta: 'La alveolitis seca aparece típicamente:',
      opciones: ['Inmediatamente tras la extracción', 'A los 3-5 días postoperatorios', 'A los 30 días', 'Nunca en molares'],
      correcta: 1,
      explicacion: 'La alveolitis seca (osteítis alveolar) se presenta 3-5 días después con dolor intenso y alveolo vacío sin coágulo.'
    },
    {
      pregunta: 'La Angina de Ludwig compromete los espacios:',
      opciones: ['Vestibular y palatino', 'Bilaterales: submandibular, sublingual y submentoniano', 'Retrofaríngeo únicamente', 'Fosa canina'],
      correcta: 1,
      explicacion: 'Es una celulitis bilateral de los tres espacios que puede comprometer la vía aérea → emergencia médica.'
    },
    {
      pregunta: 'La osteonecrosis mandibular por medicamentos (MRONJ) se relaciona con:',
      opciones: ['Anticoagulantes', 'Bifosfonatos y antirresortivos', 'Betabloqueantes', 'Antihistamínicos'],
      correcta: 1,
      explicacion: 'MRONJ se asocia principalmente a bifosfonatos (IV como zoledronato) y antirresortivos (denosumab).'
    },
    {
      pregunta: '¿Cuál es la principal complicación intraoperatoria de la extracción de un molar superior?',
      opciones: ['Fractura mandibular', 'Comunicación bucosinusal', 'Parestesia del nervio lingual', 'Enfisema orbitario'],
      correcta: 1,
      explicacion: 'La cercanía del seno maxilar hace frecuente la comunicación bucosinusal al extraer molares superiores.'
    },
    {
      pregunta: 'El antibiótico de primera línea en una infección odontogénica moderada es:',
      opciones: ['Ciprofloxacina', 'Amoxicilina 500 mg c/8h', 'Clindamicina en cualquier caso', 'Metronidazol solo'],
      correcta: 1,
      explicacion: 'Amoxicilina 500 mg c/8h VO x 7 días es el estándar en infecciones odontogénicas moderadas sin alergia.'
    },
    {
      pregunta: 'En un paciente alérgico a la penicilina con infección odontogénica, se recomienda:',
      opciones: ['Amoxi-clavulánico', 'Clindamicina 300 mg c/8h', 'Cefalexina', 'Vancomicina'],
      correcta: 1,
      explicacion: 'Clindamicina 300 mg c/6-8h es una excelente opción por su cobertura sobre anaerobios y buena penetración ósea.'
    },
    {
      pregunta: 'La aspiración durante la anestesia previene principalmente:',
      opciones: ['Trismus', 'Punción intravascular y toxicidad sistémica', 'Alergias', 'Fractura de aguja'],
      correcta: 1,
      explicacion: 'La aspiración negativa evita la inyección intravascular accidental del anestésico y vasoconstrictor.'
    },
    {
      pregunta: 'La técnica quirúrgica de exodoncia por vía alveolar convencional inicia con:',
      opciones: ['Osteotomía', 'Sindesmotomía', 'Odontosección', 'Legrado apical'],
      correcta: 1,
      explicacion: 'La sindesmotomía (romper el ligamento periodontal) es el primer paso antes de la luxación con elevador o fórceps.'
    },
    {
      pregunta: '¿Cuál de los siguientes no es un signo de fractura mandibular?',
      opciones: ['Escalón óseo palpable', 'Trismus', 'Signo de Guerin (equimosis en piso de boca)', 'Sangrado gingival simétrico'],
      correcta: 3,
      explicacion: 'El sangrado gingival simétrico no es signo de fractura. El signo de Guerin (equimosis sublingual) es muy indicativo de fractura mandibular.'
    },
    {
      pregunta: 'Un quiste dentígero se localiza:',
      opciones: ['En el ápice de un diente necrótico', 'Alrededor de la corona de un diente no erupcionado', 'En la línea media palatina', 'En el conducto nasopalatino'],
      correcta: 1,
      explicacion: 'El quiste dentígero (folicular) rodea la corona de un diente incluido, comúnmente terceros molares.'
    },
    {
      pregunta: 'La profilaxis antibiótica pre-procedimiento en pacientes con riesgo de endocarditis usa:',
      opciones: ['Amoxicilina 500 mg', 'Amoxicilina 2 g VO 30-60 min antes', 'Metronidazol 500 mg', 'Doxiciclina'],
      correcta: 1,
      explicacion: 'AHA: amoxicilina 2 g VO en adulto (50 mg/kg en niños) 30-60 minutos antes del procedimiento.'
    },
    {
      pregunta: 'Un paciente presenta parálisis facial transitoria tras anestesia troncular. La causa más probable es:',
      opciones: ['Reacción alérgica', 'Punción en la parótida con difusión al nervio facial', 'Toxicidad sistémica', 'Isquemia por vasoconstrictor'],
      correcta: 1,
      explicacion: 'La punción demasiado posterior en la técnica de Spix puede alcanzar la parótida y difundir anestésico al nervio facial (VII).'
    },
    {
      pregunta: 'Las indicaciones para tomar una CBCT (tomografía) en cirugía incluyen:',
      opciones: ['Todas las exodoncias', 'Terceros molares con proximidad al canal mandibular', 'Restauraciones de amalgama', 'Fluorosis'],
      correcta: 1,
      explicacion: 'CBCT es esencial en 3ºM con relación estrecha al canal mandibular (evaluar riesgo neurosensorial).'
    }
  ],

  rehabilitacion: [
    {
      pregunta: 'La relación céntrica es una posición:',
      opciones: ['Dentaria dependiente de la oclusión', 'Condílea reproducible, con el disco correctamente interpuesto', 'De la lengua', 'De reposo mandibular'],
      correcta: 1,
      explicacion: 'RC es una posición condilar reproducible, no dependiente de contacto dentario, con el complejo cóndilo-disco en su posición más superior y anterior.'
    },
    {
      pregunta: 'El espacio libre interoclusal normal es:',
      opciones: ['0 mm', '2-4 mm', '8-10 mm', '15 mm'],
      correcta: 1,
      explicacion: 'La diferencia entre DVR y DVO (espacio libre) es de aproximadamente 2-4 mm.'
    },
    {
      pregunta: 'En oclusión mutuamente protegida, en excursiones laterales, la protección la brinda:',
      opciones: ['Los molares', 'Los caninos (guía canina) o el grupo anterior', 'La lengua', 'La ATM'],
      correcta: 1,
      explicacion: 'En excursiones laterales, la guía canina o la función en grupo desocluye los dientes posteriores, protegiéndolos.'
    },
    {
      pregunta: 'Un paciente clase III de Kennedy tiene:',
      opciones: ['Extremos libres bilaterales', 'Extremo libre unilateral', 'Brecha unilateral o bilateral con pilares posteriores', 'Brecha anterior única cruzando la línea media'],
      correcta: 2,
      explicacion: 'Clase III de Kennedy: brecha con pilares en ambos extremos (no extremo libre).'
    },
    {
      pregunta: 'La Ley de Ante establece que:',
      opciones: ['La superficie radicular de pilares debe ser ≥ a la de dientes reemplazados', 'Solo se puede reemplazar un diente', 'Se prefiere titanio', 'La corona debe ser cerámica'],
      correcta: 0,
      explicacion: 'Ley de Ante: la superficie radicular total de los pilares debe ser igual o mayor a la de los dientes a reemplazar.'
    },
    {
      pregunta: 'La cerámica con mayor resistencia usada en puentes posteriores es:',
      opciones: ['Feldespática', 'Disilicato de litio', 'Zirconia', 'Leucita'],
      correcta: 2,
      explicacion: 'La zirconia tiene 900-1200 MPa de resistencia, ideal para puentes en zonas de mayor carga.'
    },
    {
      pregunta: '¿Qué tipo de preparación se recomienda para una corona totalmente cerámica?',
      opciones: ['Filo de cuchillo', 'Chamfer profundo', 'Hombro (90°) recto', 'Sin línea de terminación'],
      correcta: 2,
      explicacion: 'El hombro a 90° o hombro biselado es lo indicado para cerámica pura por su resistencia a la fractura.'
    },
    {
      pregunta: 'La retención en una prótesis total superior depende principalmente de:',
      opciones: ['Ganchos metálicos', 'Sellado periférico y adhesión', 'Cemento adhesivo permanente', 'Implantes obligatorios'],
      correcta: 1,
      explicacion: 'La retención en prótesis total depende del sellado periférico, la adhesión, cohesión y la presión atmosférica.'
    },
    {
      pregunta: 'El efecto férula (ferrule) para restauración de un diente endodonciado requiere:',
      opciones: ['0.5 mm de estructura', '1.5-2 mm de estructura dental sana', '5 mm de dentina', 'Postes metálicos siempre'],
      correcta: 1,
      explicacion: 'Se necesitan al menos 1.5-2 mm de estructura dental sana coronal para lograr un efecto férula efectivo.'
    },
    {
      pregunta: 'Los postes de fibra de vidrio son preferidos porque:',
      opciones: ['Son metálicos', 'Tienen módulo elástico similar a la dentina', 'Son irremovibles', 'Son opacos'],
      correcta: 1,
      explicacion: 'Su módulo elástico similar a la dentina distribuye mejor las fuerzas y disminuye el riesgo de fractura radicular.'
    },
    {
      pregunta: 'La dimensión vertical de oclusión (DVO) es la posición mandibular en:',
      opciones: ['Reposo', 'Máxima intercuspidación', 'Protrusión máxima', 'Lateralidad derecha'],
      correcta: 1,
      explicacion: 'DVO es la distancia entre dos puntos anatómicos (subnasal-mentón) con los dientes en máxima intercuspidación.'
    },
    {
      pregunta: 'El apoyo oclusal en una prótesis parcial removible tiene la función principal de:',
      opciones: ['Retener la prótesis', 'Transmitir fuerzas al eje longitudinal del pilar', 'Estabilizar solamente', 'Cerrar el diastema'],
      correcta: 1,
      explicacion: 'El apoyo oclusal dirige las fuerzas masticatorias al eje longitudinal del pilar, evitando desplazamientos.'
    },
    {
      pregunta: 'El cemento resinoso dual se recomienda para:',
      opciones: ['Cementación de coronas metálicas', 'Cementación adhesiva de postes y restauraciones cerámicas', 'Restauraciones temporales', 'Pulpotomías'],
      correcta: 1,
      explicacion: 'Los cementos duales tienen polimerización química y por luz, ideal para áreas donde la luz no llega bien (postes, coronas gruesas).'
    },
    {
      pregunta: 'La articulación temporomandibular es de tipo:',
      opciones: ['Enartrosis', 'Ginglimoartrodial (bicondílea)', 'Trocleartrosis', 'Sinartrosis'],
      correcta: 1,
      explicacion: 'La ATM es ginglimoartrodial: combina movimientos de rotación (bisagra) y traslación.'
    },
    {
      pregunta: 'Un póntico higiénico se caracteriza por:',
      opciones: ['Estar en contacto pleno con la encía', 'No contactar la mucosa del reborde para facilitar la limpieza', 'Ser siempre cerámico', 'Ir en zona anterior'],
      correcta: 1,
      explicacion: 'El póntico higiénico o sanitario no contacta la encía, permitiendo el paso del cepillo o hilo dental.'
    }
  ],

  endodoncia: [
    {
      pregunta: 'La prueba más confiable de vitalidad pulpar es:',
      opciones: ['Percusión vertical', 'Test térmico con frío (Endo-Ice)', 'Palpación', 'Movilidad'],
      correcta: 1,
      explicacion: 'El test térmico con frío es el más confiable para valorar vitalidad pulpar.'
    },
    {
      pregunta: 'Una pulpitis irreversible sintomática se caracteriza por:',
      opciones: ['Dolor breve al frío que cede al retirar el estímulo', 'Dolor espontáneo, prolongado, irradiado', 'Ausencia de dolor', 'Solo dolor al morder'],
      correcta: 1,
      explicacion: 'La pulpitis irreversible sintomática cursa con dolor espontáneo, prolongado y a veces irradiado, no cede.'
    },
    {
      pregunta: 'La longitud de trabajo en endodoncia se establece:',
      opciones: ['Al ápice radiográfico exacto', '2 mm más allá del ápice', '0.5-1 mm antes del ápice radiográfico', '5 mm antes del ápice'],
      correcta: 2,
      explicacion: 'La constricción apical se ubica 0.5-1 mm antes del ápice radiográfico; ese es el límite de trabajo.'
    },
    {
      pregunta: 'El irrigante con mayor capacidad de disolver tejido orgánico es:',
      opciones: ['Suero fisiológico', 'EDTA', 'Hipoclorito de sodio (NaOCl) 2.5-5.25%', 'Clorhexidina 2%'],
      correcta: 2,
      explicacion: 'NaOCl es bactericida y disuelve tejido orgánico necrótico. EDTA quela calcio (elimina barrillo).'
    },
    {
      pregunta: 'El EDTA al 17% se usa para:',
      opciones: ['Disolver pulpa necrótica', 'Eliminar el barrillo dentinario (smear layer)', 'Anestesia', 'Obturación'],
      correcta: 1,
      explicacion: 'EDTA quela el calcio y elimina el smear layer, permitiendo mejor sellado y adhesión.'
    },
    {
      pregunta: 'La técnica de obturación de condensación lateral utiliza:',
      opciones: ['Cera dental', 'Conos accesorios de gutapercha + cemento sellador', 'Amalgama', 'Ionómero'],
      correcta: 1,
      explicacion: 'Se compacta lateralmente con espaciadores conos accesorios de gutapercha y cemento sellador.'
    },
    {
      pregunta: 'El uso obligatorio del dique de goma en endodoncia se justifica principalmente para:',
      opciones: ['Comodidad del paciente', 'Aislamiento del campo, evitar contaminación y deglución/aspiración de instrumentos', 'Estética', 'Cementación'],
      correcta: 1,
      explicacion: 'El dique es obligatorio: aísla, evita infección cruzada y accidentes con instrumentos.'
    },
    {
      pregunta: 'El material de obturación retrógrada más recomendado en cirugía apical es:',
      opciones: ['Amalgama', 'MTA o cementos biocerámicos', 'Gutapercha', 'IRM'],
      correcta: 1,
      explicacion: 'El MTA y los biocerámicos son actualmente los materiales de elección para obturación retrógrada.'
    },
    {
      pregunta: 'La causa más frecuente de fracaso endodóncico es:',
      opciones: ['Sobreinstrumentación', 'Sellado coronario deficiente y filtración', 'Uso de gutapercha', 'Anestesia'],
      correcta: 1,
      explicacion: 'La reinfección por sellado coronario deficiente (filtración microbiana coronal) es la principal causa de fracaso.'
    },
    {
      pregunta: 'En una perforación radicular, el material de elección para reparar es:',
      opciones: ['Composite', 'MTA o biocerámico', 'Amalgama', 'Ionómero convencional'],
      correcta: 1,
      explicacion: 'MTA/biocerámicos: biocompatibles, buen sellado y capacidad de fraguar en presencia de humedad.'
    },
    {
      pregunta: 'El accidente por hipoclorito de sodio se manifiesta por:',
      opciones: ['Anestesia total', 'Dolor intenso súbito, edema, equimosis facial y sangrado', 'Fiebre alta inmediata', 'Ninguna manifestación'],
      correcta: 1,
      explicacion: 'La extrusión periapical de NaOCl produce dolor súbito, edema, equimosis y a veces necrosis. Manejo: irrigar con SF, corticoide, analgesia, antibiótico.'
    },
    {
      pregunta: 'La técnica step-back (paso atrás) consiste en:',
      opciones: ['Instrumentar de coronal a apical', 'Preparar apical con lima maestra y luego escalonar coronalmente con limas mayores', 'Solo instrumentar el tercio medio', 'Obturar retrógrado'],
      correcta: 1,
      explicacion: 'Step-back: se establece longitud de trabajo con lima maestra, y se preparan escalones coronales con limas de mayor calibre.'
    },
    {
      pregunta: 'La percusión positiva vertical indica principalmente:',
      opciones: ['Vitalidad pulpar normal', 'Inflamación del ligamento periodontal apical', 'Caries reciente', 'Fractura de esmalte'],
      correcta: 1,
      explicacion: 'Percusión vertical dolorosa refleja inflamación periapical (periodontitis apical).'
    },
    {
      pregunta: '¿Cuál es la principal indicación de retratamiento endodóncico?',
      opciones: ['Restauración estética', 'Persistencia o aparición de sintomatología, lesión periapical sin regresión, obturación deficiente', 'Cambio de color', 'Bruxismo'],
      correcta: 1,
      explicacion: 'El retratamiento se indica ante persistencia de patología, obturaciones inadecuadas o reagudización.'
    },
    {
      pregunta: 'La radiografía de conductometría se toma con la lima:',
      opciones: ['A cualquier longitud', 'A la longitud tentativa (obtenida con localizador apical)', 'Fuera del conducto', 'Solo por vestibular'],
      correcta: 1,
      explicacion: 'Se coloca la lima a la longitud tentativa (según localizador o referencia radiográfica) para verificar la longitud de trabajo.'
    }
  ],

  periodoncia: [
    {
      pregunta: 'El "tejido de inserción supracrestal" (antes llamado ancho biológico) mide en promedio:',
      opciones: ['0.5 mm', '2.04 mm', '5 mm', '10 mm'],
      correcta: 1,
      explicacion: 'Aproximadamente 2.04 mm: 0.97 mm de epitelio de unión + 1.07 mm de conectivo.'
    },
    {
      pregunta: 'El complejo rojo de Socransky incluye:',
      opciones: ['S. mutans, Lactobacillus, C. albicans', 'P. gingivalis, T. forsythia, T. denticola', 'F. nucleatum, P. intermedia', 'A. actinomycetemcomitans, E. coli'],
      correcta: 1,
      explicacion: 'El complejo rojo (más asociado a periodontitis destructiva) incluye P. gingivalis, T. forsythia y T. denticola.'
    },
    {
      pregunta: 'El factor de riesgo modificable más importante para periodontitis es:',
      opciones: ['Edad', 'Tabaquismo', 'Sexo masculino', 'Genética'],
      correcta: 1,
      explicacion: 'El tabaquismo es el factor de riesgo modificable más importante para periodontitis.'
    },
    {
      pregunta: 'La clasificación de periodontitis 2017 se basa en:',
      opciones: ['Edad y sexo', 'Estadio (severidad/extensión) + Grado (progresión)', 'Solo profundidad de bolsa', 'Solo sangrado'],
      correcta: 1,
      explicacion: 'La nueva clasificación 2017 usa Estadio (I-IV), Grado (A-C) y Extensión (localizada/generalizada/molar-incisivo).'
    },
    {
      pregunta: 'Un paciente con pérdida de inserción de 6 mm en el 40% de los sitios sin pérdida dentaria tendría:',
      opciones: ['Estadio I localizado', 'Estadio III generalizado', 'Estadio IV', 'Salud periodontal'],
      correcta: 1,
      explicacion: 'PIC 6 mm = Estadio III, y >30% de sitios = generalizado. No refiere pérdida dental, así que no es IV.'
    },
    {
      pregunta: 'La fase higiénica del tratamiento periodontal incluye:',
      opciones: ['Cirugía regenerativa', 'Motivación, instrucción de higiene, RAR y control de placa', 'Extracciones múltiples', 'Colocación de implantes'],
      correcta: 1,
      explicacion: 'La fase higiénica (etiológica) es no quirúrgica: educación, control mecánico/químico y raspaje-alisado radicular.'
    },
    {
      pregunta: 'La clorhexidina al 0.12% se usa como:',
      opciones: ['Anestésico', 'Enjuague antibacteriano coadyuvante', 'Analgésico', 'Cicatrizante'],
      correcta: 1,
      explicacion: 'CHX 0.12% es el estándar de oro como antiséptico coadyuvante en periodoncia.'
    },
    {
      pregunta: 'La reevaluación tras la fase higiénica se realiza a las:',
      opciones: ['24 horas', '1 semana', '6-8 semanas', '1 año'],
      correcta: 2,
      explicacion: 'Se debe esperar 6-8 semanas para cicatrización de tejidos antes de reevaluar y decidir la fase correctiva.'
    },
    {
      pregunta: 'Una lesión de furcación grado II (Hamp) se caracteriza por:',
      opciones: ['Ninguna afectación', 'Sondaje horizontal <3 mm', 'Sondaje horizontal >3 mm sin atravesar', 'Atraviesa completamente'],
      correcta: 2,
      explicacion: 'Grado I: <3 mm; Grado II: >3 mm sin pasar de lado a lado; Grado III: atraviesa completamente.'
    },
    {
      pregunta: 'La gingivitis inducida por biofilm se caracteriza por:',
      opciones: ['Pérdida de inserción clínica', 'Inflamación gingival sin pérdida de inserción', 'Bolsas profundas', 'Movilidad severa'],
      correcta: 1,
      explicacion: 'La gingivitis es reversible: hay inflamación pero no pérdida de inserción ni de hueso.'
    },
    {
      pregunta: 'El absceso periodontal se maneja con:',
      opciones: ['Solo antibiótico', 'Drenaje, raspado y alisado radicular; antibiótico si hay compromiso sistémico', 'Extracción inmediata', 'Corticoide'],
      correcta: 1,
      explicacion: 'Manejo local (drenaje + RAR) es primordial; los antibióticos se reservan para compromiso sistémico.'
    },
    {
      pregunta: 'La GUNA (gingivitis ulceronecrotizante) se caracteriza por:',
      opciones: ['Papilas en cráter, dolor intenso, halitosis fétida, pseudomembranas', 'Ausencia de dolor', 'Encía rosa saludable', 'Solo cambio de color'],
      correcta: 0,
      explicacion: 'GUNA presenta papilas necrosadas en cráter, dolor intenso, halitosis fétida y a veces fiebre.'
    },
    {
      pregunta: 'La periimplantitis se define como:',
      opciones: ['Inflamación del tejido periimplantar sin pérdida ósea', 'Inflamación con pérdida ósea progresiva alrededor del implante', 'Movilidad primaria', 'Sangrado leve normal'],
      correcta: 1,
      explicacion: 'Periimplantitis: inflamación + pérdida ósea progresiva. Mucositis: inflamación sin pérdida ósea.'
    },
    {
      pregunta: 'El sangrado al sondaje es indicador de:',
      opciones: ['Salud gingival', 'Inflamación gingival activa', 'Bruxismo', 'Xerostomía'],
      correcta: 1,
      explicacion: 'El sangrado al sondaje refleja inflamación gingival; su ausencia es un buen predictor de estabilidad periodontal.'
    },
    {
      pregunta: 'El principal signo de la periodontitis en la radiografía es:',
      opciones: ['Aumento de la cresta ósea', 'Pérdida de altura ósea horizontal o vertical', 'Radiopacidad periapical', 'Ensanchamiento del canal'],
      correcta: 1,
      explicacion: 'La periodontitis produce pérdida ósea alveolar horizontal o vertical, visible en la radiografía.'
    }
  ],

  patologia: [
    {
      pregunta: 'El carcinoma epidermoide oral se localiza más frecuentemente en:',
      opciones: ['Encía adherida', 'Borde lateral de lengua y piso de boca', 'Paladar duro', 'Vestíbulo superior'],
      correcta: 1,
      explicacion: 'El CEC oral tiene predilección por borde lateral de lengua y piso de boca (zonas de alto riesgo).'
    },
    {
      pregunta: 'El quiste odontogénico más frecuente es:',
      opciones: ['Dentígero', 'Radicular (periapical)', 'Queratoquiste', 'Del erupción'],
      correcta: 1,
      explicacion: 'El quiste radicular (inflamatorio, apical a diente necrótico) es el más frecuente de los quistes odontogénicos.'
    },
    {
      pregunta: 'El queratoquiste odontogénico es característico del síndrome de:',
      opciones: ['Down', 'Gorlin (nevoide basocelular)', 'Turner', 'Marfan'],
      correcta: 1,
      explicacion: 'El síndrome de Gorlin cursa con queratoquistes múltiples, carcinomas basocelulares, calcificaciones de la hoz cerebral.'
    },
    {
      pregunta: 'La lesión oral asociada a VPH-16 es factor de riesgo para:',
      opciones: ['Carcinoma orofaríngeo', 'Fluorosis', 'Amelogénesis imperfecta', 'Alveolitis'],
      correcta: 0,
      explicacion: 'VPH-16 es agente oncogénico asociado a carcinomas orofaríngeos.'
    },
    {
      pregunta: 'La leucoplasia se define como:',
      opciones: ['Placa blanca removible por raspado', 'Placa blanca NO removible que no puede caracterizarse como otra enfermedad', 'Lesión roja', 'Aumento de tejido gingival'],
      correcta: 1,
      explicacion: 'Leucoplasia = placa blanca no removible, diagnóstico de exclusión, con potencial premaligno.'
    },
    {
      pregunta: 'La candidiasis pseudomembranosa se caracteriza por:',
      opciones: ['Placa blanca removible al raspar', 'Lesión roja', 'Ulceración profunda', 'Vesículas'],
      correcta: 0,
      explicacion: 'La candidiasis pseudomembranosa (muguet) presenta placas blancas fáciles de desprender que dejan mucosa eritematosa.'
    },
    {
      pregunta: 'El granuloma piógeno de la encía frecuentemente aparece:',
      opciones: ['En hombres ancianos', 'Durante el embarazo', 'En niños con caries', 'Solo en labio'],
      correcta: 1,
      explicacion: 'El granuloma piógeno (tumor del embarazo) se ve frecuentemente en gestantes por cambios hormonales + placa.'
    },
    {
      pregunta: 'El liquen plano oral se caracteriza clínicamente por:',
      opciones: ['Placas rojas y sangrantes', 'Estrías blancas de Wickham en la mucosa yugal', 'Cavidades cariosas', 'Ausencia de lesiones'],
      correcta: 1,
      explicacion: 'El liquen plano reticular muestra estrías blancas de Wickham, típicamente en mucosa yugal bilateral.'
    },
    {
      pregunta: 'El chancro sifilítico primario aparece como:',
      opciones: ['Vesículas dolorosas', 'Úlcera indolora indurada', 'Placa blanca removible', 'Lengua saburral'],
      correcta: 1,
      explicacion: 'El chancro primario de sífilis es una úlcera única, indolora e indurada.'
    },
    {
      pregunta: 'El herpes labial recurrente es causado por:',
      opciones: ['VHS tipo 1', 'VPH', 'Candida albicans', 'Streptococcus'],
      correcta: 0,
      explicacion: 'VHS-1 reactivado desde el ganglio trigeminal produce el herpes labial recurrente.'
    },
    {
      pregunta: 'La lengua geográfica se conoce también como:',
      opciones: ['Glositis migratoria benigna', 'Glositis romboidal media', 'Candidiasis hiperplásica', 'Cáncer de lengua'],
      correcta: 0,
      explicacion: 'La lengua geográfica es una glositis migratoria benigna, sin significado patológico serio.'
    },
    {
      pregunta: 'El ameloblastoma se caracteriza por ser:',
      opciones: ['Tumor maligno agresivo con metástasis frecuentes', 'Tumor benigno pero localmente agresivo con alta recurrencia', 'Un quiste inflamatorio', 'Lesión herpética'],
      correcta: 1,
      explicacion: 'El ameloblastoma es benigno pero localmente destructivo y con alta tasa de recurrencia; requiere resección con margen.'
    },
    {
      pregunta: 'La eritroplasia oral es:',
      opciones: ['Lesión benigna sin riesgo', 'Placa roja con alta tasa de displasia/carcinoma', 'Signo de anemia', 'Hemangioma'],
      correcta: 1,
      explicacion: 'La eritroplasia tiene mayor riesgo de malignización que la leucoplasia; siempre biopsiar.'
    },
    {
      pregunta: 'La macroglosia es característica de:',
      opciones: ['Síndrome de Down, hipotiroidismo congénito, amiloidosis', 'Síndrome de Marfan', 'Fluorosis', 'Osteoporosis'],
      correcta: 0,
      explicacion: 'La macroglosia se observa en síndrome de Down, hipotiroidismo congénito, acromegalia, amiloidosis.'
    },
    {
      pregunta: 'El sarcoma de Kaposi oral se asocia a:',
      opciones: ['Diabetes', 'Infección por VIH/SIDA', 'Hipertensión', 'Fluorosis'],
      correcta: 1,
      explicacion: 'El sarcoma de Kaposi es una lesión típica en pacientes con VIH avanzado, asociada al herpesvirus humano 8.'
    }
  ],

  farmacologia: [
    {
      pregunta: '¿Cuál es la dosis máxima de lidocaína al 2% con epinefrina en un adulto?',
      opciones: ['3 mg/kg (máx 200 mg)', '7 mg/kg (máx 500 mg)', '10 mg/kg (máx 700 mg)', '15 mg/kg'],
      correcta: 1,
      explicacion: 'Lidocaína con epinefrina: 7 mg/kg con dosis máxima total de 500 mg.'
    },
    {
      pregunta: 'La articaína 4% + epinefrina se caracteriza por:',
      opciones: ['Ser un éster', 'Alta difusión ósea, especialmente útil en maxilar', 'No usarse en odontología', 'Ser contraindicada en todos'],
      correcta: 1,
      explicacion: 'La articaína (amida) tiene alta liposolubilidad y difusión ósea, muy útil en maxilar por infiltración.'
    },
    {
      pregunta: 'Un cartucho de anestesia dental de 1.8 mL de lidocaína al 2% contiene:',
      opciones: ['18 mg', '36 mg', '54 mg', '72 mg'],
      correcta: 1,
      explicacion: 'Concentración 2% = 20 mg/mL × 1.8 mL = 36 mg de lidocaína.'
    },
    {
      pregunta: 'La contraindicación absoluta del uso de vasoconstrictores es:',
      opciones: ['HTA controlada', 'IAM en las últimas 6 meses o hipertiroidismo no controlado', 'Diabetes controlada', 'Embarazo'],
      correcta: 1,
      explicacion: 'IAM reciente, arritmias severas y hipertiroidismo no controlado son contraindicaciones absolutas/relativas serias.'
    },
    {
      pregunta: 'La dosis pediátrica de amoxicilina es:',
      opciones: ['10 mg/kg/día', '25-50 mg/kg/día en 3 dosis', '100 mg/kg/día', '5 mg/kg/día'],
      correcta: 1,
      explicacion: 'Amoxicilina pediátrica: 25-50 mg/kg/día divididos cada 8 horas.'
    },
    {
      pregunta: 'La combinación de amoxicilina + metronidazol se usa en:',
      opciones: ['Caries dental', 'Periodontitis agresiva/severa con A. actinomycetemcomitans', 'Alveolitis seca simple', 'Herpes labial'],
      correcta: 1,
      explicacion: 'La combinación amoxi + metronidazol mejora resultados en periodontitis con presencia de bacterias anaerobias y A. actinomycetemcomitans.'
    },
    {
      pregunta: 'La clindamicina se recomienda especialmente en:',
      opciones: ['Diabetes', 'Alérgicos a penicilina con infecciones odontogénicas moderadas-severas', 'Embarazo primer trimestre', 'Hipertensión'],
      correcta: 1,
      explicacion: 'Clindamicina es excelente alternativa en alérgicos a penicilina; buena cobertura anaerobia y penetración ósea.'
    },
    {
      pregunta: 'El paracetamol es el analgésico de elección en el embarazo porque:',
      opciones: ['Es un AINE', 'No es AINE, no afecta cierre de ductus arterioso', 'Contiene codeína', 'Es opioide'],
      correcta: 1,
      explicacion: 'Paracetamol no es AINE; los AINEs en 3er trimestre pueden cerrar prematuramente el ductus arterioso fetal.'
    },
    {
      pregunta: 'La dexametasona 4-8 mg preoperatoria en cirugía de terceros molares se usa para:',
      opciones: ['Analgesia', 'Reducir edema e inflamación postoperatoria', 'Antibiótico profiláctico', 'Anestesia'],
      correcta: 1,
      explicacion: 'La dexametasona reduce significativamente el edema y trismus posquirúrgico.'
    },
    {
      pregunta: 'El régimen de profilaxis antibiótica pre-procedimiento en adultos con riesgo de endocarditis es:',
      opciones: ['Amoxicilina 500 mg', 'Amoxicilina 2 g VO 30-60 min antes', 'Metronidazol 500 mg', 'Doxiciclina 100 mg'],
      correcta: 1,
      explicacion: 'AHA: 2 g de amoxicilina VO en dosis única 30-60 minutos antes del procedimiento.'
    },
    {
      pregunta: 'La nistatina para candidiasis se usa:',
      opciones: ['Vía intravenosa', 'Tópica: enjuague y deglución 4-5 veces/día', 'Intramuscular', 'Como pastilla masticable'],
      correcta: 1,
      explicacion: 'Nistatina 100.000 UI/mL: se enjuaga la boca y se traga por 7-14 días.'
    },
    {
      pregunta: 'El aciclovir tópico para herpes labial se aplica:',
      opciones: ['1 vez al día', 'Cada 2-4 horas por 4 días', 'Solo por la noche', 'Semanalmente'],
      correcta: 1,
      explicacion: 'Aciclovir crema al 5% cada 2-4 horas por 4 días es la pauta tópica habitual.'
    },
    {
      pregunta: 'Las tetraciclinas están contraindicadas en:',
      opciones: ['Personas mayores', 'Niños <8 años y embarazadas por tinción dental', 'Diabéticos', 'Hipertensos'],
      correcta: 1,
      explicacion: 'Las tetraciclinas se depositan en tejidos calcificados en formación, tiñendo dientes en niños y feto.'
    },
    {
      pregunta: 'El mecanismo de acción de los anestésicos locales es:',
      opciones: ['Bloqueo de canales de calcio', 'Bloqueo reversible de canales de sodio dependientes de voltaje', 'Bloqueo de receptores GABA', 'Antagonismo de dopamina'],
      correcta: 1,
      explicacion: 'Los anestésicos locales bloquean canales de Na+ voltaje-dependientes → impiden despolarización → bloqueo de conducción.'
    },
    {
      pregunta: 'La dosis pediátrica de ibuprofeno es:',
      opciones: ['1 mg/kg', '5-10 mg/kg c/6-8 horas', '30 mg/kg', '50 mg/kg'],
      correcta: 1,
      explicacion: 'Ibuprofeno en niños >6 meses: 5-10 mg/kg cada 6-8 horas.'
    }
  ],

  medicina: [
    {
      pregunta: 'En un paciente diabético con hipoglicemia consciente, el manejo inicial es:',
      opciones: ['Insulina IM', 'Administrar 15 g de glucosa oral (jugo, azúcar)', 'Adrenalina IM', 'RCP'],
      correcta: 1,
      explicacion: 'Regla de los 15: dar 15 g de carbohidratos, esperar 15 min y verificar glicemia.'
    },
    {
      pregunta: 'En un shock anafiláctico, el fármaco de primera elección es:',
      opciones: ['Difenhidramina 50 mg IV', 'Adrenalina 0.3-0.5 mg IM (1:1000) en muslo', 'Hidrocortisona 200 mg IV', 'Salbutamol inhalado'],
      correcta: 1,
      explicacion: 'Adrenalina IM es el tratamiento vital de primera línea en anafilaxia.'
    },
    {
      pregunta: 'La crisis asmática se maneja inicialmente con:',
      opciones: ['Antihistamínico oral', 'Salbutamol 2-4 puffs, O2, adrenalina si severa', 'Antibióticos', 'Corticoide inhalado únicamente'],
      correcta: 1,
      explicacion: 'Salbutamol 2-4 puffs cada 20 min, oxígeno; si severa, adrenalina SC/IM 0.3-0.5 mg y traslado.'
    },
    {
      pregunta: 'La técnica de RCP en adulto: relación compresiones:ventilaciones es:',
      opciones: ['15:2', '30:2', '5:1', '10:1'],
      correcta: 1,
      explicacion: 'RCP adulto: 30 compresiones y 2 ventilaciones (para uno o dos rescatadores).'
    },
    {
      pregunta: 'La profundidad de compresiones torácicas en RCP adulto es:',
      opciones: ['2-3 cm', '5-6 cm', '10 cm', '1 cm'],
      correcta: 1,
      explicacion: 'AHA: compresiones de al menos 5 cm pero no más de 6 cm.'
    },
    {
      pregunta: 'En una paciente embarazada, el trimestre ideal para tratamiento odontológico es:',
      opciones: ['Primer trimestre', 'Segundo trimestre (14-20 semanas)', 'Tercer trimestre completo', 'Ninguno'],
      correcta: 1,
      explicacion: 'El 2º trimestre es el más seguro: pasa la organogénesis y no hay incomodidad del 3ero.'
    },
    {
      pregunta: 'La bandera roja para posponer tratamiento electivo en HTA es:',
      opciones: ['120/80', '130/85', 'PA ≥180/120', '135/90'],
      correcta: 2,
      explicacion: 'Crisis hipertensiva (≥180/120): no realizar procedimiento electivo y referir.'
    },
    {
      pregunta: 'El síncope vasovagal se maneja con:',
      opciones: ['RCP inmediata', 'Trendelenburg (piernas elevadas), aflojar ropa, O2', 'Adrenalina IM', 'Nitroglicerina'],
      correcta: 1,
      explicacion: 'Elevar piernas mejora retorno venoso; el paciente suele recuperarse en menos de 2 minutos.'
    },
    {
      pregunta: 'Un INR seguro para exodoncias simples en pacientes warfarinizados es:',
      opciones: ['≤1.5', '≤3.5', '≥5', '≥7'],
      correcta: 1,
      explicacion: 'INR ≤3.5 se considera seguro para exodoncias simples sin necesidad de suspender warfarina, con medidas hemostáticas locales.'
    },
    {
      pregunta: 'La hemofilia A se debe al déficit de:',
      opciones: ['Factor VII', 'Factor VIII', 'Factor IX', 'Factor X'],
      correcta: 1,
      explicacion: 'Hemofilia A: déficit de factor VIII. Hemofilia B (Christmas): factor IX.'
    },
    {
      pregunta: 'La MRONJ (osteonecrosis por medicamentos) se asocia principalmente a:',
      opciones: ['Betabloqueantes', 'Bifosfonatos y antirresortivos como denosumab', 'IECAs', 'Antihistamínicos'],
      correcta: 1,
      explicacion: 'MRONJ se relaciona a bifosfonatos IV (zoledronato) y antirresortivos como denosumab.'
    },
    {
      pregunta: 'Ante una crisis convulsiva en el sillón dental, se debe:',
      opciones: ['Introducir un objeto en la boca para evitar mordedura', 'Proteger la cabeza, retirar objetos, decúbito lateral', 'Sujetar firmemente al paciente', 'Aplicar adrenalina IM'],
      correcta: 1,
      explicacion: 'NO introducir nada en la boca. Proteger cabeza, decúbito lateral (posición de recuperación) para evitar broncoaspiración.'
    },
    {
      pregunta: 'En un paciente con endocarditis previa que requiere una exodoncia, se debe:',
      opciones: ['Contraindicar el procedimiento', 'Administrar profilaxis antibiótica con amoxicilina 2 g VO 30-60 min antes', 'No hacer nada especial', 'Solo dar antibiótico postoperatorio'],
      correcta: 1,
      explicacion: 'Historia de endocarditis es indicación para profilaxis: amoxicilina 2 g VO 30-60 min antes.'
    },
    {
      pregunta: 'El síndrome de vena cava inferior en embarazadas se previene:',
      opciones: ['Con oxígeno', 'Colocando a la paciente en decúbito lateral izquierdo o semisentada', 'Con analgésicos', 'Con adrenalina'],
      correcta: 1,
      explicacion: 'Evitar el decúbito supino prolongado. Decúbito lateral izquierdo evita compresión de la vena cava por el útero grávido.'
    },
    {
      pregunta: 'La frecuencia de compresiones torácicas en RCP debe ser de:',
      opciones: ['40-60/min', '100-120/min', '150-180/min', 'Lo más rápido posible sin límite'],
      correcta: 1,
      explicacion: 'AHA recomienda entre 100-120 compresiones/min con retorno completo del tórax entre cada compresión.'
    }
  ]
};
