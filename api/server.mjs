import app from './app.mjs'
import db from './database.mjs'
import 'dotenv/config';
const port = process.env.PORT || 3880
// const baseUrl = process.env.NODE_ENV === 'production' ? 'https://postboat.herokuapp.com' : 'http://localhost:3880';

db.connect()




// When the time comes, you will know
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("../build"));

//   app.get('/*', (req, res) => {
//   console.log(path)
//   console.log('path!!!!')
//     console.log(__dirname)
//     console.log(__filename)
    
//   res.sendFile(path.join(__dirname, '../build/index.html'), (err) => {
//     if (err) {
//       res.status(500).send(__dirname)
//     }
//   })
// })
// }



const server = app.listen(port, () => console.log('listening on port ' + port));
