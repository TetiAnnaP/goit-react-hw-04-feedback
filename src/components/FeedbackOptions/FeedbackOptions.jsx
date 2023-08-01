import css from "./FeedbackOptions.module.css"

const FeedbackOptions = ({ handleButtonClick }) => {
       
    return (<div className={css.buttonWrapper}
    >
        
        <button className={css.button} onClick={() => handleButtonClick('good')}>Good</button>
        <button className={css.button} onClick={() => handleButtonClick('neutral')}>Neutral </button>
        <button className={css.button} onClick={() => handleButtonClick('bad')}>Bad </button>
        
    </div >
)
}



export default FeedbackOptions