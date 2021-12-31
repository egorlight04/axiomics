const burger = document.querySelector(".header__burger");
const navigation = document.querySelector(".header__navigation");

burger.addEventListener("click", function() {
    burger.classList.toggle("header__burger_opened")
    navigation.classList.toggle("header__navigation_opened");
})
