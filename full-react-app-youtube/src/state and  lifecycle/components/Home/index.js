import { useState, useEffect } from 'react'

const Home = () => {
    const [isim, setIsim] = useState("Ceyhun");
    const [birinciyiGöster, setBirinciyiGöster] = useState(true)

    useEffect(() => {
        console.log("useEffectten merhaba")
    }, [isim])

    useEffect(() => {
        console.log("MesajGöster useEffect")
    }, [birinciyiGöster])
    return (
        <div>
            <h1>Merhaba, {isim}</h1>
            <button onClick={() => setIsim("Akif")}>İsim Değiştir</button>
            <br /><br /><hr />
            {birinciyiGöster ?
                <h3>Hayattaki en hakiki mürşit ilimdir</h3>
                :
                <h3>Beni türk hekimlerine emanet ediniz</h3>
            }
            <button onClick={() => setBirinciyiGöster(!birinciyiGöster)}>Mesaj Değiştir</button>
        </div>
    )
}

export default Home