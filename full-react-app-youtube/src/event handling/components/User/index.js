import { useState } from 'react'

const User = () => {
    const [isim, setIsim] = useState("");
    const [hataMesaji, setHataMesaji] = useState("")
    const [girişYapildi, setGirişYapildi] = useState(false)

    const handleOnChange = (e) => {
        setIsim(e.target.value)
    }

    const handleSubmit = (isim) => {
        if (isim.length < 6) {
            setHataMesaji("Kullanıcı ismi en az 6 karakterli olmalıdır.")
        } else {
            setHataMesaji("")
            setGirişYapildi(true)
        }
    }

    return (
        <div>
            <h1>React Dersleri</h1>
            {girişYapildi && <p>Giriş yaptın...</p>}

            {girişYapildi
                ?
                <>
                    <h2>Hoşgeldiniz {isim}</h2>
                    <button onClick={() => setGirişYapildi(false)}>Çıkış Yap</button>
                </>
                :
                <>
                    <input
                        onChange={handleOnChange}
                        value={isim}
                        name='isim'
                        placeholder='isminizi giriniz.' />
                    <button onClick={() => handleSubmit(isim)}>Giriş</button><br />
                    {hataMesaji ? <h4>{hataMesaji}</h4> : <h2>Giriş yaptınız.</h2>}
                </>
            }
        </div>
    )
}

export default User