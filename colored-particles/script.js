tsParticles.load({
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        area: 800
      }
    },
    color: {
      value: ["#003964", "#00bbce", "#A7C539", "#E4E541", "#00665a"]
    },
    shape: {
      type: "char",
      character: [
        { value: "🚗", font: "Apple Color Emoji" },
        { value: "🚙", font: "Apple Color Emoji" },
        { value: "🚑", font: "Apple Color Emoji" },
        { value: "🚚", font: "Apple Color Emoji" },
        { value: "🚓", font: "Apple Color Emoji" },
        { value: "🚨", font: "Apple Color Emoji" },
        { value: "💥", font: "Apple Color Emoji" },
        { value: "🌞", font: "Apple Color Emoji" },
        { value: "⛈️", font: "Apple Color Emoji" },
        { value: "🌈", font: "Apple Color Emoji" },
        { value: "❄️", font: "Apple Color Emoji" },
        { value: "☁️", font: "Apple Color Emoji" }
      ]
    },
    opacity: {
      value: 1
    },
    size: {
      value: { min: 10, max: 15 }
    },
    links: {
      enable: true,
      distance: 150,
      color: "#808080",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      outModes: "out"
    },
    groups: {
      explosions: {
        number: { value: 0 },
        shape: {
          type: "char",
          character: [
            { value: "💥", font: "Apple Color Emoji" }
          ]
        },
        size: {
          value: { min: 12, max: 16 }
        },
        opacity: {
          value: 1
        }
      }
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab"
      },
      onClick: {
        enable: true,
        mode: "push"
      }
    },
    modes: {
      grab: {
        distance: 140,
        links: {
          opacity: 1
        }
      },
      push: {
        quantity: 4,
        groups: ["explosions"]
      }
    }
  }
});
