import Link from "next/link";
import Image from "next/image";

export default function ProjectTile({title, description, url}: {title: string, description: string, url: string}) {

    return (
        <Link href={url}>
            <div className="flex bg-gray-50 border border-gray-300 text-balance rounded-2xl shadow-lg text-balance items-center p-6 space-x-6 hover:bg-blue-700 hover:text-white text-wrap h-full justify-between">
                <p className = "text-xl font-bold">
                    {title}
                </p>
                <p>
                    {description}
                </p>           
                <Link href={url}>
                <svg className="h-8 w-8 text-black-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="9 6 15 12 9 18" /></svg>                </Link>
            </div>
        </Link>
    );
}

const styles = {
    button: "flex bg-blue-700 hover:bg-blue-900 text-white font-bold rounded size-10 justify-center items-center",
}