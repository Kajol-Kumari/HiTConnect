import React from 'react';
import { Card,CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';
import './clubs-menu.css';


    function RenderClubItem({club, onClick}) {
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
    
const ClubsMenu=(props)=> {
    const menu = props.clubinfo.clubs.map((club) =>{
        
                return(
                    <div key={club.id} className="col-12 col-md-5 m-1">
                        <RenderClubItem club={club}/>
                    </div>
                    )
                });
                return(
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3>Menu</h3>
                                <hr />
                            </div>
                        </div>
                        <div className="row">
                            {menu}
                        </div>
                    </div>
                );
            }
export default ClubsMenu;
