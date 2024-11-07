"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";

export default function DipModel(props) {
  const { nodes, materials } = useGLTF('/models/Diploma.glb');  // Ensure this path is correct

  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.007;  // Rotate model continuously
    }
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={modelRef}
        name="DiplomaMesh"
        castShadow
        receiveShadow
        geometry={nodes.pCube1_lambert1_0.geometry}
        material={materials.lambert1}
        rotation={[1.329, 0, 0]}
        scale={[0.007, 0.001, 0.008]}
      />
    </group>
  )
}

// Preload the GLTF model for faster load times
useGLTF.preload('/models/Diploma.glb');
