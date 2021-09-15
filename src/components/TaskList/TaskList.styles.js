import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 60,
        width: '100%',
    },
    header: {
        borderTop: '1px solid #000',
        borderLeft: '1px solid #000',
        borderRight: '1px solid #000',
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Public Sans',
        fontWeight: 200,
        fontSize: 20,
        lineHeight: '23.5px',
        letterSpacing: '-2%',
    }
}));

export default useStyles;