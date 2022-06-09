import { Routes, Route } from "react-router-dom"
import CountryListContainer from "./CountryContainer/CountryListContainer"
import CountryDetailContainer from "./CountryDetailContainer/CountryDetailContainer"

function Main({ isDay }) {
    return (
        <>
            <Routes>
                <Route path="/" element={<CountryListContainer isDay={isDay} />} />
                <Route path="/:name" element={<CountryDetailContainer isDay={isDay} />} />
            </Routes>
        </>
    )
}
export default Main