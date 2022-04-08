import Head from "next/head";
import {FiSearch} from 'react-icons/fi';
import { useState } from 'react';
import Menu from "../Components/Menu";


function Home() {

const [input, setInput] = useState('')

function handleSearch(){
    alert("VALOR DO INPUT: " + input)
}

    return (
        <div>
            <Head>
                <meta charSet='utf-8' />
                <meta name='robots' content='Elojob' />
                <meta name='desciprtion' content='site de elojob de league of legends' />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
                <script src="rastreio.js" />
                <title>Encomendas - By:yAN</title>
            </Head>
            <div className="container">
                <h1 className="title">Rastrear Encomenda</h1>

                <div className="containerInput">
                    <input 
                    type="text" 
                    placeholder="Digite o seu código de rastreio"
                    value={input}
                    onChange={(e) => setInput(e.target.value) }
                    />

                    <button className="buttonSearch" onClick={handleSearch}>
                        <FiSearch size={25} color="#fff" />
                    </button>
                    </div>

                    <main className="main">
                        <h2>Código: BR52525889</h2>

                    </main>


            </div>


        </div>


    )


}



export default Home;