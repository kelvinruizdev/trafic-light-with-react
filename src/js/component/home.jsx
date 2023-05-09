import React, { useEffect, useState } from "react";


//create your first component
const TrafficLight = () => {

	//crear variable useState
	const [color, setColor] = useState("green");
	const [isPurple, setIsPurple] = useState(false);

	function alternateColor(){

		switch (color) {
			case "red":
				setColor("yellow");	
				break;
			case "yellow":
				setColor("green");	
				break;
			case "green":
				if(isPurple){
					setColor("purple") 
				}else{
					setColor("red");
				}	
				break;
			case "purple":
				setColor("red");
				break;
		}
	}

	function addColor(){
		setIsPurple(true);
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
				
				{isPurple && (<div 	onClick={()=>setColor("purple")}
						className={"light lightPurple " + ((color == "purple")? "purple": "")}>
				
				</div>)}
				
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





