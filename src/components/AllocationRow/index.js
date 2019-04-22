import React from 'react';
import AllocationBar from '../AllocationBar';
import EmptyAllocationBar from '../EmptyAllocationBar';
import './style.css';

const AllocationRow = (props) => {
	console.log(props);
	let newVal = [];
	let localVar = {};
	// let len = props.weekName.length;
	// console.log(props.weekName[0]);
 	// for (let i = 0; i <= len + 1; i++) {
	// 	const dat = props.employeeData.logged_data[props.weekName[i]];
	// 	if (!localVar.id) {
	// 		localVar = { id: i + 1, percentage: dat.allocated, span: 1, left: 0 };
	// 	} else {

	// 	}

	//  }
 	props.weekName.map((val, index) => {
		const dat = props.employeeData.logged_data[val];
		debugger;
		if (!localVar.id) {
			localVar = { id: index + 1, percentage: dat.allocated, span: 1, left: 0 };
		} else if (dat.allocated === localVar.percentage) {
			localVar.span = localVar.span + 1;
		} else {
			newVal.push(localVar);
			localVar = { id: index, percentage: dat.allocated, span: 1, left: 0 };
		}
		return;
	});
	console.log(newVal);
	const data = getLeft(newVal);
	return (
		<div className="allocationRowWrapper">
			{data.map((week, index) => {
				if (week.percentage > 0) {
					return <AllocationBar key={week.id} id={week.id} data={week} />;
				} else {
					// left = week.span;
					// return <EmptyAllocationBar key={week.id} id={week.id} data={week} />;
				}
			})}
			<div className="dottedBackground" />
		</div>
	);
}


const getLeft = (allData) => {
	let left = 0;
	for (let i = 0; i <= allData.length - 1; i++) {
		left = 0;
		for (let j = 0; j < i; j++) {
			left += allData[j].span
		}
		debugger;
		allData[i]['left'] = left;
	}

	return allData;
}


export default AllocationRow;
