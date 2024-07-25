import { useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader';



export const roof_1 = [
    {
      color: "#fff",
      position: [0, 0.5, 0],
      mapRoof: false
    },
    {
      color: "#1a75ff",
      position: [1, 0.5, 0],
      mapRoof: false
    },
    {
      color: "#ff9933",
      position: [2, 0.5, 0],
      mapRoof: false
    },
    {
        color: "#ff33ff",
        position: [3, 0.5, 0],
        mapRoof: false
    },
     
  ];
  export const front_back_1 = [
    {
      color: "",
      position: [0, 0.5, 0],
      mapWall: true
    },
    {
      color: "",
      position: [1, 0.5, 0],
      mapWall: true
    } 
  ];

  export const roof_2 = [
    {
      color: "",
      position: [0, 0.5, 0],
      mapRoof: true
    },
    {
      color: "",
      position: [1, 0.5, 0],
      mapRoof: true
    },
    {
      color: "",
      position: [2, 0.5, 0],
      mapRoof: true
    },
    
     
  ];
  export const front_back_2 = [
    {
      color: "#ffb31a",
      position: [0, 0.5, 0],
      mapWall: false
    },
    {
      color: "#ff1a1a",
      position: [1, 0.5, 0],
      mapWall: false
    } 
  ];

  // export async function getData(){
  //   let data = useLoader(TextureLoader, 'kuca3/images/krov.jpg');
  //   await data;
  //   console.log(data);
    
  // }
  
  
  export const roof_3 =  [
    {
      color: "#66c2ff",
      position: [0, 0.5, 0],
      mapRoof: false
    },
   
    {
      color: "#ff6633",
      position: [1, 0.5, 0],
      mapRoof: false
    },
    {
      
      color: "red",
      position: [2, 0.5, 0],
      mapRoof: false
    },
    {
      color : 'kuca3/images/krov.jpg',
      position: [3, 0.5, 0],
      mapRoof: true,

    }
  ];

  //  console.log(roof_3());
    
  export const front_back_3 = [
    
    {
      color: "",
      position: [0, 0.5, 0],
      mapWall: true
    },
    {
      color: 'drvo1.jpg',
      position: [1, 0.5, 0],
      mapWall: true
    },
    {
      color: '',
      position: [2, 0.5, 0],
      mapWall: true
    },
  ];

