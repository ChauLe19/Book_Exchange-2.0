import BookCard from "../components/BookCard";
import React from "react";
import { Grid, MenuItem } from "@material-ui/core";
import { TextField } from "@material-ui/core";


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


const BookGrid = () => {
    return (
        <>
            <div style={{ padding: 20 }}>

                <TextField id="search-value" variant="outlined" label="Search for a Book" style={{marginRight:5}}/>
                <TextField select id="search-option" select="true" value="intitle" variant="outlined">

                    {searchFields.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
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
        </>
    )
};


export default BookGrid