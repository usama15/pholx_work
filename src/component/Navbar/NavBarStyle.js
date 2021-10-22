import { fade, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const useStyles = makeStyles((theme) => ({

    grow: {
        flexGrow: 1,
        height: '10vh',
        position: "relative",
    },
    menuButton: {
        marginRight: theme.spacing(2),
        display: 'none',
        ['@media (max-width: 710px)']: {
            display: 'block',
            color:'black',
        },
    },
    drawer: {
        width: "50vw!important",
    },
    title: {
        // display: 'none',
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
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        // display: 'none',
        // [theme.breakpoints.up('md')]: {
        //     display: 'flex',
        // },
        ["@media (max-width: 510px)"]: {
            marginLeft: 0,
        }
    },
    sectionMobile: {
        display: 'flex',
        justifyContent: "flexEnd",
        position: "absolute",
        right: 10,
        marginLeft: 0,
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },

    listItems: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
    },
    listItem: {
        margin: '0px 30px',
    },
    listItemLink: {
        textDecoration: 'none',
        color: 'black',
        cursor: "pointer",
    },

    linkText: {
        color: "black",
        ['@media (max-width: 710px)']: {
            display: "none",
        },
    },
    listItemsActive: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
    },
}));