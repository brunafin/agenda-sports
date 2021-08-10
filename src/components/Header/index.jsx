import { SignInButton } from '../SignInButton';
import './styles.scss';

export function Header() {
    return (
        <header className="header">
            <div>
                <img src="/ball.svg" alt="agenda-sports" />
                <nav>
                    <ul>
                        <li>
                            <a href="#">Horários</a>
                        </li>
                        <li>
                            <SignInButton />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}