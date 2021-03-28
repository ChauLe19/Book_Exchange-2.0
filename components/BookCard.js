import Button from '@material-ui/core/Button'
import database from '../fire-config'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import clsx from 'clsx';
import Rating from '@material-ui/lab/Rating'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { withStyles,makeStyles } from '@material-ui/core/styles'

import { Card, CardActions, CardMedia, CardContent, CardActionArea, Typography, IconButton } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  right: {
    marginRight: "0px",
  }
}));

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

const BookCard = (props) => {
  const classes = useStyles();
  return (

    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          // alt="Harry Potter"
          alt = {props.title}
          height= {100}
          image= {props.imageURL}
          // image="/images/harrypotter.jpg"
          // title={"Harry Potter and the Sorcerer's Stone"} />
          title={props.title} />
        <CardContent>
          <Typography variant="body1" align="center" color="inherit">
            {/* Harry Potter and the Sorcerer's Stone */}
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <Button>More Info</Button>
          <StyledRating 
          defaultValue={0}
          max={1}
          IconContainerComponent={FavoriteIcon}
        />
      </CardActions>
    </Card>

  )
}



// function writeUserData() {
//     database.ref('users/' + 1).set({
//     username: "Ha Lo",
//     email: "halo@gmail.com",
//     profile_picture : "www.google.com/images"
//   });
// }

export default BookCard