const verificarJubilacion = (edad, inicialGenero) => {
      let mensajeResultado;

      if (inicialGenero === 'm') {
        if (edad >= 60) {
          mensajeResultado = { ok: true, text: `¡Felicidades! Tenés ${edad} años. Ya cumplís con la edad para jubilarte.` };
        } else {
          let aniosFaltantes = 60 - edad;
          mensajeResultado = { ok: false, text: `Aún no podés jubilarte. Te faltan ${aniosFaltantes} años.` };
        }
      } else if (inicialGenero === 'h') {
        if (edad >= 65) {
          mensajeResultado = { ok: true, text: `¡Felicidades! Tenés ${edad} años. Ya cumplís con la edad para jubilarte.` };
        } else {
          let aniosFaltantes = 65 - edad;
          mensajeResultado = { ok: false, text: `Aún no podés jubilarte. Te faltan ${aniosFaltantes} años.` };
        }
      } else {
        mensajeResultado = { ok: null, text: "Género no reconocido. Por favor selecciona 'Mujer' o 'Hombre'." };
      }

      return mensajeResultado;
    };

    const inputEdad = document.getElementById('edad');
    const selectGenero = document.getElementById('genero');
    const btn = document.getElementById('btnComprobar');
    const resultado = document.getElementById('resultado');
    const form = document.getElementById('formJub');

    btn.addEventListener('click', () => {
      const edadVal = parseInt(inputEdad.value, 10);
      const generoVal = selectGenero.value;

      if (!Number.isNaN(edadVal) && generoVal) {
        const generoInicial = generoVal.toLowerCase()[0];
        const res = verificarJubilacion(edadVal, generoInicial);

        resultado.hidden = false;
        resultado.className = 'result';

        if (res.ok === true) {
          resultado.innerHTML = `<div class="ok">${res.text}</div>`;
        } else if (res.ok === false) {
          resultado.innerHTML = `<div class="ko">${res.text}</div>`;
        } else {
          resultado.innerHTML = `<div class="ko">${res.text}</div>`;
        }
      } else {
        resultado.hidden = false;
        resultado.className = 'result';
        resultado.innerHTML = `<div class="ko">Datos inválidos. Por favor, ingresa una edad numérica y selecciona un género válido.</div>`;
      }
    });

    form.addEventListener('submit', (e) => { e.preventDefault(); btn.click(); });