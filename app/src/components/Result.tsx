type ResultsProps = {
    results: {
        country: string,
        cityName: string,
        temperature: string,
        conditionText: string,
        icon: string
    }
}

const Result = (props: ResultsProps) => {
    return(
        <div>
            {props.results.country &&
                <div>
                    <div>{props.results.country}</div>
                    <div>{props.results.cityName}</div>
                    <div>{props.results.temperature}<span>°C</span></div>
                    <div>
                        <img src={props.results.icon} alt="icon" />
                        <span>{props.results.conditionText}</span>
                    </div>
                </div>
            }
        </div>
    )
}

export default Result