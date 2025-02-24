import { Typography } from "../typography";
import s from "./footer.module.scss";
import logo_img from "../../assets/images/logo/logo_l.png";
import inst_img from "../../assets/images/socials/instagram.png";
import whatsapp_img from "../../assets/images/socials/whatsapp.png";
import tg_img from "../../assets/images/socials/telegram.png";
import app_store_img from "../../assets/images/download-on-app-store.png";
import google_play_img from "../../assets/images/download-on-google-play.png";

export const Footer_PC = () => {
  return (
    <div className={s.footerWrapper}>
      <footer className={s.footer}>
        <nav className={s.footerNav}>
          <div className={s.navItemLogoSection}>
            <img src={logo_img} alt="Gurman" className={s.logo} />
            <Typography size="24" weight="bold">
              Развивайте бизнес вместе с нами!
            </Typography>
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
              Социальные сети
            </Typography>
            <div className={s.socials}>
              <a href="#">
                <img
                  className={s.socialIcon}
                  src={inst_img}
                  alt="Instagram"
                  height={60}
                />
              </a>
              <a href="#">
                <img
                  className={s.socialIcon}
                  src={whatsapp_img}
                  alt="Whatsapp"
                  height={60}
                />
              </a>
              <a href="#">
                <img
                  className={s.socialIcon}
                  src={tg_img}
                  alt="Telegram"
                  height={60}
                />
              </a>
            </div>
          </div>
          <div className={s.navItem}>
            <Typography size="24" weight="bold">
              Скачайте наше приложение:
            </Typography>
            <div className={s.downloadLinks}>
              <a href="#">
                <img
                  src={app_store_img}
                  alt="Download on App Store"
                  height={68}
                />
              </a>
              <a href="#">
                <img
                  src={google_play_img}
                  alt="Download on Google"
                  height={68}
                />
              </a>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer_PC;
