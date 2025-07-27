document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {
            name: "To-Do List Web App",
            description: "Manage daily tasks using HTML, CSS, JS.",
            category: "Web",
            link: "https://github.com/CosmicViraj/To-Do_List_webapp"
        },
        {
            name: "YouTube Clone (Android)",
            description: "A complete YouTube clone built using Kotlin.",
            category: "Android",
            link: "https://github.com/CosmicViraj/YouTube-Clone"
        },
        {
            name: "BMI Calculator",
            description: "Calculate Body Mass Index with clean UI.",
            category: "Web",
            link: "https://github.com/CosmicViraj/BMI_CALC"
        },
        {
            name: "Honeypot (C)",
            description: "Track malicious intrusion attempts.",
            category: "Security",
            link: "https://github.com/CosmicViraj/C-Honeypot"
        },
        {
            name: "TCP Chat App",
            description: "Real-time chat over TCP.",
            category: "Security",
            link: "https://github.com/CosmicViraj/TCP-Chat-Application"
        }
    ];

    const categories = {
        Web: document.getElementById("web-projects"),
        Android: document.getElementById("android-projects"),
        Security: document.getElementById("security-projects")
    };

    projects.forEach(project => {
        const card = document.createElement("div");
        card.className = "project";
        card.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View</a>
        `;
        categories[project.category].appendChild(card);
    });
});
