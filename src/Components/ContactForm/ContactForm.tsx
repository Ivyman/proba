import React, {
    useState,
    useCallback,
    ChangeEvent,
    SyntheticEvent,
    memo,
} from "react";
import { Link as RouterLink } from "react-router-dom";
import { IMessageData } from "@src/types/message";
import useStyles from "./styles";

import { TextField, Button, Box } from "@material-ui/core";
import { ArrowBackIos as ArrowBackIosIcon } from "@material-ui/icons";

interface IProps {
    onSubmit: (messageData: IMessageData) => void;
}

export const ContactForm: React.FC<IProps> = memo(({ onSubmit }) => {
    const classes = useStyles();

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
        [setFormData],
    );

    const handleSubmit = useCallback(
        (event: SyntheticEvent) => {
            event.preventDefault();
            onSubmit(formData);
        },
        [onSubmit, formData],
    );

    return (
        <>
            <Box mb={3}>
                <TextField
                    fullWidth
                    className={classes.field}
                    label="Email"
                    variant="outlined"
                    name="email"
                    type="email"
                    onChange={handleInput}
                    value={formData.email}
                />
            </Box>

            <Box mb={3}>
                <TextField
                    fullWidth
                    label="Temat"
                    className={classes.field}
                    variant="outlined"
                    type="text"
                    name="subject"
                    onChange={handleInput}
                    value={formData.subject}
                />
            </Box>

            <Box mb={3}>
                <TextField
                    fullWidth
                    multiline
                    rows={5}
                    className={classes.field}
                    label="Wiadomość"
                    variant="outlined"
                    type="text"
                    name="message"
                    onChange={handleInput}
                    value={formData.message}
                />
            </Box>

            <Box display="flex" mb={4} justifyContent="space-between">
                <Button
                    component={RouterLink}
                    to="/catalog"
                    startIcon={<ArrowBackIosIcon />}
                >
                    Katałog
                </Button>

                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                >
                    Wyślij
                </Button>
            </Box>
        </>
    );
});
