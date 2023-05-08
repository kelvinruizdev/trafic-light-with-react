import React, { useEffect, useState } from "react";


//create your first component
const TrafficLight = () => {

	//crear variable useState
	const [color, setColor] = useState("green");

	function alternateColor(){

		switch (color) {
			case "red":
				setColor("yellow");	
				break;
			case "yellow":
				setColor("green");	
				break;
			case "green":
				setColor("red");
				break;
			default:
				setColor("purple");
				break;	
		}
	}

	function addColor(){
		let box = document.getElementsByClassName("box");
		let light = document.createElement('div');
		let buttonDisable = document.getElementsByTagName("button")[1];
		buttonDisable.disabled = true;
		light.className = "light lightPurple";
		light.addEventListener("click", function(){
			light.className = "light lightPurple purple";
		})
		box[0].appendChild(light);	
	}

	/*useEffect(()=>(

	),[])*/
	
	//dibujar semaforo
	return (
		<div className="container-flex"> 
			<div className="base">  {/*soporte del semaforo*/}

			</div>
			<div className="box">	{/*caja de luces*/}
				<div	onClick={()=>setColor("red")} 
						className={"light lightRed " + ((color == "red")? "red": "")}>  
				
				</div>
				<div 	onClick={()=>setColor("yellow")}
						className={"light lightYellow " + ((color == "yellow")? "yellow": "")}>
				
				</div>
				<div 	onClick={()=>setColor("green")}
						className={"light lightGreen " + ((color == "green")? "green": "")}>
				
				</div>
			</div>
			
			<div className="d-flex justify-content-center mt-5">
				<button onClick={alternateColor} className="btn btn-primary m-1">
					Alternate color
				</button>

				<button onClick={addColor} className="btn btn-primary m-1">
					Add color purple
				</button>
			</div>
			
		</div>
	);
};

export default TrafficLight;





