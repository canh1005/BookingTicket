import { makeStyles } from "@material-ui/core";
import { useColor } from './../utils/color'


export const body = makeStyles({
    root: {
        background: `linear-gradient(45deg, ${useColor.black_1} 30% ,${useColor.red_1} 60%, ${useColor.orange_1} 90%)`,
        marginTop: 110,
    },
})
//Home navbar
export const navBar = makeStyles({
    root: {
        zIndex: "1",
        background: `linear-gradient(45deg, ${useColor.red_1} 30% ,${useColor.orange_0} 50%, ${useColor.orange_1} 90%)`,
        position: "fixed",
        top: 0,
        width: "100%",
        opacity: .9,
    },
    body: {
        padding: '30px 0',
        textAlign: "center",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "90%",
        margin: "auto"
    },
    link: {
        textDecoration: "none",
        color: useColor.white_1,
        margin: '0 5px',
        "&:hover": {
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "20px",
            color: useColor.white_1,
        }
    },
    text: {
        color: useColor.white_1,
    },
    search: {
        flexDirection: 'unset',
        verticalAlign: 'middle',
    },
    searchResult: {
        position: 'absolute',
        left: 0,
        top: '90%',
        minWidth: '300px',
        height: '400px',
        backgroundColor: useColor.white_1,
        overflow: 'auto',
        '& div': {
            '& span': {
                textAlign: 'left',
                marginLeft: '10%',
            }
        }
    },
    menu: {
        color: useColor.black_1,
        '& a': {
            textDecoration: 'none',
            color: useColor.black_1,
        }
    },
})
//card movie
export const cardMovie = makeStyles({
    actionArea: {
        borderRadius: 16,
        transition: '0.2s',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
    card: ({
        minWidth: 300,
        minHeight: 400,
        borderRadius: 16,
        boxShadow: 'none',
        margin: 50,
        background: `linear-gradient(45deg, ${useColor.pink_1} 30%, ${useColor.orange_2} 90%)`,
        '&:hover': {
            boxShadow: `0 6px 6px 0`,
        },
    }),
    content: {
        padding: '1rem 1.5rem 1.5rem',
    },
    title: {
        fontFamily: 'Montserrat',
        fontSize: '2rem',
        color: useColor.green_2,
        textTransform: 'uppercase',
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
    },
    subtitle: {
        fontFamily: 'Montserrat',
        color: useColor.green_2,
        opacity: 0.87,
        marginTop: '2rem',
        fontWeight: "bold",
        fontSize: 14,
    },
    img: {
        minHeight: '300px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    button: {
        background: `linear-gradient(to right, ${useColor.orange_2} 70%, ${useColor.pink_1})`,
        borderRadius: 16,
        border: `1px solid ${useColor.green_2}`,
        margin: 2,
        color: useColor.white_1,
        overflow: 'hidden',
        "&:hover $buttonShadow": {
            transform: 'translateX(0)',
            opacity: .3,
        },
        position: 'relative',
        "& a": {
            color: useColor.white_1,
            "&:hover": {
                textDecoration: 'none',
                color: useColor.white_1,
            },
        },
    },
    buttonShadow: {
        width: '100%',
        height: '100%',
        borderRadius: 16,
        top: 0,
        left: 0,
        background: `linear-gradient(to left, ${useColor.red_1} 70%, ${useColor.orange_0})`,
        position: 'absolute',
        opacity: 0,
        transform: 'translateX(100%)',
        transition: "all .7s",
    }
})
//list cinema
export const cinemaStyle = makeStyles({
    root: {
        minHeight: 700,
        backgroundColor: useColor.orange_3,
        borderRadius: 16,
    },
    cinemaInfo: {
        height: 700,
        overflow: "auto"
    },
    movieByCinema: {
        height: 700,
        overflowY: "scroll",
        overflowX: "auto"
    },
    title: {
        textAlign: "center",
        color: useColor.white_1,
    },
    tabs: {
        width: "80%",
        margin: "auto",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        border: '2px solid',
        margin: 5,
        borderRadius: 16,
        color: useColor.black_1,
        transition: 'all .5s',
        "&:hover": {
            textDecoration: 'none',
            color: useColor.green_2,
        }
    },
    tabPane: {
        transition: "all 0.7s",
        "&:hover": {
            transform: "scale(0.95)"
        }
    },
    text: {
        color: useColor.black_1,
    }
})
//list movie
export const listMovieStyle = makeStyles({
    root: {

    },
    title: {
        textAlign: "center",
        color: useColor.white_1,
    }
})
//back to top
export const scrollTopStyle = makeStyles({
    root: {
        position: "fixed",
        top: "80%",
        left: "95%",
    },
    icon: {
        background: `linear-gradient(45deg,${useColor.white_1},${useColor.orange_1})`,
        border: '1px solid',
        color: useColor.black_1,
        fontSize: 50,
        borderRadius: "50%"
    }
})
//detail movie
export const detailMovieStyle = makeStyles({
    background: {
        backgroundImage: props => `url(${props.backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
    },
    content: {
        width: "80%",
        margin: 'auto',
        color: useColor.green_1,
    },
    table: {
        '& thead': {
            '& tr': {
                '& th': {
                    color: useColor.green_1,
                }
            }
        },
        '& tbody': {
            '& tr': {
                '& td': {
                    color: useColor.green_1,
                }
            }
        }
    },
    button: {
        '& span': {
            '& a': {
                textDecoration: 'none',
                color: useColor.green_1,
            }
        }
    }
})
//login, register Style
export const login = makeStyles({
    root: {
        background: `linear-gradient(-24deg, ${useColor.black_1} 0%, ${useColor.white_1} 50%, ${useColor.orange_0} 50%, ${useColor.orange_2} 100%)`,
        minHeight: 700,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        position: "relative",
        padding: 50,
        width: 360,
        height: '100%',
        textAlign: 'center',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: 6,
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 5,
            bottom: 5,
            left: 5,
            right: 5,
            borderRadius: 5,
            background: `linear-gradient(to bottom, rgba(255,255,255,0.3) 0%,rgba(255,255,255,0.1) 15%, transparent 50%, transparent 85%,rgba(255,255,255,0.3) 100%)`
        }
    },
    button: {
        color: useColor.black_1,
        '& a': {
            textDecoration: 'none',
            color: useColor.black_1,
        }
    },
    form: {
        '& div': {
            padding: 5,
            '& div': {
                '& input': {
                    padding: 5,
                }
            }
        }
    },
    iconShowPassword: {
        position: 'absolute',
        top: 5,
        right: 3,
    },
})
//profile page style
export const Profile = makeStyles({
    background: {
        background: `linear-gradient(to right, ${useColor.black_1} 0%, ${useColor.orange_0} 50%, ${useColor.orange_2} 60%, ${useColor.orange_1} 100%)`,
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        position: 'relative',
        '&::before': {
            content: '""',
            borderRadius: 5,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: `linear-gradient(45deg,${useColor.orange_1} 0%, ${useColor.orange_3} 100%)`,
        },
        '&::after': {
            content: '""',
            borderRadius: 5,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: `linear-gradient(45deg,${useColor.orange_1} 0%, ${useColor.orange_3} 100%)`,
            filter: 'blur(30px)',
        }
    },
    span: {
        position: 'absolute',
        top: 5,
        left: 5,
        bottom: 5,
        right: 5,
        background: 'rgba(0,0,0,0.5)',
        zIndex: 2,
    },
    content: {
        position: 'relative',
        zIndex: 10,
        padding: 20,
        color: useColor.white_1,
        textAlign: 'center',
        '& svg':{
            fontSize: '50vh',
        }
    },
    button: {
        color: useColor.white_1,
    },
})