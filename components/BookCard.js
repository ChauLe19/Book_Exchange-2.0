import Button from '@material-ui/core/Button'
import Image from 'next/image'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

// import hp from '/harrypotter.jpg'
import { Card, CardActions, CardMedia, CardContent, CardActionArea, Typography } from '@material-ui/core'



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
      <CardActions>
        <Button>More Info</Button>
        <Button>
          <FavoriteBorderIcon />
        </Button>
      </CardActions>

    </Card>

  )
}

export default BookCard