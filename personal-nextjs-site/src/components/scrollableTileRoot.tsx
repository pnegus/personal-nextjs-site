

export default function ScrollableTileRoot({id, background,chevron, children}: Readonly<{id: string, background: string, chevron: boolean, children: React.ReactNode;}>) {
    let styles = "grid grid-cols-1 grid-rows-1 min-h-screen h-full justify-center w-full ".concat(background);
    return (
        <div id = {id} className={styles}>
            {children}
            {chevron ? 
                <div className = "flex justify-center pb-4">
                    <svg className="h-8 w-8 text-white-500 py-2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="6 9 12 15 18 9" /></svg>
                </div>
                : <></>
            }
        </div>
    );
}