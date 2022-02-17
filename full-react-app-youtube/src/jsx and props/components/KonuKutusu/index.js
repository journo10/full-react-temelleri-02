import Kutu from "../Kutu";
function KonuKutusu({baslik, konu ,children}) {
    return (
      <Kutu>
        <h1>{baslik}</h1>
        <h4>Konu: {konu}</h4>
        {children}
      </Kutu>
    );
  }
  export default KonuKutusu;