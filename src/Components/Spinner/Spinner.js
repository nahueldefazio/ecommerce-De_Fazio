import React from 'react';

function Spinner() {
    return (
        <div className="d-flex align-items-center h-100 justify-content-center flex-column">
            <div className="spinner-border ml-auto" role="status" aria-hidden="true"
                 style={{width: "10rem", height: "10rem"}}/>
            <strong className={'fs-2'}>Loading...</strong>
        </div>
    );
}

export default Spinner;