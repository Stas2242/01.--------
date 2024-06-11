export const notice = {
    optionsUnderDev : document.querySelectorAll(".devNotice"),

    writeNotice : function() {
        this.optionsUnderDev.forEach((elem) =>{
            elem.addEventListener("click", (event) => {
                alert("This option is currently under development")
            })
        })
    }
}
