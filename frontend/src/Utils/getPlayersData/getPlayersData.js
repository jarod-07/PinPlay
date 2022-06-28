export const getPlayersData = async(setPlayersData,setInfoReceived) =>{
    const playersUrl = `${process.env.REACT_APP_BACKEND_LOCALHOST}players`;
    try {
        const response = await fetch(playersUrl);
        const data = await response.json();
        setPlayersData(data);
        setInfoReceived(true);
    } catch (error) {
        console.log(error)
    }   
}
export const getPlayerTourneys = async(setPlayerTourneys,setInfoReceived) =>{
    const playersUrl = `${process.env.REACT_APP_BACKEND_LOCALHOST}playerTourneys`;
    try {
        const response = await fetch(playersUrl);
        const data = await response.json();
        setPlayerTourneys(data);
        setInfoReceived(true);
    } catch (error) {
        console.log(error)
    }   
}