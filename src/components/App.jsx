import css from './App.module.css';
import Counter from './counter/counter'; //Counter
import FeedBack from './feedBack/feedBack'; //Counter
export const App = () => {
  return (
    <div>
      <FeedBack />
      <Counter />
      <div className={css.main}>React homework template</div>
    </div>
  );
};
