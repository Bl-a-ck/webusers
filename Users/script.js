let userContainer = document.querySelector(".userContainer");

function getUsers(url) {
  userContainer.innerHTML = "";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let users = data.users;
      users.forEach((user) => {
        userContainer.innerHTML += `

         <div class="userdiv">

          <div class="divimg">
            <div class="img-us">
          <img src="${user.image}" alt="">
          <span class="Username">Username: ${user.username}</span>
         </div>
            <span class="Useremail">Email: ${user.email}</span>
          </div>
          <br>

          <div class="Names">

            <p><strong>Name:</strong> ${user.firstName} ${user.lastName}</p>
          </div>

          <br>
          <div class="Dates">
            <ul>
              <li>
                <h3>Date of birth: ${user.birthDate}</h3>
              </li>
              <li>
                <h4>Age: ${user.age}</h4>
              </li>
              <li>
                <h4>Phone: ${user.phone}</h4>
              </li>
            </ul>
          </div>
          <br>

           </div>
        `;
      });
    })
    .catch((error) => console.error("Error fetching user:", error));
}

let allUsers = "https://dummyjson.com/users";
getUsers(allUsers);
