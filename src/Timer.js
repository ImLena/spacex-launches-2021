import React, {Component} from 'react'

class Timer extends Component {
    constructor(props) {
        super(props)
        this.count = this.count.bind(this)
        this.deadline = new Date()
        this.deadline.setFullYear(this.props.time.years)
        this.deadline.setMonth(this.props.time.months - 1)
        this.deadline.setDate(this.props.time.date)
        this.deadline.setHours(this.props.time.hours)
        this.deadline.setMinutes(this.props.time.minutes)
        this.state = {}
        this.x = setInterval(this.count, 0);
    }

    count() {
        var now = new Date().getTime();
        var t = this.deadline.getTime() - now;
        var date = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        this.setState({date, minutes, hours, message: "Before"})
        if (t < 0) {
            this.setState({date: date * -1, minutes: minutes * -1, hours: hours * -1, message: "After"})
        }
    }

    componentDidMount() {
        this.x = setInterval(this.count, 1000);
    }

    render() {
        const {date, hours, minutes, message} = this.state
        return (
            <table id="timer" className="u-container-style u-list-item u-palette-2-base u-repeater-item u-list-item-1">
                <caption><h2 className="u-text u-text-1">{message} start</h2></caption>
                <tr><td><h1>{date}</h1></td><td><h1>{hours}</h1></td><td><h1>{minutes}</h1></td></tr>
                <tr><td>Days</td><td>Hours</td><td>Minutes</td></tr>
            </table>
        )
    }
}

export default Timer;
