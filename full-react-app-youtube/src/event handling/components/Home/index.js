import React from 'react'

const Home = () => {
    return (
        <div onClick={() => {
            console.log("Div tıklandı...")
        }} style={{ textAlign: "center" }}>
            <h1>React Dersleri</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                console.log("Form gönderildi.")
            }}>
                İsim:<input
                    onFocus={() => {
                        console.log("İnput onFocus oldu yani imlec input'un içinde")
                    }}
                    onBlur={() => {
                        console.log("İmlec artık inputta değil yani onBlur oldu")
                    }}
                    onChange={(e) => {
                        console.log("İnput'a bir şey yazıldı.", e.target.name, e.target.value)
                    }} type="text" name="isim" />

                <button onClick={(e) => {
                    e.stopPropagation()//sadece istediğimiz click'e tıklanmak için kullanılır.
                    console.log("Button'a tıklandı.")
                }}>Tıkla</button>
            </form>
        </div>
    )
}

export default Home