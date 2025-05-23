document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll for Navbar Links
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    document.querySelectorAll("section").forEach(sec => sec.classList.add("active"));

    // Dark Mode Toggle
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Dark Mode";
    toggleBtn.className = "btn btn-warning";
    document.querySelector("nav .container").appendChild(toggleBtn);

    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Project Hover Effects
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "0.3s";
        });
        card.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Contact Form Validation (if you plan to add one)
    const emailInput = document.querySelector("#contact input[type='email']");
    if (emailInput) {
        emailInput.addEventListener("input", function () {
            if (!this.value.includes("@")) {
                this.style.border = "2px solid red";
            } else {
                this.style.border = "2px solid green";
            }
        });
    }
});
