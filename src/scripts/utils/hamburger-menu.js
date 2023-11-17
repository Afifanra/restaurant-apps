const HamburgerMenu = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav_list');
    const navAnchors = document.querySelectorAll('.nav_list a');

    const initialTabIndices = [];
    navAnchors.forEach((link) => {
        initialTabIndices.push(link.tabIndex);
    });

    function setTabIndexToMinusOne() {
        navAnchors.forEach((link) => {
            link.tabIndex = -1;
        });
    }

    function restoreInitialTabIndices() {
        navAnchors.forEach((link, index) => {
            link.tabIndex = initialTabIndices[index];
        });
    }

    setTabIndexToMinusOne();

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle');

        if (nav.classList.contains('nav-active')) {
            restoreInitialTabIndices();
        } else {
            setTabIndexToMinusOne();
        }
    });
};

export default HamburgerMenu;
