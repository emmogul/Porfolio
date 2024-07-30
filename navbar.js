let sidebarVisible = false;

function toggleSidebar() {
    sidebarVisible = !sidebarVisible;
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = sidebarVisible ? 'flex' : 'none';
}

function hideSidebar() {
    sidebarVisible = false;
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}