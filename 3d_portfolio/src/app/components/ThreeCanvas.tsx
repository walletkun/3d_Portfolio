"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

export default function ThreeCanvas() {
  const boxRef = useRef<THREE.Mesh>(null);

  return (
    <Canvas
      camera={{ position: [1, 2, 5], fov: 75 }}
      style={{ height: "100vh", width: "100vw" }}
    >
      {/* Ambient Light */}
      <ambientLight intensity={10} />

      {/* Directional Light */}
      <directionalLight position={[20, 55, 40]} castShadow />

      {/* Box Geometry */}
      <mesh ref={boxRef}>
        <boxGeometry args={[10,4]} />
        <meshStandardMaterial color="red" wireframe={true} />
      </mesh>

      {/* Orbit Controls */}
      <OrbitControls />
    </Canvas>
  );
}
