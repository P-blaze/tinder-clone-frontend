import React , {useState,useEffect} from 'react';
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import axios from "../axios";

// import { SwipeableDrawer } from '@material-ui/core';

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get('/tinder/cards');
            // we can use the endpoint above because the baseURL was set inside the axios.js
            
            setPeople(req.data);
        }
        fetchData();
    }, []);

    function swiped(direction,nameToDelete){
        console.log("removing: "+nameToDelete);
        // setLastDirection(direction);
    }
    // const swiped= (direction,nameToDelete) => {
    //     console.log("removing: "+ nameToDelete);
    // }
    function outOfFrame(name){
        console.log(name + " left the screen!");
    }
    // const outOfFrame = (name) => {
    //     console.log(name + " left the screen!");
    // }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {people.map((person)=>{
                {/* return <h1>{person.name}</h1> */}

                {/* we will use instead the react tinder card project */}
                return ( <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up","down"]}
                    onSwipe={(dir) => swiped(dir,person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                >

                <div
                    style={{ backgroundImage: "url("+ person.imgUrl+")" }}
                    className="card"
                >
                <h3>{person.name}</h3>
                </div>

                </TinderCard>)
            })}
            </div>
            
        </div>
    );
}

export default TinderCards;
