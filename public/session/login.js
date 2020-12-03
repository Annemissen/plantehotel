// login.js
const name = document.getElementById('username');
const password = document.getElementById('password');
const loginError = document.getElementById('loginError');
const loginBtn = document.getElementById('loginBtn');

async function post(url, objekt) {
    const respons = await fetch(url, {
        method: "POST",
        body: JSON.stringify(objekt),
        headers: { 'Content-Type': 'application/json' }
    });
    if (respons.status !== 201) // Created
        throw new Error(respons.status);
    return await respons.json();
}

loginBtn.onclick = async () => {
    try {
        await post("/reservations/login", { name: name.value, password: password.value });
        
        window.location.href = "/reservations/overview";       
        
    } catch (e) {
        password.value = "";
        loginError.innerHTML = "Forkert password eller intet brugernavn!";
        console.error(e.name + ": " + e.messsage);
    }
}