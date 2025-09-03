// Lista de ciudades capitales de Colombia
const data = [
  "Leticia",
  "Medellín",
  "Arauca",
  "Barranquilla",
  "Cartagena de Indias",
  "Tunja",
  "Manizales",
  "Florencia",
  "Yopal",
  "Popayán",
  "Valledupar",
  "Quibdó",
  "Montería",
  "Bogotá D.C.",
  "Inírida",
  "San José del Guaviare",
  "Neiva",
  "Riohacha",
  "Santa Marta",
  "Villavicencio",
  "Pasto",
  "Cúcuta",
  "Mocoa",
  "Armenia",
  "Pereira",
  "San Andrés",
  "Bucaramanga",
  "Sincelejo",
  "Ibagué",
  "Cali",
  "Mitú",
  "Puerto Carreño"
];

const searchInput = document.getElementById("search");
const suggestionsList = document.getElementById("suggestions");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  suggestionsList.innerHTML = "";
  if (!query) {
    suggestionsList.style.display = "none";
    return;
  }
  const matches = data.filter(item => item.toLowerCase().includes(query));
  if (matches.length > 0) {
    matches.forEach(match => {
      const li = document.createElement("li");
      li.textContent = match;
      li.addEventListener("click", () => {
        searchInput.value = match;
        suggestionsList.style.display = "none";
      });
      suggestionsList.appendChild(li);
    });
    suggestionsList.style.display = "block";
  } else {
    suggestionsList.style.display = "none";
  }
});
