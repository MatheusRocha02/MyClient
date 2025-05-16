// funcionalidade do menu

export const initMobileMenu = () => {
    const menuToggle = document.querySelector('#menu-toggle');
    const mobileMenu = document.querySelector('#mobile-menu');
    const menuClose = document.querySelector('#menu-close');
    const menuOverlay = document.querySelector('#menu-overlay');

    if (!menuToggle || !mobileMenu || !menuClose || !menuOverlay) return;

    const openMenu = () => {
        mobileMenu.classList.add('open');
        menuOverlay.classList.remove('d-none');
    };

    const closeMenu = () => {
        mobileMenu.classList.remove('open');
        menuOverlay.classList.add('d-none');
    };

    menuToggle.addEventListener('click', openMenu);
    menuClose.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', closeMenu);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });
};
