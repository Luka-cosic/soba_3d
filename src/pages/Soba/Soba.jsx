
import "../../index.css";
import * as THREE from 'three';
import { useState, useEffect, useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber'
import { useGLTF, useTexture } from '@react-three/drei';
import { easing } from 'maath';
import Lopte from './components/Lopte';
import LopteSto from './components/LopteSto';
import Strelica from "./components/Strelica";
import Experience from './components/video/Experience';
import Music from "./components/music/Music";
import Stolice from "./components/Stolice";
import Sto from "./components/Sto";
import Slika from "./components/Slika";
import Drawer from "./components/Drawer";
import Tv from "./components/Tv";
import Biljka from "./components/Biljka";
import Slika1 from "./components/Slika1";
import Kauc from "./components/Kauc";
import Vaza from "./components/Vaza"
import Stolice2 from "./components/Stolice2";

import Sah from './components/Sah';
import Cvece from './components/Cvece';
import SajtDug from './components/SajtDug';
import Kuca from './components/Kuca';
import Kucica from './components/Kucica';
import Nogare from './components/Nogate';
import Prozori from './components/Prozori';
import Instagram from './components/Instagram';
import Luster from './components/Luster';
import Kovceg from './components/Kovceg';
import KreirajDug from './components/KreirajDug';
import Lampa from './components/Lampa';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

function Soba(props) {

  // const buffer = useLoader(THREE.AudioLoader, "music/Where The Hood At.mp3");
  const [count, setCount] = useState(0);
  const { nodes, materials } = useGLTF('/ent.glb');

  const [paintChair, setPaintChair] = useState("#e6e6e6");
  const [paintTable, setPaintTable] = useState({ color: "#e6e6e6", map: false });

  const [clicked, click] = useState(false);
  const [showLopteS, setShowLopteS] = useState(false);
  const [showTableMa, setShowTableMa] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [turnOnTV, setTrunOnTV] = useState(false)


  const mainRef = useRef();
  const lightRef = useRef();
  // const sphereRef = useRef();

  const [target, setTarget] = useState();
  // useHelper(lightRef, DirectionalLightHelper, 2, "red");

  // useFrame((state, delta) => {

  //   easing.damp3(nogare2Ref.current.position, clicked ? [-2.205, -1.977, -1.035] : [-1.205, -1.977, -1.035], 0.25, delta)
  //   easing.damp3(nogare1Ref.current.position, clicked ? [-2.154, -1.932, 0.454] : [-1.154, -1.932, 0.454], 0.25, delta)
  //   easing.dampE(mainRef.current.rotation, clicked ? [0.1, -2.5, 0] : [0.1, Math.PI, 0], 0.5, delta)
  //   easing.damp3(mainRef.current.position, clicked ? [0, 0, 1.5] : [-1, -0.5, -0.5], 0.25, delta)
  // })


  useEffect(() => {

    // if (sphereRef.current) {
    //   setTarget(sphereRef.current);
    // }
  }, []);


  return (
    <>
    <Canvas>
    <Environment preset="forest" background />
      <group {...props} dispose={null} ref={mainRef} className="mainRef" position={[0, -0.5, 0]} rotation={[0.1, Math.PI, 0]}>
        <group position={[-3.048, -2.308, -2.116]} rotation={[0, 1.508, 0]} scale={0.773} >
          {showLopteS && (<Lopte setPaintChair={setPaintChair} />)}
          {showTableMa && (<LopteSto setPaintTable={setPaintTable} />)}
          <Kauc nodes={nodes} materials={materials} />
        </group>
        
        <Drawer materials={materials} nodes={nodes} />
        <Stolice paintChair={paintChair} setShowArrow={setShowArrow} showLopteS={showLopteS} materials={materials} clicked={clicked} click={click} setShowLopteS={setShowLopteS} setShowTableMa={setShowTableMa} nodes={nodes} />
        {/* {turnOnTV && ( <Experience turnOnTV={turnOnTV} /> )}
      {turnOnTV &&  <Music turnOnTV={turnOnTV} buffer={buffer} /> } */}
        <Tv turnOnTV={turnOnTV} setTrunOnTV={setTrunOnTV} nodes={nodes} materials={materials} />
        <Biljka nodes={nodes} materials={materials} />
        <Slika1 nodes={nodes} materials={materials} />
        <Vaza nodes={nodes} materials={materials} />
        <Stolice2 nodes={nodes} materials={materials} />
        <Sah nodes={nodes} materials={materials} />
        <Cvece nodes={nodes} materials={materials} />
        <SajtDug nodes={nodes} />
        {showArrow && <Strelica nodes={nodes} click={click} setShowTableMa={setShowTableMa} setShowTableMa={setShowTableMa} setShowArrow={setShowArrow} setShowLopteS={setShowLopteS} />}
        <Kuca nodes={nodes} materials={materials} />
        <Sto nodes={nodes} materials={materials} setShowArrow={setShowArrow} paintTable={paintTable} setShowLopteS={setShowLopteS} setShowTableMa={setShowTableMa} click={click} />
        <Slika nodes={nodes} materials={materials} />
        <Kucica nodes={nodes} materials={materials} />
        <Nogare nodes={nodes} />
        <Prozori nodes={nodes} materials={materials} />
        <Instagram nodes={nodes} materials={materials} />
        <Luster nodes={nodes} />
        <Kovceg nodes={nodes} materials={materials} />
        <KreirajDug nodes={nodes} materials={materials} />
        <Lampa nodes={nodes} />

        <group position={[0, 0.322, -4.329]} scale={[1.673, 0.99, 0.025]}>
          <mesh geometry={nodes.Cube002.geometry} material={nodes.Cube002.material} />
          <mesh geometry={nodes.Cube002_1.geometry} material={nodes.Cube002_1.material} />
        </group>
        <mesh geometry={nodes.Cube003.geometry} material={nodes.Cube003.material} position={[0, 0.322, -4.296]} scale={[1.561, 0.924, 0.024]} />
        <mesh geometry={nodes.kvaka.geometry} material={nodes.kvaka.material} position={[-1.554, 0.326, -4.274]} scale={[0.015, 0.025, 0.015]} />
      </group>

      <OrbitControls maxDistance={4.1} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI - Math.PI / 3} />
      </Canvas>

    </>
  )
}

export default Soba;

useGLTF.preload('/ent.glb');