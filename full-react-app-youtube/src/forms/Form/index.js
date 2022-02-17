import { useState } from 'react'
import "./styles.css"
function Form() {
    const [form, setForm] = useState({ isim: "", sehir: "", bio: "" });

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const formOnSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    }
    return (
        <div className="App">
            <h1>React Dersleri</h1>
            <form onSubmit={formOnSubmit}>
                <input
                    value={form.isim}
                    onChange={handleChange}
                    placeholder="adiniz"
                    name="isim"
                />
                <select
                    value={form.sehir}
                    onChange={handleChange}
                    name="sehir">
                    <option value="" disabled>Şehir seçiniz</option>
                    <option value="ankara">Ankara</option>
                    <option value="istanbul">İstanbul</option>
                    <option value="izmir">İzmir</option>
                </select>
                <textarea
                    value={form.bio}
                    onChange={handleChange}
                    rows="10"
                    placeholder="biyografiniz"
                    name="bio"
                />
                <button>Gönder</button>
            </form>
        </div>
    );
}

export default Form