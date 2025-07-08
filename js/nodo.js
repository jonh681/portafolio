const canvas = document.getElementById("nodos-canvas");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

// Crear puntos
const geometry = new THREE.BufferGeometry();
const numPoints = 100;
const positions = new Float32Array(numPoints * 3);
for (let i = 0; i < numPoints * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 10;
}
geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const material = new THREE.PointsMaterial({ color: 0x00ffff, size: 0.05 });
const points = new THREE.Points(geometry, material);
scene.add(points);

// Conexiones entre puntos (líneas)
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.10 });
const lines = new THREE.LineSegments(geometry, lineMaterial);
scene.add(lines);

function animate() {
  requestAnimationFrame(animate);
  points.rotation.y += 0.001;
  points.rotation.x += 0.0005;
  lines.rotation.y += 0.001;
  lines.rotation.x += 0.0005;
  renderer.render(scene, camera);
}
animate();

// Adaptar a pantalla
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
