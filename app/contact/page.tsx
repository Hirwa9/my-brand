"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from 'react-hot-toast';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

// Data
import { info } from "@/app/data";
import { sendContactForm } from "@/lib/api";
import { PiArrowsClockwise } from "react-icons/pi";
import useNotify from "@/hooks/useToast";

const Contact = () => {

    // Notify helper
    const { notify } = useNotify();

    // Form data
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "Web Development",
        message: "",
    });

    // Form states
    const [isLoading, setIsLoading] = useState(false);

    const resetForm = () => {
        setFormData({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            service: "Web Development",
            message: "",
        });
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    function handleInvalid(e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        e.preventDefault();
        // Gets the name of the field
        const inputName = (e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement).name;

        switch (inputName) {
            case "firstname":
                notify({ message: "Please provide your name so that we can address you properly." });
                break;
            case "email":
                notify({ message: "Your Email Address is missing or incorrect." });
                break;
            case "phone":
                notify({ message: "Looks like your Phone Number is is missing or incorrect!" });
                break;
            case "message":
                notify({ message: "Your message box is empty.", type: 'error' });
                break;
            default:
                notify({ message: "There's an issue with your input. Please check and try again!" });
        }
    }

    // Submit message
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setIsLoading(true);
            const loadingToast = toast.loading("Sending message...", {
                style: {
                    backgroundColor: '#71b3b3',
                    color: '#fff',
                },
            });

            const data = await sendContactForm(formData);

            if (data.success) {
                // Show success message
                toast.success("Thank you for reaching out! I'll review the message and respond to you shortly.", {
                    duration: 6000,
                    style: {
                        backgroundColor: '#008000',
                        color: '#fff',
                    },
                });
                // Dismiss loading toast
                if (loadingToast) toast.dismiss(loadingToast);
            } else {
                // Show error message
                toast.error("Sorry! Something went wrong. Please try again.", {
                    style: {
                        backgroundColor: '#b30000',
                        color: '#fff',
                    },
                });
                // Dismiss loading toast
                if (loadingToast) toast.dismiss(loadingToast);
            }
            resetForm();
        } catch (error) {
            console.error(error);
            toast.error("Sorry! Something went wrong. Please try again.", {
                style: {
                    backgroundColor: '#b30000',
                    color: '#fff',
                },
            });
        }
        finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
            className="py-6"
        >
            <Toaster />
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[1.875rem]">
                    {/* Form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6 md:p-10 bg-white/5 rounded-xl border border-white/20 shadow-md shadow-black/20">
                            <h3 className="text-4xl text-accent">Let&#39;s work together</h3>
                            <p className="text-white/60">Get in touch to discuss your project needs and bring your ideas to life.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input name="firstname" value={formData.firstname} onChange={handleChange} type="text" placeholder="Firstname" required onInvalid={handleInvalid} />
                                <Input name="lastname" value={formData.lastname} onChange={handleChange} type="text" placeholder="Lastname" />
                                <Input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email Address" required onInvalid={handleInvalid} />
                                <Input name="phone" value={formData.phone} onChange={handleChange} type="text" placeholder="Phone Number" required onInvalid={handleInvalid} />
                            </div>
                            <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="Web Development">Web Development</SelectItem>
                                        <SelectItem value="Mobile Development">Mobile Development</SelectItem>
                                        <SelectItem value="SEO">SEO</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your message" className="resize-none h-32" required onInvalid={handleInvalid} />
                            <Button size="md" type="submit" disabled={isLoading ? true : undefined} className={`md:max-w-[50%] px-5 ${isLoading ? 'disabled text-white transition-colors duration-300' : ''} disabled:opacity-75 disabled:pointer-events-none`}>
                                <span className="me-3">Send message</span> {isLoading && (
                                    <span className="animate-spin"><PiArrowsClockwise /></span>
                                )}
                            </Button>
                        </form>
                    </div>
                    {/* Info */}
                    <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none xl:pt-10 mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[3.25rem] h-[3.25rem] xl:w-[4.5rem] xl:h-[4.5rem] bg-white/5 text-accent rounded-md flex items-center justify-center shadow-md shadow-black/20">
                                        <div className="text-accent text-2xl">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60 ">{item.title}</p>
                                        <h3 className="text-xl ">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Contact;