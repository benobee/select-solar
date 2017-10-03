import $ from "jquery";
import 'owl.carousel';
import Scrollmap from "scrollmap";

const module = {
        init() {
            this.animate();
            this.carousel();
        },
        animate() {
            const svg = document.querySelector("#solar-info-graphic");

            if (svg) {
                if (Modernizr.customTest.smil) {
                    svg.classList.add("smil");
                } else {
                    svg.classList.add("no-smil");
                }
            };

            Scrollmap.trigger({
                    target: "#solar-info-graphic",
                    surfaceVisible: 0.3
                })
                .trigger({
                    target: ".design-layout-card"
                })
                .trigger({
                    target: "#locations"
                }, (element) => {
                    const array = element.querySelectorAll(".summary-item");

                    Scrollmap.sequence(array, {
                        interval: 400,
                    }, (item) => {
                        //add any code to be triggered when
                        //the element is in the viewport
                        item.classList.add("show");
                    });
                })
                .trigger({
                    target: "#grid-types-gallery",
                });
        },
        carousel() {
            $(".owl-carousel").owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                stagePadding: 0,
                autoplayTimeout: 7000,
                autoplayHoverPause: false,
                autoplaySpeed: 1500,
                nav: false,
                navText: false
            });
        }
};

export default module;