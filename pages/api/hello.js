// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectDb, disconnetDb } from '@/utils/db';
export default function handler(req, res) {
  console.log('test');
  connectDb();
  disconnetDb()
  res.status(200).json({ name: 'John Doe' });
}
