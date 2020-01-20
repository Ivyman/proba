import React, {
    useState,
    useCallback,
    ChangeEvent,
    SyntheticEvent,
    memo,
} from "react";
import { IMessageData } from "@src/types/message";

interface IProps {
    onSubmit: (messageData: IMessageData) => void;
}

export const ContactForm: React.FC<IProps> = memo(({ onSubmit }) => {
    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        message: "",
    } as IMessageData);

    const handleInput = useCallback(
        (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = event.target;
            setFormData({ [name]: value });
        },
        [formData],
    );

    const handleSubmit = useCallback(
        (event: SyntheticEvent) => {
            event.preventDefault();
            onSubmit(formData);
        },
        [onSubmit, formData],
    );

    return (
        <div>
            <input
                type="email"
                name="email"
                onChange={handleInput}
                value={formData.email}
            />
            <input
                type="text"
                name="subject"
                onChange={handleInput}
                value={formData.subject}
            />
            <textarea
                name="message"
                onChange={handleInput}
                value={formData.message}
            />
            <button onClick={handleSubmit}>Wyślij</button>
        </div>
    );
});
