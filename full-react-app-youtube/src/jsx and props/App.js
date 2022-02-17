import './App.css';
import KonuKutusu from "./components/KonuKutusu"

function App() {
  return (
    <div className="App">
      <KonuKutusu baslik="React Dersleri" konu="Bileşim, Kalıtım vs. Props">
        <p>NOT = children bu kısımdan geliyor...<br/>
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
          ipsum dolor sit amet.
        </p>
        <img
          src="https://avatars3.githubusercontent.com/u/60869810?v=4"
          alt=""
        />
      </KonuKutusu>
    </div>
  );
}

export default App;

//Not =>Render:Elemntlerin ekrana yazdırılması
//Props =>Parent component'ten child component'e veri taşınması.