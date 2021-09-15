import Input from 'components/Input';
import TaskList from 'components/TaskList';
import useStyles from './App.styles';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <span className={classes.title}>
            toDos
        </span>
        <Input />
        <TaskList />
    </div>
  );
}

export default App;
