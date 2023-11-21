import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] });

export default function Home({ country }) {
  return (
    <main className={`${inter.className} h-full`}>
      <Header country={country} />

      <Footer country={country} />
    </main>
  );
}

export async function getServerSideProps(params) {
  // let data = await axios.get('https://api.ipregistry.co/?key=9ar6y4uv1hcq5wf3').then((res) => {
  //   return res.data.location.country
  // }).catch((err) => {
  //   console.log(err);
  // })

  // console.log(data);
  return {
    props: {
      // country: { name: data.name, flag: data.flag.emojitwo }
      country: { name: 'iran', flag: 'https://cdn.ipregistry.co/flags/emojitwo/ir.svg' }
    }
  }
}
