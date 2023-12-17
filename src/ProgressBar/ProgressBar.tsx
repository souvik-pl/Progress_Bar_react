import styles from "./ProgressBar.module.css";

type ProgressBarProps = {
    completed: number
    total: number
}

function ProgressBar(props: ProgressBarProps) {

    const percentage: number = Math.floor((props.completed * 100) / props.total);

    return (
        <div className={styles.container}>
            {props.completed} / {props.total} ({percentage}%)
            <div
                className={styles.progress}
                style={{ transform: `translateX(-${100 -percentage}%)` }}
            ></div>
        </div>
    )
}

export default ProgressBar;