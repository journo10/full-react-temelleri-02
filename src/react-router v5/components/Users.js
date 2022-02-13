import axios from 'axios';
import React from 'react';
import { useState, useEffect } from "react"
import { NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import User from "./User";
import "./Navbar/styles.css"

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const { path, url } = useRouteMatch();//iç içe route
  console.log("Path:" + path, "Url"+ url)

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .finally(() => setLoading(false))
  }, [])
  return <>
    <h1>Users</h1>
    {loading && <h1>Yükleniyor...</h1>}
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <NavLink to={`${url}/${user.id}`} activeClassName="active">{user.name}</NavLink>
        </li>
      ))}
    </ul>

    <Switch>
      <Route exact path={path}>
        <h3>Lütfen bir kullanıcı seçin.</h3>
      </Route>
      <Route path={`${path}/:id`} component={User} />
    </Switch>

  </>
}

export default Users;
