export function SecondaryTiles(
    {
        className = ""
    }: {
        className?: string
    }
) {
    return (
        <img src="/images/commons/secondary-tiles.png" alt="Secondary tiles" className={className + " w-full"}/>
    )
}

export function InfoTiles() {
    return (
        <>
            <img src="/images/commons/info-tiles.png" alt="Info tiles" className="bg-info w-full hidden xs:block"/>
            <img src="/images/commons/info-tiles-xs.jpg" alt="Info tiles" className="bg-info w-full xs:hidden"/>
        </>
    )
}

export function BwTiles(
    {
        className = ""
    }: {
        className?: string
    }
) {
    return (
        <img src="/images/commons/bw-tiles.png" alt="Black and white tiles" className={className + " w-full"}/>
    )
}

export function SecondaryToBlackTiles(
    {
        className = ""
    }: {
        className?: string
    }
) {
    return (
        <img src="/images/commons/secondary-to-black-tiles.jpg" alt="Secondary to black tiles"
             className={className + " w-full"}/>
    )
}