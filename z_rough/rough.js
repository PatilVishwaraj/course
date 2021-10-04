function newUser(event) {
    event.preventDefault();
    let user
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let mail = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    if (name.length === 0 || phone.length === 0 || mail.length === 0 || pass.length === 0) {
        alert("Fill all the detail!");
    } else {
        if (user.length === 0) {
            user.push({name: name, phone: phone, email: mail, password: pass});

            let addData = JSON.stringify(user);
            localStorage.setItem("Users", addData);
        } else {
            let receiveData = localStorage.getItem("Users");
            let users = JSON.parse(receiveData);
            let check = 0;
            for (let i = 0; i < users.length; i++) {
                if (Object.values(users[i])[2] === mail || Object.values(users[i])[1] === phone) {
                    check++;
                } 
            }
            if (check > 0) {
                alert("User already exist. Please Login!");
            } else {
                user.push({name: name, phone: phone, email: mail, password: pass});
                let addData = JSON.stringify(user);
                localStorage.setItem("Users", addData);
            }
        }
    }
}