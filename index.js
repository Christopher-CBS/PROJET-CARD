const createNewProjectCard = (
  title,
  imageUrl,
  formTitle,
  formImageUrl,
  formText
) => {
  const newCard = document.createElement("div");
  newCard.classList.add("card");

  const cardTitle = document.createElement("h3");
  cardTitle.classList.add("card-title");
  cardTitle.innerHTML = title;
  newCard.appendChild(cardTitle);

  const cardImage = document.createElement("img");
  cardImage.classList.add("card__img");
  cardImage.src = imageUrl;
  cardImage.alt = "";
  newCard.appendChild(cardImage);

  const cardDescription = document.createElement("p");
  cardDescription.classList.add("card__text");
  cardDescription.innerText = text;
  newCard.appendChild(cardDescription);

  return newCard;
};
const resetForm = () => {
  document.querySelector("#project-title").value = "";
  const formImageUrl = (document.querySelector("#project-img-link").value = "");
  const formText = (document.querySelector("#project-text").value = "");
};

const handleSubmit = (event) => {
  event.preventDefault();
  const formTitle = document.querySelector("#project-title").value;
  const formImageUrl = document.querySelector("#project-img-link").value;
  const formText = document.querySelector("#project-text").value;
  const newProjectCard = createNewProjectCard(
    formTitle,
    formImageUrl,
    formText
  );
  document.querySelector("#cards").appendChild(newProjectCard);
  resetForm();
};
