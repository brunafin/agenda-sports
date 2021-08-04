// import { FaGoogle } from 'react-icons/fa';
import './styles.scss';

export function Header() {
    return (
        <header className="header">
            <div>
                <img src="/ball.svg" alt="agenda-sports" />
                <nav>
                    <ul>
                        <li><a href="">Horários</a></li>
                        <li>
                            <button type="button">
                                {/* <FaGoogle /> */}
                                Entrar com o google
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}