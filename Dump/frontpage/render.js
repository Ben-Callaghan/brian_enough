

function threeRender (targetDiv, jsonFile) {

//Scene and Camera Setup

    var container = document.getElementById(targetDiv);
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, container.offsetWidth / container.offsetHeight, 0.1, 1000 );
            
            
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
            
    var light = new THREE.AmbientLight( 0x404040 );
    scene.add( light );

    camera.position.z = 3;
            
// JSON Loader
            
    var loader = new THREE.JSONLoader();
            
    var jsonMesh = new THREE.Group();
                
    loader.load( jsonFile, function(geometry, materials){
        var material = new THREE.MeshPhongMaterial( materials );
        material.shading = THREE.FlatShading;
        var mesh = new THREE.Mesh(geometry, material);
        jsonMesh.add( mesh );
    });
    
//Object Placement, Animation and render function + call,   
 
    var randRotationX = (Math.random()*0.05);
    var randRotationY = (Math.random()*0.05);
    
    function randPlusMinus (x, y) {
        var plusMinus = ((Math.random()*x)-y);
        return plusMinus;
    }
    
    scene.add (jsonMesh);
    jsonMesh.scale.set (0.3,0.3,0.3);
    jsonMesh.position.set ( 
        randPlusMinus(4,2), 
        randPlusMinus(3,1.5), 
        randPlusMinus(3,1.5)
    );
    
    function render() {
        requestAnimationFrame( render );
        jsonMesh.rotation.x += randRotationX;
        jsonMesh.rotation.z += randRotationY;
        renderer.render( scene, camera );
    }
            
    render();
}

function randName () {
    var vaseName = "vase"+(Math.floor((Math.random() * 5) + 1))+".json";
    return vaseName;
}

threeRender("renderFront", randName());
threeRender("renderBack", randName());



