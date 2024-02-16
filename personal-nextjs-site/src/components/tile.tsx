
export default function Tile({children} : Readonly<{children: React.ReactNode}>) {
    return (
        <div className = "flex flex-wrap rounded-3xl bg-slate-100 p-8 items-center justify-center">
            {children}
        </div>
    );
}