import { useState, useEffect } from 'react'
import './App.css'

export default function FichaGalactica() {
  const [personajes, setPersonajes] = useState([]);
  const [urlSeleccionada, setUrlSeleccionada] = useState("");
  const [detalle, setDetalle] = useState(null);
  const [apodo, setApodo] = useState("");
  const [favorito, setFavorito] = useState(false);
  const [resumen, setResumen] = useState(null);

  // 1️⃣ Traer lista de personajes al montar
  useEffect(() => {
    fetch("https://swapi.dev/api/people/?page=1")
      .then((res) => res.json())
      .then((data) => setPersonajes(data.results))
      .catch((err) => console.error("Error cargando personajes:", err));
  }, []);

  // 2️⃣ Traer detalle del personaje seleccionado
  useEffect(() => {
    if (urlSeleccionada) {
      fetch(urlSeleccionada)
        .then((res) => res.json())
        .then((data) => setDetalle(data))
        .catch((err) => console.error("Error en detalle:", err));
    }
  }, [urlSeleccionada]);

  // 3️⃣ Mostrar resumen
  const handleGuardar = (e) => {
    e.preventDefault();
    if (apodo.length < 2) {
      alert("El apodo debe tener al menos 2 caracteres.");
      return;
    }
    setResumen({
      name: detalle?.name,
      height: detalle?.height,
      birth_year: detalle?.birth_year,
      apodo,
      favorito,
    });
  };

  return (
    <div className="galactica-card">
      <h2 className="galactica-title">🪐 Ficha Galáctica</h2>

      {/* Select de personajes */}
      <select
        onChange={(e) => setUrlSeleccionada(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>
          Seleccioná un personaje
        </option>
        {personajes.map((p) => (
          <option key={p.url} value={p.url}>
            {p.name}
          </option>
        ))}
      </select>

      {/* Vista previa mínima */}
      {detalle ? (
        <div className="preview-box">
          <p><strong>Nombre:</strong> {detalle.name}</p>
          <p><strong>Altura:</strong> {detalle.height} cm</p>
          <p><strong>Año de nacimiento:</strong> {detalle.birth_year}</p>
        </div>
      ) : (
        <div className="preview-box">
          <p>Seleccioná un personaje para ver su detalle...</p>
        </div>
      )}

      {/* Formulario */}
      <form onSubmit={handleGuardar}>
        <label>
          <strong>Apodo en tu ficha:</strong>
          <input
            type="text"
            value={apodo}
            onChange={(e) => setApodo(e.target.value)}
            placeholder="Escribí un apodo..."
          />
        </label>

        <label style={{ display: "block", marginTop: "8px" }}>
          <input
            type="checkbox"
            checked={favorito}
            onChange={(e) => setFavorito(e.target.checked)}
          />{" "}
          ¿Es tu favorito? ⭐
        </label>

        <button type="submit" className="galactica-button">
          Guardar ficha
        </button>
      </form>

      {/* Resumen final */}
      {resumen && (
        <div className="resumen-box">
          <h3>🌠 Tu ficha</h3>
          <p><strong>Nombre:</strong> {resumen.name}</p>
          <p><strong>Altura:</strong> {resumen.height} cm</p>
          <p><strong>Año de nacimiento:</strong> {resumen.birth_year}</p>
          <p><strong>Apodo:</strong> {resumen.apodo}</p>
          <p><strong>Favorito:</strong> {resumen.favorito ? "Sí" : "No"}</p>
        </div>
      )}
    </div>
  );
}
