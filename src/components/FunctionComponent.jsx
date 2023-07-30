import { Fragment, useState } from "react"

const FunctionComponent = () => {
    let [count, setCount] = useState({ a: 70 })
    let [number, setNumber] = useState(50)
    const [array, setarray] = useState([10, 20, 30])
    setTimeout(() => {
        count.a = count.a + 1
        /* When we change any state without set function then it is change but not render and if we set state using set function then it is change but it is not show below that code , it is show directly in return or Dom therefore we first data by variable name and then console show that show output immidiately and then set state using set function it rerender full code from top to bottom and data show in HTML also */
        count = {
            ...count
        }
        array.push(50)
        console.log(array)
        setarray([...array])
        number += 1
        setNumber(number)
    }, 2000)

    return (
        <Fragment>
            <h1>Function Component</h1>
            <h1>{array}</h1>
            <h1>{count.a}</h1>
            <h1>{number}</h1>
        </Fragment>
    )
}
export default FunctionComponent