import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export const footerListsData = [
  {
    id: 1,
    section: "Order",
    children: [
      {
        id: 1,
        path: "/menu",
        name: "View Menu",
      },
    ],
  },
  {
    id: 2,
    section: "About Us",
    children: [
      {
        id: 1,
        path: "/about-us",
        name: "Who are we",
      },
    ],
  },
  {
    id: 3,
    section: "Policies",
    children: [
      {
        id: 1,
        path: "/terms-and-conditions",
        name: "Terms and Conditions",
      },
    ],
  },
];

export const footerIconsData = [
  {
    id: 1,
    icon: <FaFacebookF color="var(--color-accent)" />,
    path: "https://www.facebook.com/PWU.OfficialFanpage",
    label: "Link to Facebook",
  },
  {
    id: 2,
    icon: <FaInstagram color="var(--color-accent)" />,
    path: "https://www.instagram.com/mypwu_official/?hl=en",
    label: "Link to Instagram",
  },
  {
    id: 3,
    icon: <FaTwitter color="var(--color-accent)" />,
    path: "https://twitter.com/PWU_Manila?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
    label: "Link to Twitter",
  },
  {
    id: 4,
    icon: <FaYoutube color="var(--color-accent)" />,
    path: "https://www.youtube.com/c/philippinewomensuniversitymanilaofficial",
    label: "Link to Youtube",
  },
];
