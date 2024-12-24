document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {
            name: "Honeypot Project",
            description: "A security-focused project written in C to analyze intrusions.",
            link: "https://github.com/CosmicViraj/C-Honeypot"
        },
        {
            name: "TCP-Chat-Application",
            description: "A TCP Chat Application for real-time communication between users over TCP.",
            link: "https://github.com/CosmicViraj/TCP-Chat-Application"
        },
        {
            name: "XOR-File-Encryption",
            description: "A tool to encrypt and decrypt files using XOR encryption for secure data handling.",
            link: "https://github.com/CosmicViraj/XOR-File-Encryption"
        },
        {
            name: "ChatClient_Server",
            description: "A text-based chat application implemented in Java for server-client communication.",
            link: "https://github.com/CosmicViraj/ChatClient_Server"
        },
        {
            name: "To-Do_List_webapp",
            description: "A web app to manage daily tasks, built with HTML, CSS, and JavaScript.",
            link: "https://github.com/CosmicViraj/To-Do_List_webapp"
        },
        {
            name: "JavaCalculatorApp",
            description: "A user-friendly calculator application developed in Java for basic arithmetic operations.",
            link: "https://github.com/CosmicViraj/JavaCalculatorApp"
        },
        {
            name: "dice-roller_kT",
            description: "A command-line application simulating dice rolls for gaming or randomization purposes.",
            link: "https://github.com/CosmicViraj/dice-roller_kT"
        },
        {
            name: "BMI_Calculator",
            description: "A user-friendly BMI Calculator to track your health and fitness goals. Input your weight and height to assess your BMI instantly!.",
            link: "https://github.com/CosmicViraj/BMI_CALC"
        }
    ];

    const projectList = document.querySelector(".project-list");

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project");
        projectCard.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectList.appendChild(projectCard);
    });
});
