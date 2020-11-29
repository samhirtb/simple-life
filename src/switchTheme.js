const switchTheme = (theme) => {
    let root = document.querySelector(':root');

    // var rootStyles = getComputedStyle(root);
    // var headerbackground = rootStyles.getPropertyValue('--headerbackground');

    if(theme === "light") { //change theme to dark
        root.style.setProperty('--headerbackground', '#060606')
        root.style.setProperty('--background', '#1b1b1b')
        root.style.setProperty('--footertheme', '#060606')
        root.style.setProperty('--maintheme', '#4488fd')
        root.style.setProperty('--secondarytheme', '#4fb4eb')
        root.style.setProperty('--secondarythemehover', '#005481')
        root.style.setProperty('--maintexttheme', '#dedede')
        root.style.setProperty('--sidebarbordertheme', '#060606')
    }
    else if (theme === "dark") { //change theme to light
        root.style.setProperty('--headerbackground', '#f8f8f8')
        root.style.setProperty('--background', '#fff')
        root.style.setProperty('--footertheme', '#143774')
        root.style.setProperty('--maintheme', '#143774')
        root.style.setProperty('--secondarytheme', '#1792d2')
        root.style.setProperty('--secondarythemehover', '#005481')
        root.style.setProperty('--maintexttheme', '#707070')
        root.style.setProperty('--sidebarbordertheme', '#EBEBEB')
    }
}

export {switchTheme}