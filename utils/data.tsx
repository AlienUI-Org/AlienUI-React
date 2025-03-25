"use client";
import { AlienUIIcons } from "./icons";
import { Comp } from "./comp";

type Variant = {
  name: string;
  description: string;
  designer: string;
  developer: string;
  code: string;
  code1: string;
  render: React.ReactNode;
};

type Component = {
  id: number;
  name: string;
  icon: React.ReactNode;
  description: string;
  variants: Variant[];
};

type Components = {
  [key: string]: Component;
};

export const components: Components = {
  accordion: {
    id: 1,
    name: "Accordion",
    icon: AlienUIIcons.AlienRiAliensFill,
    description: "An accordion component",
    variants: [
      {
        name: "Galaxy Accordion",
        description: "A default galactic accordion",
        designer: "",
        developer: "",
        code: `import React, { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionItems = [
    {
      title: "Is AlienUI React a component library?",
      content:
        "Yes, It is a self-hosted component library but you do not install it as a dependency. It is not available via npm like other traditional component library. Pick the components you need. " +
        "Copy and paste the code into your project and customize to your needs. The code is yours.",
    },
    {
      title: "Why copy/paste and not packaged as a dependency?",
      content:
        "The goal is to give you full control over your components, enabling you to decide their structure and styling. By starting with sensible defaults, you can customize them to fit your needs. Unlike packaged npm components, where styles are tightly coupled to implementation, separating design from functionality ensures flexibility and adaptability.",
    },
    {
      title: "Do you plan to publish it as an npm package?",
      content: "No. We have no plans to publish it as an npm package.",
    },
    {
      title: "Which frameworks are supported?",
      content: "React and Next Js.",
    },
    {
      title: "Can I use this in my project?",
      content:
        "Yes, you can use AlienUI React in your React Native project. The code is yours. But hey, let us know if you do. We'd love to see what you build.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="w-full lg:w-[450px] flex flex-col items-center justify-center px-4 my-16">
      <div className="w-full max-w-7xl mx-auto border bg-white">
        {accordionItems.map((item, index) => (
          <div key={index} className="border-b last:border-b-0 border-gray-300">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left py-4 px-6 flex justify-between items-center"
            >
              <span className="text-lg font-medium">{item.title}</span>
              <span
                className={\`transform transition-transform \${openIndex === index ? "rotate-180" : ""}\`}
              >
                ▼
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4">
                <p className="text-gray-700">{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;
`,
        code1: `import React from "react";
import Accordion from "./components/comp/Accordion/GalaxyAccordion";

const App = () => {
  return (
    <div>
      <Accordion />
    </div>
  );
};

export default App;
`,
        render: <Comp.GalaxyAccordion />,
      },
    ],
  },
  alert: {
    id: 2,
    name: "Alert",
    icon: AlienUIIcons.AlienBug,
    description:
      "An alert component with multiple types that provides feedback",
    variants: [
      {
        name: "Galaxy Alert",
        description:
          "A galactic alert for feedbacks. This variant takes three props: type, title, message.",
        designer: "",
        developer: "",
        code: `import React from "react";
import { FaCheckCircle, FaExclamationTriangle, FaTimesCircle } from "react-icons/fa";

const Alert = ({ type = "success", title, message }) => {
  const alertStyles = {
    success: {
      bgColor: "bg-green-50",
      borderColor: "border-green-400",
      icon: <FaCheckCircle className="text-green-600 w-5 h-5" />,
      textColor: "text-gray-900"
    },
    warning: {
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-400",
      icon: <FaExclamationTriangle className="text-yellow-600 w-5 h-5" />,
      textColor: "text-gray-900"
    },
    failure: {
      bgColor: "bg-red-50",
      borderColor: "border-red-400",
      icon: <FaTimesCircle className="text-red-600 w-5 h-5" />,
      textColor: "text-gray-900"
    }
  };

  const { bgColor, borderColor, icon, textColor } = alertStyles[type] || alertStyles.success;

  return (
    <div className={\`rounded-xl border \${borderColor} \${bgColor} p-4 w-[250px]\`}>
      <div className="flex items-start gap-2">
        {icon}
        <div className="flex-1">
          <strong className={\`block text-sm font-semibold \${textColor}\`}>{title}</strong>
          <p className="mt-1 text-xs text-gray-700">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
`,
        code1: `import React from "react";
import Alert from "./components/Comp/Alert/GalaxyAlert";

const App = () => {
  return (
    <div>
      <Alert />
      {/* 
      <Alert type="success" title="Success!" message="Everything is on track." />
      <Alert type="warning" title="Warning!" message="Check your settings." />
      <Alert type="failure" title="Error!" message="Something went wrong." /> 
      */}
    </div>
  );
};

export default App;
`,

        render: <Comp.GalaxyAlert />,
      },
      {
        name: "Krythar Wail Alert",
        description:
          "A galactic alert that provides critical feedback in the galaxy. This variant takes three props: type, title, message.",
        designer: "",
        developer: "",
        code: `import React from "react";

const Alert = ({ type = "success", title, message }) => {
  const alertStyles = {
    success: {
      bgColor: "bg-green-50",
      borderColor: "border-green-500",
      border: "border-l-4"
    },
    warning: {
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-500",
      border: "border-l-4"
    },
    failure: {
      bgColor: "bg-red-50",
      borderColor: "border-red-500",
      border: "border-l-4"
    }
  };

  const { bgColor, borderColor, border } = alertStyles[type] || alertStyles.success;

  return (
    <div className={\`rounded-xl \${border} \${borderColor} \${bgColor} p-4 w-[300px]\`}>
      <strong className="block text-lg font-bold">{title}</strong>
      <p className="mt-1 text-sm">{message}</p>
    </div>
  );
};

export default Alert;
`,
        code1: `import React from "react";
import Alert from "./components/comp/Alert/KrytharWailAlert";

const App = () => {
  return (
    <div>
      <Alert />
      {/* 
      <Alert type="success" title="Success!" message="Everything is on track." />
      <Alert type="warning" title="Warning!" message="Check your settings." />
      <Alert type="failure" title="Error!" message="Something went wrong." /> 
      */}
    </div>
  );
};

export default App;
`,
        render: <Comp.KrytharWailAlert />,
      },
    ],
  },
  avatar: {
    id: 3,
    name: "Avatar",
    icon: AlienUIIcons.AlienSkull,
    description: "A celestial avatar for profile representation",
    variants: [
      {
        name: "Galaxy Avatar",
        description: "An avatar for identification",
        designer: "",
        developer: "",
        code: `import React from "react";

const Avatar = () => {
  return (
    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex justify-center items-center">
      <img
        src="/images/alien1.avif"
        alt="Avatar Image"
        width={64}
        height={64}
        className="object-cover"
      />
    </div>
  );
};

export default Avatar;
`,
        code1: `import React from "react";
import Avatar from "./components/comp/Avatar/GalaxyAvatar";

const App = () => {
  return (
    <div>
      <Avatar />
    </div>
  );
};

export default App;
`,
        render: <Comp.GalaxyAvatar />,
      },
      {
        name: "Earth Avatar",
        description: "An avatar for profile identification on earth",
        designer: "",
        developer: "",
        code: `import React from "react";
import { PiAlienBold } from "react-icons/pi";

const Avatar = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex justify-center items-center">
        <img
          src="/images/alien1.avif"
          alt="Avatar Image"
          width={64}
          height={64}
          className="object-cover"
        />
      </div>
      <div>
        <p className="text-xs text-gray-700">Good morning</p>
        <div className="flex items-center">
          <p className="font-semibold text-base mr-1">Zyphorax</p>
          <PiAlienBold />
        </div>
      </div>
    </div>
  );
};

export default Avatar;
`,
        code1: `import React from "react";
import Avatar from "./components/comp/Avatar/EarthAvatar";

const App = () => {
  return (
    <div>
      <Avatar />
    </div>
  );
};

export default App;
`,
        render: <Comp.EarthAvatar />,
      },
    ],
  },
  badge: {
    id: 4,
    name: "Badge",
    icon: AlienUIIcons.AlienFire,
    description:
      "A customizable badge component with multiple variants for status indication",
    variants: [
      {
        name: "Galaxy Badge",
        description:
          "An alien badge for galactic verification. This variant takes five props: text, backgroundColor, textColor, width, padding.",
        designer: "",
        developer: "",
        code: `import React from "react";

const Badge = ({
  text = "Badge",
  bgColor = "bg-black",
  textColor = "text-white",
  width = "w-[80px]",
  padding = "px-2 py-1"
}) => {
  return (
    <div className={\`rounded-full flex justify-center items-center \${bgColor} \${width} \${padding}\`}>
      <p className={\`text-xs \${textColor}\`}>{text}</p>
    </div>
  );
};

export default Badge;
`,
        code1: `import React from "react";
import Badge from "./components/comp/Badge/GalaxyBadge";

const App = () => {
  return (
    <div>
      <Badge />
      {/*
      <Badge text="New" bgColor="bg-green-500" />
      <Badge text="Sale" bgColor="bg-red-500" border="border border-red-700" />
      <Badge text="Info" bgColor="bg-blue-500" width="w-24" />
      */}
    </div>
  );
};

export default App;
`,
        render: <Comp.GalaxyBadge />,
      },
    ],
  },
  breadcrumb: {
    id: 5,
    name: "Breadcrumb",
    icon: AlienUIIcons.AlienWiAlien,
    description:
      "A customizable breadcrumb component with different variants for navigation.",
    variants: [
      {
        name: "Galaxy Breadcrumb",
        description: "A breadcrumb for navigation, in the galaxy.",
        designer: "",
        developer: "",
        code: `import React from "react";
import { HiChevronRight } from "react-icons/hi";

const Breadcrumb = () => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1 text-sm text-gray-600">
        <li>
          <a href="#" className="block transition hover:text-gray-700">
            Home
          </a>
        </li>
        <li className="rtl:rotate-180">
          <HiChevronRight className="w-4 h-4" />
        </li>
        <li>
          <a href="#" className="block transition hover:text-gray-700">
            Nebula
          </a>
        </li>
        <li className="rtl:rotate-180">
          <HiChevronRight className="w-4 h-4" />
        </li>
        <li>
          <a href="#" className="block transition hover:text-gray-700">
            Galaxy
          </a>
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
`,
        code1: `import React from "react";
import Breadcrumb from "./components/comp/Breadcrumb/GalaxyBreadcrumb";

const App = () => {
  return (
    <div>
      <Breadcrumb />
    </div>
  );
};

export default App;
`,
        render: <Comp.GalaxyBreadcrumb />,
      },
      {
        name: "Earth Breadcrumb",
        description: "A breadcrumb for navigating on the earth surface.",
        designer: "",
        developer: "",
        code: `import React from "react";
import { LuSlash } from "react-icons/lu";

const Breadcrumb = () => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1 text-sm text-gray-600">
        <li>
          <a href="#" className="block transition hover:text-gray-700">
            Home
          </a>
        </li>
        <li className="rtl:rotate-180">
          <LuSlash className="w-4 h-4 text-black" />
        </li>
        <li>
          <a href="#" className="block transition hover:text-gray-700">
            Nebula
          </a>
        </li>
        <li className="rtl:rotate-180">
          <LuSlash className="w-4 h-4 text-black" />
        </li>
        <li>
          <a href="#" className="block transition hover:text-gray-700">
            Galaxy
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
`,
        code1: `import React from "react";
import Breadcrumb from "./components/comp/Breadcrumb/EarthBreadcrumb";

const App = () => {
  return (
    <div>
      <Breadcrumb />
    </div>
  );
};

export default App;
`,
        render: <Comp.EarthBreadcrumb />,
      },
    ],
  },
  button: {
    id: 6,
    name: "Button",
    icon: AlienUIIcons.AlienReddit,
    description:
      "A customizable button component to trigger an action or event.",
    variants: [
      {
        name: "Galaxy Button",
        description:
          "A button with a solid background, used for primary actions. This variant takes 3 props: type, label, onPress.",
        designer: "",
        developer: "",
        code: `import React from "react";

const Button = ({ type = "default", label = "Galaxy Button", onClick }) => {
  const buttonStyles = {
    default: {
      bgColor: "bg-black",
      textColor: "text-white",
      border: "",
    },
    destructive: {
      bgColor: "bg-red-500",
      textColor: "text-white",
      border: "",
    },
    outline: {
      bgColor: "bg-transparent",
      textColor: "text-black",
      border: "border border-black",
    },
    disabled: {
      bgColor: "bg-gray-400",
      textColor: "text-gray-200",
      border: "",
      disabled: true,
    },
  };

  const { bgColor, textColor, border, disabled } = buttonStyles[type] || buttonStyles.default;

  return (
    <button
      className={\`py-2 px-4 rounded-md flex items-center justify-center w-[200px] \${bgColor} \${border}\`}
      onClick={!disabled ? onClick : null}
      disabled={disabled}
    >
      <span className={\`text-base \${textColor}\`}>{label}</span>
    </button>
  );
};

export default Button;
`,
        code1: `import React from "react";
import Button from "./components/comp/Button/GalaxyButton";

const App = () => {
  return (
    <div>
      <Button />
      {/*
      <Button type="destructive" label="Delete" />
      <Button type="outline" label="Outline Button" />
      <Button type="disabled" label="Disabled" />
      */}
    </div>
  );
};

export default App;
`,
        render: <Comp.GalaxyButton />,
      },
      {
        name: "Earth Button",
        description:
          "A button with an icon, used for secondary actions. This variant takes 5 props: type, label, icon, iconColor, onPress.",
        designer: "",
        developer: "",
        code: `import React from "react";
import { PiAlienThin } from "react-icons/pi";

const Button = ({ 
  label = "Earth Button", 
  type = "default", 
  icon: Icon = PiAlienThin, 
  iconColor, 
  onClick 
}) => {
  const buttonStyles = {
    default: {
      bgColor: "bg-black",
      textColor: "text-white",
      border: "border border-black",
      iconColor: "white",
    },
    destructive: {
      bgColor: "bg-red-500",
      textColor: "text-white",
      border: "border border-red-700",
      iconColor: "white",
    },
    outline: {
      bgColor: "bg-transparent",
      textColor: "text-black",
      border: "border border-black",
      iconColor: "black",
    },
    disabled: {
      bgColor: "bg-gray-400",
      textColor: "text-gray-200",
      border: "border border-gray-500",
      iconColor: "gray",
      disabled: true,
    }
  };

  const { bgColor, textColor, border, disabled } =
    buttonStyles[type] || buttonStyles.default;

  return (
    <button
      className={\`py-2 px-4 rounded-md flex items-center justify-center w-[200px] \${bgColor} \${border}\`}
      onClick={!disabled ? onClick : null}
      disabled={disabled}
    >
      <span className={\`text-base \${textColor} mr-1\`}>{label}</span>
      {Icon && <Icon className={\`text-xl \${iconColor || buttonStyles[type].iconColor}\`} />} 
    </button>
  );
};

export default Button;
`,
        code1: `import React from "react";
import Button from "./components/comp/Button/EarthButton";

const App = () => {
  return (
    <div>
      <Button />
      {/*
      <Button type="destructive" label="Delete" icon="trash-can-outline" />
      <Button type="outline" label="Outline Button" icon="pencil-outline" />
      <Button type="disabled" label="Disabled" />
      <Button label="Custom Icon" icon="rocket-launch-outline" iconColor="blue" />
      */}
    </div>
  );
};

export default App;
`,
        render: <Comp.EarthButton />,
      },
    ],
  },
  card: {
    id: 7,
    name: "Card",
    icon: AlienUIIcons.AlienAlienware,
    description: "A customizable card component with different variant.",
    variants: [
      {
        name: "Galaxy Card",
        description: "A ticket into the galaxy.",
        designer: "",
        developer: "",
        code: `import React from "react";

const Card = () => {
  return (
    <section className="overflow-hidden rounded-lg shadow w-[320px]">
      <img
        alt=""
        src="/images/alien1.avif"
        width={100}
        height={100}
        className="h-56 w-full object-cover"
      />

      <div className="bg-white p-4 sm:p-6">
        <time dateTime="1997-07-07" className="block text-xs text-gray-500">
          07th July 1997
        </time>

        <a href="#">
          <h3 className="mt-0.5 text-lg text-gray-900">
            Exploring the Unknown: The Alien Encounter Chronicles
          </h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          Deep in the vastness of space lies a story untold—of strange beings,
          otherworldly landscapes, and encounters that defy imagination.
          Discover the mysteries of alien civilizations, their technology, and
          the secrets they carry across galaxies.
        </p>
      </div>
    </section>
  );
};

export default Card;
`,
        code1: `import React from "react";
import Card from "./components/comp/Card/GalaxyCard";

const App = () => {
  return (
    <div>
      <Card />
    </div>
  );
};

export default App;
`,
        render: <Comp.GalaxyCard />,
      },
      {
        name: "Earth Card",
        description: "A ticket for navigating on the earth surface.",
        designer: "",
        developer: "",
        code: `import React from "react";

const Card = () => {
  return (
    <section className="relative overflow-hidden rounded-lg shadow w-[320px]">
      <img
        alt=""
        src="/images/alien1.avif"
        width={100}
        height={100}
        className="absolute h-full w-full object-cover"
      />

      <div className="relative pt-32 sm:pt-48 lg:pt-64">
        <div className="p-4 sm:p-6">
          <time dateTime="1997-07-07" className="block text-xs text-white/90">
            07th July 1997
          </time>

          <a href="#">
            <h3 className="mt-0.5 text-lg text-white">
              Exploring the Unknown: The Alien Encounter Chronicles
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
            Deep in the vastness of space lies a story untold—of strange beings,
            otherworldly landscapes, and encounters that defy imagination.
            Discover the mysteries of alien civilizations, their technology, and
            the secrets they carry across galaxies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Card;
`,
        code1: `import React from "react";
import Card from "./components/comp/Card/EarthCard";

const App = () => {
  return (
    <div>
      <Card />
    </div>
  );
};

export default App;
`,
        render: <Comp.EarthCard />,
      },
      {
        name: "Jupiter Card",
        description: "A VIP ticket for entering jupiter.",
        designer: "",
        developer: "",
        code: `import React from "react";
import { MdJoinInner } from "react-icons/md";

const Card = () => {
  return (
    <div className="flex flex-col items-center text-center bg-black p-7 shadow-md w-[300px] h-72">
      <MdJoinInner className="w-14 h-14 pb-4 text-white" />
      <h3 className="text-lg font-bold text-white">
        Open-Source Contributions
      </h3>
      <p className="text-white mt-2 text-center">
        Alien UI is open-source, inviting developers to collaborate and share
        components to improve mobile app design.
      </p>
    </div>
  );
};

export default Card;
`,
        code1: `import React from "react";
import Card from "./components/comp/Card/JupiterCard";

const App = () => {
  return (
    <div>
      <Card />
    </div>
  );
};

export default App;
`,
        render: <Comp.JupiterCard />,
      },
      {
        name: "Pluto Card",
        description: "A small regular ticket into pluto.",
        designer: "",
        developer: "",
        code: `import React from "react";
import { FaChartBar } from "react-icons/fa";

const Card = () => {
  return (
    <div className="w-3/5 h-52 bg-black p-6">
      <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mb-6">
        <FaChartBar className="text-black" size={24} />
      </div>
      <p className="text-lg text-white font-bold">
        Bar chart showing energy usage
      </p>
    </div>
  );
};

export default Card;
`,
        code1: `import React from "react";
import Card from "./components/comp/Card/PlutoCard";

const App = () => {
  return (
    <div>
      <Card />
    </div>
  );
};

export default App;
`,
        render: <Comp.PlutoCard />,
      },
    ],
  },
  carousel: {
    id: 8,
    name: "Carousel",
    icon: AlienUIIcons.AlienPiAlienDuotone,
    description: "A customizable carousel component for swiping.",
    variants: [
      {
        name: "Galaxy Carousel",
        description: "A carousel for swiping the galaxy.",
        designer: "",
        developer: "",
        code: `import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [1, 2, 3, 4, 5];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-72 max-w-sm mx-auto flex flex-col items-center">
      <div className="relative w-full h-48 flex items-center justify-center border shadow text-4xl font-bold rounded">
        {slides[currentIndex]}
      </div>

      <div className="mt-4 flex justify-between w-full">
        <button
          onClick={prevSlide}
          className="flex items-center justify-center w-10 h-10 border rounded-full"
        >
          <AiOutlineArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="flex items-center justify-center w-10 h-10 border rounded-full"
        >
          <AiOutlineArrowRight />
        </button>
      </div>

      <div className="flex gap-2 mt-4">
        {slides.map((_, index) => (
          <span
            key={index}
            className={\`block w-3 h-3 border rounded-full \${
              index === currentIndex ? "bg-black" : "bg-white"
            }\`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
`,
        code1: `import React from "react";
import Carousel from "./components/comp/Carousel/GalaxyCarousel";

const App = () => {
  return (
    <div>
      <Carousel />
    </div>
  );
};

export default App;
`,
        render: <Comp.GalaxyCarousel />,
      },
    ],
  },
  checkbox: {
    id: 9,
    name: "Checkbox",
    icon: AlienUIIcons.AlienStare,
    description:
      "A customizable checkbox component to toggle options on and off.",
    variants: [
      {
        name: "Galaxy Checkbox",
        description: "An intergalactic checkbox for cosmic forms.",
        designer: "",
        developer: "",
        code: `import React from "react";

const Checkbox = () => {
  return (
    <div>
      <fieldset>
        <legend className="sr-only">Checkboxes</legend>

        <div className="space-y-2">
          <label
            htmlFor="Option1"
            className="flex cursor-pointer items-start gap-4"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Option1"
              />
            </div>
            <div>
              <strong className="font-medium text-gray-900">John Clapton</strong>
            </div>
          </label>

          <label
            htmlFor="Option2"
            className="flex cursor-pointer items-start gap-4"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Option2"
              />
            </div>
            <div>
              <strong className="font-medium text-gray-900">Peter Mayer</strong>
            </div>
          </label>

          <label
            htmlFor="Option3"
            className="flex cursor-pointer items-start gap-4"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Option3"
              />
            </div>
            <div>
              <strong className="font-medium text-gray-900">Eric King</strong>
            </div>
          </label>
        </div>
      </fieldset>
    </div>
  );
};

export default Checkbox;
`,
        code1: `import React from "react";
import CheckBox from "./components/comp/CheckBox/GalaxyCheckBox";

const App = () => {
  return (
    <div>
      <CheckBox />
    </div>
  );
};

export default App;
`,
        render: <Comp.GalaxyCheckbox />,
      },
    ],
  },
  dropdown: {
    id: 10,
    name: "Dropdown",
    icon: AlienUIIcons.AlienTbAlienFilled,
    description: "A customizable dropdown component.",
    variants: [
      {
        name: "Galaxy Dropdown",
        description: "A intergalactic dropdown for selection.",
        designer: "",
        developer: "",
        code: `import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ["Galaxy Dropdown", "Nebula Dropdown", "Earth Dropdown"];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-64">
      <label className="block text-gray-700 mb-2">Choose an option</label>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white text-gray-700 border border-gray-300 rounded-t-md px-4 py-2 text-left flex items-center justify-between"
      >
        {selectedOption || "Select an option"}
        <span className={\`w-5 h-5 transition-transform \${isOpen ? "rotate-180" : ""}\`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-b-md shadow-lg">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
`,
        code1: `import React from "react";
import Dropdown from "./components/comp/Dropdown/GalaxyDropdown";

const App = () => {
  return (
    <div>
      <Dropdown />
    </div>
  );
};

export default App;
`,
        render: <Comp.GalaxyDropdown />,
      },
    ],
  },
  input: {
    id: 11,
    name: "Input",
    icon: AlienUIIcons.AlienEgg,
    description: "A collection of cosmic-themed input components",
    variants: [
      {
        name: "Nebulon Input",
        description: "An input field for entering text in the Nebulon system",
        designer: "",
        developer: "",
        code: `import React from "react";

const Input = () => {
  return (
    <div>
      <input
        className="border border-gray-600 rounded-md p-2"
        placeholder="Nebulon Input..."
      />
    </div>
  );
};

export default Input;
`,
        code1: `import React from "react";
import Input from "./components/comp/Input/NebulonInput";

const App = () => {
  return (
    <div>
      <Input />
    </div>
  );
};

export default App;
`,
        render: <Comp.NebulonInput />,
      },
      {
        name: "Earth Input",
        description: "An input field for entering text on the earth surface",
        designer: "",
        developer: "",
        code: `import React from "react";

const Input = () => {
  return (
    <div>
      <input
        className="border-b border-b-gray-600 p-2"
        placeholder="Earth Input..."
      />
    </div>
  );
};

export default Input;
`,
        code1: `import React from "react";
import Input from "./components/comp/Input/EarthInput";

const App = () => {
  return (
    <div>
      <Input />
    </div>
  );
};

export default App;
`,
        render: <Comp.EarthInput />,
      },
      {
        name: "Vortex Input",
        description: "A mesmerizing input field with cosmic vortex animation",
        designer: "",
        developer: "",
        code: `import React, { useState } from "react";
import { GiVortex } from "react-icons/gi";

const Input = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-72">
      <div
        className={\`
          absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
          rounded-lg opacity-20 blur-lg transition-all duration-300
          \${isFocused ? "scale-105 opacity-30" : "scale-100"}
        \`}
      />
      
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Enter galactic coordinates..."
          className={\`
            w-full bg-black/80 text-white px-4 py-2 rounded-lg
            border border-purple-500/30 outline-none
            placeholder-gray-400 transition-all duration-300
            focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20
          \`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <GiVortex
          className={\`
            absolute right-3 w-5 h-5 transition-all duration-300
            \${isFocused ? "text-purple-400 rotate-180" : "text-gray-400"}
          \`}
        />
      </div>
    </div>
  );
};

export default Input;
`,
        code1: `import React from "react";
import Input from "./components/comp/Input/VortexInput";

const App = () => {
  return (
    <div>
      <Input />
    </div>
  );
};

export default App;
`,
        render: <Comp.VortexInput />,
      },
    ],
  },
  modal: {
    id: 12,
    name: "Modal",
    icon: AlienUIIcons.AlienSkull,
    description:
      "A customizable modal that highlights key information or actions.",
    variants: [
      {
        name: "Galaxy Modal",
        description:
          "A default galactic modal for highlighting key information in the galaxy.",
        designer: "",
        developer: "",
        code: `import React, { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={openModal}
        className="px-4 py-2 text-white bg-black rounded-md"
      >
        Open Modal
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-md p-6 bg-white rounded-md shadow-lg">
            <div className="flex items-center justify-between pb-4 border-b">
              <h2 className="text-xl font-semibold">Galaxy Modal</h2>
              <button onClick={closeModal} className="text-black">
                ✖
              </button>
            </div>

            <div className="py-4">
              <p className="text-gray-600">
                This is a default galaxy modal component that highlights key information.
              </p>
            </div>
            <div className="flex justify-end pt-4 border-t">
              <button
                onClick={closeModal}
                className="px-4 py-2 text-white bg-black rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;

`,
        code1: `import React from "react";
import Modal from "./components/comp/Modal/GalaxyModal";

const App = () => {
  return (
    <div>
      <Modal />
    </div>
  );
};

export default App;
`,
        render: <Comp.GalaxyModal />,
      },
    ],
  },
  navbar: {
    id: 13,
    name: "Navbar",
    icon: AlienUIIcons.AlienReddit,
    description: "A customizable navbar with navigation links and buttons.",
    variants: [
      {
        name: "Galaxy Navbar",
        description: "A default galactic navbar.",
        designer: "",
        developer: "",
        code: `import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white sticky top-0 z-10 p-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <a href="/" className="text-xl font-bold">AlienX</a>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
          <ul className="hidden md:flex space-x-6">
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className={\`\${isOpen ? "block" : "hidden"} md:hidden mt-4\`}>
          <ul className="flex flex-col space-y-4">
            <li><a href="/home" onClick={toggleMenu}>Home</a></li>
            <li><a href="/about" onClick={toggleMenu}>About</a></li>
            <li><a href="/services" onClick={toggleMenu}>Services</a></li>
            <li><a href="/contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
`,
        code1: `import React from "react";
import Navbar from "./components/comp/Navbar/GalaxyNavbar";

const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;
`,
        render: <Comp.GalaxyNavbar />,
      },
      {
        name: "Earth Navbar",
        description: "A navbar component with buttons.",
        designer: "",
        developer: "",
        code: `import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white sticky top-0 z-10 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold">AlienX</a>
        <ul className="hidden md:flex space-x-6 mx-auto">
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="hidden md:flex space-x-4">
          <button className="bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-black">Login</button>
          <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300">Sign Up</button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      <div className={\`\${isOpen ? 'block' : 'hidden'} md:hidden mt-4\`}>
        <ul className="flex flex-col space-y-4">
          <li><a href="/home" onClick={toggleMenu}>Home</a></li>
          <li><a href="/about" onClick={toggleMenu}>About</a></li>
          <li><a href="/services" onClick={toggleMenu}>Services</a></li>
          <li><a href="/contact" onClick={toggleMenu}>Contact</a></li>
          <div className="flex flex-col space-y-2 mt-4">
            <button className="bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-black">Login</button>
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300">Sign Up</button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
`,
        code1: `import React from "react";
import Navbar from "./components/comp/Navbar/EarthNavbar";

const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;
`,
        render: <Comp.EarthNavbar />,
      },
    ],
  },
  notification: {
    id: 14,
    name: "Notification",
    icon: AlienUIIcons.AlienStare,
    description:
      "A customizable notification component with space-themed variants",
    variants: [
      {
        name: "Nebula Notification",
        description: "A cosmic notification with ethereal purple gradients",
        designer: "",
        developer: "",
        code: `import React from "react";
import { GiAlienStare } from "react-icons/gi";

const Notification = () => {
  return (
    <div className="w-80 bg-gradient-to-r from-purple-900 via-indigo-900 to-black p-4 rounded-lg shadow-lg border border-purple-500/20">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 bg-purple-500/20 p-2 rounded-full">
          <GiAlienStare className="w-6 h-6 text-purple-400 animate-pulse" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <p className="text-purple-300 font-semibold">Alien Signal Detected</p>
            <span className="text-purple-400/60 text-xs">Now</span>
          </div>
          <p className="mt-1 text-sm text-purple-200/80">
            Unknown transmission received from the Andromeda galaxy. Decoding sequence initiated.
          </p>
          <div className="mt-3 flex items-center space-x-3">
            <button className="px-3 py-1 text-xs font-medium text-purple-200 bg-purple-500/20 rounded-full hover:bg-purple-500/30 transition-colors">
              Decode Now
            </button>
            <button className="px-3 py-1 text-xs font-medium text-purple-300/70 hover:text-purple-200 transition-colors">
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
`,
        code1: `import React from "react";
import Notification from "./components/comp/Notification/NebulaNotification";

const App = () => {
  return (
    <div>
      <Notification />
    </div>
  );
};

export default App;
`,
        render: <Comp.NebulaNotification />,
      },
    ],
  },
  pagination: {
    id: 15,
    name: "Pagination",
    icon: AlienUIIcons.AlienCrackedAlienSkull,
    description: "A customizable pagination component.",
    variants: [
      {
        name: "Galaxy Pagination",
        description: "A default galactic pagination in the galaxy.",
        designer: "",
        developer: "",
        code: `import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Pagination = () => {
  return (
    <div>
      <ol className="flex justify-center gap-1 text-xs font-medium">
        <li>
          <a
            href="#"
            className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
          >
            <span className="sr-only">Prev Page</span>
            <FiChevronLeft className="size-4" />
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
          >
            1
          </a>
        </li>
        <li className="block size-8 rounded border bg-black text-center leading-8 text-white">
          2
        </li>
        <li>
          <a
            href="#"
            className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
          >
            3
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
          >
            4
          </a>
        </li>
        <li>
          <a
            href="#"
            className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
          >
            <span className="sr-only">Next Page</span>
            <FiChevronRight className="size-4" />
          </a>
        </li>
      </ol>
    </div>
  );
};

export default Pagination;
`,
        code1: `import React from "react";
import Pagination from "./components/comp/Pagination/GalaxyPagination";

const App = () => {
  return (
    <div>
      <Pagination />
    </div>
  );
};

export default App;
`,
        render: <Comp.GalaxyPagination />,
      },
      {
        name: "Mars Pagination",
        description: "Paginating to mars.",
        designer: "",
        developer: "",
        code: `import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Pagination = () => {
  return (
    <div className="inline-flex items-center justify-center gap-3">
      <a
        href="#"
        className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
      >
        <span className="sr-only">Prev Page</span>
        <FiChevronLeft className="size-4" />
      </a>

      <p className="text-xs text-gray-900">
        1<span className="mx-0.25">/</span>47
      </p>

      <a
        href="#"
        className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
      >
        <span className="sr-only">Next Page</span>
        <FiChevronRight className="size-4" />
      </a>
    </div>
  );
};

export default Pagination;
`,
        code1: `import React from "react";
import Pagination from "./components/comp/Pagination/MarsPagination";

const App = () => {
  return (
    <div>
      <Pagination />
    </div>
  );
};

export default App;
`,
        render: <Comp.MarsPagination />,
      },
    ],
  },
  popover: {
    id: 16,
    name: "Popover",
    icon: AlienUIIcons.AlienPiAlienBold,
    description: "A customizable popover component.",
    variants: [
      {
        name: "Galaxy Popover",
        description: "A default popover that displays rich content in a page.",
        designer: "",
        developer: "",
        code: `import React, { useState, useRef, useEffect } from "react";

const Popover = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex justify-center items-center">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen((prev) => !prev)}
        className="px-4 py-2 text-white bg-black rounded"
      >
        Toggle Popover
      </button>

      {isOpen && (
        <div
          ref={popoverRef}
          className="absolute z-10 bottom-full mb-2 w-60 h-auto p-4 bg-white border rounded shadow"
        >
          <p>This is a Galaxy Popover</p>
          <p className="mt-2 text-sm text-gray-500">
            You can put any content here.
          </p>
        </div>
      )}
    </div>
  );
};

export default Popover;
`,
        code1: `import React from "react";
import Popover from "./components/comp/Popover/GalaxyPopover";

const App = () => {
  return (
    <div>
      <Popover />
    </div>
  );
};

export default App;
`,
        render: <Comp.GalaxyPopover />,
      },
    ],
  },
  progressbar: {
    id: 17,
    name: "Progress",
    icon: AlienUIIcons.AlienTbAlien,
    description:
      "A customizable progress bar component for tracking task progression.",
    variants: [
      {
        name: "Galaxy Progress Bar",
        description: "A default galactic progress bar.",
        designer: "",
        developer: "",
        code: `import React from "react";

const ProgressBar = () => {
  return (
    <div>
      <h2 className="sr-only">Steps</h2>

      <div className="w-[400px]">
        <div className="overflow-hidden w-full rounded-full bg-gray-200">
          <div className="h-2 w-1/2 rounded-full bg-black"></div>
        </div>

        <ol className="mt-4 grid grid-cols-3 text-sm font-medium text-gray-500">
          <li className="flex items-center justify-start text-black sm:gap-1.5">
            <svg
              className="size-6 sm:size-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
              />
            </svg>
          </li>

          <li className="flex items-center justify-center text-black sm:gap-1.5">
            <svg
              className="size-6 sm:size-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </li>

          <li className="flex items-center justify-end sm:gap-1.5">
            <svg
              className="size-6 sm:size-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ProgressBar;
`,
        code1: `import React from "react";
import ProgressBar from "./components/comp/ProgressBar/GalaxyProgressBar";

const App = () => {
  return (
    <div>
      <ProgressBar />
    </div>
  );
};

export default App;
`,
        render: <Comp.GalaxyProgressBar />,
      },
      {
        name: "Earth Progress Bar",
        description: "A progress bar showing progression on the earth surface.",
        designer: "",
        developer: "",
        code: `import React from "react";

const ProgressBar = () => {
  return (
    <div className="w-[400px] mt-4 h-2 overflow-hidden rounded-full bg-gray-200">
      <div className="h-full w-2/3 rounded-full bg-black"></div>
    </div>
  );
};

export default ProgressBar;
`,
        code1: `import React from "react";
import ProgressBar from "./components/comp/ProgressBar/EarthProgressBar";

const App = () => {
  return (
    <div>
      <ProgressBar />
    </div>
  );
};

export default App;
`,
        render: <Comp.EarthProgressBar />,
      },
      {
        name: "Mars Progress Bar",
        description: "A progress bar showing progression on mars.",
        designer: "",
        developer: "",
        code: `import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ProgressBar = () => {
  return (
    <div className="my-5 px-4">
      <div className="relative w-[400px] mt-4 h-1.5 bg-gray-200 rounded-lg">
        <div className="absolute inset-0 flex justify-between -top-4">
          <div className="flex flex-col items-start flex-1">
            <div className="w-9 h-9 p-2 rounded-full bg-black flex justify-center items-center mb-2">
              <FaCheckCircle size={20} className="text-white" />
            </div>
            <span className="text-xs font-medium text-black">Details</span>
          </div>

          <div className="flex flex-col items-center flex-1">
            <div className="w-9 h-9 p-2 rounded-full bg-black flex justify-center items-center mb-2">
              <FaCheckCircle size={20} className="text-white" />
            </div>
            <span className="text-xs font-medium text-black">Address</span>
          </div>

          <div className="flex flex-col items-end flex-1">
            <div className="w-9 h-9 p-2 rounded-full bg-gray-400 flex justify-center items-center mb-2">
              <FaCheckCircle size={20} className="text-white" />
            </div>
            <span className="text-xs font-medium text-gray-500">Payment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
`,
        code1: `import React from "react";
import ProgressBar from "./components/comp/ProgressBar/MarsProgressBar";

const App = () => {
  return (
    <div>
      <ProgressBar />
    </div>
  );
};

export default App;
`,
        render: <Comp.MarsProgressBar />,
      },
    ],
  },
  searchbar: {
    id: 18,
    name: "Search",
    icon: AlienUIIcons.AlienStare,
    description: "A customizable search bar.",
    variants: [
      {
        name: "Galaxy Search Bar",
        description: "A default search bar for searching the galaxy.",
        designer: "",
        developer: "",
        code: `import React from "react";
import { GoSearch } from "react-icons/go";

const SearchBar = () => {
  return (
    <div className="w-[400px] flex items-center bg-gray-100 rounded-full px-4 py-3">
      <GoSearch size={20} color="gray" />
      <input
        placeholder="Search the galaxy..."
        className="flex-1 ml-2 text-base border-none outline-none bg-transparent"
      />
    </div>
  );
};

export default SearchBar;
`,
        code1: `import React from "react";
import SearchBar from "./components/comp/SearchBar/GalaxySearchBar";

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

export default App;
`,
        render: <Comp.GalaxySearchBar />,
      },
    ],
  },
  spinner: {
    id: 19,
    name: "Spinner",
    icon: AlienUIIcons.AlienLiaRedditAlien,
    description:
      "A customizable spinner that provides visual feedback during processing.",
    variants: [
      {
        name: "Galaxy Spinner",
        description: "A default spinner for loading state changes.",
        designer: "",
        developer: "",
        code: `import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-12 w-12 border-4 border-black border-t-transparent border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
`,
        code1: `import React from "react";
import Spinner from "./components/comp/Spinner/GalaxySpinner";

const App = () => {
  return (
    <div>
      <Spinner />
    </div>
  );
};

export default App;
`,
        render: <Comp.GalaxySpinner />,
      },
      {
        name: "Earth Spinner",
        description:
          "A spherical earth-shaped loader that changes color while loading.",
        designer: "",
        developer: "",
        code: `import React, { useState, useEffect } from "react";

const Spinner = () => {
  const [currentColor, setCurrentColor] = useState("bg-black");

  useEffect(() => {
    const colors = [
      "bg-black",
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500"
    ];
    let index = 0;

    const interval = setInterval(() => {
      setCurrentColor(colors[index]);
      index = (index + 1) % colors.length;
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className={\`w-12 h-12 \${currentColor} rounded-full animate-spin\`} />
    </div>
  );
};

export default Spinner;
`,
        code1: `import React from "react";
import Spinner from "./components/comp/Spinner/EarthSpinner";

const App = () => {
  return (
    <div>
      <Spinner />
    </div>
  );
};

export default App;
`,
        render: <Comp.EarthSpinner />,
      },
    ],
  },
  switch: {
    id: 20,
    name: "Switch",
    icon: AlienUIIcons.AlienPiAlienThin,
    description: "A customizable switch for enabling and disabling options.",
    variants: [
      {
        name: "Galaxy Switch",
        description: "A default switch for toggling on and off.",
        designer: "",
        developer: "",
        code: `import React, { useState } from "react";

const Switch = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div
      className={\`relative inline-flex h-7 w-14 items-center rounded-full cursor-pointer transition \${
        isEnabled ? "bg-black" : "bg-gray-400"
      }\`}
      onClick={() => setIsEnabled(!isEnabled)}
    >
      <span
        className={\`inline-block h-6 w-6 transform rounded-full bg-white transition \${
          isEnabled ? "translate-x-6" : "translate-x-1"
        }\`}
      />
    </div>
  );
};

export default Switch;
`,
        code1: `import React from "react";
import Switch from "./components/comp/Switch/GalaxySwitch";

const App = () => {
  return (
    <div>
      <Switch />
    </div>
  );
};

export default App;
`,
        render: <Comp.GalaxySwitch />,
      },
    ],
  },
  table: {
    id: 21,
    name: "Table",
    icon: AlienUIIcons.AlienBug,
    description: "A customizable table component for data storage",
    variants: [
      {
        name: "Galaxy Table",
        description: "A default table for storing data in rows and column",
        designer: "",
        developer: "",
        code: `import React from "react";

const Table = () => {
  const tableData = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
    { id: 3, name: "Sam Wilson", email: "sam@example.com", role: "Viewer" }
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Role</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr
                key={row.id}
                className="odd:bg-white even:bg-gray-50 text-nowrap"
              >
                <td className="px-4 py-2">{row.id}</td>
                <td className="px-4 py-2">{row.name}</td>
                <td className="px-4 py-2">{row.email}</td>
                <td className="px-4 py-2">{row.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
`,
        code1: `import React from "react";
import Table from "./components/comp/Table/GalaxyTable";

const App = () => {
  return (
    <div>
      <Table />
    </div>
  );
};

export default App;
`,
        render: <Comp.GalaxyTable />,
      },
    ],
  },
  toast: {
    id: 22,
    name: "Toast",
    icon: AlienUIIcons.AlienPiAlienLight,
    description:
      "A customizable toast component with variants that provides feedback.",
    variants: [
      {
        name: "Galaxy Toast",
        description:
          "A default toast component that shows different props: success, failure and warning, by changing the color and text to suit your use case.",
        designer: "",
        developer: "",
        code: `import React, { useState, useEffect } from "react";

const SuccessToast = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-5 right-5 z-50 px-4 py-2 bg-green-500 rounded shadow-lg flex items-center justify-between text-white">
      <p className="text-sm">Operation successful!</p>
      <button onClick={onClose} className="ml-4 font-bold">
        ×
      </button>
    </div>
  );
};

const Toast = () => {
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => setShowToast(true)}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Click me
      </button>
      {showToast && <SuccessToast onClose={() => setShowToast(false)} />}
    </div>
  );
};

export default Toast;
`,
        code1: `import React from "react";
import Toast from "./components/comp/Toast/GalaxyToast";

const App = () => {
  return (
    <div>
      <Toast />
    </div>
  );
};

export default App;
`,
        render: <Comp.GalaxyToast />,
      },
      {
        name: "Earth Toast",
        description:
          "A toast component that shows different props: success, failure and warning, by changing the color and text to suit your use case.",
        designer: "",
        developer: "",
        code: `import React, { useState, useEffect } from "react";

const SuccessToast = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-5 right-5 z-50 px-4 py-2 self-center flex justify-between items-center bg-green-50 border-b-4 border-green-500 shadow-lg">
      <div>
        <p className="text-sm mb-1">Operation successful!</p>
        <p className="text-sm">Moving to the next planet</p>
      </div>
      <button onClick={onClose} className="ml-4 font-bold">
        ×
      </button>
    </div>
  );
};

const Toast = () => {
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => setShowToast(true)}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Click me
      </button>
      {showToast && <SuccessToast onClose={() => setShowToast(false)} />}
    </div>
  );
};

export default Toast;
`,
        code1: `import React from "react";
import Toast from "./components/comp/Toast/EarthToast";

const App = () => {
  return (
    <div>
      <Toast />
    </div>
  );
};

export default App;
`,
        render: <Comp.EarthToast />,
      },
    ],
  },
};
