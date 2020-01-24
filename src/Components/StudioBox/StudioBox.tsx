import React from "react";
import { IStudio } from "@src/types/studio";
import useStyles from "./styles";

import {
    CardContent,
    CardMedia,
    Box,
    IconButton,
    Typography,
    Link,
} from "@material-ui/core";
import {
    ArrowBack as ArrowBackIcon,
    PhoneAndroid as PhoneAndroidIcone,
    MailOutline as MailOutlineIcone,
    Language as LanguageIcon,
} from "@material-ui/icons";

interface IProps {
    openedStudio: IStudio | undefined;
    onGoBack: () => void;
}

export const StudioBox: React.FC<IProps> = ({ openedStudio, onGoBack }) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <IconButton
                aria-label="back"
                size="small"
                onClick={onGoBack}
                className={classes.backBotton}
            >
                <ArrowBackIcon fontSize="large" />
            </IconButton>

            {openedStudio ? (
                <>
                    <CardMedia
                        className={classes.cardMedia}
                        image="https://via.placeholder.com/150"
                        title="Contemplative Reptile"
                    />
                    <CardContent className={classes.cardContent}>
                        <Box className={classes.imageWrapper}>
                            <img src={openedStudio.logo} alt="logo" />
                        </Box>
                        <Typography
                            variant="h4"
                            component="h2"
                            className={classes.studioName}
                        >
                            {openedStudio.name}
                        </Typography>
                        <div>
                            <ul className={classes.contactsList}>
                                {openedStudio.contact.mail && (
                                    <Typography
                                        component="li"
                                        className={classes.contactsListItem}
                                    >
                                        <MailOutlineIcone />

                                        <Link
                                            target="_blank"
                                            variant="body1"
                                            href={`mailto:${openedStudio.contact.mail}`}
                                        >
                                            {openedStudio.contact.mail}
                                        </Link>
                                    </Typography>
                                )}

                                {openedStudio.contact.phones && (
                                    <Typography
                                        component="li"
                                        className={classes.contactsListItem}
                                    >
                                        <PhoneAndroidIcone />

                                        {openedStudio.contact.phones.map(
                                            (phone: string) => `${phone}, `,
                                        )}
                                    </Typography>
                                )}

                                {openedStudio.contact.site && (
                                    <Typography
                                        component="li"
                                        className={classes.contactsListItem}
                                    >
                                        <LanguageIcon />

                                        <Link
                                            target="_blank"
                                            variant="body1"
                                            href={openedStudio.contact.site}
                                        >
                                            {openedStudio.contact.site}
                                        </Link>
                                    </Typography>
                                )}
                            </ul>
                        </div>
                        <div>
                            <h3>Opis</h3>
                            <Typography component="p" variant="body1">
                                {openedStudio.description}
                            </Typography>
                        </div>
                    </CardContent>
                </>
            ) : (
                <CardContent>
                    <span>No any studio data :(</span>
                </CardContent>
            )}
        </Box>
    );
};
