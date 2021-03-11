import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Male from '../../images/Rectangle 28.png';
import Female from '../../images/female.png';
import './LeagueDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt,faFlag,faFutbol,faMars } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const LeagueDetails = () => {
    const{idLeague}= useParams();
    const[leagueDetail , setLeagueDetail] = useState([]);
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
        .then(res=>res.json())
        .then(data=>setLeagueDetail(data.leagues[0]))
    },[idLeague])

    const {strGender,strBanner,strLogo,strLeague,intFormedYear,strCountry,strSport,strDescriptionEN,strTwitter,strFacebook,strYoutube} = leagueDetail;

    let leagueImage;
    if("Male" === strGender){
        leagueImage = <img src={Male} alt=""></img>
    }
    else if("Female"  === strGender){
        leagueImage = <img src={Female} alt=""></img>
    }
    else if("Mixed"  === strGender){
        leagueImage = <img src={Female}alt=""></img>
    }
    const banner={
        backgroundRepeat:"noRepeat",
        backgroundPosition:"center",
        backgroundSize: "cover",
        backgroundImage: `url(${strBanner})`
    }
    return (
        <div className="">
            <div className="row m-0 ">
                    <div  className="col-lg-12  col-md-6 col-sm-12 text-center logo " style={banner}>
                        <img src={strLogo} className=" w-25 mt-5 mb-5 " alt=""/>
                    </div>
            </div>
                <div className="leagueDetail ">
                    <div className="leagueInfo container">
                        <div className="row ">
                            <div className="col-sm-12 col-md-6">
                                <h3>{strLeague}</h3>
                                <p><FontAwesomeIcon className="mr-2" icon={ faMapMarkerAlt} />Founded: {intFormedYear}</p>
                                <p><FontAwesomeIcon className="mr-2" icon={ faFlag} />Country: {strCountry}</p>
                                <p><FontAwesomeIcon className="mr-2" icon={ faFutbol} />Sport Type: {strSport} </p>
                                <p><FontAwesomeIcon className="mr-2" icon={ faMars} />Gender: {strGender}</p>
                            </div>
                            <div className="leagueImage col-sm-12 col-md-6 ">
                                <div>{leagueImage}</div> 
                            </div>
                        </div>
                    </div>
                    <div className="leagueDescription container">
                        <p>{strDescriptionEN}</p>
                        {/* <p>{leagueDetail.strDescriptionFR}</p> */}
                        <div className="icons">
                        <a href={`https://${strTwitter}`}target="_blank/"><FontAwesomeIcon className="icons fa-3x  text-info bg-white rounded-circle p-2" icon={ faTwitter} /></a>
                        <a href={`https://${strFacebook}`}target="_blank/"><FontAwesomeIcon className="icons fa-3x  text-primary bg-white rounded-circle p-2" icon={ faFacebook} /></a>
                        <a href={`https://${strYoutube}`}target="_blank/"><FontAwesomeIcon className="icons fa-3x  text-danger bg-white rounded-circle p-2" icon={ faYoutube} /></a>
                        </div>   
                    </div>
                </div> 
        </div>
    );
};

export default LeagueDetails;