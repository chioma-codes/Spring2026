import './style.css'
import * as THREE from 'three' 
import {addDefaultMeshes, addStandardMeshes } from './addDefaultMeshes.js'
import { addLight } from '../addLight.js';
import Model from './model.js'

const scene = new THREE.Scene();
// (FOV, ASPECT, RATIO, NEAR, FAR)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1,100)
const renderer = new THREE.WebGLRenderer({antialias: true});

const meshes = {}
const lights = {}


init()
function init() {
  // this is where all set up stuff happens 
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
camera.position.z= 5

lights.default = addLight()
scene.add(lights.default)

//where we populate mesh container "filling cabnet of objects"
meshes.default = addDefaultMeshes();
meshes.default.position.x = 2

meshes.standard = addStandardMeshes()
meshes.standard.position.x = -2

//adds meshes to our scene
scene.add(meshes.default);
scene.add(meshes.standard);




//  console.log(meshes)
// console.log(meshes.test)
instances()
resize()
  animate()
}
function resize (){

}

function instances(){
  const flower = new Model({
    url: './bouquet.glb',
    scene: scene,
    meshes: meshes,
    scale: new THREE.Vector3(2,2,2),
    position: new THREE.Vector3(0,-0.8,3),
    replace: true 

  })
  flower.init()

}


//ROOOOOTATIONS
function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene, camera)
  meshes.default.rotation.x +=0.01
  meshes.standard.rotation.y +=0.01
}