export const changePlanetAction = planet => {
  return {
    type: "CHANGE_PLANET",
    payload: {
      planet: planet
    }
  };
};
