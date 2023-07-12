import React, { useState } from 'react';
import "./Navbar.css"

function Navbar() {
    return (
        <>
        <div class = "navbar-container">
            <nav class="navbar navbar-expand-lg fixed-top">
                <div class="container">
                    <img src="./Logo3Cropped.PNG" height="30"></img>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
        
        </>
    );
}

export default Navbar;