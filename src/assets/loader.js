import paths from './paths';

export function loadGLTF(path, loader, onProgress) {
  return new Promise((resolve, reject) => {
    loader.load(
      path,
      (gltf) => resolve(gltf),
      onProgress,
      (error) => reject(error)
    );
  });
}

export function loadSushiGLTF(gltfLoader, onProgress) {
  return loadGLTF(paths.SUSHI_GLB, gltfLoader, onProgress);
}
