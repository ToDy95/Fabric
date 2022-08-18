import React, {FC, useEffect, useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import '../styles/HomePageCss.css';
import Gallery from "./GalleryComponent";
import CloseIcon from '@mui/icons-material/Close';
const HomePageComponent: FC = () => {
    const navigate = useNavigate();
    const [one, oneSet] = useState([])
    const [two, twoSet] = useState([])
    const [three, threeSet] = useState([])
    const [seeDiv, seeDivSet] = useState(false)
    const oneFn = async (e: any) => {
        e.preventDefault();
seeDivSet(true);
        const response = await fetch(`https://www.omdbapi.com/?s=Matrix&amp&apikey=720c3666`).then(response => response.json()).
        then(response =>   {

            const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: response})
        }
            const res =  fetch('http://localhost:5000/routes/one', requestOptions).then(resp => resp.json()).then(
                data => {oneSet(data)}
            )

        })
    }


    const twoFn = async (e: any) => {
        e.preventDefault();
        seeDivSet(true);
        const response = await fetch(`https://www.omdbapi.com/?s=Matrix%20Reloaded&amp&apikey=720c3666`).then(response => response.json()).
        then(response =>   {

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: response})
            }
            const res =  fetch('http://localhost:5000/routes/two', requestOptions).then(resp => resp.json()).then(
                data => {oneSet(data)}
            )

        })
    }

    const threeFn = async (e: any) => {
        e.preventDefault();
        seeDivSet(true);
        const response = await fetch(`https://www.omdbapi.com/?s=Matrix%20Revolutions&amp&apikey=720c3666`).then(response => response.json()).
        then(response =>   {

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: response})
            }
            const res =  fetch('http://localhost:5000/routes/three', requestOptions).then(resp => resp.json()).then(
                data => {oneSet(data)}
            )

        })
    }

    return (
        <div className="container">
            <Button variant="outlined" onClick={oneFn}>One</Button> <br /><br />
            <Button variant="contained" onClick={twoFn}>Two</Button> <br /><br />
            <Button variant="outlined" onClick={threeFn}>Three</Button> <br /><br />
            {seeDiv &&
            <div className="carousel-container" >
                <CloseIcon onClick={() => {seeDivSet(!seeDiv)}} />
            {one.length > 0 &&
                <Gallery data={one}/>
            }
            {two.length > 0 &&
                <Gallery data={two}/>
            }
            {three.length > 0 &&
                <Gallery data={three}/>
            }
            </div>
            }
        </div>

    )
}

export default HomePageComponent