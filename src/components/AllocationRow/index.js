import React from 'react';
import AllocationBar from '../AllocationBar';
import './style.css';


const getLeft = (allData) => {
	let left = 0;
	for (let i = 0; i <= allData.length - 1; i++) {
		left = 0;
		for (let j = 0; j < i; j++) {
			left += allData[j].span
		}
		allData[i]['left'] = left;
	}

	return allData;
}


const AllocationRow = (props) => {
	let newVal = [];
	let localVar = {};
	console.log(props);
 	props.weekName.map((val, index) => {
		const dat = props.employeeData.logged_data[val];
		if (!localVar.id) {
			localVar = { id: index + 1, percentage: dat.allocated, span: 1, left: 0 };
		} else if (dat.allocated === localVar.percentage) {
			localVar.span = localVar.span + 1;
		} else {
			newVal.push(localVar);
			localVar = { id: index, percentage: dat.allocated, span: 1, left: 0 };
		}
		return null;

	});
	const data = getLeft(newVal);
	return (
		<div className="allocationRowWrapper">
			<div className="alloctionUserName">{props.employeeData.employee_full_name}</div>
			{data.map((week) => {
				if (week.percentage > 0) {
					return <AllocationBar key={week.id} id={`${props.employeeData.id}${week.id}`} data={week} />;
				}

				return null;
			})}
			<div className="dottedBackground" />
		</div>
	);
}


export default AllocationRow;
