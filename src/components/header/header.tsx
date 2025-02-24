import s from './header.module.scss'
import {Button} from "../button/button.tsx";
import logo from './logo.png'
import logo_mobile from './logo_mobile.png'
import logo_mobile_burger from './logo_mobile_burger.png'
import {Typography} from "../typography";
import {BurgerCloseIcon, BurgerIcon, PhoneIcon} from "../../assets/icons/outline";
import {useState} from "react";

interface HeaderProps {
    variant?: 'pc' | 'tablet' | 'mobile'
}

export const Header = ({variant}: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <header className={isMenuOpen ? s.headerBurgerMenu : s.header}>
            <div className={s.logo}>
                {variant === "mobile" && (
                    <button
                        className={s.burgerButton}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <BurgerCloseIcon/> : <BurgerIcon/>}
                    </button>
                )}
                <img
                    src={isMenuOpen ? logo_mobile_burger : variant === 'mobile' ? logo_mobile : logo}
                    alt="logo"
                />

            </div>
            {variant === 'pc' &&

                <nav className={s.menuListContainer}>
                    <ul className={s.menuList}>
                        <Typography asChild size={'18'} color={'white'} weight={'semi-bold'}>
                            <li>Главная</li>
                        </Typography>
                        <Typography asChild size={'18'} color={'white'} weight={'semi-bold'}>
                            <li>Преимущества</li>
                        </Typography>
                        <Typography asChild size={'18'} color={'white'} weight={'semi-bold'}>
                            <li>Партнеры</li>
                        </Typography>
                        <Typography asChild size={'18'} color={'white'} weight={'semi-bold'}>
                            <li>Контакты</li>
                        </Typography>

                        <li>
                            <Button size={'smallIcon'} variant={'accent'} asChild={true}>
                                <a href={'google.com'} className={s.button}>
                                    <PhoneIcon/>
                                    СВЯЗАТЬСЯ
                                </a>
                            </Button>
                        </li>
                    </ul>
                </nav>
            }
            {variant === 'tablet' &&
                <nav className={s.menuListContainer}>
                    <ul className={s.menuList}>
                        <Typography asChild size={'18'} color={'white'} weight={'semi-bold'}>
                            <li>Главная</li>
                        </Typography>
                        <Typography asChild size={'18'} color={'white'} weight={'semi-bold'}>
                            <li>Преимущества</li>
                        </Typography>
                        <Typography asChild size={'18'} color={'white'} weight={'semi-bold'}>
                            <li>Партнеры</li>
                        </Typography>
                        <Typography asChild size={'18'} color={'white'} weight={'semi-bold'}>
                            <li>Контакты</li>
                        </Typography>

                        <li>
                            <Button size={'smallIcon'} variant={'accent'} asChild={true}>
                                <a href={'google.com'}>
                                    <PhoneIcon width={'12px'}/>
                                    СВЯЗАТЬСЯ
                                </a>
                            </Button>
                        </li>
                    </ul>
                </nav>
            }
            {variant === 'mobile' && !isMenuOpen && (
                <Button size={'smallIcon'} variant={'accent'} asChild={true}>
                    <a href={'google.com'} style={{display: 'flex', gap: '4px'}}>
                        <PhoneIcon width={'12px'}/>
                        <Typography color={'white'} weight={'bold'} size={'14'}>
                            СВЯЗАТЬСЯ
                        </Typography>
                    </a>
                </Button>
            )}

            {isMenuOpen && (
                <nav className={s.menuListContainer}>
                    <ul className={s.menuList}>
                        <Typography asChild size={'14'} color={'primary'} weight={'semi-bold'}>
                            <li>Главная</li>
                        </Typography>
                        <Typography asChild size={'14'} color={'primary'} weight={'semi-bold'}>
                            <li>Преимущества</li>
                        </Typography>
                        <Typography asChild size={'14'} color={'primary'} weight={'semi-bold'}>
                            <li>Партнеры</li>
                        </Typography>
                        <Typography asChild size={'14'} color={'primary'} weight={'semi-bold'}>
                            <li>Контакты</li>
                        </Typography>
                    </ul>
                </nav>
            )}
        </header>
    );
};