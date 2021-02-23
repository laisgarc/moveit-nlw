import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return(
        <div className={styles.profileContainer}>
            <img src="https://pbs.twimg.com/profile_images/1334203322996301826/YjvnXzUu_400x400.jpg" alt="Lais Garcia" />
            <div>
                <strong>Laís Garcia</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    );
}