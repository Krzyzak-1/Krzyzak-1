(() => {
    const button = document.querySelector(".js-main__navigation_mobile--button");
    const menu = document.querySelector(".js-main__navigation--menu");


    const toggleClass = () => {
        menu.classList.toggle("main__navigation--menu_open");
    };

    button.addEventListener("click", toggleClass);
    menu.addEventListener("click", toggleClass);

})();