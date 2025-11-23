import ServiceCard from "../ServiceCard/ServiceCard";
import services from "../../utils/services";
import "./Services.css";

function Services({ handleQuoteButtonClick }) {
  return (
    <section className="servces">
      <div className="services__container">
        <h1 className="services__title">
          Professional Auto Detailing, Ceramic Coating & Window Tinting in
          Southern Kentucky
        </h1>
        <p className="services__subtitle">
          At Downey Auto Spa, we bring premium detailing, long-lasting ceramic
          coatings, and precision window tinting to drivers across Franklin,
          Bowling Green, and Nashville. Every service is performed with expert
          care, industry-leading products, and a commitment to delivering
          results that look better, last longer, and protect your investment.
          Explore our services below to see how we can enhance and protect your
          vehicle.
        </p>
      </div>
      <div className="services-service-list">
        {services.map((service, index) => {
          return (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              onQuoteButtonClick={handleQuoteButtonClick}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Services;
