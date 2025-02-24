import { Typography } from "../typography";
import s from "./footer_mobile.module.scss";
import logo_img from "../../assets/images/logo/logo_m.png";
import inst_img from "../../assets/images/socials/instagram.png";
import whatsapp_img from "../../assets/images/socials/whatsapp.png";
import tg_img from "../../assets/images/socials/telegram.png";
import app_store_img from "../../assets/images/download-on-app-store.png";
import google_play_img from "../../assets/images/download-on-google-play.png";

export const Footer_Mobile = () => {
  return (
    <div className={s.footerWrapper}>
      <footer className={s.footer}>
        <nav className={s.footerNav}>
          <div className={s.navItemLogoSection}>
            <img src={logo_img} alt="Gurman" className={s.logo} />
            <Typography size="20" weight="bold">
              Развивайте бизнес вместе с нами!
            </Typography>
          </div>
          <div className={s.navItem}>
            <Typography size="16" weight="bold">
              Навигация
            </Typography>
            <div className={s.links}>
              <a href="#">
                <Typography size="14">Главная</Typography>
              </a>
              <a href="#">
                <Typography size="14">Партнеры</Typography>
              </a>
              <a href="#">
                <Typography size="14">Связаться</Typography>
              </a>
              <a href="#">
                <Typography size="14">Преимущества</Typography>
              </a>
              <a href="#">
                <Typography size="14">Контакты</Typography>
              </a>
            </div>
          </div>
        </nav>

        <hr />

        <div className={s.footerBottom}>
          <div className={s.navItem}>
            <Typography size="16" weight="bold">
              Социальные сети
            </Typography>
            <div className={s.socials}>
              <a href="#">
                <img
                  className={s.socialIcon}
                  src={inst_img}
                  alt="Instagram"
                  height={40}
                />
              </a>
              <a href="#">
                <img
                  className={s.socialIcon}
                  src={whatsapp_img}
                  alt="Whatsapp"
                  height={40}
                />
              </a>
              <a href="#">
                <img
                  className={s.socialIcon}
                  src={tg_img}
                  alt="Telegram"
                  height={40}
                />
              </a>
            </div>
          </div>
          <div className={s.navItem}>
            <Typography size="16" weight="bold">
              Скачайте наше приложение:
            </Typography>
            <div className={s.downloadLinks}>
              <a href="#">
                <img
                  src={app_store_img}
                  alt="Download on App Store"
                  height={60}
                />
              </a>
              <a href="#">
                <img
                  src={google_play_img}
                  alt="Download on Google"
                  height={60}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer_Mobile;
