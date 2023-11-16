const DARK = "dark";
const LIGHT = "light";
const THEME_KEY = "theme";

/* 운영체제 모드 획득 */
const osTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? LIGHT : DARK;

/* function getTheme() {} 정의와 동일한 화살표 함수 */
const getTheme = () => {
    var userTheme = sessionStorage.getItem(THEME_KEY);
    return userTheme ? userTheme : osTheme;
};

const setTheme = (color) => {
    sessionStorage.setItem(THEME_KEY, color);
    document.documentElement.setAttribute(THEME_KEY, color);      
};

/* 초기 로드시 테마 설정 */
if (getTheme() === DARK) {
    setTheme(DARK);
}
else {
    setTheme(LIGHT);
}
