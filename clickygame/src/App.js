import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import characters from "./characters.json";

class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function (){
        console.log(this.state.highscore)
      })
    }
    this.state.characters.forEach(character => {
      character.count =0
    })
    alert(`Game Over! \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }
  addPoint = id => {
    this.state.characters.find((x, i) => {
      if (x.id === id) {
        if(characters[i].count === 0) {
          characters[i].count = characters[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          })
          this.state.characters.sort(() => Math.random() - 1)
          return true;
        } else {
          this.gameOver();
        }
      }
    });
    // // Filter this.state.characters for characters with an id not equal to the id being removed
    // const characters = this.state.characters.filter(character => character.id !== id);
    // // Set this.state.characters equal to the new characters array
    // this.setState({ characters });
  };

  // Map over this.state.characters and render a CharacterCard component for each character object
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
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
