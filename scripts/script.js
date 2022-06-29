// Toggle Menu

    let navMenu =
        document.querySelector(".topHeader nav");
    let menuButton =
        document.querySelector(".menuToggler");

    menuButton.addEventListener("click", toggleMenu);

    function toggleMenu() {
        if(navMenu.classList.contains("navHidden")) {
            navMenu.classList.remove("navHidden");
            navMenu.style.paddingTop="20px"
            document.querySelector(".topHeader").style.marginTop="0"
        } else {
            navMenu.classList.add("navHidden")
            navMenu.style.paddingTop="0px"
            document.querySelector(".topHeader").style.marginTop="-50px"
        }
    }
