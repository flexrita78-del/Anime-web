// Select buttons and groups
const buttons = document.querySelectorAll('.letter-buttons button');
const groups = document.querySelectorAll('.index-group');

// Add event listeners to buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const selectedLetter = button.getAttribute('data-letter');

    groups.forEach(group => {
      // Show all if "all" is selected
      if (selectedLetter === 'all' || group.getAttribute('data-letter') === selectedLetter) {
        group.style.display = 'block';
      } else {
        group.style.display = 'none';
      }
    });
  });
});
