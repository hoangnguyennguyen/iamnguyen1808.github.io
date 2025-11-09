document.addEventListener('DOMContentLoaded', () => {
    // Lucide Icons replacement
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    } else {
        console.error('Lucide icons script not loaded correctly.');
    }

    // Mobile Sidebar Toggle
    const sidebarToggleButton = document.getElementById('sidebar-toggle-button');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const iconOpen = document.getElementById('menu-icon-open');
    const iconClose = document.getElementById('menu-icon-close');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    const toggleSidebar = () => {
        sidebar.classList.toggle('-translate-x-full');
        sidebar.classList.toggle('translate-x-0');
        sidebarOverlay.classList.toggle('hidden');
        iconOpen.classList.toggle('hidden');
        iconClose.classList.toggle('hidden');
    };

    if (sidebarToggleButton && sidebar && sidebarOverlay && iconOpen && iconClose) {
        sidebarToggleButton.addEventListener('click', toggleSidebar);
        sidebarOverlay.addEventListener('click', toggleSidebar);
        // Close sidebar when a link is clicked (on mobile)
        sidebarLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 768) { // md breakpoint
                    toggleSidebar();
                }
            });
        });
    }

    // Set current year in footer
    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }
});
