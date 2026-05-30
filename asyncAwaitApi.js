const API_URL = "https://api.github.com/users/Akash-Ramjyothi";

async function handlePromise() {
    const data = await fetch(API_URL);
    console.log("data.json: ", data);

    const jsonValue = await data.json();
    console.log("jsonValue: ", jsonValue);
}

handlePromise().catch((err) => console.log(err));