import { makeStyles } from "@material-ui/core";
import { useColor } from './../utils/color'

export const navBar = makeStyles({
    root: {
        zIndex: "1",
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        padding: '30px 0',
        textAlign: "center",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    link: {
        textDecoration: "none",
        color: useColor.$white_1,
        margin: '0 5px',
        "&:hover": {
            textDecoration: "none",
        }
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
        minWidth: 256,
        borderRadius: 16,
        boxShadow: 'none',
        '&:hover': {
            boxShadow: `0 6px 12px 0`,
        },
    }),
    content: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        padding: '1rem 1.5rem 1.5rem',
    },
    title: {
        fontFamily: 'Keania One',
        fontSize: '2rem',
        color: 'blue',
        textTransform: 'uppercase',
    },
    subtitle: {
        fontFamily: 'Montserrat',
        color: 'blue',
        opacity: 0.87,
        marginTop: '2rem',
        fontWeight: 500,
        fontSize: 14,
    },
    img: {
        height: '200px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
})