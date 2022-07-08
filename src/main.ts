import Car from './car';
import './style.css';

const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
canvas.width = 200;

const ctx = canvas.getContext('2d');
const car = new Car(100, 100, 30, 50);

function animate() {
	canvas.height = window.innerHeight;
	car.update();
	car.draw(ctx);
	requestAnimationFrame(animate);
}

animate();
