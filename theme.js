(() => {
  const root = document.documentElement;
  const button = document.querySelector(".theme-toggle");
  if (!button) return;

  const effectiveTheme = () => {
    if (root.dataset.theme) return root.dataset.theme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const updateButton = () => {
    const dark = effectiveTheme() === "dark";
    button.textContent = dark ? "☀" : "☾";
    button.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    button.title = dark ? "Switch to light theme" : "Switch to dark theme";
  };

  button.addEventListener("click", () => {
    const next = effectiveTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("theme", next);
    updateButton();
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateButton);
  updateButton();
})();
