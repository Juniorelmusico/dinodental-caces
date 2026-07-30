# 🦕 DinoDental CACES

Aplicación web para la preparación del **Examen de Habilitación del CACES · Odontología** con:

- 📚 Resúmenes de los 9 componentes oficiales (con sus subcomponentes y bibliografía).
- 🧪 Banco de cuestionarios (15 preguntas por componente, ~135 en total).
- 🦖 Chatbot Rex con frases motivacionales, tips de estudio y ejercicios de respiración.
- 📊 Seguimiento del progreso (guardado local).
- 🎨 Tema dinosaurios cute, responsive (funciona en celular y PC).

---

## 🚀 Cómo desplegar en Vercel (3 minutos)

### Opción A — Deploy con drag & drop (más fácil)

1. Ve a **[vercel.com](https://vercel.com/)** y crea una cuenta gratis (puedes usar Google o GitHub).
2. En el dashboard haz clic en **"Add New Project"** → **"Deploy"**.
3. Comprime la carpeta `app/` en un `.zip` y arrástrala a Vercel.
4. Espera 30 segundos y ¡listo! Tu app estará en una URL tipo `https://dino-dental-abc.vercel.app`.
5. Comparte esa URL con tu novia 💚

### Opción B — Deploy con Vercel CLI (para desarrolladores)

```bash
npm i -g vercel
cd app
vercel --prod
```

Sigue las indicaciones y en menos de un minuto tendrás la URL.

### Opción C — Deploy desde GitHub

1. Sube esta carpeta `app/` a un repositorio de GitHub.
2. En Vercel, haz clic en **"Import Git Repository"** y selecciona el repo.
3. Vercel detectará que es un sitio estático y lo desplegará automáticamente.
4. Cada vez que hagas push a `main`, se actualiza solo.

---

## 💻 Probar localmente

Solo abre `index.html` en tu navegador (doble clic).

O usando un servidor local:

```bash
# Python
python -m http.server 8000

# Node
npx serve
```

Y visita `http://localhost:8000`.

---

## 📁 Estructura

```
app/
├── index.html          # Página principal
├── styles.css          # Tema dinosaurio
├── app.js              # Navegación, quiz, chatbot
├── data/
│   ├── summaries.js    # Resúmenes de los 9 componentes
│   ├── questions.js    # Banco de preguntas
│   └── chatbot.js      # Respuestas del chatbot Rex
├── vercel.json         # Configuración Vercel
└── README.md
```

---

## ✏️ Cómo añadir más preguntas o modificar resúmenes

- **Preguntas:** edita `data/questions.js`. Cada componente es un array de objetos con `{pregunta, opciones, correcta, explicacion}`.
- **Resúmenes:** edita `data/summaries.js`. Cada componente tiene `subcomponentes` con `{titulo, contenido}` (HTML).
- **Chatbot:** edita `data/chatbot.js`. Agrega frases en `RESPUESTAS_CHATBOT` o palabras clave en `KEYWORDS`.

Al guardar y refrescar la página se actualiza automáticamente. Si ya está en Vercel, solo haz push (o vuelve a subir el zip).

---

## 💡 Idea: personalizar el chatbot con IA real

El chatbot actual funciona con respuestas programadas (gratis). Si más adelante quieres darle IA real (Claude/OpenAI), se puede añadir una API route en Vercel. Avísale a tu programador de cabecera 😉

---

Hecho con 💚 para acompañar la preparación del CACES. ¡Éxitos! 🦕
