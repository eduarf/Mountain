import "./About.scss";
const About = () => {
  return (
    <div className="about">
      <div className="info">
        {/* Left */}
        <div className="info__left">
          <h1>Established in 1995</h1>
        </div>
        {/*  */}
        {/* Right */}
        <div className="info__right">
          <p className="bold">
            Tell people about what you, your expertise and experience. Think
            about what you would want to see on this page if you were looking at
            an about page. This is your chance to tell about how you are
            qualified to serve them.
          </p>
          <p className="normal">
            Nulla hendrerit metus et tincidunt tristique. Fusce molestie commodo
            mauris, vitae vestibulum tortor venenatis non. Pellentesque quis
            urna a magna bibendum volutpat a at nisl. Suspendisse finibus,
            tortor id gravida feugiat, nulla leo venenatis nisi, et aliquam quam
            ligula eget dui. Suspendisse lectus lorem, varius vel dapibus a,
            vestibulum a eros. Sed sed magna in neque commodo pretium. We look
            forward to your stay.
          </p>
          <h3>John & Steven</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
