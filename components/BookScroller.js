import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import BookCard from '../components/BookCard'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
const tileData = [
  {
    img: "/images/harrypotter.jpg",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "Not me"
  },
  {
    img: "/images/harrypotter.jpg",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "Not me"
  },
  {
    img: "/images/harrypotter.jpg",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "Not me"
  },
  {
    img: "/images/harrypotter.jpg",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "Not me"
  },
  {
    img: "/images/harrypotter.jpg",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "Not me"
  },
  {
    img: "/images/harrypotter.jpg",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "Not me"
  },
  {
    img: "/images/harrypotter.jpg",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "Not me"
  },
]
export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} spacing={10} cellHeight="auto" cols={4}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} >
            {/* <img src={tile.img} alt={tile.title} className="MuiGridListTile-imgFullWidth" /> */}
            <BookCard />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

// class BookScroller extends React.Component {
//   constructor(props) {
//     super(props);

//   }
//   tileData  = [
//     {
//       img: "/images/harrypotter.jpg",
//       title: "Harry Potter and the Sorcerer's Stone",
//       author: "Not me"
//     },
//     {
//       img: "/images/harrypotter.jpg",
//       title: "Harry Potter and the Sorcerer's Stone",
//       author: "Not me"
//     },
//     {
//       img: "/images/harrypotter.jpg",
//       title: "Harry Potter and the Sorcerer's Stone",
//       author: "Not me"
//     },
//     {
//       img: "/images/harrypotter.jpg",
//       title: "Harry Potter and the Sorcerer's Stone",
//       author: "Not me"
//     },
//     {
//       img: "/images/harrypotter.jpg",
//       title: "Harry Potter and the Sorcerer's Stone",
//       author: "Not me"
//     },
//   ]
//   classes = useStyles();
//   useStyles() {

//     makeStyles((theme) => ({
//       root: {
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'space-around',
//         overflow: 'hidden',
//         backgroundColor: theme.palette.background.paper,
//       },
//       gridList: {
//         flexWrap: 'nowrap',
//         // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
//         transform: 'translateZ(0)',
//       },
//       title: {
//         color: theme.palette.primary.light,
//       },
//       titleBar: {
//         background:
//           'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
//       },
//     }));
//   }
//   render() {
//     return (
//       <div className={this.classes.root}>
//         <GridList className={this.classes.gridList} cols={2.5}>
//           {this.tileData.map((tile) => (
//             <GridListTile key={tile.img}>
//               <img src={tile.img} alt={tile.title} />
//               <GridListTileBar
//                 title={tile.title}
//                 classes={{
//                   root: this.classes.titleBar,
//                   title: this.classes.title,
//                 }}
//                 actionIcon={
//                   <IconButton aria-label={`star ${tile.title}`}>
//                     <StarBorderIcon className={this.classes.title} />
//                   </IconButton>
//                 }
//               />
//             </GridListTile>
//           ))}
//         </GridList>
//       </div>);
//   }
// }

// export default BookScroller;