import BookCard from "../components/BookCard";
import React from "react";
import { Grid, MenuItem, Collapse, CardContent, Typography, Card } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const searchFields = [
    {
        value: 'intitle',
        label: 'Title',
    },
    {
        value: 'isbn',
        label: 'ISBN',
    },
    {
        value: 'inauthor',
        label: 'Author',
    },
    {
        value: 'inpublisher',
        label: 'Publisher',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

const BookGrid = () => {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <>
            <div style={{ padding: 20 }}>

                <TextField id="search-value" variant="outlined" label="Search for a Book" style={{ marginRight: 5 }} />
                <TextField select id="search-option" select="true" value="intitle" variant="outlined">

                    {searchFields.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <Typography>
                Bunch of Harry Potter
            </Typography>
            <Card>
                <Grid container spacing={3} style={{ padding: 20 }}>
                    <Grid item xs={12} sm={3} lg={2} xl={2}>
                        <BookCard />
                    </Grid>
                    <Grid item xs={12} sm={3} lg={2} xl={2}>
                        <BookCard />
                    </Grid>
                    <Grid item xs={12} sm={3} lg={2} xl={2}>
                        <BookCard />
                    </Grid>
                    <Grid item xs={12} sm={3} lg={2} xl={2}>
                        <BookCard />
                    </Grid>
                    <ExpandMoreIcon onClick={handleExpandClick} />
                    
                </Grid>
            </Card>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <Grid container spacing={3} style={{ padding: 20 }}>
                            <Grid item xs={12} sm={3} lg={2} xl={2}>
                                <BookCard />
                            </Grid>
                            <Grid item xs={12} sm={3} lg={2} xl={2}>
                                <BookCard />
                            </Grid>
                            <Grid item xs={12} sm={3} lg={2} xl={2}>
                                <BookCard />
                            </Grid>
                            <Grid item xs={12} sm={3} lg={2} xl={2}>
                                <BookCard />
                            </Grid>
                        </Grid>
                    </Collapse>
        </>
    )
};


export default BookGrid