import { makeStyles } from "@material-ui/core";
import { useColor } from './../utils/color'

export const body = makeStyles({
    root: {
        background: `linear-gradient(45deg, ${useColor.black_1} 30% ,${useColor.red_1} 60%, ${useColor.orange_1} 90%)`,
        paddingTop: "30px",
    },
})
export const navBar = makeStyles({
    root: {
        zIndex: "1",
        background: `linear-gradient(45deg, ${useColor.red_1} 30% ,${useColor.orange_0} 50%, ${useColor.orange_1} 90%)`,
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
    }
})


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
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
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
        background: 'linear-gradient(to right, #FF8E53 70%, #FE6B8B)',
        borderRadius: 16,
        border: '1px solid',
        margin: 2,
        "&:hover": {
            background: `linear-gradient(to left, ${useColor.red_1} 70%, ${useColor.orange_0})`,
        }
    }
})

export const cinemaStyle = makeStyles({
    root: {
        minHeight: 700,
        backgroundColor: useColor.white_1,
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
    },
    tabPane: {
        transition: "0.7s",
        "&:hover": {
            transform: "scale(0.95)"
        }
    },
    text: {
        color: useColor.black_1,
    }
})

export const listMovieStyle = makeStyles({
    root: {

    },
    title: {
        textAlign: "center",
        color: useColor.white_1,
    }
})

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