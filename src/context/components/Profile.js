import { useState } from 'react'
import { useUser } from '../contexts/UserContext'

function Profile() {
    const { user, setUser } = useUser()
    const [loading, setLoading] = useState(false)

    const handleLogin = () => {
        setLoading(true)
        setTimeout(() => {
        setUser({id: 1,name: "Akif",bio: "Lorem ipsum doler"})
        setLoading(false)
        }, 2000);
    }

    const handleLoguut = () =>{
        setUser(null);
    }
    return (
        <div>
            {!user && (
                <button onClick={handleLogin}>{loading ? "Yükleniyor..." : "Login"}</button>
            )}
            <br />
            <code>
                {JSON.stringify(user)}
            </code>
            <br/>
            {user && (
                <button onClick={handleLoguut}>LogOut</button>
            )}
        </div>
    )
}

export default Profile