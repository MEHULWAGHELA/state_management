import { Component, Fragment } from 'react'
class ClassComponent extends Component {
    /* in this class constructor run only one time therefore if we set any state without setstate function then it is change only construction function.
    if we want it in render then we have to use setstate function. when we change data using setstate function then it rerender the render function and data show in html
    therefore we use set interval which call setstate function on particular time and rerender done after particular time  */
    constructor() {
        super()
        this.state = {
            number: 123,
            arr: [100]
        }

        setInterval(() => {
            this.state.arr.push("oscar")
            console.log(this.state.arr)
            this.setState({
                number:
                    this.state.number
            })
        }, 3000);
    }
    render() {
        return (
            <Fragment>
                <h1>{this.state.number}</h1>
                <h1>{this.state.arr}</h1>
                <h1>Hello</h1>
            </Fragment>
        )
    }
}
export default ClassComponent