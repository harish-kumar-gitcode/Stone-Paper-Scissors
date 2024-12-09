function openTab(tabName) {

    // Hide all content sections
    const contentSections = document.querySelectorAll('.content');
    contentSections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the clicked tab's corresponding section
    const selectedTab = document.getElementById(tabName);
    selectedTab.style.display = 'block';

    // Get all tabs
    const tabs = document.querySelectorAll('.tab');

    // Remove 'active' class from all tabs
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Add 'active' class to the clicked tab
    const clickedTab = event.target;
    clickedTab.classList.add('active');
};
