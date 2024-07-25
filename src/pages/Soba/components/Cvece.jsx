

const Cvece = ({nodes, materials })=>{
    return(
<mesh geometry={nodes.RubberFigPottedPlant_mesh001.geometry} material={materials.RubberFigPottedPlant_mat} position={[-2.762, -2.189, 2.89]} scale={0.185} castShadow receiveShadow>
          <meshBasicMaterial color="#003300" />
        </mesh>
    )
}

export default Cvece;