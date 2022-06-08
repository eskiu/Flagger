import Flag from './Flag';

function FlagList({ countries, isDay }) {

    return (
        <>
            <div className="flagList">
                {countries.map((country) => {
                    return <Flag key={country.name} country={country} isDay={isDay} />
                })}
            </div>
        </>
    )
}
export default FlagList