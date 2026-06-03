document.addEventListener("DOMContentLoaded", function () {
    const projects = [
       
         {
        name: "Tender Connect",
        description: "A platform designed to streamline tender discovery and management, helping users track and explore procurement opportunities efficiently.",
        category: "Web",
        link: "https://github.com/CosmicViraj/tender_connect"
    },

    {
        name: "YouTube Clone (Android)",
        description: "A complete YouTube clone built using Kotlin with video browsing and modern Android UI components.",
        category: "Android",
        link: "https://github.com/CosmicViraj/YouTube-Clone"
    },

    {
        name: "CyberScope",
        description: "SOC-style cybersecurity toolkit featuring Nmap scanning, CVE lookup, risk scoring, visual analytics, scan history, and PDF report generation.",
        category: "Security",
        link: "https://github.com/CosmicViraj/CyberScope"
    },

    {
        name: "Sentinel Cyber Portal",
        description: "AI-powered cyber incident reporting and threat intelligence portal with real-time threat monitoring and automated threat assessment.",
        category: "Security",
        link: "https://github.com/CosmicViraj/sentinel-cyber-portal"
    },

    {
        name: "Honeypot (C)",
        description: "A honeypot written in C that tracks unauthorized access attempts and logs suspicious activities for security analysis.",
        category: "Security",
        link: "https://github.com/CosmicViraj/C-Honeypot"
    },

    {
        name: "TCP Chat Application",
        description: "Real-time client-server chat application using TCP sockets for reliable communication across a network.",
        category: "Security",
        link: "https://github.com/CosmicViraj/TCP-Chat-Application"
    },

    {
        name: "XOR File Encryption",
        description: "A lightweight file encryption and decryption tool demonstrating XOR-based cryptographic techniques.",
        category: "Security",
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
