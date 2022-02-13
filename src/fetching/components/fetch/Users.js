import { useEffect, useState } from 'react';


function Users() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then(data => setUsers(data))
            .catch((e) => console.log(e))//hata ayıklama
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <>
            <h1>Users</h1>
            {isLoading && <div style={{ color: "red" }}>YÜKLENİYOR...</div>}
            
            {users.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))}

        </>
    )
}

export default Users;
