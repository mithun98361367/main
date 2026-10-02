(function () {



    const headerHTML = `

        <header class="header">

            <div class="header-inner">

                <!-- LOGO -->
                <a href="index.html" class="logo">

                    <span class="logo-icon">🌍</span>

                    <span class="logo-text">
                        MSS <strong>WEB SOLUTIONS</strong>
                    </span>

                </a>


                <!-- DESKTOP NAVIGATION -->

                <nav class="desktop-nav">

                    <a href="index.html"
                       data-page="index.html">
                        <span>🏠</span>
                        Home
                    </a>


                    <a href="services.html"
                       data-page="services.html">
                        <span>👨‍🔧</span>
                        Services
                    </a>


                    <a href="about-us.html"
                       data-page="about-us.html">
                        <span>🏢</span>
                        About-us
                    </a>


                    <a href="contact.html"
                       data-page="contact.html">
                        <span>🤝</span>
                        Contact Us
                    </a>


                    <a href="demo.html"
                       data-page="demo.html">
                        <span>👀</span>
                        Demo
                    </a>

                </nav>


                <!-- MOBILE MENU BUTTON -->

                <button
                    class="mobile-menu-btn"
                    id="mobileMenuButton"
                    aria-label="Open navigation menu"
                    aria-expanded="false"
                    type="button">

                    <span></span>
                    <span></span>
                    <span></span>

                </button>

            </div>

        </header>



        <!-- MOBILE NAVIGATION -->

        <nav
            id="mobileNav"
            class="mobile-nav">

            <div class="mobile-nav-inner">


                <a href="index.html"
                   data-page="index.html">

                    <span class="mobile-icon">🏠</span>

                    <span>Home</span>

                </a>


                <a href="services.html"
                   data-page="services.html">

                    <span class="mobile-icon">👨‍🔧</span>

                    <span>Services</span>

                </a>


                <a href="about-us.html"
                   data-page="about-us.html">

                    <span class="mobile-icon">🏢</span>

                    <span>About-us </span>

                </a>


                <a href="contact.html"
                   data-page="contact.html">

                    <span class="mobile-icon">🤝</span>

                    <span>Contact Us</span>

                </a>


                <a href="demo.html"
                   data-page="demo.html">

                    <span class="mobile-icon">👀</span>

                    <span>demo</span>

                </a>


            </div>

        </nav>

    `;


    /* =====================================================
       LOAD HEADER
    ===================================================== */

    function loadHeader() {

        const container =
            document.getElementById("header");

        if (!container) return;

        container.innerHTML = headerHTML;

        setActiveMenu();

        setupMobileMenu();

    }


    /* =====================================================
       ACTIVE MENU
    ===================================================== */

    function setActiveMenu() {

        let currentPage =
            window.location.pathname
                .split("/")
                .pop();

        if (!currentPage) {

            currentPage = "index.html";

        }


        /*
         * GitHub Pages / root handling
         */

        if (
            currentPage === "" ||
            currentPage === "main"
        ) {

            currentPage = "index.html";

        }


        document
            .querySelectorAll("[data-page]")
            .forEach(function (link) {

                const page =
                    link.getAttribute("data-page");

                if (page === currentPage) {

                    link.classList.add("active");

                }

            });

    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    function setupMobileMenu() {

        const button =
            document.getElementById(
                "mobileMenuButton"
            );

        const menu =
            document.getElementById(
                "mobileNav"
            );


        if (!button || !menu) return;


        button.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                const opened =
                    menu.classList.toggle("show");


                button.classList.toggle(
                    "open",
                    opened
                );


                button.setAttribute(
                    "aria-expanded",
                    opened
                );

            }
        );


        /*
         * Close menu after clicking link
         */

        menu.querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        closeMobileMenu();

                    }
                );

            });


        /*
         * Close when clicking outside
         */

        document.addEventListener(
            "click",
            function (event) {

                if (
                    menu.classList.contains("show") &&
                    !menu.contains(event.target) &&
                    !button.contains(event.target)
                ) {

                    closeMobileMenu();

                }

            }
        );


        /*
         * Close with ESC
         */

        document.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Escape") {

                    closeMobileMenu();

                }

            }
        );


        /*
         * Close menu when changing
         * from mobile to desktop
         */

        window.addEventListener(
            "resize",
            function () {

                if (window.innerWidth > 850) {

                    closeMobileMenu();

                }

            }
        );

    }


    /* =====================================================
       CLOSE MOBILE MENU
    ===================================================== */

    function closeMobileMenu() {

        const menu =
            document.getElementById(
                "mobileNav"
            );

        const button =
            document.getElementById(
                "mobileMenuButton"
            );


        if (menu) {

            menu.classList.remove("show");

        }


        if (button) {

            button.classList.remove("open");

            button.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }


    /*
     * Keep these functions globally available
     * in case another page calls them.
     */

    window.toggleMobileMenu =
        function () {

            const button =
                document.getElementById(
                    "mobileMenuButton"
                );

            if (button) {

                button.click();

            }

        };


    window.closeMobileMenu =
        closeMobileMenu;


    /* =====================================================
       START
    ===================================================== */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            loadHeader
        );

    } else {

        loadHeader();

    }

})();