import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import characters from "./characters.json";

class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters
  };

  addPoint = id => {
    // Filter this.state.characters for characters with an id not equal to the id being removed
    const characters = this.state.characters.filter(character => character.id !== id);
    // Set this.state.characters equal to the new characters array
    this.setState({ characters });
  };

  // Map over this.state.characters and render a CharacterCard component for each character object
  render() {
    return (
      <Wrapper>
        <Header>Clicky Game</Header>
        {this.state.characters.map(character => (
          <CharacterCard
            addPoint={this.addPoint}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
