
export default function Tile({children} : Readonly<{children: React.ReactNode}>) {
    return (
        <div className = "flex flex-row justify-around items-center flex-wrap h-fit w-3/4 py-6 md:py-24 px-6 rounded-2xl shadow-lg bg-gray-100 border border-gray-300">
            {children}
        </div>
    );
}