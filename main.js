import World from "./components/World";
import "./style.css";

const canvas = document.getElementById("canvas");

const world = new World(canvas);

const animate = () => {
  world.run();
  requestAnimationFrame(animate);
};

animate();
