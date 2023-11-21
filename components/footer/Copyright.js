import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
export default function Copyright({ country }) {
    return (
        <div className=''>
            <section>©2022 SHOPPAY All Rights Resereved.</section>
            <section className='text-sm text-slate-600 p-2.5'>
                <ul className='flex items-center flex-wrap divide-x divide-slate-700'>
                    {data.map((link) => (
                        <li className='relatice underline px-4'>
                            <Link href={link.link}>{link.name}</Link>
                        </li>
                    ))}
                    <li>
                        <a className='flex items-center gap-1'>
                            <IoLocationSharp /> {country.name}
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    );
}
const data = [
    {
        name: "Privacy Center",
        link: "",
    },
    {
        name: "Privacy & Cookie Policy",
        link: "",
    },
    {
        name: "Manage Cookies",
        link: "",
    },
    {
        name: "Terms & Conditions",
        link: "",
    },
    {
        name: "Copyright Notice",
        link: "",
    },
];
