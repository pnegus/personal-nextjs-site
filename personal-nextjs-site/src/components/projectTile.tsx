import Link from "next/link";

export default function ProjectTile({title, description, url}: {title: string, description: string, url: string}) {

    return (
        <Link href={url}>
            <div className="border-2 border-black rounded-lg text-center p-6 hover:bg-sky-700">
                <p className = "text-xl font-bold">
                    {title}
                </p>
                <p>
                    {description}
                </p>           
            </div>
        </Link>
    );
}