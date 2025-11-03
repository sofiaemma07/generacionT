import React from 'react';
import { Segment, Image, List, Header } from 'semantic-ui-react';

function CharacterDetail({ character }) {
  return (
    <Segment>
      <Header as="h2">{character.name}</Header>
      <Image src={character.image} size="small" circular />
      <List>
        <List.Item><strong>Estado:</strong> {character.status}</List.Item>
        <List.Item><strong>Especie:</strong> {character.species}</List.Item>
        <List.Item><strong>Género:</strong> {character.gender}</List.Item>
        <List.Item><strong>Origen:</strong> {character.origin.name}</List.Item>
      </List>
    </Segment>
  );
}

export default CharacterDetail;
