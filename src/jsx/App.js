import React from "react";
import Header from "./components/Header";

const name = "Akif ";
const surname = "xxx";
const isLoading = false;

function App() {
    return (
        <>
            <Header />
            <p className="abc">Merhaba Akif</p>
            <label htmlFor="myInput">
                <input id="myInput" />
            </label>
            <h1>{isLoading && name + surname}</h1>
            <p>{!isLoading && "Giriş yapınız..."}</p>
            <h3>{isLoading ? name + surname : "Giriş yapınız..."}</h3>
        </>
    );
}

export default App;
