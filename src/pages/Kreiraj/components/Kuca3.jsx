import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF, useCubeTexture, useTexture } from "@react-three/drei";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useRef, useEffect } from "react";
// import { front_back_3 } from "../config/constans.js";





const Kuca3 = (props) => {
    
   
    // front_back_3[0].color = frontMap
    // frontMap.flipY = false;
    // frontMap.encoding = THREE.sRGBEncoding;

    const kucaRef = useRef();


    const { nodes, materials } = useGLTF('Kreiraj/kuca3/kuca.glb');

    useFrame((_, delta) => {
        kucaRef.current.rotation.y += 0.5 * delta;

    });


    return (
        <>
            <group {...props} dispose={null} scale={3} position={[0, -0.8, 0.2]} ref={kucaRef}>
                <group position={[0, 0, 0.4]}>
                    <group position={[-0.654, -0.682, -0.096]} dispose={null}>
                        <mesh geometry={nodes.Cube007.geometry} castShadow receiveShadow >
                
                        <meshBasicMaterial map={props.bojaZida} />
                        </mesh>
                        <mesh geometry={nodes.Cube007_1.geometry} castShadow receiveShadow>
                
                        <meshBasicMaterial map={props.bojaZida} />
                        </mesh>
                    </group>
                    <mesh geometry={nodes.back.geometry} position={[-0.654, -0.682, -0.786]} receiveShadow>
                
                        <meshBasicMaterial map={props.bojaZida} />
                    </mesh>
                    <mesh geometry={nodes.right.geometry} position={[0.21, 0.206, -0.36]} scale={[0.01, 0.2, 0.325]} castShadow receiveShadow>
            
                    <meshBasicMaterial map={props.bojaZida} />
                    </mesh>
                    <mesh geometry={nodes.greda.geometry} material={materials['Material.003']} position={[0, 0.49, -0.361]} rotation={[0, 0, -Math.PI / 4]} />
                    <mesh geometry={nodes.Cube008.geometry} material={nodes.Cube008.material} position={[-0.23, 0.299, -0.361]} rotation={[0, 0, -Math.PI / 2]} scale={[1, 1, 0.853]} />
                    <mesh geometry={nodes.Cube009.geometry} material={nodes.Cube009.material} position={[0.21, 0.38, -0.361]} rotation={[0, 0, -Math.PI / 2]} scale={[1, 1, 0.853]} />

                    <mesh geometry={nodes.roof.geometry} position={[0.219, 0.375, -0.361]} scale={[0.001, 0.001, 0.327]} castShadow receiveShadow>
                        {!props.isMapRoof && (<meshStandardMaterial color={props.bojaKrova} metalness={0} roughness={0.2} />)}
                        {props.isMapRoof && (<meshBasicMaterial map={props.bojaKrova} />)}
                    </mesh>
                    <mesh geometry={nodes.Cube021.geometry} material={materials['Maple wood texture']} castShadow receiveShadow>
                    
                   <meshBasicMaterial map={props.bojaZida} />
                    </mesh>
                    <mesh geometry={nodes.Cube021_1.geometry} />
                </group>

            </group>




        </>
    )
}
useGLTF.preload('Kreiraj/kuca3/kuca.glb');


export default Kuca3;