import styles from "./index.module.css";
import logo from "../../../../public/images/greencal_white.png";
import Image from "next/image";
import Icon from "@/components/shared/Icons";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <div className={styles.logo}>
            <Image
              src={logo}
              style={{
                objectFit: "cover",
              }}
              alt="Greencal-foundation logo"
              fill
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p> Greencal Foundation: Where Compassion Meets Need</p>
          <strong>Opening Hours :</strong> Monday Sat: 8am to 5pm
          <div className={styles.icons}>
            <a href="https://instagram.com/greencalfoundation1" target="_blank">
              <Icon name="bxl-instagram" color="#71CD6D" size="20px" />
            </a>
          </div>
        </div>
        <div>
          <h2 style={{ marginLeft: "30px" }}>CONTACT INFO</h2>
          <div>
            <div>
              <Icon name="bxs-map-pin" color="#71CD6D" size="20px" />
            </div>
            <div>Opinion Nigeria LTD prince and princess ishieke Abakaliki</div>
          </div>

          <div>
            <div>
              <Icon name="bxs-phone-call" color="#71CD6D" size="20px" />
            </div>
            <div>(+234) 811 617 7509 &nbsp; (234) 803 656 5354</div>
          </div>
          <div>
            <div style={{ width: "50px" }} className={styles.footerIcons}>
              <Icon name="bx-envelope" color="#71CD6D" size="20px" />
            </div>
            <div>greencalfoundation@gmail.com</div>
          </div>
        </div>
        <div>
          <h2>OUR SERVICES</h2>
          <div className="flex items-center gap-3">
            <ChevronRightIcon className="text-sm size-4" />
            Grants and Eductation
          </div>
          <div className="flex items-center gap-3">
            <ChevronRightIcon className="text-sm size-4" />
            Food and Education
          </div>
          <div className="flex items-center gap-3">
            <ChevronRightIcon className="text-sm size-4" />
            Outreach
          </div>
          <div className="flex items-center gap-3">
            <ChevronRightIcon className="text-sm size-4" />
            International Collaboration
          </div>
          <div className="flex items-center gap-3">
            <ChevronRightIcon className="text-sm size-4" />
            Donation
          </div>
          <div className="flex items-center gap-3">
            <ChevronRightIcon className="text-sm size-4" />
           Medical Outreach
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <div>© {new Date().getFullYear()} Greencal Foundation.</div>
      </div>
    </div>
  );
};

export default Footer;
