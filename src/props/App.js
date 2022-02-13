import React from 'react';
import User from './components/User'

const friends = [
  {
    id: 1,
    name: "Ahmet",
  },
  {
    id: 2,
    name: "Akif",
  },
  {
    id: 3,
    name: "Gökhan",
  },
];
function App() {

  return (
    <>
      <User
       //name="Ceyhun"
        surname="Yıldırım"
        age={"21"}
        isLoggedIn={true}
        friends={friends}
        address={{
          title: "Kadıköy/Istanbul",
          zip: 34755,
        }} />
    </>
  )
}

export default App;
