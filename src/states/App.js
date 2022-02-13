import { useState } from "react";
import Counter from "./components/Counter";
import InputExample from "./components/InputExample";

const App = () => {
  const [name, setName] = useState("React");
  const [age, setAge] = useState(23);
  const [friends, setFriends] = useState(["Akif", "Murat", "Ceyhun"]);
  const [address, setAddress] = useState({ title: "Istanbul", zip: 34756 });

  return (
    <>
      <InputExample />
      <Counter />
      <h1>Merhaba {name}!</h1>
      <h1>Age {age}!</h1>
      <button onClick={() => setName("Angular")}>Change Name</button>
      <button onClick={() => setAge(21)}>Change Age</button>
      <hr />
      <br />
      <h1>Friends</h1>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      <br />
      <button onClick={() => setFriends([...friends, "Gizem"])}>
        Add new friend
      </button>
      <hr />
      <br />
      <h1>Address</h1>
      <div>
        {address.title} {address.zip}
      </div>
      <br />
      <button
        onClick={() => setAddress({ ...address, zip: 44444, title: "Ankara" })}
      >
        change the address
      </button>
    </>
  );
};
export default App;
