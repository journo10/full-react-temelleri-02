//Callback Functions / async-await
//örnek 1
// setTimeout(() => {
//     console.log("hello react");
// }, 5000);

//örnek 2
// setInterval(() => {
//     console.log("Ben her saniye çalışıyorum");
// }, 1000);

//örnek 3
// const sayHi = (cb) => {
//     cb()
// }
// sayHi(() => {
//     console.log("Hello react");
// })

//FETCH
//import fetch from "node-fetch";

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json())
//     .then((users) => {
//         console.log("Users Yuklendi!", users);

//         fetch("https://jsonplaceholder.typicode.com/posts/1")
//             .then((data) => data.json())
//             .then((post) => {
//                 console.log("Post 1 Yüklendi!", post);

//                 fetch("https://jsonplaceholder.typicode.com/posts/2")
//                     .then((data) => data.json())
//                     .then((data) => console.log("Post 2 Yüklendi", data));
//             });
//     });

// async function getData() {
//     const users = await (
//         await fetch("https://jsonplaceholder.typicode.com/users")
//     ).json();

//     const post1 = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     ).json();

//     const post2 = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/2")
//     ).json();

//     console.log("users", users);
//     console.log("post1", post1);
//     console.log("post2", post2);
// }

// getData();

//AXİOS
 import axios from "axios";

// (async () => {
//     const { data: users } = await axios(
//         "https://jsonplaceholder.typicode.com/users"
//     );

//     const { data: post1 } = await axios(
//         "https://jsonplaceholder.typicode.com/posts/1"
//     );

//     const { data: post2 } = await axios(
//         "https://jsonplaceholder.typicode.com/posts/2"
//     );

//     console.log("users", users);
//     console.log("post1", post1);
//     console.log("post2", post2);
// })();

//PROMİSES
//resolve =>Başarılı dönerse
//reject =>Başarısız dönerse
const getUsers = () => {
	return new Promise(async (resolve, reject) => {
		const { data } = await axios("https://jsonplaceholder.typicode.com/users");

		resolve(data);
		// reject("Bir sorun oluştu.");
	});
};

const getPost = (post_id) => {
	return new Promise(async (resolve, reject) => {
		const { data } = await axios(
			"https://jsonplaceholder.typicode.com/posts/" + post_id
		);

		resolve(data);
		// reject("Bir sorun daha oluştu");
	});
};

// (async () => {
// 	try {
// 		const users = await getUsers();
// 		const post = await getPost(1);

// 		console.log(users);
// 		console.log(post);
// 	} catch (e) {
// 		console.log(e);
// 	}
// })();

Promise.all([getUsers(), getPost(1)])//Birden fazla çalıştırmak istersen bu şekilde
	.then(console.log)
	.catch(console.log);
