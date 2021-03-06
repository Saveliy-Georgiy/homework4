 export const saveState = (key, state) => {
    let stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString);
}

 export const restoreState = (key, defaultState) => {
    //объявляем наш стартовый стейт
    /* defaultState = {
        tasks: [],
        filterValue: "All",
        nextTaskId: 0,
    };*/

    let stateAsString = localStorage.getItem(key);
    if (stateAsString != null) {
        defaultState = JSON.parse(stateAsString);
    }
    //устанавливаем стейт (либо пустой, либо востановленный) в стейт
    return defaultState;
}
