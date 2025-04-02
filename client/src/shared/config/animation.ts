export const FeaturesContainerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const FeaturesItemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

export const DiscoverContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const DiscoverItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
