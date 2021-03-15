import React from "react"

const Icon = props=>(
	<i className={`fas fa-${props.icon}`} style={{color:props.color}}></i>
)

export const currencyElements = ()=>{
	const elements = [];
	const values = [
		[2604440,2603888,2603819],
		["USD","CNY","EUR","INR"],
		["BUY","SELL"],
		[new Date(Date.now())],
		[1000,100,100,450,300],
		[1000,100,100,450,300],
		["Paypal","Skrill"],
		["+3.5%","30.59%"],
		[<Icon icon="info-circle" color="lightblue"/>,
		<Icon icon="info-circle" color="lime"/>],
		[0,10,25,50,100,"X"],
		["Eye pencil"]
	];
	const indexes = [0,0,0,0,0,0,0,0,0,0,0]

	for (let i=0;i<13;i++){
		const objKeys = ["id","currency","type","date","get","give","payment","percentage","publish","stage","action"]
		const obj = {};

		for (let k in objKeys){
			const key = objKeys[k], value = values[k]
			obj[key] = value[(indexes[k]++)%value.length];
		}
		elements.push(obj)
	}

	return elements;
};

export const dropDownElements = [
	[{text:"ALL"},{text:"CNY"},{text:"EUR"},{text:"INR"},{text:"USD"}],
	[{text:"ALL"},{text:"Active"},{text:"To Do"},{text:"In Progress"},{text:"Completed"},{text:"Cancelled"},{text:"Drafts"}],
	[{text:"Publish"},{text:"Unpublish"}]
];

export const colors = {
	red:"#FF4D3D",
	yellow:"#F2FF6B",
	green:"#9DFF89",
}