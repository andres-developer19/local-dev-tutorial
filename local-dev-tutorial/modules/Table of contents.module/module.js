
const postBody = document.getElementById("contentBody");
const headers = postBody.querySelectorAll("h1, h2, h3, h4, h5, h6");

const tocList = document.getElementById("content-list");

headers.forEach((header, index) => {
  if (!header.id) {
    header.id = `section-${index}`;
  }

  const listItem = document.createElement("li");
  listItem.classList.add("list-item");
  const link = document.createElement("a");
  link.textContent = header.textContent;
  link.href = `#${header.id}`;

  listItem.appendChild(link);
  tocList.appendChild(listItem);
});

const linkItems = Array.from(document.querySelectorAll(".list-item a"));

linkItems.forEach((item, i) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    linkItems.forEach((link) => {
      link.classList.remove("current");
    });
    item.classList.add("current");
  });
});
