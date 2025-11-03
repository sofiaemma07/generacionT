import React, { useState } from 'react';
import './App.css';

function App() {
  const [likes, setLikes] = useState(12);
  const [laughs, setLaughs] = useState(3);
  const [wows, setWows] = useState(1);

  const [comentarioActual, setComentarioActual] = useState('');
  
  const [listaComentarios, setListaComentarios] = useState([
    'Alto gato',
  ]);
  
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setComentarioActual(e.target.value);
    if (error) {
      setError('');
    }
  };

  const handleSubmitComentario = () => {
    if (comentarioActual.trim() === '') {
      setError('El comentario no puede estar vacío.');
      return; 
    }
    
    if (comentarioActual.length > 40) {
      setError('El comentario no puede superar los 40 caracteres.');
      return; 
    }

    setListaComentarios([comentarioActual, ...listaComentarios]);
    
    setComentarioActual('');
    
    setError('');
  };

  return (
    <div className="post-container">
      {/* 1. Imagen y Texto de la Publicación */}
      <img
        src="https://preview.redd.it/random-question-but-does-anyone-have-versions-of-this-cat-v0-ya8qikz9kn0f1.png?width=640&crop=smart&auto=webp&s=2487b53aa5d4ac4e710f7717a6850c83562272ab"
        alt="naruto"
        className="post-image"
      />
      <p className="post-text">
        Un <strong>gato</strong>.
      </p>

      {/* 2. Contador de Reacciones */}
      <div className="reactions-container">
        {/* Usamos una función anónima en onClick para actualizar el estado */}
        <button onClick={() => setLikes(likes + 1)} className="reaction-btn">
          ❤️ {likes}
        </button>
        <button onClick={() => setLaughs(laughs + 1)} className="reaction-btn">
          😂 {laughs}
        </button>
        <button onClick={() => setWows(wows + 1)} className="reaction-btn">
          😲 {wows}
        </button>
      </div>

      {/* 3. Mini-formulario de Comentarios */}
      <div className="comment-form">
        <input
          type="text"
          value={comentarioActual}
          onChange={handleInputChange}
          placeholder="Escribe un comentario (máx 40)..."
          className="comment-input"
        />
        <button onClick={handleSubmitComentario} className="comment-btn">
          Comentar
        </button>
      </div>

      {/* Mensaje de error (si existe) */}
      {error && <p className="error-message">{error}</p>}

      {/* 4. Lista de Comentarios (Bonus Challenge) */}
      <div className="comment-list">
        <h3>Comentarios</h3>
        {/* Hacemos .map() sobre la lista de comentarios en el estado */}
        {listaComentarios.map((comentario, index) => (
          <div key={index} className="comment-item">
            <p>{comentario}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;