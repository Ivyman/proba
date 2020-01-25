import React from "react";
import { IStudio } from "@src/types/studio";
import pattern from "@src/assets/pattern.jpg";
import useStyles from "./styles";

import {
    CardContent,
    CardMedia,
    Box,
    Fab,
    Typography,
    Link,
    Grid,
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
            <Fab
                aria-label="back"
                size="small"
                onClick={onGoBack}
                className={classes.backBotton}
            >
                <ArrowBackIcon />
            </Fab>

            {openedStudio ? (
                <>
                    <CardMedia
                        className={classes.cardMedia}
                        image={pattern}
                        title="Contemplative Reptile"
                    />
                    <CardContent className={classes.cardContent}>
                        <Box display="flex">
                            <Box flexGrow={1} pr={3}>
                                <Typography
                                    variant="h4"
                                    component="h2"
                                    className={classes.studioName}
                                >
                                    {openedStudio.name}
                                </Typography>
                                <Box>
                                    <ul className={classes.contactsList}>
                                        {openedStudio.contact.mail && (
                                            <Typography
                                                component="li"
                                                className={
                                                    classes.contactsListItem
                                                }
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
                                                className={
                                                    classes.contactsListItem
                                                }
                                            >
                                                <PhoneAndroidIcone />

                                                {openedStudio.contact.phones.map(
                                                    (phone: string) => (
                                                        <span key={phone}>
                                                            {phone}
                                                        </span>
                                                    ),
                                                )}
                                            </Typography>
                                        )}

                                        {openedStudio.contact.site && (
                                            <Typography
                                                component="li"
                                                className={
                                                    classes.contactsListItem
                                                }
                                            >
                                                <LanguageIcon />

                                                <Link
                                                    target="_blank"
                                                    variant="body1"
                                                    href={
                                                        openedStudio.contact
                                                            .site
                                                    }
                                                >
                                                    {openedStudio.contact.site}
                                                </Link>
                                            </Typography>
                                        )}
                                    </ul>
                                </Box>
                            </Box>
                            <Box>
                                <Box className={classes.imageWrapper}>
                                    <img src={openedStudio.logo} alt="logo" />
                                </Box>
                            </Box>
                        </Box>

                        <Box mt={2}>
                            <Typography variant="h5" component="h3">
                                Opis
                            </Typography>
                            <Typography
                                component="p"
                                variant="body1"
                                className={classes.description}
                            >
                                {openedStudio.description}
                            </Typography>
                        </Box>
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
