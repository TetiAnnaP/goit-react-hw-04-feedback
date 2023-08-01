import css from "./Statistics.module.css"

const Statistics = ({ state, countTotalFeedback, countPositiveFeedbackPercentage }) => {
    return (<div>
            <p>Statistics:</p>
        <ul>
            <li className={css.item}>Good: {state.good}</li>
            <li className={css.item}>Neutral: {state.neutral}</li>
            <li className={css.item}>Bad: {state.bad}</li>
            <li className={css.item}>Total: { countTotalFeedback()}</li>
            <li className={css.item}> Positive feedback: { countPositiveFeedbackPercentage()} %</li>
        </ul></div>)
}

export default Statistics