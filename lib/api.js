// API calls

// Contact form submission
export const sendContactForm = async (data) => {
    const response = await fetch("/api/send-message", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json();
}