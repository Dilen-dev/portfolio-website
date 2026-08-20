import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function ThreeScene() {
    const containerRef = useRef(null);
    useEffect(() => {
        if (!containerRef.current) return;
        const container = containerRef.current;

        const scene = new THREE.Scene();
        //scene.background = new THREE.Color(0xcccccc); 

            
        const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.01, 10000);
        camera.position.set(0, 5, 10); 


        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);


        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor =  0.05

        controls.enablePan = false;
        controls.minPolarAngle = Math.PI / 16;
        controls.maxPolarAngle = Math.PI / 2;
        controls.minAzimuthAngle = -Math.PI / 4;
        controls.maxAzimuthAngle = Math.PI / 2;
        controls.minDistance = 2;
        controls.maxDistance = 20; 


        const ambientLight = new THREE.AmbientLight(0xffffff, 2.0);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 3.0);
        directionalLight.position.set(5, 10, 7);
        scene.add(directionalLight);


        const loader = new GLTFLoader();
                
            
        loader.load('/3D image.glb', function (gltf) {
            console.log("Success! Model loaded.");
            const model = gltf.scene;
            scene.add(model);

                
            const box = new THREE.Box3().setFromObject(model);
            const size = box.getSize(new THREE.Vector3());
            const center = box.getCenter(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);

            controls.target.copy(center);
            camera.position.set(center.x + maxDim * 1.5, center.y + maxDim * 1.5, center.z + maxDim * 1.5);
            camera.lookAt(center);
            controls.update();

            }, undefined, function (error) {
                console.error('Error loading model file:', error);
            });

        let animationFrameId;
        function animate() {
            animationFrameId = requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        }
        animate();


        const resizeObserver = new ResizeObserver(() => {
            camera.aspect = containner.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        });
        resizeObserver.observe(container);

        return () => {
            cancelAnimationFrame(animationFrameId);
            resizeObserver.disconnect();
            renderer.dispose();
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
        };
    }, []);
    return (
        <div
            ref={containerRef}
            style={{ width: '100%', height: '100%', overflow: 'hidden' }}
        />
    );
}
