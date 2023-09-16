import * as THREE from 'three';
import {
  setupComponents,
  setupCameras,
  setupAxes,
  setupControls,
  setupGrids,
  setupLights,
} from './setup';

async function run() {
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  const renderTarget = document.querySelector('#target');
  renderTarget.appendChild(renderer.domElement);

  const scene = new THREE.Scene();

  const components = await setupComponents();
  scene.add(components.sushi.scene);

  const grids = setupGrids();
  scene.add(grids.gridHelper);

  const lights = setupLights();
  scene.add(lights.ambientLight);
  scene.add(lights.dirLight);
  scene.add(lights.dirLightHelper);
  scene.add(lights.pointLight);
  scene.add(lights.pointLightHelper);

  const axes = setupAxes();
  scene.add(axes);

  const { camera } = setupCameras();
  scene.add(camera);

  const controls = setupControls(camera, renderTarget);

  function animate() {
    requestAnimationFrame(animate);
    controls.orbitControls.update();
    renderer.render(scene, camera);
  }
  animate(scene);
}

run();
