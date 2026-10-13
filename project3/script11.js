
/* ==========================================
   SHRILALI PORTFOLIO - JAVASCRIPT
   Emerald Green & Gold Theme
   ========================================== */


/* 1. MOBILE NAVIGATION */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );
    });

    // Close the menu after clicking a navigation link
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
        });
    });

    // Close the menu when clicking outside it
    document.addEventListener("click", (event) => {
        if (
            !menuToggle.contains(event.target) &&
            !navLinks.contains(event.target)
        ) {
            navLinks.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
        }
    });

    // Close the menu when pressing Escape
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            navLinks.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
        }
    });
}


/* 2. AUTOMATIC COPYRIGHT YEAR */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* 3. SCROLL REVEAL ANIMATIONS */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });

} else {

    // Fallback for older browsers
    revealElements.forEach((element) => {
        element.classList.add("visible");
    });

}


/* 4. ACTIVE NAVIGATION LINK ON SCROLL */

const sections = document.querySelectorAll("main section[id]");

const navAnchors = document.querySelectorAll(
    '.nav-links a[href^="#"]'
);

if ("IntersectionObserver" in window) {

    const activeObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    navAnchors.forEach((anchor) => {

                        anchor.classList.toggle(
                            "active",
                            anchor.getAttribute("href") ===
                            `#${entry.target.id}`
                        );

                    });

                }

            });

        },
        {
            rootMargin: "-35% 0px -55% 0px"
        }
    );

    sections.forEach((section) => {
        activeObserver.observe(section);
    });

}


/* 5. SMOOTH SCROLLING */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    anchor.addEventListener("click", (event) => {

        const targetId = anchor.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const targetElement = document.querySelector(targetId);

        if (targetElement) {

            event.preventDefault();

            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* 6. ANIMATED SKILL BARS */

const skillFills = document.querySelectorAll(".skill-fill");

if ("IntersectionObserver" in window) {

    const skillObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    const skillBar = entry.target;
                    const width = skillBar.dataset.width;

                    if (width) {
                        skillBar.style.width = width;
                    }

                    observer.unobserve(skillBar);
                }

            });

        },
        {
            threshold: 0.4
        }
    );

    skillFills.forEach((bar) => {
        skillObserver.observe(bar);
    });

} else {

    skillFills.forEach((bar) => {
        bar.style.width = bar.dataset.width || "0%";
    });

}


/* 7. BACK TO TOP BUTTON */

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    // Show the button after scrolling down
    window.addEventListener(
        "scroll",
        () => {

            backToTop.classList.toggle(
                "show",
                window.scrollY > 400
            );

        },
        {
            passive: true
        }
    );

    // Scroll back to the beginning
    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* 8. CONSOLE WELCOME MESSAGE */

console.log(
    "%cWelcome to Shrilali's Portfolio!",
    "color: #10b981; font-size: 18px; font-weight: bold;"
);

console.log(
    "%cJava Full Stack Developer Aspirant",
    "color: #d6b568; font-size: 14px;"
);
