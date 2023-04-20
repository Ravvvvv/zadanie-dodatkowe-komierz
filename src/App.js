import "./App.css";

import Heding from "./Heding";
import Counter from "./Components/Counter";

function App() {
  //stan czyli hook uzywamy zawsze kiedy informacja moze sie zmieniac w toku dzialania.
  return (
    <div className="App">
      <header className="App-header">
        <Heding text="react  zwiesil sie mi" />
      </header>

      <Counter stala={8} />
      {/* dowolny typ danych moze byc przekazany przez propsy  tablica ,ture ,wartos logiczna liczbowa,obiekt */}
      <Counter stala={108} />
    </div>
  );
}

export default App;
