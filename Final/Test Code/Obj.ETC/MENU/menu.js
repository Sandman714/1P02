<script type="application/javascript">
(() => {
        "use strict";

        const getHeight = (element) => element.getBoundingClientRect().height;

        const getPageSets = () => [...document.getElementsByClassName("switch-container")];
        const getPages = (page_set) => [...page_set.getElementsByClassName("selection")];

        const isActive = (page) => page.classList.contains("active");

        function switchPage(click_event) {
            click_event.preventDefault();

            const button = click_event.originalTarget;

            button.target_page_set.forEach((page) => {
                page.classList.remove("active")
            });

            button.target_page.classList.add("active");

            return false;
        }

        function getButton(page, index, pages) {
            const button = document.createElement("a");
            const title = page.title || `Page ${index + 1}`
            const text = document.createTextNode(title);

            button.href = "#";
            button.append(text);
            button.addEventListener("click", switchPage);

            button.target_page = page;
            button.target_page_set = pages;

            page.removeAttribute("title");

            return button;
        }

// this compensates the hight when browser resets instead of hardocding a breakpoint //
        function reflowWrapSet(wrap_set) {
            const heights = [...wrap_set.children].map(getHeight);

            let left = 0;
            let right = heights.reduce((a, b) => a + b);

            for (let split = 1; split < heights.length; split++) {
                let last_right = right;

                left += heights[split - 1];
                right -= heights[split - 1];

                if (left < right) continue;

                if (last_right < left) {
                    left = last_right;
                }

                break;
            }

            left = Math.ceil(left);

            wrap_set.style.maxHeight = `calc(1rem + ${left}px)`;
        }

        function reflowPageSet(page_set, pages, buttons) {
            console.log("resize")

            pages.forEach((page) => {
                // find optimal split for 2 column display
                [...page.getElementsByClassName("wrap")].forEach(reflowWrapSet);
            });

            // force switcher to expand to largest element
            const min_height = Math.max(...pages.map(getHeight)) + getHeight(buttons);

            page_set.style.minHeight = min_height + "px";
        }

        // fire events slower
        function addThrottledEventListener(anchor, type, listener, rate, instant) {
            let timer, cache;

            const deferred = () => {
                if (cache) listener(cache);

                timer = cache = false;
            }

            const initial = (event) => {
                if (timer) {
                    cache = event;
                    return;
                }

                if (instant) listener(event);
                timer = setTimeout(deferred, 1000);
            }
            anchor.addEventListener(type, initial);
        }

        function injectPageSet(page_set) {
            const pages = getPages(page_set);
            // select active page
            const active_page = pages.filter(isActive)[0] ?? pages[0];

            // only show one active page
            pages.forEach((page) => page.classList.remove("active"));
            active_page.classList.add("active");

            // create button container
            const buttons = document.createElement("div");
            buttons.classList.add("buttons");

            // add all buttons
            buttons.append(...pages.map(getButton));

            // and insert button container into page set
            page_set.insertBefore(buttons, page_set.firstChild);

            const reflow = () => reflowPageSet(page_set, pages, buttons);

            reflow();

            addThrottledEventListener(window, "resize", reflow, 1000, true);
        }

        // get all page sets and create selectable menu for each
        function injectPageSets() {
            const selection_sets = getPageSets();

            selection_sets.forEach(injectPageSet);
        }

        window.addEventListener("DOMContentLoaded", injectPageSets);
    })();
</script>
