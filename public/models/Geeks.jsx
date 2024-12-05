/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 .\geeks.glb --transform 
Files: .\geeks.glb [4.28MB] > D:\UpWork\Portfolio\Nextjs-Creative-Portfolio-Starter-Code-Files\public\models\geeks-transformed.glb [238.08KB] (94%)
Author: ahmagh2e (https://sketchfab.com/ahmagh2e)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/terminal-computer-imaginary-spatial-digital-cf4af938b4834e32b146d8dca28eb92b
Title: terminal Computer   imaginary Spatial digital
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/geeks-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.base_1} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_3.geometry} material={materials.loo_1} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/geeks-transformed.glb')
