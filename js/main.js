const search = document.getElementById('search');
const matchList = document.getElementById('match-list');


//Search state.json and filter it
const searchStates = async searchText => {
    const res = await fetch('../data/states.json');
    const states = await res.json();
    
    //Get matches to current text input
    let matches
}

search.addEventListener('input', () => searchStates(search.value));
