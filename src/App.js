import "./App.css";
import Counter from "./Components/Counter/Counter";
import Welcome from "./Components/Welcome/Welcome";

const data = [
  {
    name: "vainik",
    city: "surat",
    state: "gujarat",
  },
  {
    name: "Tirth",
    city: "surat",
    state: "gujarat",
  },
  {
    name: "RAMU",
    city: "surat",
    state: "gujarat",
  },
];

function App() {
  return (
    <div className="App">
      {/* {data.map((value, index) => {
          return <Welcome user={value} key={index} />;
      })} */}
      <Counter name="lalit" />
    </div>
  );
}

export default App;
