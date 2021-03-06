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
/* anim delay */
#wave2{
    -webkit-animation-delay: 1.5s;
}
#wave3{
    -webkit-animation-delay: 2s;
}
#wave4{
    -webkit-animation-delay: 2.5s;
}
#wave5{
    -webkit-animation-delay: 3s;
}
`)

const rootLayout = document.getElementById("root")
rootLayout.appendChild(fueJs.createElement("div", {
    id: "rightSide",
    style: {
        width: '45vw',
        height: '100vh',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'shabnam',
    }
},
    fueJs.createElement("div", {
        id: "login-form-layout",
        style: {
            width: '63%',
            height: '80%',
            display: 'flex',
            flexDirection: 'column',
        }
    }, [fueJs.createElement("div", {
        id: "login-header-text",
        style: {
            color: '#0093EF',
            fontWeight: 'bold',
            fontSize: '1rem',
        }
    }, fueJs.createElement("span", {}, "ورود")
    )
        , fueJs.createElement("div", {
            id: "form-layout",
            style: {
                width: '100%',
                height: '100%',
                marginTop: '20%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }
        }, [
            fueJs.createElement("div", {
                id: "form-head",
                style: {
                    width: '100%',
                    height: '13%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }
            }, [fueJs.createElement("span", {
                id: "entry",
                style: {
                    fontSize: '1.5vw',
                    color: '#424242',
                }
            }, "ورود به حساب کاربری")
                , fueJs.createElement("span", {
                    id: "entry-description",
                    style: {
                        fontSize: '0.9vw',
                        color: '#9F9F9F',
                    }
                }, "جهت ورود به برنامه نام کاربری و رمز عبور خود وارد نمایید")]),
            fueJs.createElement("div", {
                class: "form",
                style: {
                    width: '100 %',
                    height: '75 %'
                }
            }, [
                fueJs.createElement("form", {
                    action: "/index.html",
                    method: "post",
                    style: {
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                    }
                }, [
                    fueJs.createElement("div", {
                        id: "firstinput",
                        style: {
                            marginTop: '0 !important'
                        },
                        class: "inputs-layout"
                    },
                        fueJs.createElement("input", {
                            type: "email",
                            name: "email",
                            placeholder: "نام کاربری",
                            class: "text-inputs",
                            id: "email",
                            style: {
                                backgroundImage: 'url("./Assets/SVG/userGray.svg")',
                            },
                            maxlength: "40"
                        })),
                    fueJs.createElement("div", {
                        class: "inputs-layout"
                    },
                        fueJs.createElement("input", {
                            type: "password",
                            name: "password",
                            placeholder: "رمز عبور",
                            class: "text-inputs",
                            id: "password",
                            style: {
                                backgroundImage: 'url("./Assets/SVG/passwordGray.svg")',
                            },
                            maxlength: "40"
                        })),
                    fueJs.createElement("div", {
                        class: "inputs-layout recapcha-layout"
                    }, [
                        fueJs.createElement("input", {
                            type: "text",
                            name: "chapcha",
                            id: "chapcha",
                            placeholder: "کد امنیتی",
                            class: "text-inputs",
                            maxlength: "5",
                            style: {
                                backgroundImage: 'url("./Assets/SVG/keyboardGray.svg")',
                                width: '60%',
                            }
                        }),
                        fueJs.createElement("div", {
                            id: "capcha-img",
                            class: "recapcha-layout",
                            style: {
                                width: '20%',
                            }
                        }, [
                            fueJs.createElement("img", {
                                id: "capcha-png",
                                src: "./Assets/PNG/capcha.jpg",
                                alt: "chapcha",
                                style: {
                                    width: '5vw',
                                    height: '1.5vw',
                                    marginLeft: "10px",
                                }
                            })
                            , fueJs.createElement("img", {
                                id: "refresh-capcha",
                                src: "./Assets/SVG/recycle.svg",
                                alt: "refresh",
                                style: {
                                    width: '1vw',
                                    height: '1vw',
                                    marginLeft: "10px"
                                }
                            })
                        ])
                    ]
                    ),
                    fueJs.createElement("div", {
                        class: "inputs-layout"
                    },
                        fueJs.createElement("input", {
                            id: "submit",
                            type: "submit",
                            value: "ورود",
                            style: {
                                width: '100%',
                                paddingTop: '3%',
                                paddingBottom: '3%',
                                backgroundColor: '#0093ED',
                                fontFamily: 'shabnam',
                                fontSize: '1.1rem',
                                color: 'white',
                                border: 'none',
                                borderRadius: "5px",
                                boxShadow: '-3px 6px 9px 0px rgba(0,0,0,0.31)',
                                marginTop: '3%',
                            }
                        })),
                    fueJs.createElement("div", {
                        class: "inputs-layout checkbox-layout"
                    }, [
                        fueJs.createElement("input", {
                            type: "checkbox",
                            name: "rememberme",
                            id: "rememberme-checkbox"
                        }),
                        fueJs.createElement("label", {
                            style: {
                                fontSize: '0.8rem',
                                color: '#9F9F9F',
                            },
                            id: "checkbox-label",
                            for: "rememberme-checkbox"
                        }, "مرا به خاطر بسپار")
                    ])
                ])
            ])
        ])]
    )
))
rootLayout.appendChild(fueJs.createElement("div", {
    id: "leftSide",
    style: {
        width: '55vw',
        height: '100vh',
        background: 'linear-gradient(45deg, rgba(30,181,236,1) 0%, rgba(153,241,219,1) 100%)',
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    }
},
    [
        fueJs.createElement("div", { class: "wave-div" }),
        fueJs.createElement("div", { class: "wave-div", id: "wave2" }),
        fueJs.createElement("div", { class: "wave-div", id: "wave3" }),
        fueJs.createElement("div", { class: "wave-div", id: "wave4" }),
        fueJs.createElement("div", { class: "wave-div", id: "wave5" }),
        fueJs.createElement("div", { class: "logo" }
            , fueJs.createElement("img", {
                id: "logo-img",
                src: "./Assets/PNG/Logo.png",
                alt: "logo",
                style: {
                    width: '10vw',
                    height: '20vh',
                }
            })),
        fueJs.createElement("div", {
            id: "program-name-layout",
            style: {
                position: 'absolute',
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '5vh',
                justifyContent: 'flex-end',
            }
        }, fueJs.createElement("span", {
            id: "program-name",
            style: {
                whiteSpace: 'nowrap',
                fontFamily: 'Comfortaa_bold',
                color: 'white',
            }
        }, "Multi Anti-Virus & Cybersecurity")),
        fueJs.createElement("div", {class:"beam"})
    ]))

