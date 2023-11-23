document.getElementById("file-input").addEventListener("change", function () {
  const file = this.files[0];
  const reader = new FileReader();

  reader.onload = function () {
    const lines = this.result.split("\n");
    displayQuestions(lines);
  };

  reader.readAsText(file);
});

function displayQuestions(questions) {
  document.getElementById("load-container").remove();
  const container = document.getElementById("card-container");
  container.innerHTML = ""; // Clear existing content

  questions.forEach((question) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = question;
    container.appendChild(card);
  });
}
