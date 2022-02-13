import { useState, useEffect } from "react";

const initialFormValues = { fullname: "", phone_number: "" };

function Form({ addContacts, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  //form'un içinin temizlenmesi
  useEffect(() => {
		setForm(initialFormValues);
	}, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    //Validation işlemi yani form boş gönderilirse kayıt yapmayacak
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }
    addContacts([...contacts, form]);
    console.log(form)
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <div>
          <input
            onChange={onChangeInput}
            name="fullname"
            value={form.fullname}
            type="text"
            placeholder="İsim giriniz."
          />
        </div>
        <div>
          <input
            onChange={onChangeInput}
            name="phone_number"
            value={form.phone_number}
            type="number"
            placeholder="Numaranızı giriniz."
          />
        </div>
        <div  className="btn">
          <button>Ekle</button>
        </div>
      </form>
    </>
  );
}

export default Form;
