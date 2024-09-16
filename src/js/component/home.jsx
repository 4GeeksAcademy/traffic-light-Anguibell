import React from "react";
import { useState } from "react";

//create your first component
const Home = () => {
	const [ color, setColor] = useState("");
	const [luces, setLuces] = useState([{nombre: "green", valor: "green"}, {nombre: "yellow", valor: "yellow"}, {nombre: "red", valor: "red"}])
	return (
		<div className="container d-flex flex-column align-items-center gap-2"> 
			<div>
				<div className="bg-black p-2 rounded-4 d-flex flex-column align-items-center" style={{width: "100px"}}>
					{luces.map(faro=> <button onClick={() => { setColor(faro.valor) }} className={" rounded-circle " + ( color == faro.valor ? faro.nombre : "" ) } style={{ width:"75px", height:"75px", backgroundColor: faro.valor }}></button> )}
				</div>
			</div>
				<bottom className="btn btn-success" onClick={()=>{
					if (luces.length <= 3) {
						setLuces([...luces, {nombre: "purple", valor: "purple"}])
					}
				}}>Agregar</bottom>
		</div>
	);
};

export default Home;