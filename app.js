// Function to toggle visibility of sections
function toggleSection(targetId) {
    var sectionContent = document.querySelector("#".concat(targetId, " .content"));
    if (sectionContent) {
        sectionContent.classList.toggle("hidden");
    }
}
// Adding event listeners to all buttons
document.querySelectorAll('.toggle-btn').forEach(function (button) {
    button.addEventListener('click', function (event) {
        var target = event.currentTarget.getAttribute('data-target');
        if (target) {
            toggleSection(target);
        }
    });
});
