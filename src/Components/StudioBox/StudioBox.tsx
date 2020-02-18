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
} from "@material-ui/core";
import {
    ArrowBackIos as ArrowBackIosIcon,
    PhoneAndroid as PhoneAndroidIcone,
    Share as ShareIcon,
    MailOutline as MailOutlineIcone,
    Language as LanguageIcon,
} from "@material-ui/icons";
import LogoBox from "./LogoBox";

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
                <ArrowBackIosIcon fontSize="small" />
            </Fab>

            {openedStudio ? (
                <>
                    <Fab
                        aria-label="share"
                        size="small"
                        onClick={() => {}}
                        className={classes.shareBotton}
                    >
                        <ShareIcon fontSize="small" />
                    </Fab>
                    <CardMedia
                        className={classes.cardMedia}
                        image={pattern}
                        title="Contemplative Reptile"
                    >
                        <LogoBox studioData={openedStudio} />
                    </CardMedia>
                    <CardContent className={classes.cardContent}>
                        <Box display="flex">
                            <Box flexGrow={1} pr={3}>
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
