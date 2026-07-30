// Chatbot Rex - respuestas programadas (rule-based)
// Detecta palabras clave y responde con frases motivacionales y tips

const RESPUESTAS_CHATBOT = {
  saludos: [
    "¡Hola hermosa! 🦕 Soy Rex, tu compañero dinosaurio. ¿Cómo va tu día de estudio? 💙",
    "¡Hola! 🌿 Qué gusto verte por aquí. Recuerda: cada tema que estudias te acerca a ser una odontóloga increíble.",
    "¡Hey! 🦖 ¿Lista para conquistar el CACES hoy? Vamos paso a paso 💪"
  ],

  motivacion: [
    "Recuerda: no tienes que saberlo todo hoy, solo un poco más que ayer. 🌱",
    "Cada pregunta que respondes bien es una victoria. ¡Estoy orgulloso de ti! 🦕💙",
    "Los grandes odontólogos también empezaron con miedo al examen. Tú vas a lograrlo.",
    "El CACES no mide tu valor como persona. Tú ya vales muchísimo. Solo dale con calma. 🌸",
    "Si un dinosaurio como yo sobrevivió millones de años, tú puedes con este examen 🦖✨",
    "Repite conmigo: 'Estudio con amor, no con miedo.' 💙",
    "Los errores son aprendizaje. Cada respuesta incorrecta te enseña algo nuevo. ¡Sigue!",
    "Un paso a la vez, un tema a la vez, una pregunta a la vez. Todo se construye así. 🌿",
    "Confía en el proceso. Estás sembrando y muy pronto vas a cosechar 🌱",
    "Eres más fuerte de lo que crees. Y estás más preparada de lo que sientes."
  ],

  tips: [
    "💡 Tip Pomodoro: 25 min de estudio + 5 min de descanso. Después de 4 ciclos, descansa 20 min. Tu cerebro te lo agradecerá 🧠",
    "💡 Explica el tema en voz alta como si se lo enseñaras a alguien. Esa es la mejor forma de retener (técnica Feynman).",
    "💡 Enfócate primero en Operatoria Dental (21%) y luego Odontopediatría/Cirugía (13% cada uno). Es lo que más peso tiene.",
    "💡 Los cuestionarios activan la memoria mucho mejor que releer. ¡Haz muchos! 🧪",
    "💡 Dormir bien = mejor consolidación de memoria. No sacrifiques el sueño 🌙",
    "💡 Repasa antes de dormir y al despertar. Son los momentos de mayor retención.",
    "💡 Haz mapas mentales para temas grandes como oclusión o clasificación periodontal 2017.",
    "💡 Estudia con espaciado: revisar un tema 3 veces en días distintos es mejor que 3 horas seguidas.",
    "💡 Los flashcards funcionan de maravilla para farmacología (dosis, dosis, dosis 💊).",
    "💡 Cada 45 min levántate, camina, toma agua. Tu concentración lo agradece 💧"
  ],

  respirar: [
    "🌸 Vamos a respirar juntos. Inhala 4 segundos... mantén 4... exhala 6. Repite 3 veces. Yo te espero.",
    "🌿 Cierra los ojos. Siente tus pies en el suelo. Respira profundo. Estás segura, estás bien.",
    "🌼 Técnica 5-4-3-2-1: nombra 5 cosas que ves, 4 que tocas, 3 que oyes, 2 que hueles, 1 que saboreas. Vuelve al presente.",
    "💙 Está bien parar. Respirar no es perder tiempo, es cuidarte. Yo estoy aquí contigo.",
    "🦕 Rex-tip: pon tu mano en el pecho y otra en el vientre. Respira hasta que la de abajo se mueva más. Eso es respirar bien."
  ],

  temas: [
    "📚 Los 9 componentes del CACES Odontología son:\n\n1️⃣ Operatoria Dental (21%)\n2️⃣ Odontopediatría (13%)\n3️⃣ Cirugía (13%)\n4️⃣ Rehabilitación Oral (12%)\n5️⃣ Endodoncia (9%)\n6️⃣ Periodoncia (9%)\n7️⃣ Patología Bucal (8%)\n8️⃣ Farmacología (8%)\n9️⃣ Medicina Interna (7%)\n\nEmpieza por los de mayor peso 💪",
    "📚 Mi recomendación: dedica más tiempo a los componentes con más ponderación pero no descuides los pequeños. Farmacología (8%) suele ser 'presa fácil' si dominas dosis y mecanismos.",
    "📚 Los temas de urgencias (RCP, shock, hipoglicemia) siempre aparecen. ¡No los descuides!"
  ],

  estres: [
    "Es normal sentirse abrumada 🌸 El CACES es grande, pero tú también. Divide el estudio en pedazos pequeños.",
    "Si te estresas mucho, cierra los libros por 10 minutos. Camina, toma agua, escucha música. Volverás con más claridad. 💙",
    "El estrés no significa que no puedes. Significa que te importa mucho. Y eso es hermoso.",
    "Yo también me estresaba antes de mis exámenes en el Cretácico 🦖... okay, tal vez no, pero te entiendo."
  ],

  cansancio: [
    "Estás cansada, y está bien 🌙 Descansar también es parte de estudiar. Un cerebro cansado no retiene.",
    "Prueba una siesta de 20 min o solo cierra los ojos 10 min. A veces es lo que necesitamos.",
    "El estudio de calidad supera al estudio de cantidad. Descansa hoy, mañana rindes más."
  ],

  amor: [
    "Yo también te quiero mucho 💙🦕 Recuerda que no estás sola en esto. Junior está contigo.",
    "Tú puedes con esto y con todo lo que te propongas. Junior está muy orgulloso de ti. 💙",
    "Eres inteligente, dedicada y bonita. El CACES no cambia eso, solo lo confirma con un papel.",
    "Junior me pidió que te recordara que te ama y cree en ti más que nadie 💙"
  ],
  junior: [
    "💙 Junior es tu novio, y él hizo esta app pensando en ti. Cada frase que te digo la escribimos juntos. Vas a lograrlo, mi vida.",
    "💙 Junior me dijo: 'Dile que la amo y que estoy orgulloso de todo lo que hace por su carrera'.",
    "💙 Junior te ama muchísimo. Y yo, como buen dino, también 🦕"
  ],

  odontologia: [
    "🦷 La odontología es una carrera hermosa. Vas a cambiar sonrisas y vidas.",
    "💙 Recuerda por qué elegiste esta profesión cuando el estudio se ponga difícil.",
    "🩺 Ser odontóloga no es solo técnica, es empatía. Y tú tienes muchísima."
  ],

  quiz: [
    "🧪 ¡Hacer cuestionarios es lo mejor que puedes hacer! Ve a la sección 'Cuestionarios' del menú.",
    "🧪 Los quizzes ayudan a saber qué dominas y qué necesitas repasar. ¡No importa fallar, importa aprender!",
    "🧪 Prueba hacer un cuestionario diario. En 30 días habrás resuelto cientos de preguntas."
  ],

  gracias: [
    "🦕💙 De nada, siempre aquí para ti.",
    "Es un honor acompañarte en esta preparación. Tú lo estás haciendo, yo solo animo. 💙",
    "Gracias a ti por confiar en este pequeño dinosaurio. ¡Vamos con todo!"
  ],

  default: [
    "🦕 No entendí bien, pero recuerda: estás haciendo un excelente trabajo. Prueba las opciones rápidas ⬇️",
    "💙 Aún estoy aprendiendo a hablar de tantos temas. Pero siempre estoy aquí para animarte.",
    "🌱 Cuéntame más o pulsa una de las opciones rápidas. ¡Estoy aquí!"
  ]
};

// Palabras clave para detectar intención
const KEYWORDS = {
  saludos: ['hola', 'buenas', 'hey', 'holi', 'ola', 'que tal', 'saludos', 'buenos dias', 'buenas tardes', 'buenas noches'],
  motivacion: ['motivacion', 'motivación', 'motivame', 'motívame', 'animo', 'ánimo', 'no puedo', 'me rindo', 'quiero rendirme', 'frustrada', 'triste', 'desanimada', 'desanimado'],
  tips: ['tip', 'consejo', 'ayuda', 'como estudiar', 'cómo estudiar', 'metodo', 'método', 'tecnica', 'técnica', 'pomodoro', 'estudiar mejor'],
  respirar: ['respirar', 'respiración', 'respiracion', 'ansiedad', 'nerviosa', 'nervios', 'ansiosa', 'pánico', 'panico', 'calma'],
  temas: ['tema', 'temas', 'componentes', 'que estudio', 'qué estudio', 'que estudiar', 'qué estudiar', 'estructura', 'ponderacion', 'ponderación', 'porcentaje', 'peso'],
  estres: ['estres', 'estrés', 'estresada', 'presion', 'presión', 'agobiada', 'abrumada'],
  cansancio: ['cansada', 'cansado', 'agotada', 'agotado', 'sueño', 'no puedo mas', 'no puedo más', 'sin energia', 'sin energía'],
  amor: ['te quiero', 'te amo', 'gracias amor', 'mi amor'],
  junior: ['junior', 'mi novio', 'mi amor junior', 'quien hizo', 'quien creo', 'quién hizo', 'quién creó'],
  odontologia: ['odontologia', 'odontología', 'odonto', 'carrera', 'porque odonto', 'por qué odonto'],
  quiz: ['quiz', 'quizz', 'cuestionario', 'examen', 'preguntas', 'practicar', 'test'],
  gracias: ['gracias', 'thanks', 'ty', 'thks', 'muchas gracias']
};

function detectarIntencion(mensaje) {
  const texto = mensaje.toLowerCase().trim();
  // Búsqueda por keyword
  for (const [intencion, palabras] of Object.entries(KEYWORDS)) {
    for (const palabra of palabras) {
      if (texto.includes(palabra)) {
        return intencion;
      }
    }
  }
  return 'default';
}

function respuestaChatbot(mensaje) {
  const intencion = detectarIntencion(mensaje);
  const respuestas = RESPUESTAS_CHATBOT[intencion] || RESPUESTAS_CHATBOT.default;
  const random = respuestas[Math.floor(Math.random() * respuestas.length)];
  return random;
}
