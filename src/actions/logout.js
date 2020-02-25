export const EXIT = "EXIT";
export const LOGOUTRE = "LOGOUTRE";
export const logOutRequest = () => ({
  type: LOGOUTRE
});

export const logOut = () => ({
  type: EXIT
});
