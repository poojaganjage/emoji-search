import React, {useState} from "react";
import {PureComponent} from "react";
import Header from "./Dashboard/Header/Header";
import SearchBar from "./Dashboard/SearchBar/SearchBar";
import EmojiResults from "./Dashboard/Emojis/EmojiResults";
import Filter from "./Dashboard/Emojis/Filter";
import './App.css';

function App () {
  const [filteredEmojis, setFilteredEmojis] = useState(Filter("", 20));

  const handleChange = (e) => {
    setFilteredEmojis(Filter(e.target.value, 20));
  }
  return (
    <div>
      <Header />
      <SearchBar handleChange={handleChange} />
      <EmojiResults emojiData={filteredEmojis} />
    </div>
  );
}
export default App;

// class App extends PureComponent {
//   state = {
//     filteredEmojis: Filter("", 20)
//   }

//   handleChange = (e) => {
//     this.setState({
//       filteredEmojis: Filter(e.target.value, 20)
//     });
//   }
  
//   render() {
//     console.log(this.state.filteredEmojis);
//     return (
//       <div>
//         <Header />
//         <SearchBar handleChange={this.handleChange} />
//         <EmojiResults emojiData={this.state.filteredEmojis} />
//       </div>
//     );
//   }
// }
// export default App;
