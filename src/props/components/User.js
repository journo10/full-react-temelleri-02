//Prop Types
import PropTypes from "prop-types";

const User = ({ name, surname, age, isLoggedIn, friends, address }) => {

    if (!isLoggedIn) {
        return <div>Giriş yapmadınız.</div>;
    }

    return (
        <>
            <h1>{`${name} ${surname} (${age})`}</h1>
            <h2>{address.title} {address.zip}</h2>
            {friends && //friends varsa göster
                friends.map((friend) => (
                    <h3 key={friend.id}>{friend.name}</h3>
                ))}
        </>
    )
}

//Prop Types =>Tip tanımlama
User.prototype = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,//oneOfType =>birden fazla veri türünü kabul etme
    isLoggedIn: PropTypes.bool.isRequired,
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    })

}

User.defaultProps = {//Varsayılan olarak değiştirme şekli
    name: "İsimsiz",
    isLoggedIn: false,
};

export default User;