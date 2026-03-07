function toggleSection(element) {
    const body = element.nextElementSibling;
    const icon = element.querySelector('.arrow-icon');
    
    if (body.style.display === "block") {
        body.style.display = "none";
        icon.style.transform = "rotate(0deg)";
    } else {
        body.style.display = "block";
        icon.style.transform = "rotate(180deg)";
    }
}
