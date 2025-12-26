// ----------------------------------------------------
// SMOOTH SCROLL TO TOP ON PAGE RELOAD
// ----------------------------------------------------
window.history.scrollRestoration = "manual";

window.addEventListener("load", () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 50); // small delay so browser can render first
});

// ----------------------------------------------------
// NAVBAR ACTIVE LINK SWITCHING (CLICK)
// ----------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {

    const navLinks = document.querySelectorAll(".navbar a");
    const sections = document.querySelectorAll("section");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // ----------------------------------------------------
    // AUTO-HIGHLIGHT NAVBAR WHILE SCROLLING
    // ----------------------------------------------------
    window.addEventListener("scroll", () => {
        let scrollPos = window.scrollY + 250;

        sections.forEach(section => {
            let top = section.offsetTop;
            let height = section.offsetHeight;
            let id = section.getAttribute("id");

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove("active");

                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });

});

function copyPhone() {
    navigator.clipboard.writeText("0966 689 3257");
    alert("Phone Number Copied")
}