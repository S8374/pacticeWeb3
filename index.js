document.addEventListener('DOMContentLoaded', function() {
    var scrollContainer = document.querySelector('.scroll-container');
    var scrollInterval;

    function startScrolling() {
        scrollInterval = setInterval(function() {
            scrollContainer.scrollLeft += 1;
            if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
                scrollContainer.scrollLeft = 0;
            }
        }, 20);
    }

    function stopScrolling() {
        clearInterval(scrollInterval);
    }

    if (scrollContainer) {
        scrollContainer.addEventListener('mouseover', stopScrolling);
        scrollContainer.addEventListener('mouseout', startScrolling);
        startScrolling();
    }

    const menuMainContainer = document.querySelector('.menu-main-container');
    const originalContent = menuMainContainer.innerHTML;

    function addMenuEventListeners() {
        const menuItems = document.querySelectorAll('.menu-item');
        const sections = document.querySelectorAll('.content-section');

        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                // Remove active class from all sections
                sections.forEach(section => {
                    section.classList.remove('active');
                });

                // Remove selected class from all menu items
                menuItems.forEach(menu => {
                    menu.classList.remove('selected');
                });

                // Add active class to the clicked item's target section
                const target = item.getAttribute('data-target');
                document.getElementById(target).classList.add('active');

                // Add selected class to the clicked menu item
                item.classList.add('selected');
            });
        });

        document.querySelector('.close-menu').addEventListener('click', function() {
            menuMainContainer.innerHTML = originalContent;
            menuMainContainer.classList.remove('newId');
            addInputSectionEventListener(); // Re-attach event listener for input section
            attachLoginEventListener(); // Re-attach event listener for login
            attachSignUpEventListener(); // Re-attach event listener for sign up
        });
    }

    function addInputSectionEventListener() {
        const inputSection = document.querySelector('.input-section');
        inputSection.addEventListener('click', function() {
            if (!menuMainContainer.classList.contains('newId')) {
                menuMainContainer.classList.add('newId');
                menuMainContainer.innerHTML = `
                    <div class="show-new">
                        <div class="another">
                            <h1>W1.</h1>
                            <div class="input2">
                                <input type="text">
                            </div>
                            <div class="log-sign">
                                <a class="log" href="#">Log in</a>
                                <a class="sign-up" href="#">Sign Up</a>
                            </div>
                            <div class="button-section2">
                                <button>Submit</button>
                                <button>Submit Product</button>
                            </div>
                            <i class="fa-sharp fa-solid close-menu fa-x fa-lg" style="cursor: pointer;"></i>
                        </div>
                        <div class="n">
                            <div class="lister">
                                <p class="menu-item" data-target="trending"><i class="fa-sharp fa-solid fa-fire"></i>Trending</p>
                                <p class="menu-item" data-target="category"><i class="fa-sharp fa-solid fa-fire"></i><a href="#">Category</a></p>
                                <p class="menu-item" data-target="technology"><i class="fa-sharp fa-solid fa-fire"></i>Technology</p>
                            </div>
                            <div class="alls">
                                <div class="content-section" id="trending">
                                    <p>trending</p>
                                    <p>trending</p>
                                    <p>trending</p>
                                    <p>trending</p>
                                    <p>trending</p>
                                    <p>trending</p>
                                </div>
                                <div class="content-section" id="category">
                                    <p>category</p>
                                    <p>category</p>
                                    <p>category</p>
                                    <p>category</p>
                                    <p>category</p>
                                    <p>category</p>
                                </div>
                                <div class="content-section" id="technology">
                                    <p>Technology</p>
                                    <p>Technology</p>
                                    <p>Technology</p>
                                    <p>Technology</p>
                                    <p>Technology</p>
                                    <p>Technology</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                // Add event listeners to the dynamically added menu items
                addMenuEventListeners();
                attachLoginEventListener(); // Attach event listener for login button
                attachSignUpEventListener(); // Attach event listener for sign up button
            }
        });
    }

    function attachLoginEventListener() {
        const logSign = document.querySelector('.log');
        logSign.addEventListener('click', function(event) {
            event.preventDefault();
            const loginElement = document.querySelector('.login');
            const signUpElement = document.querySelector('.login2');
            signUpElement.style.display = 'none'; // Hide sign up section if open
            if (loginElement.style.display === 'block') {
                loginElement.style.display = 'none';
            } else {
                loginElement.style.display = 'block';
            }
        });
    }

    function attachSignUpEventListener() {
        const signUp = document.querySelector('.sig');
        signUp.addEventListener('click', function(event) {
            event.preventDefault();
            const signUpElement = document.querySelector('.login2');
            const loginElement = document.querySelector('.login');
            loginElement.style.display = 'none'; // Hide login section if open
            if (signUpElement.style.display === 'block') {
                signUpElement.style.display = 'none';
            } else {
                signUpElement.style.display = 'block';
            }
        });
    }

    addInputSectionEventListener(); // Initial attachment of event listener
    attachLoginEventListener(); // Initial attachment of login event listener
    attachSignUpEventListener(); // Initial attachment of sign up event listener
});




document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.fa-bars');
    const menuList = document.querySelector('.menu-list');
    const closeIcon = document.querySelector('.fa-xl');

    // Toggle menu list visibility when clicking on .fa-bars
    menuToggle.addEventListener('click', function(event) {
        event.stopPropagation(); // Stop propagation to prevent immediate document click
        menuList.classList.toggle('active');
    });

    // Close menu list when clicking on .fa-xl
    closeIcon.addEventListener('click', function(event) {
        event.stopPropagation(); // Stop propagation to prevent immediate document click
        menuList.classList.remove('active');
    });

    // Close menu list if clicking outside of .menu-main-container or .menu-list
    document.addEventListener('click', function(event) {
        const targetElement = event.target;
        if (!menuToggle.contains(targetElement) && !menuList.contains(targetElement)) {
            menuList.classList.remove('active');
        }
    });
});