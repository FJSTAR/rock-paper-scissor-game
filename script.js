// Get to DOM elements
const GameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

// Loop through each option image element
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = "images/rock.png";
        cpuResult.src = "images/rock.png";

        // Loop through each image again
        optionImages.forEach((image2, index2) => {
            // If current image dosen't match the clicked image
            // Remove "active" class from other option images
            index != index2 && image2.classList.remove("active");

            GameContainer.classList.add("start");

            // Set a timout to delay the result calculation
            let time = setTimeout(() => {
                GameContainer.classList.remove("start");

                // Get the source of the clicked option image
                let imageSrc = e.target.querySelector("img").src;
                // Set the user image to the clicked option image
                userResult.src = imageSrc;

                // Generate a random number between 0 and 2
                let randomNumber = Math.floor(Math.random() * 3);
                // create an array of cpu image options
                let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
                // Set the cpu image to the random option from the array
                cpuResult.src = cpuImages[randomNumber];

                // Assign a letter value to the cpu option (R for Rock, P for Paper and S for Scissors)
                let cpuValue = ["R", "P", "S"][randomNumber];
                // Assign a letter value to the clicked option (based on index)
                let userValue = ["R", "P", "S"][index];

                // Create an object with all possible outcomes
                let outcomes = {
                    RR: "Draw",
                    RP: "CPU",
                    RS: "User",
                    PP: "Draw",
                    PR: "User",
                    PS: "CPU",
                    SS: "Draw",
                    SR: "CPU",
                    SP: "User",
                };

                // Look up the outcome value based on user and cpu options
                let outcomeValue = outcomes[userValue + cpuValue];

                // Display the result
                result.textContent = userValue === cpuValue ? "Match Draw" : `${outcomeValue} Won!!`
            }, 2500);
        });
    });
});