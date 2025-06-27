function submitData(name, email) {
  const formData = {
    name: name,
    email: email,
  };

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then(response => response.json())
    .then(data => {
      const p = document.createElement("p");
      p.textContent = `ID: ${data.id}`;
      document.body.appendChild(p);
    })
    .catch(error => {
      const errorP = document.createElement("p");
      errorP.textContent = `Error: ${error.message}`;
      document.body.appendChild(errorP);
    });
}

