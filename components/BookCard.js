import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Image from 'next/image'
// import hp from '../public/images/harrypotter.jpg'
import {Card, CardActions, CardMedia, CardContent} from '@material-ui/core'

const theme = createMuiTheme({      
  typography: {
    button: {
      textTransform: 'none'
    }
  }
});

const BookCard = () => {
    return(
        <ThemeProvider theme={theme}>
            <div>
              <Card>
                <CardMedia style={{height: 0, paddingTop: '150%'}}
                  image={"https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg"}
                  title={"Harry Potter and the Sorcerer's Stone"} />
                <CardActions>
                  <Button>Button</Button>
                </CardActions>
              </Card>
                
            </div>
        </ThemeProvider>
        
    )
}

export default BookCard