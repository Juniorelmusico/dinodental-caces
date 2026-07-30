// ================== APP PRINCIPAL ==================

// Storage keys
const STORAGE_KEY = 'dinodental_progreso';

// Estado
let quizState = null;
let simulacroState = null;
let simulacroTimerInterval = null;

// ================== NAVEGACIÓN ==================
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');

  // Actualizar botones nav
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`.nav-btn[data-section="${id}"]`);
  if (btn) btn.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Renderizar contenido según sección
  if (id === 'progreso') renderProgreso();
}

// Setup nav
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => showSection(btn.dataset.section));
});

// ================== COMPONENTES (LISTADO) ==================
function renderComponentes() {
  const grid = document.getElementById('componentes-grid');
  const quizGrid = document.getElementById('quiz-grid');
  const html = COMPONENTES.map(c => `
    <div class="componente-card" style="border-top-color: ${c.color}">
      <div class="comp-emoji">${c.emoji}</div>
      <div class="comp-title">${c.numero}. ${c.nombre}</div>
      <span class="comp-peso">${c.peso}%</span>
      <p class="comp-desc">${c.descripcion}</p>
      <div class="comp-actions">
        <button class="btn btn-primary" onclick="verComponente('${c.id}')">📖 Leer</button>
        <button class="btn btn-outline" onclick="iniciarQuiz('${c.id}')">🧪 Quiz</button>
      </div>
    </div>
  `).join('');

  grid.innerHTML = html;

  // Quiz grid (mismo listado pero solo botón de quiz)
  quizGrid.innerHTML = COMPONENTES.map(c => {
    const preguntas = PREGUNTAS[c.id] ? PREGUNTAS[c.id].length : 0;
    return `
      <div class="componente-card" style="border-top-color: ${c.color}">
        <div class="comp-emoji">${c.emoji}</div>
        <div class="comp-title">${c.numero}. ${c.nombre}</div>
        <span class="comp-peso">${preguntas} preguntas</span>
        <p class="comp-desc">${c.descripcion}</p>
        <div class="comp-actions">
          <button class="btn btn-primary" onclick="iniciarQuiz('${c.id}')" style="width: 100%">🧪 Empezar cuestionario</button>
        </div>
      </div>
    `;
  }).join('');
}

// ================== DETALLE DE COMPONENTE ==================
function verComponente(id) {
  const c = COMPONENTES.find(x => x.id === id);
  if (!c) return;

  const html = `
    <div class="detalle-header" style="background: linear-gradient(135deg, ${c.color} 0%, ${shadeColor(c.color, -15)} 100%)">
      <div style="font-size:3rem">${c.emoji}</div>
      <h2>${c.numero}. ${c.nombre}</h2>
      <span class="peso">Ponderación: ${c.peso}%</span>
      <p style="margin-top:0.7rem; opacity:0.95">${c.descripcion}</p>
    </div>

    ${c.subcomponentes.map(sc => `
      <div class="subcomp-card">
        <h3>${sc.titulo}</h3>
        <div>${sc.contenido}</div>
      </div>
    `).join('')}

    <div class="bibliografia">
      <h3>📖 Bibliografía referencial</h3>
      <ul>
        ${c.bibliografia.map(b => `<li>${b}</li>`).join('')}
      </ul>
    </div>

    <div style="text-align:center; margin-top:2rem">
      <button class="btn btn-primary" onclick="iniciarQuiz('${c.id}')">🧪 Poner a prueba lo aprendido</button>
    </div>
  `;

  document.getElementById('componente-detalle-content').innerHTML = html;
  showSection('componente-detalle');
}

// Helper para oscurecer/aclarar colores hex
function shadeColor(color, percent) {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);
  R = Math.max(0, Math.min(255, parseInt(R * (100 + percent) / 100)));
  G = Math.max(0, Math.min(255, parseInt(G * (100 + percent) / 100)));
  B = Math.max(0, Math.min(255, parseInt(B * (100 + percent) / 100)));
  const RR = R.toString(16).padStart(2, '0');
  const GG = G.toString(16).padStart(2, '0');
  const BB = B.toString(16).padStart(2, '0');
  return `#${RR}${GG}${BB}`;
}

// ================== QUIZ ==================
function iniciarQuiz(componenteId) {
  const preguntas = PREGUNTAS[componenteId];
  const componente = COMPONENTES.find(c => c.id === componenteId);
  if (!preguntas || !preguntas.length) {
    alert('Aún no hay preguntas para este componente.');
    return;
  }

  // Barajar preguntas
  const preguntasBarajadas = [...preguntas].sort(() => Math.random() - 0.5);

  quizState = {
    componenteId,
    componente,
    preguntas: preguntasBarajadas,
    actual: 0,
    respuestas: [],
    aciertos: 0
  };

  renderPreguntaActual();
  showSection('quiz-activo');
}

function renderPreguntaActual() {
  const { preguntas, actual, componente } = quizState;
  const p = preguntas[actual];
  const total = preguntas.length;
  const progreso = ((actual) / total) * 100;

  const html = `
    <div class="quiz-card">
      <div class="quiz-progress">
        <div class="quiz-progress-bar" style="width: ${progreso}%"></div>
      </div>
      <div class="quiz-meta">
        <span>${componente.emoji} ${componente.nombre}</span>
        <span>Pregunta ${actual + 1} / ${total}</span>
      </div>
      <p class="quiz-pregunta">${p.pregunta}</p>
      <div class="quiz-opciones" id="opciones-container">
        ${p.opciones.map((op, i) => `
          <button class="quiz-opcion" data-index="${i}" onclick="responderPregunta(${i})">
            <strong>${String.fromCharCode(65 + i)}.</strong> ${op}
          </button>
        `).join('')}
      </div>
      <div id="explicacion-container"></div>
    </div>
  `;

  document.getElementById('quiz-activo-content').innerHTML = html;
}

function responderPregunta(seleccion) {
  const { preguntas, actual } = quizState;
  const p = preguntas[actual];
  const esCorrecta = seleccion === p.correcta;

  quizState.respuestas.push({ pregunta: p.pregunta, seleccion, correcta: p.correcta, esCorrecta });
  if (esCorrecta) quizState.aciertos++;

  // Marcar visualmente
  const opciones = document.querySelectorAll('.quiz-opcion');
  opciones.forEach((op, i) => {
    op.disabled = true;
    if (i === p.correcta) op.classList.add('correcta');
    else if (i === seleccion) op.classList.add('incorrecta');
  });

  // Explicación
  const explicacionHTML = `
    <div class="quiz-explicacion">
      <strong>${esCorrecta ? '¡Correcto! 🎉' : '¡Ups! 🦕'}</strong>
      <p>${p.explicacion}</p>
    </div>
    <div class="quiz-nav">
      ${actual < preguntas.length - 1
        ? `<button class="btn btn-primary" onclick="siguientePregunta()">Siguiente pregunta →</button>`
        : `<button class="btn btn-primary" onclick="terminarQuiz()">Ver resultado 🏆</button>`}
    </div>
  `;
  document.getElementById('explicacion-container').innerHTML = explicacionHTML;
}

function siguientePregunta() {
  quizState.actual++;
  renderPreguntaActual();
}

function terminarQuiz() {
  const { componente, aciertos, preguntas } = quizState;
  const total = preguntas.length;
  const porcentaje = Math.round((aciertos / total) * 100);

  // Guardar progreso
  guardarProgreso(componente.id, porcentaje, aciertos, total);

  // Mensaje según porcentaje
  let emoji, mensaje;
  if (porcentaje >= 90) {
    emoji = '🏆';
    mensaje = '¡Excelente! Dominas este componente. Estoy MUY orgulloso 💚🦕';
  } else if (porcentaje >= 75) {
    emoji = '🌟';
    mensaje = '¡Muy bien! Vas por buen camino. Solo repasa lo que fallaste.';
  } else if (porcentaje >= 60) {
    emoji = '💪';
    mensaje = 'Vas bien, pero puedes mejorar. Vuelve a leer el resumen y prueba de nuevo.';
  } else if (porcentaje >= 40) {
    emoji = '📚';
    mensaje = 'Necesitas repasar este componente. Es momento de volver al resumen 🦕';
  } else {
    emoji = '🌱';
    mensaje = '¡No pasa nada! Cada intento es aprendizaje. Lee el resumen con calma y vuelve a intentarlo.';
  }

  const html = `
    <div class="resultado-card">
      <div class="resultado-emoji">${emoji}</div>
      <div class="resultado-score">${aciertos} / ${total}</div>
      <div style="font-size:1.4rem; color:var(--verde-dark); font-weight:700; margin-bottom:1rem">${porcentaje}%</div>
      <p class="resultado-mensaje">${mensaje}</p>
      <div class="resultado-acciones">
        <button class="btn btn-primary" onclick="iniciarQuiz('${componente.id}')">🔄 Repetir cuestionario</button>
        <button class="btn btn-outline" onclick="verComponente('${componente.id}')">📖 Ver resumen</button>
        <button class="btn btn-secondary" onclick="showSection('quiz')">🧪 Otro cuestionario</button>
      </div>
    </div>
  `;
  document.getElementById('resultados-content').innerHTML = html;
  showSection('resultados');
}

// ================== SIMULACRO CACES ==================
function iniciarSimulacro(cantidad) {
  const total = SIMULACRO_PREGUNTAS.length;
  if (!total) {
    alert('No hay preguntas en el banco del simulacro.');
    return;
  }

  // Barajar y tomar la cantidad solicitada
  const barajadas = [...SIMULACRO_PREGUNTAS].sort(() => Math.random() - 0.5).slice(0, Math.min(cantidad, total));

  // Tiempo: proporcional al CACES real (160 min / 100 preg) = 1.6 min por pregunta
  const tiempoTotalSeg = Math.round(barajadas.length * 96); // 1.6 min = 96 s

  simulacroState = {
    preguntas: barajadas,
    actual: 0,
    respuestas: new Array(barajadas.length).fill(null),
    tiempoRestante: tiempoTotalSeg,
    cantidad
  };

  renderSimulacroPregunta();
  showSection('quiz-activo');
  iniciarTimer();
}

function iniciarTimer() {
  if (simulacroTimerInterval) clearInterval(simulacroTimerInterval);
  simulacroTimerInterval = setInterval(() => {
    if (!simulacroState) { clearInterval(simulacroTimerInterval); return; }
    simulacroState.tiempoRestante--;
    actualizarTimerDisplay();
    if (simulacroState.tiempoRestante <= 0) {
      clearInterval(simulacroTimerInterval);
      terminarSimulacro();
    }
  }, 1000);
}

function actualizarTimerDisplay() {
  const el = document.getElementById('sim-timer');
  if (!el) return;
  const min = Math.floor(simulacroState.tiempoRestante / 60);
  const seg = simulacroState.tiempoRestante % 60;
  el.textContent = `⏱️ ${String(min).padStart(2, '0')}:${String(seg).padStart(2, '0')}`;

  el.classList.remove('warning', 'danger');
  if (simulacroState.tiempoRestante <= 60) el.classList.add('danger');
  else if (simulacroState.tiempoRestante <= 300) el.classList.add('warning');
}

function renderSimulacroPregunta() {
  const { preguntas, actual, respuestas, cantidad } = simulacroState;
  const p = preguntas[actual];
  const total = preguntas.length;
  const progreso = ((actual) / total) * 100;
  const respondidas = respuestas.filter(r => r !== null).length;

  const opcionesHTML = p.opciones.map((op, i) => {
    const seleccionada = respuestas[actual] === i;
    return `
      <button class="quiz-opcion ${seleccionada ? 'seleccionada' : ''}" onclick="responderSimulacro(${i})">
        <strong>${String.fromCharCode(65 + i)}.</strong> ${op}
      </button>
    `;
  }).join('');

  const html = `
    <div class="quiz-card">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; flex-wrap:wrap; gap:0.5rem">
        <span class="simulacro-timer" id="sim-timer">⏱️ --:--</span>
        <span style="color:var(--texto-suave); font-size:0.9rem">Respondidas: <strong>${respondidas}/${total}</strong></span>
      </div>
      <div class="quiz-progress">
        <div class="quiz-progress-bar" style="width: ${progreso}%"></div>
      </div>
      <div class="quiz-meta">
        <span class="simulacro-info-etiqueta">${p.componente}</span>
        <span>Pregunta ${actual + 1} / ${total}</span>
      </div>
      ${p.caso ? `<div style="background:var(--crema); padding:1rem; border-radius:var(--radio-sm); margin-bottom:1rem; border-left:4px solid var(--verde-dino)"><strong>📋 Caso clínico:</strong><br>${p.caso}</div>` : ''}
      <p class="quiz-pregunta">${p.pregunta}</p>
      <div class="quiz-opciones">${opcionesHTML}</div>
      <div class="quiz-nav">
        <button class="btn btn-outline" onclick="navSimulacro(-1)" ${actual === 0 ? 'disabled' : ''}>← Anterior</button>
        ${actual < total - 1
          ? `<button class="btn btn-primary" onclick="navSimulacro(1)">Siguiente →</button>`
          : `<button class="btn btn-secondary" onclick="confirmarFinSimulacro()">🏆 Finalizar simulacro</button>`}
      </div>
      <div style="margin-top:1rem; text-align:center">
        <button class="btn btn-outline" onclick="confirmarFinSimulacro()" style="font-size:0.85rem">🚪 Terminar antes</button>
      </div>
    </div>
  `;

  document.getElementById('quiz-activo-content').innerHTML = html;
  actualizarTimerDisplay();
}

function responderSimulacro(i) {
  simulacroState.respuestas[simulacroState.actual] = i;
  renderSimulacroPregunta();
}

function navSimulacro(direccion) {
  const nuevoIndex = simulacroState.actual + direccion;
  if (nuevoIndex < 0 || nuevoIndex >= simulacroState.preguntas.length) return;
  simulacroState.actual = nuevoIndex;
  renderSimulacroPregunta();
}

function confirmarFinSimulacro() {
  const respondidas = simulacroState.respuestas.filter(r => r !== null).length;
  const total = simulacroState.preguntas.length;
  const sinResponder = total - respondidas;
  let msg = '¿Terminar el simulacro?';
  if (sinResponder > 0) msg += `\n\nTe faltan ${sinResponder} pregunta(s) sin responder (contarán como incorrectas).`;
  if (confirm(msg)) terminarSimulacro();
}

function terminarSimulacro() {
  if (simulacroTimerInterval) clearInterval(simulacroTimerInterval);

  const { preguntas, respuestas } = simulacroState;
  let aciertos = 0;
  const detallePorComponente = {};

  preguntas.forEach((p, i) => {
    const esCorrecta = respuestas[i] === p.correcta;
    if (esCorrecta) aciertos++;
    if (!detallePorComponente[p.componente]) detallePorComponente[p.componente] = { total: 0, aciertos: 0 };
    detallePorComponente[p.componente].total++;
    if (esCorrecta) detallePorComponente[p.componente].aciertos++;
  });

  const total = preguntas.length;
  const porcentaje = Math.round((aciertos / total) * 100);
  const aprueba = porcentaje >= 65;

  // Guardar en historial
  guardarHistorialSimulacro(porcentaje, aciertos, total);

  let emoji, mensaje, colorFondo;
  if (porcentaje >= 90) {
    emoji = '🏆';
    mensaje = '¡Excelente! Estás lista para el CACES. Sigue así 💙🦕';
    colorFondo = 'linear-gradient(135deg, #ffd166, #f7ba4c)';
  } else if (aprueba) {
    emoji = '✅';
    mensaje = `¡Aprobaste! Sacaste ${porcentaje}% (necesitas ≥65%). Sigue reforzando 💪`;
    colorFondo = 'linear-gradient(135deg, #5b9bd5, #2e6da4)';
  } else if (porcentaje >= 50) {
    emoji = '💪';
    mensaje = `Estás cerca (${porcentaje}%). Repasa los componentes donde fallaste y vuelve a intentar.`;
    colorFondo = 'linear-gradient(135deg, #ffb3c6, #ff8fa8)';
  } else {
    emoji = '🌱';
    mensaje = `Aún no llegas al 65%, pero cada intento cuenta. Regresa a los resúmenes y no te rindas 💙 Junior cree en ti.`;
    colorFondo = 'linear-gradient(135deg, #a6c8ff, #7ab5ff)';
  }

  // Detalle por componente
  const detalleHTML = Object.entries(detallePorComponente).map(([comp, d]) => {
    const pct = Math.round((d.aciertos / d.total) * 100);
    return `
      <div style="display:flex; justify-content:space-between; padding:0.5rem 0; border-bottom:1px solid var(--verde-light)">
        <span><strong>${comp}</strong></span>
        <span>${d.aciertos}/${d.total} (${pct}%)</span>
      </div>
    `;
  }).join('');

  const html = `
    <div class="resultado-card" style="background: ${colorFondo}; color:white">
      <div class="resultado-emoji">${emoji}</div>
      <div class="resultado-score" style="color:white">${aciertos} / ${total}</div>
      <div style="font-size:1.4rem; font-weight:700; margin-bottom:1rem">${porcentaje}% ${aprueba ? '· APROBADO' : '· NO APROBADO'}</div>
      <p class="resultado-mensaje" style="color:white">${mensaje}</p>
    </div>

    <div class="quiz-card" style="margin-top:1.5rem">
      <h3 style="color:var(--verde-dark); margin-bottom:1rem">📊 Desempeño por componente</h3>
      ${detalleHTML}
    </div>

    <div class="quiz-card" style="margin-top:1rem">
      <h3 style="color:var(--verde-dark); margin-bottom:1rem">📝 Revisión de preguntas</h3>
      <p style="color:var(--texto-suave); margin-bottom:1rem">Aquí puedes ver todas las preguntas con la respuesta correcta y explicación:</p>
      <button class="btn btn-outline" onclick="mostrarRevisionSimulacro()">Ver revisión completa</button>
    </div>

    <div class="resultado-acciones" style="margin-top:1.5rem; justify-content:center; display:flex; gap:1rem; flex-wrap:wrap">
      <button class="btn btn-primary" onclick="iniciarSimulacro(${simulacroState.cantidad})">🔄 Otro simulacro (${simulacroState.cantidad} preg)</button>
      <button class="btn btn-secondary" onclick="showSection('simulacro')">🎯 Simulacros</button>
      <button class="btn btn-outline" onclick="showSection('componentes')">📚 Repasar componentes</button>
    </div>
  `;

  document.getElementById('resultados-content').innerHTML = html;
  showSection('resultados');
}

function mostrarRevisionSimulacro() {
  const { preguntas, respuestas } = simulacroState;
  const revisionHTML = preguntas.map((p, i) => {
    const respUsuario = respuestas[i];
    const esCorrecta = respUsuario === p.correcta;
    return `
      <div class="quiz-card" style="border-left:4px solid ${esCorrecta ? '#28a745' : '#dc3545'}">
        <div style="margin-bottom:0.5rem">
          <span class="simulacro-info-etiqueta">${p.componente}</span>
          <strong>Pregunta ${i + 1}</strong> ${esCorrecta ? '✅' : '❌'}
        </div>
        ${p.caso ? `<p style="background:var(--crema); padding:0.7rem; border-radius:var(--radio-sm); font-size:0.9rem"><strong>Caso:</strong> ${p.caso}</p>` : ''}
        <p style="font-weight:600; margin:0.7rem 0">${p.pregunta}</p>
        ${p.opciones.map((op, j) => `
          <div style="padding:0.5rem; margin:0.2rem 0; border-radius:8px; background: ${j === p.correcta ? '#d4edda' : (j === respUsuario && !esCorrecta ? '#f8d7da' : 'transparent')}">
            <strong>${String.fromCharCode(65 + j)}.</strong> ${op}
            ${j === p.correcta ? ' ✅' : ''}
            ${j === respUsuario && !esCorrecta ? ' ← tu respuesta' : ''}
          </div>
        `).join('')}
        <div class="quiz-explicacion" style="margin-top:0.7rem"><strong>Explicación:</strong> ${p.explicacion}</div>
      </div>
    `;
  }).join('');

  document.getElementById('resultados-content').innerHTML = `
    <button class="btn-back" onclick="showSection('simulacro')">← Volver a simulacros</button>
    <h2 class="section-title">📝 Revisión completa</h2>
    ${revisionHTML}
    <div style="text-align:center; margin-top:1.5rem">
      <button class="btn btn-primary" onclick="showSection('simulacro')">Volver a simulacros</button>
    </div>
  `;
}

function guardarHistorialSimulacro(porcentaje, aciertos, total) {
  const key = 'dinodental_simulacros';
  const historial = JSON.parse(localStorage.getItem(key) || '[]');
  historial.push({ fecha: new Date().toISOString(), porcentaje, aciertos, total });
  localStorage.setItem(key, JSON.stringify(historial.slice(-20))); // últimos 20
}

// ================== PROGRESO (localStorage) ==================
function guardarProgreso(componenteId, porcentaje, aciertos, total) {
  const data = cargarProgreso();
  if (!data[componenteId] || data[componenteId].mejor < porcentaje) {
    data[componenteId] = { mejor: porcentaje, aciertos, total, intentos: (data[componenteId]?.intentos || 0) + 1, ultimo: new Date().toISOString() };
  } else {
    data[componenteId].intentos++;
    data[componenteId].ultimo = new Date().toISOString();
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function cargarProgreso() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function renderProgreso() {
  const data = cargarProgreso();
  const container = document.getElementById('progreso-content');
  const componentesConProgreso = Object.keys(data);

  if (!componentesConProgreso.length) {
    container.innerHTML = `
      <div class="no-progress">
        <span class="emoji-big">🦕</span>
        <p><strong>Aún no has hecho ningún cuestionario.</strong></p>
        <p>¡Empieza uno y guardaré tu progreso automáticamente!</p>
        <br>
        <button class="btn btn-primary" onclick="showSection('quiz')">🧪 Empezar</button>
      </div>
    `;
    return;
  }

  const html = COMPONENTES.map(c => {
    const p = data[c.id];
    if (!p) {
      return `
        <div class="progreso-card">
          <h3>${c.emoji} ${c.nombre}</h3>
          <p style="color:var(--texto-suave)">Sin intentos aún</p>
          <button class="btn btn-outline" onclick="iniciarQuiz('${c.id}')">Empezar</button>
        </div>
      `;
    }
    return `
      <div class="progreso-card">
        <h3>${c.emoji} ${c.nombre}</h3>
        <p style="color:var(--texto-suave); font-size:0.85rem">
          Intentos: ${p.intentos} · Mejor puntaje: ${p.mejor}%
        </p>
        <div class="progreso-bar-container">
          <div class="progreso-bar" style="width: ${p.mejor}%">${p.mejor}%</div>
        </div>
        <div style="display:flex; gap:0.5rem; margin-top:0.7rem">
          <button class="btn btn-outline" onclick="iniciarQuiz('${c.id}')">🔄 Repetir</button>
          <button class="btn btn-outline" onclick="verComponente('${c.id}')">📖 Repasar</button>
        </div>
      </div>
    `;
  }).join('');

  // Progreso global
  const totalPorcentajes = componentesConProgreso.reduce((sum, id) => sum + data[id].mejor, 0);
  const promedio = Math.round(totalPorcentajes / componentesConProgreso.length);
  const global = `
    <div class="progreso-card" style="background: linear-gradient(135deg, var(--verde-dino), var(--verde-dark)); color:white">
      <h3 style="color:white">🏆 Promedio general</h3>
      <div style="font-size:2.5rem; font-weight:800; text-align:center; margin:0.5rem 0">${promedio}%</div>
      <p style="text-align:center; opacity:0.95">Basado en ${componentesConProgreso.length} de ${COMPONENTES.length} componentes trabajados</p>
    </div>
  `;

  container.innerHTML = global + html;
}

// ================== CHATBOT ==================
const chatToggle = document.getElementById('chat-toggle');
const chatWindow = document.getElementById('chat-window');
const chatClose = document.getElementById('chat-close');
const chatMessages = document.getElementById('chat-messages');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');

chatToggle.addEventListener('click', () => {
  chatWindow.classList.add('open');
  chatToggle.style.display = 'none';
  if (chatMessages.children.length === 0) {
    mensajeBot("¡Hola linda! 🦕 Soy Rex, tu compañero dinosaurio para el CACES. Tu novio Junior me programó especialmente para ti 💙");
    setTimeout(() => {
      mensajeBot("Puedes preguntarme por motivación, tips de estudio, respiración... o solo desahogarte. También puedes usar los botoncitos de abajo ⬇️");
    }, 800);
  }
});

chatClose.addEventListener('click', () => {
  chatWindow.classList.remove('open');
  chatToggle.style.display = 'flex';
});

function mensajeBot(texto) {
  const div = document.createElement('div');
  div.className = 'msg msg-bot';
  div.innerHTML = texto.replace(/\n/g, '<br>');
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function mensajeUser(texto) {
  const div = document.createElement('div');
  div.className = 'msg msg-user';
  div.textContent = texto;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function procesarMensaje(texto) {
  mensajeUser(texto);
  setTimeout(() => {
    const respuesta = respuestaChatbot(texto);
    mensajeBot(respuesta);
  }, 400 + Math.random() * 400);
}

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const texto = chatInput.value.trim();
  if (!texto) return;
  procesarMensaje(texto);
  chatInput.value = '';
});

// Chips (respuestas rápidas)
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    procesarMensaje(chip.dataset.msg);
  });
});

// ================== INIT ==================
document.addEventListener('DOMContentLoaded', () => {
  renderComponentes();
});
