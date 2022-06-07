
function Filter({ isDay }) {

    return (
        <div className={isDay ? "filter-container light-mode-bckg" : "filter-container dark-mode-bckg"}>
            <div className="filter-search">
                <input type="text" placeholder="Search" className={isDay ? "light-mode-text light-mode-elmnt" : "dark-mode-text dark-mode-elmnt"} />
            </div>
            <div className="filter-region">
                <select className={isDay ? "filter-region light-mode-text light-mode-elmnt" : "dark-mode-text dark-mode-elmnt filter-region"}>
                    <option value="">Region</option>
                    <option value="">Region 1</option>
                    <option value="">Region 2</option>
                </select>
            </div>
        </div>
    )
}
export default Filter