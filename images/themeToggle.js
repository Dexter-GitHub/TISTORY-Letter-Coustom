const themeBtn = document.querySelector(".theme-button");        

const themeToggle = (event) => {   
    if (getTheme() === LIGHT) {        
        setTheme(DARK);             
    }
    else {        
        setTheme(LIGHT);                 
    }
}

themeBtn.addEventListener("click", themeToggle);
