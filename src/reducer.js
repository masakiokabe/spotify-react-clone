export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //remove after finished developing 
    //token: "BQAwZeNlTL996Btr8OolIii5vWst2Lq2S1K2USXd6kXmY5BN--0l-L522tmlGXexZHe6JnC_jDplKNC_KhaKsz6ZiJye6TfuySUaG1GpoNr1HzL6SdGvEfp_n-5cIxIrEQMxt6Swwo91xUiKBUQIDBSQMVZ3ZpA"
    //token: null,
};

const reducer = (state, action) => {
    console.log(action);

    // action -> type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,  //take the existing whatever the property is 
                user: action.user // and set this up
            }
            
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }   

        default:
            return state;

    }
}

export default reducer;