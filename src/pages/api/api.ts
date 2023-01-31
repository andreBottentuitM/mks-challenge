// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

type Data = {
  name: string
}

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});
