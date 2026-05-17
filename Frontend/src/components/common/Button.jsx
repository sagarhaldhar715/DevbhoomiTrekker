// src/components/common/Button.jsx

function Button({ text }) {
    return (
        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl duration-300">
            {text}
        </button>
    );
}

export default Button;