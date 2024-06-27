import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyFooter from "./components/Footer";
import MyNav from "./components/NavBar";
import Welcome from "./components/Welcom";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <BookList />
      <MyFooter />
    </div>
  );
}

export default App;
