import { Canvas } from "@react-three/fiber";
import { roof_1, front_back_1, roof_2, front_back_2, roof_3, front_back_3 } from "../config/constans.js";
import { useRef, useState } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { changeModel } from "../JS/index.js";
import * as THREE from "three";

const RightSide = ({ setCount, count, setIsMapRoof, setIsMapFrontBack, setBojaKrova, setBojaZida })=>{

  const rooffArr = [roof_1, roof_2, roof_3];
  const front_back_arr = [front_back_1, front_back_2, front_back_3];

  const [whatToStyle, setWhatToStyle] = useState(roof_1);  
 
  const [active, setActive] = useState(true);
  const [roofWall, setRoofWall] = useState("roof");


  const modelRef = useRef(null);

  const ballsForRoof = whatToStyle.map((el, i) => {

    const MapOrNot = ()=>{
      boje(el.color); 
      roofWall === "roof" && setIsMapRoof(el.mapRoof); 
      roofWall === "wall" && setIsMapFrontBack(el.mapWall);
    };
    
    if( roofWall === "roof" && el.mapRoof || roofWall === "wall" && el.mapWall ){

      return (
        <mesh position={el.position} onClick={MapOrNot} key={i} >
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshBasicMaterial map={el.color} />
        </mesh>
      )
    }else{
      return (
        <mesh position={el.position} onClick={MapOrNot} key={i} >
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color={el.color} metalness={0.4} roughness={0.2} />
        </mesh>
      )
    }
    
  });

  const boje = (color) => {
    roofWall === "roof" && setBojaKrova(color);
    roofWall === "wall" && setBojaZida(color);
  }

  const changeModel_1 = () => {
    changeModel(setActive,setIsMapRoof,setIsMapFrontBack,
      setRoofWall,setCount,setWhatToStyle,setBojaKrova,setBojaZida,
       count,rooffArr,front_back_arr);
  };
  
    return(
        <div className="rightHalf">

        <Canvas gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
                linear className="canvas2" >

          <PerspectiveCamera makeDefault position={[0, 1, 8]} />
          <ambientLight args={["#ffffff", 1]} />
          <spotLight args={["#ffffff", 20, 10, 1]} position={[-3, 1, 2]} />

          <group position={[-2.5, 0, 0]}>

            {ballsForRoof}

          </group>

        </Canvas>
        <div className="bootonsHolder">
          <button onClick={changeModel_1} className="dugmici" ref={modelRef} >Model {count}</button>
          <button onClick={() => { setWhatToStyle(rooffArr[count - 1]); setRoofWall("roof"); setActive(true)}} className={active?`active dugmici` : "dugmici"}>Stilizuj Krov</button>
          <button onClick={() => { setWhatToStyle(front_back_arr[count - 1]); setRoofWall("wall"); setActive(false)}} className={!active?`active dugmici` : "dugmici"}>Front - Back</button>
        </div>
      </div>
    )
}

export default RightSide;