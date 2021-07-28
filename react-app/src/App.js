import React, { Component } from "react";
import Login from "./context/Login";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";

class App extends Component {
  handleLoggedIn = (username) => {
    console.log("Getting the user:" + username);
    const user = { name: "Duncan" };
    this.setState({ currentUser: user });
  };
  state = { currentUser: null };

  render() {
    return (
      <UserContext.Provider
        value={{
          currentUser: this.state.currentUser,
          onLoggedIn: this.handleLoggedIn,
        }}
      >
        <div>
          <MoviePage />
        </div>
        <Login />
      </UserContext.Provider>
    );
  }
}

export default App;
