import React, { Component } from 'react';


function Tr(props) {
	let tr = []
	for (let i = 0; i < props.coor.length; i++) {
		tr.push(
			<tr style={{height: 50}} key={i}>
				<Td td={props.coor[i]} ths={props.th} sta={props.staff} Y={i}/>
			</tr>
		)
	}
	return tr
}
function Td(props) {
  let td =[]
	for (let i = 0; i < props.td.length; i++) {
		td.push(
			<td onClick={coordinatex.bind(this,i,props.ths,props.Y)} style={{width:50,borderWidth:1,borderStyle:'solid',borderBottomStyle:'none',borderRightStyle:'none',position:'relative'}} key={i}>
				{props.td[i]}
			</td>
		)
	}
	return td
}

function coordinatex(x,th,y) {
  console.log('x:'+x)
	console.log('y:'+y)
	let coodin = th.state.coordinate
	if (!coodin[y][x]) {
		coodin[y][x] = <div style={{
			width: '40px',
			height: '40px',
			borderRadius: '50%',
			background: th.state.staff ? 'white' : 'black',
			position: 'absolute',
			left: '50%',
			top: '50%',
			transform: 'translateX(-50%) translateY(-50%)'
		}}></div>
		th.setState({
			coordinate: coodin
		})
		th.setState((prevState) => ({
			staff: !prevState.staff
		}))
	}
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			coordinate:[],
			staff:false
    };
	}
	componentDidMount(){
		this.setState({
			coordinate:this.countY()
		})
	}
	countY() {
		let y =Math.floor(document.body.scrollHeight/50)
		let x =Math.floor(document.body.scrollWidth/50)
		let coor = []
		for (let i = 0; i < y; i++) {
			coor.push([])
			for (let j = 0; j < x; j++) {
				coor[i].push('')
			}
		}
		return coor
	}
	
	render() {
		return (
			<div>
				<table border="1" style={{background:'#CFCFCF'}}>
					<tbody>
					<Tr coor={this.state.coordinate} th={this} staff={this.state.staff}/>
					</tbody>
				</table>
			</div>
		);
	}
}

export default App;

