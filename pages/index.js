import { Hero, Manage } from "../sections";

const heroProps = {
  image: {
    src: "/img/video.png",
    alt: "",
    width: 329,
    height: 525
  },
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
  cards: [
    {
      id: 1,
      title: "Brief",
      content:  "Complete <b>brief writing or simple guidance</b> on what to include, we,ve got you covered.",
      image: { src: "/img/brief.png", alt: "card1",  width: 60, height: 60 },
      color: "#F8F8F8",
      width: "90",
    },
    {
      id: 2,
      title: "Search",
      content:  "In-depth agency search covering; <b>criteria matching</b>, door knocking and due-dilligence vetting.",
      image: { src: "/img/search.png",  alt: "card2",  width: 60,  height: 60 },
    color: "#F0F0F0",
    width: "95",
  },
    {
      id: 3,
      title: "Pitch",
      content:  "Comprehensive: <b>pitch management</b>, including camms, diary management and pitch hosting.",
      image: { src: "/img/table.png",  alt: "card",  width: 60,  height: 60 },
    color: "#E0E0E0",
    width: "100",
  },
]
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
