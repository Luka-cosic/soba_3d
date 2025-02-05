/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 kucica22.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/kucica22.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.001, 0.001, -0.001]}>
        <mesh geometry={nodes.Cube002.geometry} material={materials['Dark Iron']} />
        <mesh geometry={nodes.Cube002_1.geometry} material={materials['Dark Iron']} />
      </group>
      <mesh geometry={nodes.grede.geometry} material={materials['Material.002']} position={[0, -0.154, 0.211]} scale={[0.352, 0.008, 0.008]} />
      <mesh geometry={nodes.platno.geometry} material={materials['Laces 02']} position={[-0.001, -0.157, 0.22]} scale={[0.324, 0.001, 0.001]} />
      <group position={[-0.004, -0.228, -0.009]} rotation={[0.069, -0.664, -3.098]}>
        <mesh geometry={nodes.Cube007.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cube007_1.geometry} material={materials.Material} />
      </group>
    </group>
  )
}

useGLTF.preload('/kucica22.glb')
