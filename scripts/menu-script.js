const menuButton = document.getElementById("menu-toggle");
const menu = document.getElementById("header-menu");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("open");
});

document.addEventListener("click", (event) => {
    const clickedMenu = menu.contains(event.target);
    const clickedButton = menuButton.contains(event.target);

    if (!clickedMenu && !clickedButton) {
        menu.classList.remove("open");
    }
});