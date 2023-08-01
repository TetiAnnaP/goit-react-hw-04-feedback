import css from "./SectionTitle.module.css"

const SectionTitle = ({ children }) => {
    return (
        <section className={css.section}>
            <h1 className={css.h1}>Please leave feedback</h1>
            {children}
        </section>
    )
}

export default SectionTitle