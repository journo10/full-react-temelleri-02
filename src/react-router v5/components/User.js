import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react"
import axios from 'axios';
import { Link } from 'react-router-dom';

function User() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .finally(() => setLoading(false))
  }, [id])

  return (
    <>
      <h1>User Detail</h1>
      {loading && <h1>Yükleniyor...</h1>}
      {!loading && <code>{JSON.stringify(user)}</code>}
      <br />
      <br />
      <Link to={`/users/${parseInt(id) + 1}`}>Next User {parseInt(id) + 1}</Link>
      {/* <Link to={`/user/${+id + 1}`}>Next User {+id +1}</Link> 2.YÖNTEM */}
    </>
  )
}

export default User;

