// src/components/trek/TrekFAQ.jsx

const faqs = [
    {
        question: "Is this trek suitable for beginners?",
        answer:
            "Yes, this trek is beginner friendly with moderate difficulty.",
    },

    {
        question: "What is the best time for this trek?",
        answer:
            "The best season depends on the trek, but winter and spring are most popular.",
    },

    {
        question: "Do you provide transportation?",
        answer:
            "Transportation can be arranged on request.",
    },
];

function TrekFAQ() {
    return (
        <section className="mt-24">

            <h2 className="text-5xl font-bold mb-12">
                Frequently Asked Questions
            </h2>

            <div className="space-y-6">

                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white border rounded-3xl p-8 shadow-md"
                    >

                        <h3 className="text-2xl font-bold">
                            {faq.question}
                        </h3>

                        <p className="mt-4 text-gray-600 leading-8">
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TrekFAQ;