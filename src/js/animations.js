import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from 'typed.js';
import * as THREE from 'three';

export function initializeAnimations() {
  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });

  // Initialize Typed.js
  new Typed('#typed-text', {
    strings: [
      'AI-Powered Solutions',
      'Custom Chatbots',
      'Image Generation',
      'Business Intelligence'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });

  // Initialize 3D Background
  initBackground();
}

function initBackground() {
  const container = document.getElementById('hero-background');
  if (!container) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });

  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  // Create particles
  const geometry = new THREE.BufferGeometry();
  const vertices = [];

  for (let i = 0; i < 5000; i++) {
    vertices.push(
      Math.random() * 2000 - 1000,
      Math.random() * 2000 - 1000,
      Math.random() * 2000 - 1000
    );
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

  const material = new THREE.PointsMaterial({
    color: 0x0080ff,
    size: 2,
    transparent: true,
    opacity: 0.8
  });

  const particles = new THREE.Points(geometry, material);
  scene.add(particles);

  camera.position.z = 1000;

  function animate() {
    requestAnimationFrame(animate);
    particles.rotation.x += 0.0005;
    particles.rotation.y += 0.0005;
    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}