// Function to toggle visibility of sections
function toggleSection(targetId: string) {
  const sectionContent = document.querySelector(`#${targetId} .content`);
  if (sectionContent) {
    sectionContent.classList.toggle("hidden");
  }
}

// Adding event listeners to all buttons
document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', (event: Event) => {
    const target = (event.currentTarget as HTMLElement).getAttribute('data-target');
    if (target) {
      toggleSection(target);
    }
  });
});
