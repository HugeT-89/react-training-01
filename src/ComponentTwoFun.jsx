import { generateRadndomNumber, isDateEven } from "./utils.js"

const ComponentTwoFun = () => {
    return (
        <div>
            {isDateEven() && "Što je ovo teško, al ne daj se! Samo hrabro!"}
            {!isDateEven() && generateRadndomNumber(1, 100)}
        </div>
    )
}

export default ComponentTwoFun;