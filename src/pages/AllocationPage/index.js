import React from 'react';
import './style.css';
import AllocationRow from '../../components/AllocationRow';
import { weekName, employeeData } from '../../utils/constants';

const AllocationPage = () => {
	return (
		<div className="allocationPageContainer">
			<div className="allocationPageWrapper">
			<div className="">
				<AllocationRow weekName={weekName} employeeData={employeeData} />
			</div>
			{/* bottom markings for the chart */}
				<div className="allocationTagWrapper">
					{weekName.map(val => <div key={val} className="allocationWeekTags" />)}
				</div>
			</div>
		</div>
	);
}

export default AllocationPage;
