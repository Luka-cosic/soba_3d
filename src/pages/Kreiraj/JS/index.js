import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useLoader } from "@react-three/fiber";
import { roof_1, front_back_1, roof_2, front_back_2, roof_3, front_back_3 } from "../config/constans.js";
import * as THREE from 'three';


export const changeModel = (setActive, setIsMapRoof, setIsMapFrontBack,
  setRoofWall, setCount, setWhatToStyle, setBojaKrova, setBojaZida,
  count, rooffArr, front_back_arr) => {

  setActive(true);
  setIsMapRoof(false);
  setIsMapFrontBack(false)
  setRoofWall("roof");
  if (count === 3) {
    setCount(1);
    setWhatToStyle(rooffArr[0]);
    setBojaKrova(rooffArr[0][0].color);
    setBojaZida(front_back_arr[0][0].color);
    return
  }
  setCount(count + 1);
  setWhatToStyle(rooffArr[count]);
  setBojaKrova(rooffArr[count][0].color);
  setBojaZida(front_back_arr[count][0].color);

}

export const grabMaterial = () => {
  const drvo1 = useLoader(TextureLoader, 'Kreiraj/materials/drvo1.jpg');
  front_back_1[0].color = drvo1;
  front_back_3[0].color = drvo1;
  const drvo2 = useLoader(TextureLoader, 'Kreiraj/materials/drvo2.jpg');
  front_back_1[1].color = drvo2;
  front_back_3[1].color = drvo2;
  const drvo3 = useLoader(TextureLoader, 'Kreiraj/materials/drvo3.jpg');
  front_back_3[2].color = drvo3;

  const roofTexture = useLoader(TextureLoader, 'Kreiraj/kuca3/images/krov.jpg');
  roofTexture.wrapS = roofTexture.wrapT = THREE.RepeatWrapping
  roofTexture.repeat.set(3, 3)
  roof_2[0].color = roofTexture;
  roof_3[3].color = roofTexture;

  const kocke = useLoader(TextureLoader, 'Kreiraj/materials/kocke.jpg');
  
  roof_2[1].color = kocke;

  const sareno = useLoader(TextureLoader, 'Kreiraj/materials/sareno.jpg');
  roof_2[2].color = sareno;
 
}