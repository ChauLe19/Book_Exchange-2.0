import BookCard from "../components/BookCard";
import React from "react";
import { Grid } from "@material-ui/core";

const BookGrid = () => {
   return(
        <div>
            <Grid container spacing={3} style={{ padding: 24 }}>
                <Grid item xs={12} sm={3} lg={2} xl={1}>
                    <BookCard/>
                </Grid>
                <Grid item xs={12} sm={3} lg={2} xl={1}>
                    <BookCard/>
                </Grid>
                <Grid item xs={12} sm={3} lg={2} xl={1}>
                    <BookCard/>
                </Grid>
                <Grid item xs={12} sm={3} lg={2} xl={1}>
                    <BookCard/>
                </Grid>
            </Grid>
        </div>
   )
};


export default BookGrid