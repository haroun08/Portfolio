"use client"
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/models/diploma_frame.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-0.242, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube1_lambert1_0.geometry}
            material={materials.lambert1}
            scale={[0.663, 0.061, 0.802]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/diploma_frame.glb')