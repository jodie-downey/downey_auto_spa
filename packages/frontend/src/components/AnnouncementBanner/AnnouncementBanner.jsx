import './AnnouncementBanner.css';

const MESSAGES = [
  '✨ NEW — Instant quoting and service advice with our custom chat agent',
  '💬 Click Chat in your bottom right corner',
  '🐛 Find a bug? Let us know at 270-776-3914',
];

const ticker = MESSAGES.join('     •     ');

export default function AnnouncementBanner() {
  return (
    <div className="announcement-banner">
      <div className="announcement-banner__track">
        <span>{ticker}</span>
        <span aria-hidden="true">{ticker}</span>
      </div>
    </div>
  );
}
