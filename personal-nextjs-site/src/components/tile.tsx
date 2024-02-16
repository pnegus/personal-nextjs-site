
export default function Tile({children} : Readonly<{children: React.ReactNode}>) {
    return (
        <div className = "flex flex-row justify-center items-center flex-wrap w-3/4 space-x-12 py-24 rounded-2xl shadow-lg bg-gray-100 border border-gray-300">
            {children}
        </div>
    );
}