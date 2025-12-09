        const $ = id => document.getElementById(id);

        const form = $("email-form");
        const thankyou = $("thankyou");
        const formContainer = document.querySelector(".form-container");

        // hide thank-you initially
        thankyou.style.display = "none";

        form.addEventListener("submit", function(e){
            e.preventDefault();

            const email = $("email").value.trim();
            const firstName = $("fname").value.trim();
            const lastName = $("lname").value.trim();

            let errorMessage = "";
            const emailPattern = /^[\w.\-]+@[\w.\-]+\.[a-zA-Z]{2,}$/;

            if (!emailPattern.test(email)) errorMessage += "Please enter a valid email.\n";
            if (!firstName) errorMessage += "First name is required.\n";
            if (!lastName) errorMessage += "Last name is required.\n";

            if (errorMessage) {
                alert(errorMessage);
                return;
            }

            // hide form and show thank-you
            formContainer.classList.add("nonvisible");
            thankyou.classList.add("visible");
        });