const menu_button = document.querySelector(".header__menu-button")
const navigation = document.querySelector(".header__navigation")

menu_button.addEventListener("click", function() {
    navigation.classList.toggle("header__navigation_closed")
})
