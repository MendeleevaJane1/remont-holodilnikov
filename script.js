// =========================================================
// БУРГЕР-МЕНЮ
// =========================================================

const burger = document.getElementById("burger");
const navigation = document.getElementById("navigation");

if (burger && navigation) {

    burger.addEventListener("click", () => {

        navigation.classList.toggle("active");

        const isOpen = navigation.classList.contains("active");

        burger.setAttribute("aria-expanded", isOpen);

        if (isOpen) {
            burger.setAttribute("aria-label", "Закрыть меню");
        } else {
            burger.setAttribute("aria-label", "Открыть меню");
        }

    });


    // Закрываем меню после выбора раздела

    const navigationLinks =
        document.querySelectorAll(".navigation__link");

    navigationLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navigation.classList.remove("active");

            burger.setAttribute("aria-expanded", "false");
            burger.setAttribute("aria-label", "Открыть меню");

        });

    });


    // Закрытие меню при клике вне меню

    document.addEventListener("click", (event) => {

        const clickedInsideMenu =
            navigation.contains(event.target);

        const clickedBurger =
            burger.contains(event.target);

        if (
            navigation.classList.contains("active") &&
            !clickedInsideMenu &&
            !clickedBurger
        ) {

            navigation.classList.remove("active");

            burger.setAttribute("aria-expanded", "false");
            burger.setAttribute("aria-label", "Открыть меню");

        }

    });


    // Закрываем меню при переходе
    // обратно на большой экран

    window.addEventListener("resize", () => {

        if (window.innerWidth > 850) {

            navigation.classList.remove("active");

            burger.setAttribute("aria-expanded", "false");
            burger.setAttribute("aria-label", "Открыть меню");

        }

    });

}


// =========================================================
// БЕГУЩАЯ СТРОКА МАРОК
// =========================================================

const brandsTrack =
    document.querySelector(".brands__track");


// Проверяем, существует ли строка на странице

if (brandsTrack) {

    let position = 0;

    const speed = 0.7;

    function moveBrands() {

        position -= speed;

        /*
           Когда первая половина списка
           полностью ушла влево,
           возвращаемся в начало.
        */

        if (Math.abs(position) >= brandsTrack.scrollWidth / 2) {
            position = 0;
        }

        brandsTrack.style.transform =
            `translateX(${position}px)`;

        requestAnimationFrame(moveBrands);
    }

    moveBrands();

}