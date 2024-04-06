export const getCurrentLanguage = () => {
    return localStorage.getItem("lang");
};

export const setCurrentLanguage = (language) => {
    localStorage.setItem("lang", language);
}