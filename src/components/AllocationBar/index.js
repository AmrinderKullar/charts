import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

import './style.css';


class AllocationBar extends Component {

	componentDidMount() {
		const { id } = this.props;
		var resizable = d3.select(`#allocationBarWrapper${id}`);
		// console.log(d3);
		var resizerRight = d3.select(`.right-button${id}`);
		// var resizerLeft = d3.select(`.left-button${id}`);
		var dragResizeRight = d3.drag()
			.on('drag', function() {	
				let x;
				// Determine resizer position relative to resizable (parent)
				x = d3.mouse(this.parentNode)[0];
				// Avoid negative or really small widths
				// add steper if needed.
				x = Math.max(50, x);
				resizable.style('width', x + 'px');
			});
			resizerRight.call(dragResizeRight);
		// var dragResizeLeft = d3.drag()
		// 	.on('drag', function() {	
		// 		let x;
		// 		// Determine resizer position relative to resizable (parent)
		// 		x = d3.mouse(this.parentNode)[0];
		// 		// Avoid negative or really small widths
		// 		// add steper if needed.
		// 		// x = Math.min(50, x);
		// 		resizable.style('width', x + 'px');
		// 	});
		// 	resizerLeft.call(dragResizeLeft);
	}

	render() {
		const { id, data } = this.props;
		return (
			<div className="allocationBarContainer" style={{ left: `${100 * data.left}px` }}>
				<div id={`allocationBarWrapper${id}`} className="allocationBarWrapper" style={{ width: `${100 * data.span}px` }}>
					{/* <button className={`left-button left-button${id}`}>{'<'}</button> */}
					<div>{data.percentage}</div>
					<button className={`right-button right-button${id}`}>{'>'}</button>
				</div>
			</div>
		);
	}
}

AllocationBar.propTypes = {
	showBar: PropTypes.bool,
};

AllocationBar.defaultProps = {
	showBar: true,
}

export default AllocationBar;
