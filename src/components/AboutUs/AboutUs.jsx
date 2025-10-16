import ServiceCard from "../ServiceCard/ServiceCard";
import services from "../../utils/services";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about__us-service-list">
      {services.map((service, index) => {
        return (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        );
      })}
    </div>
  );
}

export default AboutUs;
