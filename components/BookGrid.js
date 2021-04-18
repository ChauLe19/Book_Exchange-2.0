import BookCard from "../components/BookCard";
import React from "react";
import { Grid, MenuItem, Collapse, CardContent, Typography, Card } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiAccordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Divider from '@material-ui/core/Divider';
import Axios from "axios";
// import fetch from 'node-fetch';

import { withStyles } from "@material-ui/core/styles"

const list = [
    {
        title: "Harry Potter and the Sorcerer's Stone",
        imageURL: "/images/harrypotter.jpg"
    },
    {
        title: "HP-chamber",
        imageURL: "/images/HP_chamberOfSecrets.jpeg"
    },
    {
        title: "HP and cursed child",
        imageURL: "/images/HP_cursedChild.jpg"
    },
    {
        title: "HP-PS",
        imageURL: "/images/HP_philosopherStone.jpg"
    },
    {
        title: "HP prisoner of Azkaban",
        imageURL: "/images/HP_prisonerOfAzkaban.jpg"
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        imageURL: "/images/harrypotter.jpg"
    },
    {
        title: "HP-chamber",
        imageURL: "/images/HP_chamberOfSecrets.jpeg"
    },
    {
        title: "HP and cursed child",
        imageURL: "/images/HP_cursedChild.jpg"
    },
];
const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },

    },
    expanded: {},
})(MuiAccordion);

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



const BookGrid = ({data}) => {
    return (
        <>
            <div style={{ padding: 20 }}>

                <TextField id="search-value" variant="outlined" label="Search for a Book" style={{ marginRight: 5 }} />
                <TextField select id="search-option"  value="intitle" variant="outlined">

                    {searchFields.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    square = "true"
                    style={{ display: "flex" }}
                >
                    <div style={{width:"100%"}}>

                        <Typography variant="h5" align="center">
                            Bunch of Harry Potter
                    </Typography>

                    <Grid container spacing={3} style={{ padding: 20 }}>
                        {data.slice(0,4).map((item) => (
                        <Grid item xs={12} sm={3} lg={2} xl={2}>
                            <BookCard imageURL={item.volumeInfo.imageLinks.thumbnail == null ? "https://designshack.net/wp-content/uploads/placeholder-image.png" : item.volumeInfo.imageLinks.thumbnail } title={item.volumeInfo.title} />
                        </Grid>
                    ))}
                    </Grid>

                        {/* <Grid container spacing={3} style={{ padding: 20 }}>
                            {list.slice(0, 4).map(bookCard => (
                                <Grid item xs={12} sm={3} lg={2} xl={2} key={bookCard.title}>
                                    <BookCard imageURL={bookCard.imageURL} title={bookCard.title} />
                                </Grid>
                            ))}
                        </Grid> */}
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={3} style={{ padding: 20 }}>
                        {data.slice(4, 8).map(bookCard => (
                            <Grid item xs={12} sm={3} lg={2} xl={2}>
                                <BookCard imageURL={item.volumeInfo.imageLinks.thumbnail == null ? "https://designshack.net/wp-content/uploads/placeholder-image.png" : item.volumeInfo.imageLinks.thumbnail } title={item.volumeInfo.title} />
                            </Grid>
                        ))}
                    </Grid>
                    {/* </Collapse> */}
                </AccordionDetails>
            </Accordion>
        </>
    )
};
export default BookGrid


  


