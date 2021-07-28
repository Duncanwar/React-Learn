import React, { Component } from "react";
import CartContext from "./context/cartContext";
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
      <CartContext.Provider value={{ cart: [] }}>
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
      </CartContext.Provider>
    );
  }
}

export default App;
