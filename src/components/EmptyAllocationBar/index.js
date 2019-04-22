import React from 'react';


const EmptyAllocationBar = (props) => {
    const { data, left } = props;
    return (
        <div className="allocationBarContainer" style={{ left: `${100 * data.left}px` }}>
            <div className="emptyAllocationBarWrapper" style={{ width: `${100 * data.span}px` }} />
        </div>
    );
}

export default EmptyAllocationBar;
