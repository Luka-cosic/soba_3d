

const Stolice2 = ({nodes, materials})=>{
    return(
        <>
        <mesh geometry={nodes.outdoor_table_chair_set_01_chair_01.geometry} material={materials.outdoor_table_chair_set_01_chair} position={[-0.091, 0.088, 0]} rotation={[0, 0.243, 0]} />
        <mesh geometry={nodes.outdoor_table_chair_set_01_table.geometry} material={materials.outdoor_table_chair_set_01_table} position={[-0.091, 0.088, 0]} />
        <mesh geometry={nodes.outdoor_table_chair_set_01_chair_02.geometry} material={materials.outdoor_table_chair_set_01_chair} position={[-0.091, 0.088, 0]} rotation={[0, 0.268, 0]} />
        </>
    )
}

export default Stolice2;