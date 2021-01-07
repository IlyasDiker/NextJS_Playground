// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../utils/dbConnect';


// export default (req, res) => {
//   res.statusCode = 200
//   res.json({ name: 'John Doe' })
// }

dbConnect();

export default async (req, res) => {
  res.json({test: 'test'});
}