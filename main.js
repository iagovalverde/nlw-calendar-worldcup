function createGame(player1, hour, player2) {
    return `
        <li>
            <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}">
        </li>
    `
}

function createCard(date, day, group, games) {
    return `
        <div class="card">
            <h2>${date} <span>${day}</span></h2> 
            <p>${group}</p> 
            <ul>
                ${games}        
            </ul>              
        </div>
    `
}

document.querySelector("#app").innerHTML = `
    <header>
        <img src="./assets/logo.svg" alt="Logo da NLW">
    </header>
    <main id="cards">
        ${createCard('20/11', 'domingo', 'Grupo A',
            createGame('catar', '13:00', 'ecuador')
        )}
        ${createCard('21/11', 'segunda', 'Grupo A', 
            createGame('senegal', '13:00', 'netherlands')
        )}
        ${createCard('21/11', 'segunda', 'Grupo B',
            createGame('england', '10:00', 'iran') +
            createGame('usa', '16:00', 'wales')
        )}
        ${createCard('22/11', 'terça', 'Grupo C',
            createGame('argentina', '07:00', 'saudiarabia') +
            createGame('mexico', '13:00', 'poland')
        )}   
        ${createCard('22/11', 'terça', 'Grupo D',
            createGame('denmark', '10:00', 'tunisia') +
            createGame('france', '16:00', 'australia')
        )} 
        ${createCard('23/11', 'quarta', 'Grupo E',
            createGame('germany', '10:00', 'japan') +
            createGame('costarica', '13:00', 'spain')
        )}    
        ${createCard('23/11', 'quarta', 'Grupo F',
            createGame('morocco', '07:00', 'croatia') +
            createGame('canada', '16:00', 'belgium')
        )}   
        ${createCard('24/11', 'quinta', 'Grupo G',
            createGame('switzerland', '07:00', 'cameroon') +
            createGame('brazil', '16:00', 'serbia')
        )} 
        ${createCard('24/11', 'quinta', 'Grupo H',
            createGame('uruguay', '10:00', 'southkorea') +
            createGame('portugal', '13:00', 'ghana')
        )}
        ${createCard('25/11', 'sexta', 'Grupo A',
            createGame('catar', '10:00', 'senegal') +
            createGame('netherlands', '13:00', 'ecuador')
        )}   
        ${createCard('25/11', 'sexta', 'Grupo B',
            createGame('wales', '07:00', 'iran') +
            createGame('england', '16:00', 'usa')
        )}  
        ${createCard('26/11', 'sábado', 'Grupo C',
            createGame('poland', '10:00', 'saudiarabia') +
            createGame('argentina', '16:00', 'mexico')
        )}  
        ${createCard('26/11', 'sábado', 'Grupo D',
            createGame('tunisia', '07:00', 'australia') +
            createGame('france', '13:00', 'denmark')
        )} 
        ${createCard('27/11', 'domingo', 'Grupo E',
            createGame('japan', '07:00', 'costarica') +
            createGame('spain', '16:00', 'germany')
        )}   
        ${createCard('27/11', 'domingo', 'Grupo F',
            createGame('belgium', '10:00', 'morocco') +
            createGame('croatia', '13:00', 'canada')
        )}    
        ${createCard('28/11', 'segunda', 'Grupo G',
            createGame('cameroon', '07:00', 'serbia') +
            createGame('brazil', '13:00', 'switzerland')
        )} 
        ${createCard('28/11', 'segunda', 'Grupo H',
            createGame('southkorea', '10:00', 'ghana') +
            createGame('portugal', '16:00', 'uruguay')
        )}  
        ${createCard('29/11', 'terça', 'Grupo A',
            createGame('ecuador', '12:00', 'senegal') +
            createGame('netherlands', '12:00', 'catar')
        )}
        ${createCard('29/11', 'terça', 'Grupo B',
            createGame('usa', '16:00', 'iran') +
            createGame('wales', '16:00', 'england')
        )}    
        ${createCard('30/11', 'quarta', 'Grupo C',
            createGame('poland', '16:00', 'argentina') +
            createGame('saudiarabia', '16:00', 'mexico')
        )}    
        ${createCard('30/11', 'quarta', 'Grupo D',
            createGame('tunisia', '12:00', 'france') +
            createGame('australia', '12:00', 'denmark')
        )}  
        ${createCard('1/12', 'quinta', 'Grupo E',
            createGame('japan', '16:00', 'spain') +
            createGame('germany', '16:00', 'costarica')
        )}
        ${createCard('1/12', 'quinta', 'Grupo F',
        createGame('croatia', '12:00', 'belgium') +
        createGame('canada', '12:00', 'morocco')
        )} 
        ${createCard('2/12', 'sexta', 'Grupo G',
        createGame('serbia', '16:00', 'switzerland') +
        createGame('cameroon', '16:00', 'brazil')
        )} 
        ${createCard('2/12', 'sexta', 'Grupo H',
        createGame('southkorea', '12:00', 'portugal') +
        createGame('ghana', '12:00', 'uruguay')
        )}
        ${createCard('3/12', 'sábado', 'Oitavas de Final',
        createGame('#', '12:00', '#') +
        createGame('#', '16:00', '#')
        )}                                     
    </main>
`