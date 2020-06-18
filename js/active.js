$(document).ready(function(){
    
    // team-slider
    $('.team-slider-active').owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:1000,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            550:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });
    
    // brand-slider
    $('.brand-slider-active').owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:1000,
        margin:20,
        nav:false,
        responsive:{
            0:{
                items:2
            },
            480:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            }
        }
    });
    // mixitup
    var containerEl = document.querySelector('.gallery-body');
    var mixer = mixitup(containerEl, {
        selectors: {
            control: '[our-mixitup-control]'
        }
    });
    
    // Navbar-nav-active
    $('.navbar-nav li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    //click-logo-top
    $('.navbar-brand').click(function(){
        $("html,body").animate({
            scrollTop:0
        },1500);
    });

    // scroll-top-btn
    $('.scroll-top-btn').click(function(){
        $("html,body").animate({
            scrollTop:0
        },1500);
    });
    
    $('.scroll-top-btn').hide();

    $(window).scroll(function(){
        var ourwindow = $(this).scrollTop();
        if(ourwindow<500){
            $('.scroll-top-btn').fadeOut();
        } else{
            $('.scroll-top-btn').fadeIn();
        }
    });

    //our-fixed-menu-top
    
    $(window).scroll(function(){
        var ourwindow = $(this).scrollTop();

        if(ourwindow>500){
            $('body').addClass('our-fixed-menu-top');
        } else{
            $('body').removeClass('our-fixed-menu-top');
        }
    })
    
    // our-menu-target
    $('.navbar-nav a[href^="#"]').click(function(){
        var target = this.hash;
        $('html,body').animate({
            scrollTop:$(target).offset().top-114
        },1500)
    })

    // wow 
    new WOW().init();

    // google map
    function basicmap() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,
            scrollwheel: false,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(23.1675473, 90.2049733), // New York
            // This is where you would paste any style found on Snazzy Maps.
            styles: [
                {
                    "featureType": "all",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#202c3e"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "gamma": 0.01
                        },
                        {
                            "lightness": 20
                        },
                        {
                            "weight": "1.39"
                        },
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "weight": "0.96"
                        },
                        {
                            "saturation": "9"
                        },
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "lightness": 30
                        },
                        {
                            "saturation": "9"
                        },
                        {
                            "color": "#29446b"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "saturation": 20
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "lightness": 20
                        },
                        {
                            "saturation": -20
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "lightness": 10
                        },
                        {
                            "saturation": -30
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#193a55"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "saturation": 25
                        },
                        {
                            "lightness": 25
                        },
                        {
                            "weight": "0.01"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "lightness": -20
                        }
                    ]
                }
            ]
        };
        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('contact-map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(23.1675473, 90.2049733),
            map: map,
            title: 'Cryptox'
        });
    }
    if ($('#contact-map').length != 0) {
        google.maps.event.addDomListener(window, 'load', basicmap);
    }





});












