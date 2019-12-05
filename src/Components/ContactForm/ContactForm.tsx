import React, {
  useState,
  useCallback,
  ChangeEvent,
  SyntheticEvent,
} from "react";

import { IMessageData } from "@src/types/message";
import { Wrapper } from "./elements";

export const ContactForm: React.FC<{
  onSubmit: (messageData: IMessageData) => void;
}> = ({ onSubmit }) => {
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
    <Wrapper>
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
    </Wrapper>
  );
};
