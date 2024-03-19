import { useState } from "react"

export default function Search() {

    const [cidade, setCidade] = useState("")

    function searchInput(e) {
        e.preventDefault()
        let currentValue = document.querySelector('input[name=searchInput]')
            .value
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentValue}&appid=9f1e73e52b8223ce4073d50b8dd5dfbc&units=metric`

        fetch(url)

            .then(response => response.json())

            .then(data => {
                const { main, name, sys, weather } = data;
                if (sys != undefined)

                    console.log(sys);

                if (weather != undefined) {
                    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`

                    setCidade(`

                        <div>

                                <p>${main.temp}</p>

                                <p>${sys.country}</p>

                                <p>${name}</p>

                                <p>${weather[0]['description']}</p>

                                <img src="${icon}" />

                        </div>

                    `);
                }

                else {

                    setCidade("");

                }

            })

    }
    return (
        <div className="searchWraper">
            <div className="search">
                <h2>Weather Now</h2>
                <form onSubmit={(e) => searchInput(e)}>
                    <input placeholder="Nome da cidade" type="text" name="searchInput" />
                    <input type="submit" value="Buscar" />
                </form>
            </div>
            {

                (cidade != "") ?

                    <div  class="containerCidade" dangerouslySetInnerHTML={{ __html: cidade }} /> :

                    <div style={{padding:'10px'}}>Pesquise por algo acima...</div>

            }
        </div>
    )
}