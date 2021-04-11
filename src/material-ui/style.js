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