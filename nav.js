document.addEventListener("DOMContentLoaded", () => {
    const navContainer = document.getElementById("site-nav");
    if (!navContainer) return;

    const pages = [
        { label: "home", href: "/" },
        { label: "sketches", href: "/sketches" }
        // Add future pages here, e.g.:
        // { label: "writing", href: "/writing" },
    ];

    // Normalize current path (strips trailing slash and .html extension)
    const currentPath = window.location.pathname
        .replace(/\/index\.html$/, "")
        .replace(/\.html$/, "")
        .replace(/\/$/, "") || "/";

    const linksHTML = pages
        .map((page) => {
            const targetPath = page.href.replace(/\/$/, "") || "/";
            const isActive = currentPath === targetPath;

            return `
            <a href="${page.href}" 
               class="nav-item ${isActive ? "active" : ""}" 
               aria-label="${page.label}"
               ${isActive ? 'aria-current="page"' : ""}>
                <span class="nav-label">${page.label}</span>
                <span class="nav-dot"></span>
            </a>`;
        })
        .join("");

    navContainer.innerHTML = linksHTML;
});
