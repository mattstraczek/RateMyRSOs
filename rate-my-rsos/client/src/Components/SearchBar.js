import React, { useState } from 'react';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

function SearchBar({ onSearch }) {

    const handleSearchUpdate = (e) => {
        const value = e.target.value
        onSearch(value);
    };

    return (
        <>
        <MDBInputGroup>
            <MDBInput label='Search' onChange={(e) => handleSearchUpdate(e)} />
            {/* <MDBBtn onClick={handleSearchClick} rippleColor='dark'>
            <MDBIcon icon='search' />
            </MDBBtn> */}
        </MDBInputGroup>
        </>
    );
}

export default SearchBar;