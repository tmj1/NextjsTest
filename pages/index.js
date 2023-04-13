import { Hero, Manage } from "../sections";

const heroProps = {
  image: { src: "/img/video.png", alt: "video file", width: 329, height: 525 },
  title: "Managed agency selection",
  subtitle: "Strengthen your onboarding process",
};

const manageProps = {
  image: {
    src: "/img/video.png",
    alt: "",
    width: 329,
    height: 525
  },
  title: "Managed agency selection",
  subtitle: "Strengthen your onboarding process",
};

export default function Home() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        <Hero {...heroProps} />
        <Manage { ...manageProps } />
        {/** Other sections */}
      </div>
    </>
  );
}
