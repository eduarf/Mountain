import "./Home.scss";
import { servicePhotos, photoAlbum } from "../../../data";
import Button from "../../components/button/Button";
import { useState } from "react";
import AlbumDetail from "../../components/albumDetail/AlbumDetail";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/* Service Section */}
      <div className="service-container">
        {servicePhotos.map((item, index) => {
          return (
            <div className="service" key={item.id}>
              <img
                src={item.photoUrl}
                alt="mountain"
                className="service__img"
              />
              <h2 className="service__header">Service {index + 1}</h2>
              <div className="service__filter"></div>
            </div>
          );
        })}
      </div>
      {/*  */}
      {/* For You Section */}
      <div className="for-you">
        <div className="for-you__left">
          <h1>Amazing Things for You</h1>
        </div>
        <div className="for-you__right">
          <p>
            Always write benefits over features. Mention all the benefits or
            services with some real examples. Focus on how you can help and
            benefit your user. Use simple words so that you don’t confuse
            people. Say as much in as few words as possible.
          </p>
          <p>Speak directly to users using you not I or we.</p>
          <Button buttonType="quinary" name="our history" />
        </div>
      </div>

      {/* Call To Action */}
      <div className="call-sec bg center">
        <h1>Call To Action</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <Button name="contact" buttonType="tertiary" />
      </div>
      {/*  */}

      {/* Photo albume */}
      <div className="album-container">
        {photoAlbum.map((item) => {
          return (
            <div key={item.id} className="album">
              <img src={item.url} alt="mountain" className="album__image" />
            </div>
          );
        })}
      </div>
      {/*  */}
      { isOpen && <AlbumDetail /> }
    </div>
  );
};

export default Home;
