document.addEventListener("DOMContentLoaded", function () {

    const projects = [
        {
            name: "Tender Connect",
            description: "A platform designed to streamline tender discovery and management.",
            category: "Web",
            link: "https://github.com/CosmicViraj/tender_connect"
        },
        {
            name: "YouTube Clone (Android)",
            description: "A complete YouTube clone built using Kotlin.",
            category: "Android",
            link: "https://github.com/CosmicViraj/YouTube-Clone"
        },
        {
            name: "CyberScope",
            description: "SOC-style cybersecurity toolkit with scanning & analytics.",
            category: "Cyber",
            link: "https://github.com/CosmicViraj/CyberScope"
        },
        {
            name: "Sentinel Cyber Portal",
            description: "AI-powered cyber incident reporting system.",
            category: "Academic",
            link: "https://github.com/CosmicViraj/sentinel-cyber-portal"
        },
        {
            name: "Honeypot (C)",
            description: "Tracks unauthorized access attempts.",
            category: "Network",
            link: "https://github.com/CosmicViraj/C-Honeypot"
        },
        {
            name: "TCP Chat Application",
            description: "Real-time TCP chat system.",
            category: "Network",
            link: "https://github.com/CosmicViraj/TCP-Chat-Application"
        },
        {
            name: "XOR File Encryption",
            description: "Simple XOR-based encryption tool.",
            category: "Crypto",
            link: "https://github.com/CosmicViraj/XOR-File-Encryption"
        }
    ];

    const categories = {
        Web: document.getElementById("web-projects"),
        Android: document.getElementById("android-projects"),
        Cyber: document.getElementById("cyber-projects"),
        Network: document.getElementById("network-projects"),
        Crypto: document.getElementById("crypto-projects"),
        Academic: document.getElementById("academic-projects")
    };

    // clear all containers
    Object.values(categories).forEach(container => {
        container.innerHTML = "";
    });

    projects.forEach(project => {

        const container = categories[project.category];

        // ✅ SAFE CHECK (prevents crash)
        if (!container) {
            console.warn("Unknown category:", project.category);
            return;
        }

        const card = document.createElement("div");
        card.className = "project-card";

        card.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View</a>
        `;

        container.appendChild(card);
    });
});