import "./Services.scss";
import { servicesItems, accordionItems } from "../../../data";
import Button from '../../components/button/Button';
import AccordionItem from "../../components/accordionItem/AccordionItem";

const Services = () => {
  return (
    <div className="services">
      <div className="services__top">
        {servicesItems.map((item, index) => {
          return <div className="service" key={item.id} style={index === 1 ? {direction: 'rtl'} : null}>
            <div className="service__left" style={index === 1 ? {alignItems: 'flex-end'} : null}>
              <h1>{item.header}</h1>
              <p style={index === 1 ? {direction: 'ltr'} : null}>{item.description}</p>
              <Button buttonType='quinary' name='contact' />
            </div>
            <div className="service__right">
              <img src={item.url} alt="mountain" />
            </div>
          </div>;
        })}
      </div>
      <div className="services__accordion">
        <div className="accordion-container">
          <h1>F.A.Q.</h1>
          <span>Lorem ipsum dolor sit amet.</span>
          {accordionItems.map((item) => {
            return <AccordionItem key={item.id} header={item.header} description={item.description} />
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
