function threeRender (targetDiv, jsonFile) {

//Scene and Camera Setup

    var container = document.getElementById(targetDiv);
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 45, container.offsetWidth / container.offsetHeight, 0.01, 10000 );
            
            
//Renderer
    var renderer = new THREE.WebGLRenderer( { alpha: true, antialias: false} );

    renderer.setClearColor( 0x000000, 0 );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize(container.offsetWidth,container.offsetHeight);
    container.appendChild(renderer.domElement);    

    window.addEventListener('resize', function () {
        var WIDTH = container.offsetWidth,
        HEIGHT = container.offsetHeight;
        renderer.setSize(WIDTH, HEIGHT);
        camera.aspect = WIDTH / HEIGHT;                 camera.updateProjectionMatrix();
    });
            
            
//Geometry + Lighting
            
    var light = new THREE.PointLight(0xffffff);
    light.position.set(-5,0,0);
    scene.add(light);
            
    var light2 = new THREE.PointLight(0xffffff);
    light2.position.set(5,5,0);
    scene.add(light2);
            
    //var light = new THREE.AmbientLight( 0x404040 );
    //scene.add( light );

    camera.position.z = 3;
            
// JSON Loader
            
    var loader = new THREE.JSONLoader();
            
    var jsonMesh = new THREE.Group();
                
    loader.load( jsonFile, function(geometry, materials){
        var material = new THREE.MeshPhongMaterial( materials );
        material.shading = THREE.FlatShading;
        var mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.x += 1.55;
        jsonMesh.add( mesh );
    });
    
//Object Placement, Animation and render function + call,
    
    scene.add (jsonMesh);
    jsonMesh.scale.set (1,1,1);
    jsonMesh.position.set (0,0,0);
    
    function render() {
        var jsonRatio = (container.offsetWidth/container.offsetHeight);
        
        var txt = "";
        txt += "<p>innerWidth: " + window.innerWidth + "</p>";
        txt += "<p>innerHeight: " + window.innerHeight + "</p>";
        txt += "<p>outerWidth: " + window.outerWidth + "</p>";
        txt += "<p>outerHeight: " + window.outerHeight + "</p>";
        txt += "<p>jsonRatio: " + jsonRatio + "</p>";
        txt += "<p>offsetWidth: " + container.offsetWidth + "</p>";
        txt += "<p>offsetHeight: " + container.offsetHeight+ "</p>";
        txt += "<p>pixelRatio: " + window.devicePixelRatio+ "</p>";

        document.getElementById("debug").innerHTML = txt;
        
        requestAnimationFrame( render );
        jsonMesh.rotation.y += 0.002;
        jsonMesh.scale.set (jsonRatio, jsonRatio, jsonRatio);
        renderer.render( scene, camera );
    }
            
    render();
}

threeRender("threeFrame", "hbvlj_sources/buddhaLuxo.json");


