import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: 160,
        maxWidth: 900,
        margin: '0 auto',
        '@media only screen and (max-width: 767px)': {
            width: '100%',
            padding: '0 20px',
        }
    },
    title: {
        fontFamily: 'Public Sans',
        fontWeight: 200,
        fontSize: 100,
        lineHeight: '117.5px',
        letterSpacing: '-2%',
        color: '#ccc',
        marginBottom: 80,
    },
}));

export default useStyles;