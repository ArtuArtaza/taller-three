import {
  AmbientLight,
  BoxGeometry,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Interaction from "./Interaction";
import Loader from "./Loader";
export default class World {
  constructor(canvas) {
    this.canvas = canvas;
    this.scene = new Scene();
    this.renderer = new WebGLRenderer({ canvas: this.canvas });
    this.camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.loader = new Loader();
    this.loader.loadModel(this.scene);
    this.interaction = new Interaction(this.scene, this.camera);
    this.camera.position.z = 5;
    //this.setCube();
    this.setRenderer();
    this.setLights();
    this.setControls();
  }
  setRenderer() {
    this.renderer.setSize(innerWidth, innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }
  setLights() {
    this.AmbientLight = new AmbientLight("white", 1);
    this.scene.add(this.AmbientLight);
  }
  /* setCube() {
    const geometry = new BoxGeometry(3, 3, 3);
    const material = new MeshStandardMaterial({ color: 0x0f0f0f0 });
    this.cube = new Mesh(geometry, material);
    this.scene.add(this.cube);
  }*/
  setControls() {
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.update();
  }
  run() {
    this.interaction.update();
    this.renderer.render(this.scene, this.camera);
  }
}
