import React, {useEffect, useState} from 'react';
import './App.css';
import ContainerStructure from "./Componentes/container";


function App() {

    const initialState = {
        body: '',
        user: '',
        sentiment: 0,
    };
    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchdata = async () => {

            const url = "http://127.0.0.1:8080/api/tweets";
            const options = {
                method: 'get',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    mode: 'cors',
                },

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

    }, []);


    return (
        <div className="App">
            <header className="App-header">
                <div className="subMain">

                    <div className="contentDiv">
                        <div id="title">Sentiment MongoAnalysis</div>
                        <ContainerStructure>
                            <hr/>
                            {data.length ? data.map((tweet) => (
                                    <div>
                                        <p className="user">{tweet.user}</p>
                                        <p className="body">{tweet.body}</p>
                                        <p className="sentiment">Sentiment: {tweet.sentiment}</p>
                                        <hr/>
                                    </div>

                                ))
                                : null}

                        </ContainerStructure>

                    </div>


                </div>


            </header>
        </div>
    );
}

export default App;
