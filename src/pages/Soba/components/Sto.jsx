import { useEffect, useState } from "react";


const Sto = ({nodes, materials,setShowArrow, setShowLopteS, setShowTableMa, paintTable, click }) => {
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
      document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])
    const showMaterials = (e)=>{

        e.stopPropagation();
        setShowLopteS(false);
        setShowTableMa(true);
        click(true);
        setShowArrow(true);
        
    }
    return (
        <>
            <mesh  geometry={nodes.nogare.geometry} material={materials['Material.005']} position={[-0.009, -1.425, -0.267]} scale={[0.6, 0.025, 1.5]} />
            <mesh onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} geometry={nodes.ploca.geometry} onClick={showMaterials} position={[0, -1.369, -0.263]} scale={[0.7, 0.02, 1.6]}>
                { !paintTable.map && (<meshBasicMaterial color={paintTable.color} />)}
                { paintTable.map && (<meshBasicMaterial map={paintTable.color} />)}
                
            </mesh>
        </>
    )
}

export default Sto;