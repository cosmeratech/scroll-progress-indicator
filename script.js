const progressBar = document.getElementById("progress-bar");
const content = document.getElementById("content");

function generateContent() {
    let text = "";

    for (let i=1; i<=20; i++) {
        text += `<p>
        Paragraph $ {i}: JavaScript can interact with HTML paragraphs (<p> tags) in several ways, such as creating new paragraphs, modifying their content, or changing their style using the Document Object Model (DOM). 
        </p>`;
    }

    content.innerHTML = text;
}

generateContent();

// 2. Calculate scroll progress
function updateScrollProgress() { 
    const scrollTop = window.scrollY; // to detect how much user has scrolled, we use window.scrollY as it gives the number of pixels scrolled from the top, it also updates live as the user scrolls, it is the base value for progress calculation.
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Total scrollable height
    const scrollableHeight = documentHeight - windowHeight;

    // Calculate scroll percentage
    const scrollPercent = (scrollTop / scrollableHeight) * 100;

    progressBar.style.width = `${scrollPercent}%`;
}

window.addEventListener("scroll", updateScrollProgress);

updateScrollProgress();