import { DirectionalLight, HemisphereLight } from 'https://cdn.jsdelivr.net/npm/three@0.127.0/build/three.module.js';

function createLights() {
  const ambientLight = new HemisphereLight('white',0x575757,2.5);

  const mainLight = new DirectionalLight('white', 1.5);
  mainLight.position.set(-0.5,-0.5,0);
  // mainLight.castShadow = true;

  const mainLight2 = new DirectionalLight('white', 1.0);
  mainLight2.position.set(1,0.5,0);
  // mainLight2.castShadow = true;

  // //Directional light 1
  // const dirLight = new DirectionalLight( 0xffffff, 4 );
  // dirLight.position.set( - 3, 15, 20 );
  // dirLight.castShadow = true;
  // dirLight.shadow.camera.top = 20;
  // dirLight.shadow.camera.bottom = -20;
  // dirLight.shadow.camera.left = - 20;
  // dirLight.shadow.camera.right = 20;
  // dirLight.shadow.camera.near = 0.1;
  // dirLight.shadow.camera.far = 1000;

  return { ambientLight, mainLight, mainLight2 };
}

export { createLights };
