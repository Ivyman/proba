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
    Grid,
    Link,
    Button,
} from "@material-ui/core";
import {
    ArrowBackIos as ArrowBackIosIcon,
    Phone as PhoneIcone,
    Share as ShareIcon,
    MailOutline as MailOutlineIcone,
    Language as LanguageIcon,
    Facebook as FacebookIcon,
    Instagram as InstagramIcon,
    OpenInNew as OpenInNewIcon,
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
                        <Grid
                            container
                            spacing={2}
                            justify="space-between"
                            alignItems="center"
                        >
                            <Grid item>
                                <Typography variant="h6" component="h3">
                                    Dd <strong>20zł</strong> za godzinę
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Fab
                                    size="small"
                                    className={classes.socialIcon}
                                >
                                    <FacebookIcon fontSize="small" />
                                </Fab>
                                <Fab
                                    size="small"
                                    className={classes.socialIcon}
                                >
                                    <InstagramIcon fontSize="small" />
                                </Fab>
                                {openedStudio.contact.site && (
                                    <Fab
                                        size="small"
                                        href={openedStudio.contact.site}
                                        className={classes.socialIcon}
                                    >
                                        <LanguageIcon fontSize="small" />
                                    </Fab>
                                )}
                            </Grid>
                        </Grid>

                        <Box display="flex" my={2}>
                            <Box flexGrow={1}>
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
                                                <PhoneIcone />

                                                {openedStudio.contact.phones.map(
                                                    (
                                                        phone: string,
                                                        i: number,
                                                    ) => (
                                                        <span key={phone}>
                                                            {i > 0 && ", "}
                                                            {phone}
                                                        </span>
                                                    ),
                                                )}
                                            </Typography>
                                        )}
                                    </ul>
                                </Box>
                            </Box>
                        </Box>

                        <Box my={2}>
                            <Typography component="p" variant="body1">
                                {openedStudio.description}
                            </Typography>
                        </Box>

                        <Box mt={4}>
                            {openedStudio.contact.site && (
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    target="_blank"
                                    endIcon={<OpenInNewIcon />}
                                    href={openedStudio.contact.site}
                                >
                                    Przejdź na stronę
                                </Button>
                            )}
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
