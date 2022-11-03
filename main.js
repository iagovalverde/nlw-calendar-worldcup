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
    </main>
`