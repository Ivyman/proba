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
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeSubject = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setSubject(event.target.value),
    [setSubject],
  );

  const handleChangeMessage = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => setMessage(event.target.value),
    [setMessage],
  );

  const handleSubmit = useCallback(
    (event: SyntheticEvent) => {
      event.preventDefault();
      onSubmit({ subject, message });
    },
    [onSubmit, subject, message],
  );

  return (
    <Wrapper>
      <input type="text" onChange={handleChangeSubject} value={subject} />
      <textarea onChange={handleChangeMessage} value={message} />
      <button onClick={handleSubmit}>Wyślij</button>
    </Wrapper>
  );
};
