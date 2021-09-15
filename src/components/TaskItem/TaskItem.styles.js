import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        border: '1px solid #000',
        padding: '14px 30px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
    },
    taskText: {
        fontFamily: 'Public Sans',
        fontWeight: 200,
        fontSize: 30,
        lineHeight: '35.25px',
        letterSpacing: '-2%',
    },
    iconDone: {
        width: 30,
        height: 30,
        color: '#000',
        backgroundColor: '#77ffb6',
        marginRight: 30,
    },
    iconUndone: {
        width: 30,
        height: 30,
        color: '#ccc',
        marginRight: 30,
        cursor: 'pointer',
    }
}));

export default useStyles;