document.addEventListener("DOMContentLoaded", function () {
    const categorizedProjects = {
        "Security Projects": [
            {
                name: "Honeypot Project",
                description: "A security-focused project written in C to analyze intrusions.",
                link: "https://github.com/CosmicViraj/C-Honeypot"
            },
            {
                name: "XOR-File-Encryption",
                description: "Encrypt and decrypt files using XOR encryption.",
                link: "https://github.com/CosmicViraj/XOR-File-Encryption"
            }
        ],
        "Android Projects": [
            {
                name: "YouTube-Clone",
                description: "A YouTube clone built in Kotlin with Android best practices.",
                link: "https://github.com/CosmicViraj/YouTube-Clone"
            },
            {
                name: "dice-roller_kT",
                description: "A simple dice roller app in Kotlin for random outcomes.",
                link: "https://github.com/CosmicViraj/dice-roller_kT"
            }
        ],
        "Java Projects": [
            {
                name: "ChatClient_Server",
                description: "A text-based Java chat app using client-server model.",
                link: "https://github.com/CosmicViraj/ChatClient_Server"
            },
            {
                name: "JavaCalculatorApp",
                description: "A Java calculator app for basic arithmetic operations.",
                link: "https://github.com/CosmicViraj/JavaCalculatorApp"
            }
        ],
        "Web Development": [
            {
                name: "To-Do_List_webapp",
                description: "A to-do list app built using HTML, CSS, and JavaScript.",
                link: "https://github.com/CosmicViraj/To-Do_List_webapp"
            },
            {
                name: "BMI_Calculator",
                description: "Calculate BMI using this responsive web-based tool.",
                link: "https://github.com/CosmicViraj/BMI_CALC"
            }
        ],
        "Networking Projects": [
            {
                name: "TCP-Chat-Application",
                description: "A TCP chat app for real-time user communication.",
                link: "https://github.com/CosmicViraj/TCP-Chat-Application"
            }
        ]
    };

    const container = document.getElementById("project-container");

    for (const category in categorizedProjects) {
        const categoryTitle = document.createElement("h2");
        categoryTitle.textContent = category;
        container.appendChild(categoryTitle);

        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("category");

        categorizedProjects[category].forEach(project => {
            const card = document.createElement("div");
            card.classList.add("project");

            card.innerHTML = `
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">🔗 View Project</a>
            `;

            categoryDiv.appendChild(card);
        });

        container.appendChild(categoryDiv);
    }
});
