import toast, { ToastOptions } from "react-hot-toast";

interface CustomNotifyProps {
    message: string;
    type?: "warning" | "error" | "success" | "default";
    duration?: number; // Duration for the toast (in ms)
    position?: ToastOptions["position"]; // Position of the toast
}

// Notify helper
const useNotify = () => {
    const notify = ({
        message,
        type = "default",
        duration = 4000,
        position = "top-right",
    }: CustomNotifyProps) => {
        const styles = {
            warning: {
                backgroundColor: "#f1c40f",
                color: "#000",
            },
            error: {
                backgroundColor: "#b30000",
                color: "#fff",
            },
            success: {
                backgroundColor: "#008000",
                color: "#fff",
            },
            default: {
                backgroundColor: "#71b3b3",
                color: "#000",
            },
        };

        return toast(message, {
            style: styles[type],
            duration,
            position,
        });
    };

    return { notify };
};

export default useNotify;