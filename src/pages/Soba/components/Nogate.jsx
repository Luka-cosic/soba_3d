import { useRef } from "react";

const Nogare = ({nodes})=>{
    const nogare1Ref = useRef();
    const nogare2Ref = useRef();
    return(
        <>
        <mesh geometry={nodes.nogare002.geometry} material={nodes.nogare002.material} position={[1.316, -1.994, 0.375]} rotation={[0.127, 0, 0.158]} scale={[0.021, 0.208, 0.021]} />
        <mesh geometry={nodes.nogare001.geometry} material={nodes.nogare001.material} position={[1.452, -1.998, -1.34]} rotation={[0.127, 0, 0.158]} scale={[0.021, 0.208, 0.021]} />
        <mesh geometry={nodes.nogare003.geometry} ref={nogare2Ref} material={nodes.nogare003.material} position={[-1.205, -1.977, -1.035]} rotation={[0.127, 0, 0.158]} scale={[0.021, 0.208, 0.021]} />
        <mesh geometry={nodes.nogare004.geometry} ref={nogare1Ref} material={nodes.nogare004.material} position={[-1.154, -1.932, 0.454]} rotation={[0.127, 0, 0.158]} scale={[0.021, 0.208, 0.021]} />
        </>
    )
}

export default Nogare;