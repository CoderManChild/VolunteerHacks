document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    // Function to add 'visible' class with a delay for a smooth effect
    function addVisibleClass() {
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.classList.add("visible");
            }, index * 100); // Delay each section slightly for staggered effect
        });
    }

    addVisibleClass();
});
