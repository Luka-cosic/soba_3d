

import { useState } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import '../../App.css';
import RightSide from "./components/RightSide";
import LeftSide from "./components/LeftSide";
import { grabMaterial } from "./JS/index.js";
import { roof_1, front_back_1, roof_2, front_back_2, roof_3, front_back_3 } from "./config/constans.js";


const Kreiraj = () => {

  grabMaterial()
  
  const [count, setCount] = useState(1);
 
  const [bojaKrova, setBojaKrova] = useState(roof_1[0].color);
  const [bojaZida, setBojaZida] = useState(front_back_1[0].color);


  const [isMapRoof, setIsMapRoof] = useState(roof_1[0].mapRoof);
  const [isMapFrontBack, setIsMapFrontBack] = useState(front_back_1[0].mapWall);


  return (
    
    <div className="kreiraj" >
      <LeftSide count={count} bojaKrova={bojaKrova} bojaZida={bojaZida} isMapRoof={isMapRoof} isMapFrontBack={isMapFrontBack} />
      <RightSide setCount={setCount} count={count} setIsMapRoof={setIsMapRoof} setIsMapFrontBack={setIsMapFrontBack} setBojaKrova={setBojaKrova} setBojaZida={setBojaZida} />

    </div>
  );
}

export default Kreiraj;