const initialState = {
  selectedPlanet: "Terra"
};

const planets = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_PLANET":
      return { ...state, selectedPlanet: action.payload.planet };
    default:
      return state;
  }
};

export default planets;
