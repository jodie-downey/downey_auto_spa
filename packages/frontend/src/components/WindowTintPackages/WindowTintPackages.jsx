import VideoCard from "../../components/VideoCard/VideoCard";
import "./WindowTintPackages.css";

function WindowTintPackages() {
  const tintVideos = [
    {
      id: "Wo8-2ZM9Wws",
      title: "Legal Ceramic Window Tint in Kentucky",
      description:
        "35% Front Roll Down Windows, 20% Rear Windows and Back Glass , 5% Sun Strip , *Optional: 70% CLEAR Full Windshield",
    },
    {
      id: "1CuV9_Uvpu4",
      title: "Ceramic Even Side Darkness/Light Windshield",
      description:
        "50% Full Windshield , 20% Front Roll downs to match back factory tint",
    },
    {
      id: "5YaQXFNqH2k",
      title: "Moderate Darkness with Sun Strip Window Tint",
      description:
        "5% Sun Strip , 20% Front Roll Downs , 20% Back Roll Downs and Back Glass *(laid over factory for  5%)*",
    },
    {
      id: "CFLEk7ua8fQ",
      title: "Carbon Maximum Darkness Moderate Heat Rejection Window Tint",
      description: "30% Front Windshield, 5% Roll Downs and Back Glass",
    },
    {
      id: "QZfbj1Xhiyc",
      title: "Factory Match Ceramic Window Tint and Clear Front Windshield",
      description:
        "20% Front Roll Downs to Match Factory Back Tint , 70% Clear Full Windshield *optional*",
    },
    {
      id: "Cf5BW4ZkZN4",
      title: "Moderate Darkness and Maximum Heat Rejection Ceramic Window Tint",
      description:
        "50% Windshield , 15% Front Windows ,15% Back Roll Downs and Back Glass *(laid over factory for just under 5%)*",
    },
    {
      id: "TeUNVBGspaY",
      title: "Maximum Darkness and Heat Rejection Ceramic Window Tint",
      description:
        "30% Front Windshield ,5% Front Roll Downs , 20% Back Roll Downs and Back Glass *(laid over factory for an even 5%)*",
    },
  ];

  return (
    <div className="page">
      <div className="page__content">
        <h2 className="window__tint-title">
          Discover Our Premium Window Tint Packages
        </h2>

        <div className="window__tint-description-card">
          <p className="window__tint-description">
            Percentages represent{" "}
            <strong>Visible Light Transmission (VLT)</strong>. Essentially, the
            lower the number, the less visible light coming through your glass.
            The higher the number, the more visible light coming through your
            glass.
          </p>
        </div>

        <div className="window__comparison-section">
          <h3 className="window__comparison-title">Ceramic vs Carbon</h3>
          <div className="window__comparison-grid">
            <p className="window__comparison-item">
              Ceramic: Significantly improved heat rejection in all VLTs (less
              heat passing through the glass)
            </p>
            <p className="window__comparison-item">
              Ceramic: Enhanced clarity from the inside when looking out
            </p>
            <p className="window__comparison-item">Both: Lifetime Warranty</p>
            <p className="window__comparison-item">
              Both: Look the same from the outside
            </p>
            <p className="window__comparison-item">
              Both: Carry a wide range of VLT options
            </p>
          </div>
        </div>

        <hr className="window__divider" />

        <section className="window__tint-grid">
          {tintVideos.map((v) => (
            <div className="video__card-wrapper" key={v.id}>
              <VideoCard
                videoId={v.id}
                title={v.title}
                description={v.description}
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default WindowTintPackages;
