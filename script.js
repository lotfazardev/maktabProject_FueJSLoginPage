const fueJs = new FueJS()
//add assets
fueJs.createStyle(`
*{
    box-sizing: border-box;
}
/* hint of input atributes */
::placeholder {
    font-family: shabnam;
    color: #BEBEBE;
  }
/* add shabnam to project */
@font-face {
    font-family: shabnam;
    src: url(./Assets/Fonts/Shabnam.ttf);
}
@font-face {
    font-family: shabnam;
    src: url(./Assets/Fonts/Shabnam-Bold.ttf);
    font-weight: bold;
}
@font-face {
    font-family: shabnam;
    src: url(./Assets/Fonts/Shabnam-Light.ttf);
    font-weight: lighter;
}
/* add Comfortaa to project */
@font-face {
    font-family: Comfortaa;
    src: url(./Assets/Fonts/Comfortaa-Regular.ttf);
}
@font-face {
    font-family: Comfortaa_bold;
    src: url(./Assets/Fonts/Comfortaa-Bold.ttf);
    font-weight: bold;
}
@font-face {
    font-family: Comfortaa;
    src: url(./Assets/Fonts/Comfortaa-Light.ttf);
    font-weight: lighter;
}
@media only screen and (max-width: 500px) {
    #body{
        flex-direction: column;
        align-items: center;
    }
    #rightSide{
        width: 100vw;
        height: 65%;
    }
    #leftSide{
        width: 100vw;
        height: 35%;
    }
    #entry{
        font-size: 1.3rem;
        color: #424242;
    }
    #entry-description{
        font-size: 0.8rem;
        color: #9F9F9F;
    }
}
@keyframes clockwise {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
@keyframes pulsate {
    0% {transform: scale(0.1, 0.1); opacity: 0.2;}
    100% {transform: scale(1.5, 1.5); opacity: 0.0;}
}
/* main body */
body{
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    direction: rtl;
}
/* root div */
#root{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
}
/* ------------------------------- all class div ----------------------------------*/
* layout config for form */
.form{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
}
/* input layouts */
.inputs-layout{
    width: 100%;
    height: auto;
    margin-top: 8%;
}
/* text input class config */
.text-inputs{
    width: 100%;
    height: auto;
    padding-bottom: 10px;
    outline: none;
    border: none;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #BEBEBE;
    background-repeat: no-repeat;
    background-size: 1rem;
}
.text-inputs:focus{
    border-bottom-color: #0193ED;
    border-bottom-width: 2px;
    color: #0193ED;
}
.recapcha-layout{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;
}
/* checkbox section */
.checkbox-layout{
    display: flex;
    flex-direction: row;
    align-content: center;
    margin-top: 3% !important;
}
.wave-div {
    background-color:white;
    border-radius: 50%;
    height: 100%;
    width: 100%;
    position:absolute;
    left:0;
    top:0;
    -webkit-animation: pulsate 5s ease-out;
    -webkit-animation-iteration-count: infinite; 
    opacity: 0.0;
    -webkit-animation-delay: 1s;
}
.logo{
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.beam {
    display: inline-block;
    width: 10%;
    min-height: 100%;
    animation: clockwise 2s linear infinite;
    transform-origin: 100% 100%;
    background: linear-gradient(70deg, transparent 30%, white), transparent;
    position: absolute;
    top: -50%;
    left: 40%;
  }
/* sudo classes */
#chapcha:focus{
    background-image: url("./Assets/SVG/keyboardBlue.svg");
}
#password:focus{
    background-image: url(./Assets/SVG/passwordBlue.svg);
}
#email:focus{
    background-image: url("./Assets/SVG/userBlue.svg");
}
`)

// const rootLayout = document.getElementById("root")
// rootLayout.appendChild(fueJs.createElement("div", {
//     id: "rightSide",
//     style: {
//         width: '45vw',
//         height: '100vh',
//         backgroundColor: 'white',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontFamily: 'shabnam',
//     }
// }))

