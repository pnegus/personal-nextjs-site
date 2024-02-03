import Link from "next/link";

export default function ProjectTile({title, description, url}) {

    return (
        <Link href={url}>
            <div className="border-2 border-black rounded-lg text-center p-6 hover:bg-sky-700">
                <p className = "text-xl">
                    {title}
                </p>
                <p>
                    {description}
                </p>           
            </div>
        </Link>
    );
}