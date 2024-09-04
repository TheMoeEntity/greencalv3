import styles from "./index.module.css";
import logo from "../../../../public/images/greencal_white.png";
import Image from "next/image";

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
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <div>
          <h2 style={{ marginLeft: "30px" }}>CONTACT INFO</h2>
          <div>
            <div>
              <i style={{ fontSize: "20px" }} className="fas fa-map-marker"></i>
            </div>
            <div>Opinion Nigeria LTD prince and princess ishieke Abakaliki</div>
          </div>

          <div>
            <div>
              <i style={{ fontSize: "20px" }} className="fa-solid fa-phone"></i>
            </div>
            <div>(+234) 811 617 7509 &nbsp; (234) 803 656 5354</div>
          </div>
          <div>
            <div style={{ width: "50px" }} className={styles.footerIcons}>
              <i
                style={{ fontSize: "20px" }}
                className="fa-solid fa-envelope"
              ></i>
            </div>
            <div>greencalfoundation@gmail.com</div>
          </div>
        </div>
        <div>
          <h2>OUR SERVICES</h2>
          <div>
            <i className="fa fa-angle-right"></i>
            Grants and Scholarships
          </div>
          <div>
            <i className="fa fa-angle-right"></i>
            Food and Education
          </div>
          <div>
            <i className="fa fa-angle-right"></i>
            Outreach
          </div>
          <div>
            <i className="fa fa-angle-right"></i>
            International Collaboration
          </div>
          <div>
            <i className="fa fa-angle-right"></i>
            Donations
          </div>
          <div>
            <i className="fa fa-angle-right"></i>
            Medical outreach
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
