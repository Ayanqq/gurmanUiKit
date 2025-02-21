import s from './header.module.scss'
import {Button} from "../button/button.tsx";
import logo from './logo.png'
import {Typography} from "../typography";
import {PhoneIcon} from "../../assets/icons/outline";

interface HeaderProps {
    variant?: 'pc' | 'tablet' | 'mobile'
}

export const Header = ({}:HeaderProps) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={s.menuListContainer}>
                <ul className={s.menuList}>
                    <Typography asChild size={'18'} color={'white'}>
                        <li>Главная</li>
                    </Typography>
                    <Typography asChild size={'18'} color={'white'}>
                        <li>Преимущества</li>
                    </Typography>
                    <Typography asChild size={'18'} color={'white'}>
                        <li>Партнеры</li>
                    </Typography>
                    <Typography asChild size={'18'} color={'white'}>
                        <li>Контакты</li>
                    </Typography>

                    <li>
                        <Button size={'smallIcon'} variant={'accent'} asChild={true}>
                            <a href={'google.com'}>
                                <PhoneIcon/>
                                СВЯЗАТЬСЯ
                            </a>
                        </Button>
                    </li>
                </ul>

            </div>
        </header>
    );
};