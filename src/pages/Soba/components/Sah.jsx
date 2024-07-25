

const Sah = ({nodes, materials}) => {
    return (
        <group position={[0.111, 0.087, -0.203]}>
            <mesh geometry={nodes.ChessRook003.geometry} material={materials.chess_set_pieces_white} />
            <mesh geometry={nodes.ChessRook003_1.geometry} material={materials.chess_set_board} />
            <mesh geometry={nodes.ChessRook003_2.geometry} material={materials.chess_set_pieces_black} />
        </group>
    )
}

export default Sah;