//particles
(function($){
var SEPARATION = 100,
		AMOUNTX = 100,
		AMOUNTY = 70;
 
    var container;
    var camera, scene, renderer;
 
    var particles, particle, count = 0;
 
    var mouseX = 85,
        mouseY = -342;
 
    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;
 
    //init();
    //animate();
 
    function init() {
 
        container = document.createElement('div');
				var welcome1 = document.getElementById('welcome-1');
				welcome1.appendChild(container);
 
        camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.z = 1000;
 
        scene = new THREE.Scene();
 
        particles = new Array();
 
        var PI2 = Math.PI * 2;
        var material = new THREE.ParticleCanvasMaterial({
 
            color: 0xe1e1e1,
            program: function(context) {
 
                context.beginPath();
                context.arc(0, 0, .6, 0, PI2, true);
                context.fill();
 
            }
 
        });
 
        var i = 0;
 
        for (var ix = 0; ix < AMOUNTX; ix++) {
 
            for (var iy = 0; iy < AMOUNTY; iy++) {
 
                particle = particles[i++] = new THREE.Particle(material);
                particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
                particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
                scene.add(particle);
 
            }
 
        }
 
        renderer = new THREE.CanvasRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);
 
        document.addEventListener('mousemove', onDocumentMouseMove, false);
        document.addEventListener('touchstart', onDocumentTouchStart, false);
        document.addEventListener('touchmove', onDocumentTouchMove, false);
 
        //
 
        window.addEventListener('resize', onWindowResize, false);
 
    }
 
    function onWindowResize() {
 
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
 
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
 
        renderer.setSize(window.innerWidth, window.innerHeight);
 
    }
 
    // 
    function onDocumentMouseMove(event) {
 
        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;
 
    }
 
    function onDocumentTouchStart(event) {
 
        if (event.touches.length === 1) {
 
            event.preventDefault();
 
            mouseX = event.touches[0].pageX - windowHalfX;
            mouseY = event.touches[0].pageY - windowHalfY;
 
        }
 
    }
 
    function onDocumentTouchMove(event) {
 
        if (event.touches.length === 1) {
 
            event.preventDefault();
 
            mouseX = event.touches[0].pageX - windowHalfX;
            mouseY = event.touches[0].pageY - windowHalfY;
 
        }
 
    }
 
    // 
    function animate() {
 
        requestAnimationFrame(animate);
 
        render();
 
 
    }
 
    function render() {
 
        camera.position.x += (mouseX - camera.position.x) * .05;
        camera.position.y += (-mouseY - camera.position.y) * .05;
        camera.lookAt(scene.position);
 
        var i = 0;
 
        for (var ix = 0; ix < AMOUNTX; ix++) {
 
            for (var iy = 0; iy < AMOUNTY; iy++) {
 
                particle = particles[i++];
                particle.position.y = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
                particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 2 + (Math.sin((iy + count) * 0.5) + 1) * 2;
 
            }
 
        }
 
        renderer.render(scene, camera);
 
        count += 0.1;
 
    }
})(jQuery);

//menu 
(function($){
	$('button.hamburger').click(function(){
		$(this).toggleClass("is-active");
		$('.nav-menu-wrapper').slideToggle();
	});
})(jQuery);

//faq accordeon
(function($){
	$('.accordeon_content').hide();
  $('.accordeon_title').click( function(){
		$(this).parent().toggleClass('active');
		$('.single-faq.single_acc').not($(this).parent()).removeClass('active');
		$('.accordeon_content').slideUp();
    if(!$(this).next().is(":visible")) {
      $(this).next().slideDown();
		}
	});
	$(document).ready(function(){
		$('.accordeon_title').first().click();
	});
})(jQuery);


//owl
(function ($) {

	const customBtns = ['<svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM27 7L1 7V9L27 9V7Z" fill="white"/></svg>','<svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM0 9L26 9V7L0 7L0 9Z" fill="white"/></svg>'];

	$('#speacers-slider').owlCarousel({
		nav: true,
		navText: customBtns,
		items: 1,
	});
	
})(jQuery);