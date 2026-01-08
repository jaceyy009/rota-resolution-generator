document.getElementById("resolutionForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    resolution_number: document.getElementById("resolutionNumber").value,
    title: document.getElementById("title").value,
    whereas_1: document.getElementById("whereas1").value,
    whereas_2: document.getElementById("whereas2").value,
    whereas_3: document.getElementById("whereas3").value,
    section_1: document.getElementById("section1").value,
    section_2: document.getElementById("section2").value
  };

  let output = `
READING & OUTSKIRTS TRANSPORTATION AUTHORITY

RESOLUTION NO. ${data.resolution_number}

${data.title}

WHEREAS, ${data.whereas_1}; and
WHEREAS, ${data.whereas_2}; and
WHEREAS, ${data.whereas_3}.

NOW, THEREFORE, BE IT RESOLVED THAT:

SECTION 1. ${data.section_1}
SECTION 2. ${data.section_2}
`;

  document.getElementById("output").textContent = output;
});
