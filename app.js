document.getElementById("resolutionForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const background = document.getElementById("background").value;
  const action = document.getElementById("action").value;

  const draft = `
  READING & OUTSKIRTS TRANSPORTATION AUTHORITY (ROTA)

  RESOLUTION

  ${title}

  WHEREAS, ${background};

  NOW, THEREFORE, BE IT RESOLVED THAT:

  ${action}
    `;

  document.getElementById("output").textContent = draft;
});
