import { Raycaster, Vector2 } from "three";

export default class Interaction {
  constructor(scene, camera) {
    this.mousePosition = new Vector2();
    this.raycaster = new Raycaster();
    this.scene = scene;
    this.camera = camera;
    window.addEventListener("pointermove", (e) => this.onPointerMove(e));
  }
  onPointerMove(event) {
    this.mousePosition.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mousePosition.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  update() {
    this.raycaster.setFromCamera(this.mousePosition, this.camera);
    const objectsIntersected = this.raycaster.intersectObjects(
      this.scene.children
    );
    console.log(objectsIntersected);
  }
}
