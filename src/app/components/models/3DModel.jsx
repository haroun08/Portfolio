"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function FloatingModel(props) {
  const modelRef = useRef(); // Reference for the model
  const { nodes, materials } = useGLTF("/models/geeks-transformed.glb");

  // Floating animation logic
  useFrame((state) => {
    const elapsedTime = state.clock.elapsedTime; // Time since the scene started
    modelRef.current.position.y = -1.5 + Math.sin(elapsedTime) * 0.35; // Oscillate the Y position
  });

  return (
    <group
      {...props}
      ref={modelRef}
      dispose={null}
      position={[0, -1.5, 0]} // Initial position
      scale={[0.008, 0.008, 0.008]} // Uniform scaling
      rotation={[0.25, 0, 0]} // Optional rotation
    >
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.base_1}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_3.geometry}
        material={materials.loo_1}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/geeks-transformed.glb");
