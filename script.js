// Random password generator

const IncludeUppercase = true;
const Includelowercase = true;
const Includesymbols = true;
const Includenumbers = true;


const generatepassword = (IncludeUppercase,
    Includelowercase,
    Includesymbols,
    Includenumbers,
) => {

    const upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowerchars = upperchars.toLowerCase()
    const symbolchar = "`~!@#$%^&*()_+-=}{[]|\"':;<./>?"
    const numberchar = "1234567890"
    const passwordlength = Number(window.prompt("What would you like your password length to be?"))
    let password = ""
    let allowedchars = ""

    allowedchars += IncludeUppercase ? upperchars : "";
    allowedchars += Includelowercase ? lowerchars : "";
    allowedchars += Includesymbols ? symbolchar : "";
    allowedchars += Includenumbers ? numberchar : "";

    if (passwordlength <= 0) {
        window.alert("your password length should be more than 1")
        gen = "No password"
    }
    // if(passwordlength=== 0 ){
    //     window.alert("")
    // }

    for (let i = 0; i < passwordlength; i++) {
        const randompassword = Math.floor(Math.random() * allowedchars.length)
        password += allowedchars[randompassword]
    }


    const gen = password

    window.alert(`Your Generated Password is: "  ${gen}  "`)
}

generatepassword(IncludeUppercase,
    Includelowercase,
    Includesymbols,
    Includenumbers,
)


// I will update it later(you will be able to choose the set of character you want and you will be able to view your
// password on the screen instead of alert )