import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        width: '100%',
    },
    input: {
        width: '100%',
        height: 80,
        padding: '23px 20px',
        border: '1px solid #000',
        borderRadius: 0,
        boxSizing: 'border-box',
        fontFamily: 'Public Sans',
        fontWeight: 200,
        fontSize: 30,
        lineHeight: '35.25px',
        letterSpacing: '-2%',
        '@media only screen and (max-width: 767px)': {
            fontSize: 20,
        }
    },
    btnAdd: (props) => ({
        position: 'absolute',
        top: 15,
        right: 20,
        width: 50,
        height: 50,
        borderRadius: '50%',
        border: props.task ? '1px solid #000' : '1px solid #ccc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: props.task ? 'pointer' : 'not-allowed',
        color: props.task ? '#000': '#ccc',
    }),
    addIcon: {
        fontSize: 60,
        fontWeight: 200,
        marginTop: -10,
    }
}));

export default useStyles;