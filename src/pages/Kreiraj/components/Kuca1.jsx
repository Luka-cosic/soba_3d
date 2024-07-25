import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF, useCubeTexture, useTexture } from "@react-three/drei";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useRef, useEffect } from "react";
import { front_back_1 } from "../config/constans.js";
import * as THREE from "three";


const Kuca1 = (props) => {


  const kucaRef = useRef();
  // const materialRef = useRef();
  const roofRef = useRef();

  
  // drvo1.flipY = false;
  // drvo1.encoding = THREE.sRGBEncoding;
  // const drvo = useTexture("./bakeDrvo.png");

  // const texture = useCubeTexture([
  //   "nx.png", "ny.png", "nz.png", "px.png", "py.png", "pz.png"
  // ], { path: "Standard-Cube-Map/" });

  // const colorMap = useLoader(TextureLoader, 'PavingStones092_1K-JPG (1)/PavingStones092_1K-JPG_Color.jpg');

  // const kuca1 = useLoader(GLTFLoader, './kucica1.glb');

  const { nodes, materials } = useGLTF('Kreiraj/kuca1/kucica300.glb')

  useFrame((_, delta) => {
    kucaRef.current.rotation.y += 0.5 * delta;
   
  });

  
  return (
    <>
     
      <group {...props} dispose={null} scale={3} ref={kucaRef} position={[0, -1, 0]}>
        <group position={[0.3, 0, 0]} >
          <group position={[-0.295, 0.002, -0.001]}>
            {/* <mesh geometry={nodes.Cube002.geometry} material={nodes.Cube002.material} /> */}
            <mesh geometry={nodes.Cube002_1.geometry} ref={roofRef} castShadow receiveShadow >
              <meshStandardMaterial color={ props.bojaKrova } metalness={0.4} roughness={0.2} />
            </mesh>
            {/* <mesh geometry={nodes.Cube002_2.geometry} /> */}
          </group>
          <mesh geometry={nodes.front.geometry} position={[-0.295, 0.002, -0.001]} castShadow receiveShadow>
            <meshBasicMaterial map={ props.bojaZida } />
          </mesh>
          <mesh geometry={nodes.safovi.geometry} material={nodes.Cube002.material} scale={[ 1.4785338640213013, 1.1828268766403198, 1.4785338640213013]} rotation={[-2.4700131926792146,-1.4817544259102418,3.1415921344662188]} position={[-0.29, 0.5818181762695312, 0.006881833076477051]} />
        </group>
      </group>


    </>
  )
}
useGLTF.preload('Kreiraj/kuca1/kucica300.glb');


export default Kuca1;