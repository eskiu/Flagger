import React from 'react'

function Spinner({ isDay }) {
    return (
        <div className="sk-cube-grid">
            <div className={isDay ? "sk-cube sk-cube1 dark-mode-elmnt" : "sk-cube sk-cube1 light-mode-elmnt"}></div>
            <div className={isDay ? "sk-cube sk-cube2 dark-mode-elmnt" : "sk-cube sk-cube2 light-mode-elmnt"}></div>
            <div className={isDay ? "sk-cube sk-cube3 dark-mode-elmnt" : "sk-cube sk-cube3 light-mode-elmnt"}></div>
            <div className={isDay ? "sk-cube sk-cube4 dark-mode-elmnt" : "sk-cube sk-cube4 light-mode-elmnt"}></div>
            <div className={isDay ? "sk-cube sk-cube5 dark-mode-elmnt" : "sk-cube sk-cube5 light-mode-elmnt"}></div>
            <div className={isDay ? "sk-cube sk-cube6 dark-mode-elmnt" : "sk-cube sk-cube6 light-mode-elmnt"}></div>
            <div className={isDay ? "sk-cube sk-cube7 dark-mode-elmnt" : "sk-cube sk-cube7 light-mode-elmnt"}></div>
            <div className={isDay ? "sk-cube sk-cube8 dark-mode-elmnt" : "sk-cube sk-cube8 light-mode-elmnt"}></div>
            <div className={isDay ? "sk-cube sk-cube9 dark-mode-elmnt" : "sk-cube sk-cube9 light-mode-elmnt"}></div>
        </div>
    )
}

export default Spinner
