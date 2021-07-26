import { fade, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const useStyles = makeStyles((theme) => ({

    grow: {
        flexGrow: 1,
        height: '10vh',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
                    color:'black',


        },
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
            color:'black',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },

    listItems: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,

        ['@media (max-width: 780px)']: {
            backgroundColor: 'lightblue',
            // display: 'block',
            display: 'flex',
            flexDirection: 'column',
            height: '87.5vh',
            position: 'fixed',
            top: '10vh',
            width: '100%',
            left: 0,
            transform: 'translateY(100%)',
            transition: 'all 0.5s ease-in-out'
        }
    },
    listItem: {
        margin: '0px 30px',

        ['@media (max-width: 780px)']: {
            margin: '0px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '30px',
        }
    },
    listItemLink: {
        textDecoration: 'none',
        color: 'black',
    },

    linkText: {
        ['@media (max-width: 780px)']: {
            fontSize: '30px',
            color: 'black',
            fontWeight: 'bold',
            padding: '15px',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

        }
    },
    listItemsActive: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,

        ['@media (max-width: 780px)']: {
            backgroundColor: 'lightblue',
            // display: 'block',
            display: 'flex',
            flexDirection: 'column',
            height: '87.5vh',
            position: 'fixed',
            top: '10vh',
            width: '100%',
            left: 0,
            transform: 'translateY(0)',
            transition: 'all 0.5s ease-in-out'
        }
    },
}));