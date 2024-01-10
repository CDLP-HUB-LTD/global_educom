import "./vibe/scss/styles.scss"

const navigationConfig = {
  top: [
    {
      name: "Home",
      url: "/",
      icon: "Home",
    },
    {
      name: "Profile",
      icon: "Layers",
      children: [
        {
          name: "View Account",
          url: "/profile",
        },

        // {
        //   name: "Delete Account",
        //   url: "/elements/alerts",
        // },
      ],
    },
    {
      name: "Resources",
      url: "/",
      icon: "Home",
    },
    {
      name: "Support",
      icon: "Cloud",
      children: [
        {
          name: "Contact Us",
          url: "/apps/analytics",
        },
        
      ],
    },

    {
      name: "Logout",
      url: "/",
    },

    {
      divider: true,
    },
  ],
  bottom: [
    {
      name: "Account",
      url: "/dashboard",
      icon: "User",
      badge: {
        variant: "success",
        text: "3",
      },
    },
  ],
};


export default navigationConfig;