let input = document.querySelector(".inpWord");
let btn = document.querySelector(".btn");
let head = document.querySelector(".head");
let show = document.querySelector(".def");

btn.addEventListener("click", () => {
  search(input.value);
  head.textContent = input.value;
  input.value = "";
});

function search(word) {
  let url = `https://dictionaryapi.com/api/v3/references/medical/json/${word}?key=5b2b9cab-0977-4fc1-b3e4-92e8ec2956f7`;

  fetch(url)
    .then((res) => res.json())
    .then((data) =>
      data.length > 0
        ? (show.textContent = `${data[0].shortdef[0]}`)
        : (show.textContent = `Definition not found`)
    )
    .catch((err) => console.error("Error fetching data:", err));
}
