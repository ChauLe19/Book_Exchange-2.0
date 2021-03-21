import Button from '@material-ui/core/Button'
import database from '../fire-config'
import Rating from '@material-ui/lab/Rating'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { withStyles } from '@material-ui/core/styles'

// import hp from '/harrypotter.jpg'
import { Card, CardActions, CardMedia, CardContent, CardActionArea, Typography, IconButton } from '@material-ui/core'


const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

const BookCard = () => {
  return (

    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Harry Potter"
          height="140"
          image="/images/harrypotter.jpg"
          title={"Harry Potter and the Sorcerer's Stone"} />
        <CardContent>
          <Typography variant="h6" align="center" color="inherit">
            Harry Potter and the Sorcerer's Stone
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