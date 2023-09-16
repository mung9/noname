import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { loadSushiGLTF } from './assets/loader';

export function setupCameras() {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.x = 20;
  camera.position.y = -2;
  camera.position.z = 30;
  return { camera };
}

export function setupControls(camera, domElement) {
  const orbitControls = new OrbitControls(camera, domElement);
  orbitControls.enableDamping = true;
  orbitControls.dampingFactor = 0.05;
  return { orbitControls };
}

export function setupGrids() {
  const gridHelper = new THREE.GridHelper(30, 30);
  return { gridHelper };
}

export function setupAxes() {
  return new THREE.AxesHelper(30, 30);
}

// lights
export function setupLights() {
  const dirLight = new THREE.DirectionalLight(0xffffff, 1);
  dirLight.position.set(2, 2, 2);

  const dirLightHelper = new THREE.DirectionalLightHelper(dirLight, 1);

  const pointLight = new THREE.PointLight(0xffffff, 1, 10);
  pointLight.position.set(2, 2, 2);

  const pointLightHelper = new THREE.PointLightHelper(pointLight, 1);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
  ambientLight.position.set(0, 0, 0);

  return {
    dirLight,
    dirLightHelper,
    pointLight,
    pointLightHelper,
    ambientLight,
  };
}

export async function setupComponents() {
  const glTFLoader = new GLTFLoader();
  const sushi = await loadSushiGLTF(glTFLoader);
  return { sushi };
}
