import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import DateTimeDisplay from './DateTimeDisplay';

const CountdownTimer = ({className ="show-counter", targetDate2 }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate2);

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />;
    } else {
        return (
            <ShowCounter
                className={className}
                days={""}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        );
    }
};

const ExpiredNotice = () => {
    return (
        <div className="expired-notice">
            <span>Expired!!!</span>
            <p>Please select a future date and time.</p>
        </div>
    );
};
const ShowCounter = ({className, days, hours, minutes, seconds }) => {
  
    return (
        <div className={className}>
            <a
                href="https://tapasadhikary.com"
                target="_blank"
                rel="noopener noreferrer"
                className="countdown-link"
            >
                {days > 0 ? <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 10} /> : ''}
                {days > 0 ? <p >:</p> : ''}
                <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
                <p>:</p>
                <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
                <p>:</p>
                <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
            </a>
        </div>
    );
};

export default CountdownTimer