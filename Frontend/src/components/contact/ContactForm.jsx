// src/components/contact/ContactForm.jsx

function ContactForm() {
    return (
        <form className="space-y-6">

            <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-4 rounded-2xl outline-none"
            />

            <input
                type="email"
                placeholder="Email Address"
                className="w-full border p-4 rounded-2xl outline-none"
            />

            <input
                type="text"
                placeholder="Phone Number"
                className="w-full border p-4 rounded-2xl outline-none"
            />

            <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full border p-4 rounded-2xl outline-none"
            ></textarea>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl">
                Send Message
            </button>
        </form>
    );
}

export default ContactForm;