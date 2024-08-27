const previewContent = [
    {
        title: "About Me",
        description: "Learn more about my background, skills, and interests.",
        button: "Go to About Me",
        link: "/about.html",
        backgroundImage: "url('pictures/hero_images/about_image.svg')"
    },
    {
        title: "CV",
        description: "Check out my CV.",
        button: "Go to CV",
        link: "/cv.html",
        backgroundImage: "url('pictures/hero_images/cv_image.svg')"
    },
    {
        title: "Contact",
        description: "Find contact details.",
        button: "Go to Contact",
        link: "/contact.html",
        backgroundImage: "url('pictures/hero_images/contact_image.svg')"
    }
];

let previewNum = 0;

function showPreview() {
    const previewSection = document.getElementById('pageDesc');
    previewSection.innerHTML = `
        <h2>${previewContent[previewNum].title}</h2>
        <p>${previewContent[previewNum].description}</p>
        <a href="${previewContent[previewNum].link}" class="hero_direct">${previewContent[previewNum].button}</a>
    `;

    const contentBoxElement = document.querySelector('.hero_preview_box');
    contentBoxElement.style.backgroundImage = previewContent[previewNum].backgroundImage;

    const previewSectionAlt = document.getElementById('pageDescAlt');
    previewSectionAlt.innerHTML = `
        <h2>${previewContent[previewNum].title}</h2>
        <p>${previewContent[previewNum].description}</p>
        <a href="${previewContent[previewNum].link}" class="hero_direct">${previewContent[previewNum].button}</a>
    `;


    const contentBoxElementAlt = document.querySelector('.hero_preview_box_alt');
    contentBoxElementAlt.style.backgroundImage = previewContent[previewNum].backgroundImage;
}

function prevPage() {
    previewNum = (previewNum === 0) ? previewContent.length - 1 : previewNum - 1;
    showPreview();
}

function nextPage() {
    previewNum = (previewNum === previewContent.length - 1) ? 0 : previewNum + 1;
    showPreview();
}

function toggle(header) {
    const content = header.parentElement;
    content.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", showPreview);