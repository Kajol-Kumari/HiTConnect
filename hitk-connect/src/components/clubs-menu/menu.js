import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../template/header/header';
import './menu.css';

    function RenderMenuItem({club, onClick}) {
        return(
            <Card>
                <Link to={`/menu/${club.id}`} >
                    <CardImg width="100%" src={club.image} alt={club.name} />
                    <CardImgOverlay>
                        <CardTitle>{club.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        );
    }
    
const Menu=(props)=> {
    render() {
        return (
            <div>
            <div className="home-container">
            <Header />
                <p className="hitconnect-moto" >Collaborate! Learn! Grow!!</p>
            </div>
            </div>
            
        )
    }
}
