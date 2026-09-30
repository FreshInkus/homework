const searchForm = document.querySelector("[data-product-search]");

if (searchForm) {
  const searchInput = searchForm.querySelector("[data-search-input]");
  const searchTags = searchForm.querySelectorAll("[data-search-term]");

  searchTags.forEach((tag) => {
    tag.addEventListener("click", () => {
      searchInput.value = tag.dataset.searchTerm;
      searchInput.focus();
    });
  });
}
