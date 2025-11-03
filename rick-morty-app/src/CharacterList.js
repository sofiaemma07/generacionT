import React, { useEffect, useState } from 'react';
import { Card, Image, Grid } from 'semantic-ui-react';

function CharacterList({ onCharacterSelect }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => setCharacters(data.results));
  }, []);

  return (
    <Grid columns={4} doubling stackable>
      {characters.map(character => (
        <Grid.Column key={character.id}>
          <Card onClick={() => onCharacterSelect(character)}>
            <Image src={character.image} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{character.name}</Card.Header>
              <Card.Meta>{character.species}</Card.Meta>
            </Card.Content>
          </Card>
        </Grid.Column>
      ))}
    </Grid>
  );
}

export default CharacterList;
