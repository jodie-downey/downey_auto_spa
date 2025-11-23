import "./SocialLinks.css";

import {
  siFacebook,
  siInstagram,
  siTiktok,
  siYoutube,
} from "simple-icons/icons";

function SocialLinks() {
  return (
    <div className="social__links">
      {/* Facebook */}
      <a
        href="https://www.facebook.com/downeyautospa/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="social__links-facebook"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="white" /* or use currentColor */
        >
          <title>Facebook</title>
          <path d={siFacebook.path} />
        </svg>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/downeyautospa/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="white"
        >
          <title>Instagram</title>
          <path d={siInstagram.path} />
        </svg>
      </a>

      {/* TikTok */}
      <a
        href="https://www.tiktok.com/@downeyautospa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="white"
        >
          <title>TikTok</title>
          <path d={siTiktok.path} />
        </svg>
      </a>

      {/* YouTube */}
      <a
        href="https://www.youtube.com/@DowneyAutoSpa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="white"
        >
          <title>YouTube</title>
          <path d={siYoutube.path} />
        </svg>
      </a>
    </div>
  );
}

export default SocialLinks;
