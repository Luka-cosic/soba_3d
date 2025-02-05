import { useEffect, useState } from "react";


const Tv = ({setTrunOnTV, turnOnTV, nodes, materials})=>{
  const [hovered, setHovered] = useState(false);
  
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered]);

    return(
        <group position={[3.089, -1.68, -1.887]} rotation={[Math.PI, -0.086, Math.PI]}>
          <mesh geometry={nodes['Legs_Cube005-Mesh'].geometry} material={materials.Tone2} />
          <mesh geometry={nodes['Legs_Cube005-Mesh_1'].geometry} material={materials.Tone1} />
          <mesh onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} onClick={()=>{setTrunOnTV(!turnOnTV)}} geometry={nodes['Legs_Cube005-Mesh_2'].geometry} material={materials.Screen} />
          <mesh geometry={nodes['Legs_Cube005-Mesh_3'].geometry} material={materials.Screw} />
        </group>
    )
}

export default Tv;