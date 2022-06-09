import Country from './Country';

function CountryList({ countries, isDay }) {

    return (
        <>
            <div className="flagList">
                {countries.map((country) => {
                    return <Country key={country.numericCode} country={country} isDay={isDay} />
                })}
            </div>
        </>
    )
}
export default CountryList