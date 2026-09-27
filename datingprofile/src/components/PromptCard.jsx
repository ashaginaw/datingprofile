export default function PromptCard({ prompt, answer }) {
    return (
        <section className="prompt-card">
            <div className="prompt-question">
                {prompt}
            </div>

            <div className="prompt-answer">
                {answer}
            </div>
        </section>
    );
}