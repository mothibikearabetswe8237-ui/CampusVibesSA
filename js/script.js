// JavaScript source code
function showWelcome() {
    document.getElementById("welcomeMessage").textContent =
        "Welcome to Campus Vibes SA! Explore campus events, sports, games and student deals.";
}
console.log("Campus Vibes SA JavaScript is working!");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

if (lightbox && lightboxImage && closeLightbox) {

    document.querySelectorAll(".gallery-image").forEach(function (image) {

        image.addEventListener("click", function () {
            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;
            lightbox.style.display = "flex";
        });

    });

    closeLightbox.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            lightbox.style.display = "none";
        }
    });
}
const enquiryForm = document.getElementById("enquiryForm");
if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const surname = document.getElementById("surname").value.trim();
        const email = document.getElementById("email").value.trim();
        const studentNumber = document.getElementById("studentnumber").value.trim();
        const activity = document.getElementById("activity").value;
        const message = document.getElementById("message").value.trim();

        if (name === "" || surname === "" || email === "" ||
            studentNumber === "" || activity === "" || message === "") {
            alert("Please complete all required fields.");
            return;
        }

        let response = "";

        if (activity === "events") {
            response = "Thank you! We have checked your Campus Events enquiry.";
        } else if (activity === "sports") {
            response = "Thank you! We have checked your Sports enquiry.";
        } else if (activity === "games") {
            response = "Thank you! We have checked your Games enquiry.";
        } else if (activity === "deals") {
            response = "Thank you! We have checked your Student Deals enquiry.";
        }

        alert(response);
        const subject = "Campus Vibes SA - Student Enquiry";

        const body =
            "Name: " + name + " " + surname + "\n" +
            "Email: " + email + "\n" +
            "Activity: " + activity + "\n\n" +
            response;

        const emailLink = "mailto:seanekea1906@example.com" +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);

        window.location.href = emailLink;
    });
}
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = contactForm.querySelector("#name").value.trim();
        const surname = contactForm.querySelector("#surname").value.trim();
        const email = contactForm.querySelector("#email").value.trim();
        const subject = contactForm.querySelector("#subject").value.trim();
        const message = contactForm.querySelector("#message").value.trim();

        if (name === "" || surname === "" || email === "" ||
            subject === "" || message === "") {
            alert("Please complete all required fields.");
            return;
        }

        const formData = new FormData(contactForm);
        formData.set("form-name", "contact");

        try {
            const response = await fetch("/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams(formData).toString()
            });

            if (!response.ok) {
                throw new Error("Form submission failed");
            }

            alert("Thank you, " + name + "! Your message has been sent.");
            contactForm.reset();

        } catch (error) {
            alert("Sorry, your message could not be sent. Please try again.");
            console.error(error);
        }
    });
}
function showAboutInfo() {
    alert("Campus Vibes SA is a student platform that helps students find campus events, sports, games and student deals. Our goal is to make campus life easier and more enjoyable.");
}
const activitySearch = document.getElementById("activitySearch");
const activitiesTable = document.getElementById("activitiesTable");
const searchMessage = document.getElementById("searchMessage");

if (activitySearch && activitiesTable && searchMessage) {

    activitySearch.addEventListener("input", function () {

        const searchText = activitySearch.value.toLowerCase().trim();
        const rows = activitiesTable.querySelectorAll("tr");
        let matches = 0;

        for (let i = 1; i < rows.length; i++) {

            const activityText = rows[i].textContent.toLowerCase();

            if (activityText.includes(searchText)) {
                rows[i].style.display = "";
                matches++;
            } else {
                rows[i].style.display = "none";
            }
        }

        if (matches === 0) {
            searchMessage.textContent = "No matching activities found.";
        } else {
            searchMessage.textContent = matches + " activities found.";
        }
    });
}