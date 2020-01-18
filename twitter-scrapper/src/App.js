import React, {useEffect, useState} from 'react';
import './App.css';
import ContainerStructure from "./Componentes/container";


function App() {

    const initialState = {
        body:'',
        user:'',
        sentiment:0,
    };
    const [data, setData]= useState(initialState);

    const HardCode = [{
        body: 'The noble people of Iran—who love America—deserve a government that\'s more interested in helping them achieve their dreams than killing them for demanding respect. Instead of leading Iran toward ruin, its leaders should abandon terror and Make Iran Great Again!',
        user: 'Donald Trump',
        sentiment: 5
    },{
        body: 'Glad to see American Factory’s Oscar nod for Best Documentary. It’s the kind of story we don’t see often enough and it’s exactly what Michelle and I hope to achieve with Higher Ground. Congrats to the incredible filmmakers and entire team!',
        user: 'Barack Obama',
        sentiment: 5
    },{
        body: 'Team @GoTieLLC and I want to say a HUGE thanks for your amazing support with the GoTie Kickstarter campaign.  Adam hopes to have them in your hands before Father\'s day and we look forward to seeing pictures of ya\'ll in GoTies!\n' +
            '#ChuckNorris #GoTie #Kickstarter #Veteran #Necktie',
        user: 'Chuck Norris',
        sentiment: 5
    }];

    useEffect(()=> {

        const fetchdata = async () => {

            const url = "http://127.0.0.1:8080/api";
            const options = {
                method: 'get',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                mode: 'cors'
            };

            fetch(url, options)

                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw response;
                })
                .then(responseJson => {
                    setData(responseJson);
                })
                .catch(error => {

                });

        };

        fetchdata()

},[]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="subMain">

            <div className="contentDiv">

            <ContainerStructure> Tweet 1</ContainerStructure>

            </div>


        </div>


      </header>
    </div>
  );
}

export default App;
