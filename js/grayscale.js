/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(".navbar-collapse").collapse('hide');
});

// Google Maps Scripts
var map = null;
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init360Banner);
//google.maps.event.addDomListener(window, 'resize', function() {
    // map.setCenter(new google.maps.LatLng(40.6700, -73.9400));
//});


//Three.js 360 video banner setup

//Globals
var camera, scene, renderer;
var video, texture;
var moveX, moveY;

function init360Banner(){
    var container = document.getElementById( 'banner360' );

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 2000 );
    scene.add(camera);

    var geometry = new THREE.SphereGeometry( 500, 60, 40 );
    geometry.scale( - 1, 1, 1 );
    
 //    video = document.createElement( 'video' );
 //    video.src = 'assets/prototype.mp4';
 //    video.type = "video/mp4";
	// video.loop = true;
	// video.muted = true;
 //    // video.autoplay = true;
 //    video.load();
 //    video.addEventListener('loadeddata', function() {
 //        // Hide the loader div that covers everything!

 //        // video.play();
 //    }, false);


 //    texture = new THREE.VideoTexture( video );
    texture = THREE.ImageUtils.loadTexture('assets/prototype.png');
    texture.minFilter = THREE.NearestFilter;
	texture.maxFilter = THREE.NearestFilter;
	texture.format = THREE.RGBFormat;
	texture.generateMipmaps = false;
    
    var material = new THREE.MeshBasicMaterial( { map: texture } );

    var mesh = new THREE.Mesh( geometry, material );

    scene.add( mesh );

	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor( 0x101010 );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, 740 );
	container.appendChild( renderer.domElement );

    window.addEventListener( 'resize', onWindowResize, false );
    window.addEventListener( 'mousemove', onMouseMove, false);

    update();
}

function onMouseMove(e){
    e.preventDefault();
    var widthHalf = (window.innerWidth/2);
    var heightHalf = (window.innerHeight/2);
    moveX += e.clientX - widthHalf;
    moveY += e.clientY - heightHalf;
    // console.log(e);

}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}

function update(){
    requestAnimationFrame( update );
    render();
}

function render(){
    camera.rotation.y += 0.001;
    renderer.render(scene, camera);
}
