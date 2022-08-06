import { Clock } from "three";
import World from "./components/World";
import "./style.css";

const canvas = document.getElementById("canvas");

const world = new World(canvas);
const clock = new Clock();

const animate = () => {
  world.run();
  //world.cube.rotation.y += clock.getDelta() * 5;
  requestAnimationFrame(animate);
};

animate();
