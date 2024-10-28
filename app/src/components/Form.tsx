type FormProps = {
    setCity:React.Dispatch<React.SetStateAction<string>>
    getWeather:(e: any) => void
}

const Form = (props:FormProps) => {

    return(
        <form>
            <input type="text" name="city" placeholder="都市名を入力" 
            onChange = {e => props.setCity(e.target.value)}
            />
            <button type="submit" onClick={props.getWeather}>
                GetWether
            </button>
        </form>
    )
}

export default Form