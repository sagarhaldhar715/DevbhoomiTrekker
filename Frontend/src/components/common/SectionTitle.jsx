// src/components/common/SectionTitle.jsx

function SectionTitle({ title, subtitle }) {
    return (
        <div className="text-center">

            <h2 className="text-5xl font-bold">
                {title}
            </h2>

            <p className="mt-5 text-gray-500 text-lg">
                {subtitle}
            </p>
        </div>
    );
}

export default SectionTitle;