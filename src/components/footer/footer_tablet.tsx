import { Typography } from "../typography";
import s from "./footer.module.scss";
import logo_img from "../../assets/images/logo/logo.png";
import inst_img from "../../assets/images/socials/instagram.png";
import whatsapp_img from "../../assets/images/socials/whatsapp.png";
import tg_img from "../../assets/images/socials/telegram.png";
import app_store_img from "../../assets/images/download-on-app-store.png";
import google_play_img from "../../assets/images/download-on-google-play.png";

export const Footer_Tablet = () => {
  return (
    <div className={s.footerWrapper}>
      <footer className={s.footer}>
        <nav className={s.footerNav}>
          <div className={s.navItemLogoSection}>
            <img src={logo_img} alt="Gurman" className={s.logo} />
            <Typography size="24" weight="bold">
              Развивайте бизнес вместе с нами!
            </Typography>
            <div className={s.socials}>
              <a href="#">
                <img className={s.socialIcon} src={inst_img} alt="Instagram" />
              </a>
              <a href="#">
                <img
                  className={s.socialIcon}
                  src={whatsapp_img}
                  alt="Whatsapp"
                />
              </a>
              <a href="#">
                <img className={s.socialIcon} src={tg_img} alt="Telegram" />
              </a>
            </div>
          </div>
          <div className={s.navItem}>
            <Typography size="24" weight="bold">
              Навигация
            </Typography>
            <div className={s.links}>
              <a href="#">
                <Typography size="20">Главная</Typography>
              </a>
              <a href="#">
                <Typography size="20">Партнеры</Typography>
              </a>
              <a href="#">
                <Typography size="20">Связаться</Typography>
              </a>
              <a href="#">
                <Typography size="20">Преимущества</Typography>
              </a>
              <a href="#">
                <Typography size="20">Контакты</Typography>
              </a>
            </div>
          </div>
          <div className={s.navItem}>
            <Typography size="24" weight="bold">
              Партнерам
            </Typography>
            <div className={s.links}>
              <a href="#">
                <Typography size="20">Для вашего бизнеса</Typography>
              </a>
            </div>
          </div>
          <div className={s.navItem}>
            <Typography size="24" weight="bold">
              Клиентам
            </Typography>
            <div className={s.links}>
              <a href="#">
                <Typography size="20">Обратная связь</Typography>
              </a>
            </div>
          </div>
        </nav>
        <hr />
      </footer>
      <div className={s.footerBottom}>
        <Typography size="24" weight="bold">
          Скачайте наше приложение:
        </Typography>
        <div className={s.downloadLinks}>
          <a href="#">
            <img src={app_store_img} alt="Download on App Store" height={68} />
          </a>
          <a href="#">
            <img src={google_play_img} alt="Download on Google" height={68} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer_Tablet;
