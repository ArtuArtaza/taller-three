import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
export default class Loader {
  constructor() {
    this.loader = new GLTFLoader();
    this.path = "models/pokedex/";
    this.model = null;
  }
  loadModel(scene) {
    this.loader.setPath(this.path);
    this.loader.load("scene.gltf", (model) => {
      this.model = model.scene;
      this.model.scale.set(10, 10, 10);
      scene.add(this.model);
    });
  }
}
