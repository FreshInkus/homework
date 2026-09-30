const solutionsToggle = document.querySelector(".menu__link--solutions");
const solutionsItem = solutionsToggle?.closest(".menu__item--has-dropdown");
const solutionsMenu = document.getElementById(
  solutionsToggle?.getAttribute("aria-controls"),
);

const closeSolutionsMenu = () => {
  if (!solutionsToggle || !solutionsItem) return;

  solutionsItem.classList.remove("is-open");
  solutionsToggle.setAttribute("aria-expanded", "false");
};

solutionsToggle?.addEventListener("click", () => {
  if (!solutionsItem) return;

  const isOpen = solutionsItem.classList.toggle("is-open");
  solutionsToggle.setAttribute("aria-expanded", String(isOpen));
});

solutionsMenu?.addEventListener("click", (event) => {
  if (event.target.closest(".solutions-menu__link")) {
    closeSolutionsMenu();
  }
});

document.addEventListener("click", (event) => {
  if (solutionsItem && !solutionsItem.contains(event.target)) {
    closeSolutionsMenu();
  }
});

const searchDialog = document.querySelector("#search-dialog");
const searchDialogOpenButton = document.querySelector("[data-search-dialog-open]");
const searchDialogCloseButton = document.querySelector("[data-search-dialog-close]");
const searchDialogInput = searchDialog?.querySelector(".search-dialog__input");
const searchDialogForm = searchDialog?.querySelector(".search-dialog__form");

const closeSearchDialog = (restoreFocus = true) => {
  if (!searchDialog || !searchDialogOpenButton) return;

  if (searchDialog.open) {
    searchDialog.close();
  }

  searchDialogOpenButton.setAttribute("aria-expanded", "false");

  if (restoreFocus) {
    searchDialogOpenButton.focus();
  }
};

searchDialogOpenButton?.addEventListener("click", () => {
  if (!searchDialog) return;

  searchDialog.showModal();
  searchDialogOpenButton.setAttribute("aria-expanded", "true");
  searchDialogInput?.focus();
});

searchDialogCloseButton?.addEventListener("click", () => {
  closeSearchDialog();
});

searchDialog?.addEventListener("click", (event) => {
  if (event.target === searchDialog) {
    closeSearchDialog();
  }
});

searchDialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeSearchDialog();
});

searchDialogForm?.addEventListener("submit", (event) => {
  event.preventDefault();
});
