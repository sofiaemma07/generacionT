import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Button } from 'semantic-ui-react';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import './App.css';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <Container style={{ marginTop: '20px' }}>
      {selectedCharacter ? (
        <>
          <Button onClick={() => setSelectedCharacter(null)}>Volver</Button>
          <CharacterDetail character={selectedCharacter} />
        </>
      ) : (
        <CharacterList onCharacterSelect={setSelectedCharacter} />
      )}
    </Container>
  );
}

export default App;
