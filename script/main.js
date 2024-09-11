const video = document.getElementById('backgroundVideo');

// Define os tempos de início e fim (em segundos)
const startTime = 0.5; // Tempo em segundos para começar
const endTime = 7.4; // Tempo em segundos para parar
const hideTime = 7.4;
const fadeOutStart = 7.4; // Tempo em segundos para começar a desaparecer
const fadeOutDuration = 7.4;
// Função para iniciar o vídeo
function startVideo() {
  video.currentTime = startTime; // Define o tempo inicial
  video.play(); // Reproduz o vídeo
  

  // Define a parada do vídeo após o tempo especificado
  setTimeout(() => {
    video.pause(); // Pausa o vídeo

    // Define a ocultação do vídeo após o tempo especificado
    setTimeout(() => {
      video.style.opacity = 0; // Torna o vídeo invisível com transição suave
    }, (fadeOutStart - endTime) * 1000); // Tempo para iniciar o desaparecimento em milissegundos
  }, (endTime - startTime) * 1000); // Tempo de reprodução em milissegundos
}

// Inicia o vídeo ao carregar a página
window.onload = startVideo;

const animationTimeline = () => {

  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  const tl = new TimelineMax();
  tl.from("#backgroundVideo", 1, {
  onStart: () => {
    const video = document.getElementById('backgroundVideo');
    video.currentTime = 7; // Certifique-se de que o vídeo comece do início
    video.play(); // Reproduza o vídeo
}
})
  
  

  tl.to(".container", 0.1, {
    visibility: "visible",
  })
  tl.to(".container", 0.1, {
    visibility: "visible",
  })

    .from(".one", 0.7, {
      opacity: 0,
      y: 10,

    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10,
    })

    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2.5"
    )

    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )
    .from("#backgroundVideo", 1, {
      opacity: 0,
      scale: 1.1,
  }, "+=1")

    .to("#backgroundVideo", 1, {
      opacity: 0,
      scale: 1.1,
  }, "+=7.5")

    .from(".three", 0.7, {
      opacity: 0,
      y: 10,
      // scale: 0.7
    })

    .to(
      ".three",
      1,
      {
        opacity: 0,
        y: 10,
      },
      "+=5"
    )
    
    
    .from(".new-screen", 0.7, {
      opacity: 0,
      y: 10,
    
    })
    .to(
      ".new-screen",
      1,
      {
        opacity: 0,
        y: 10,
      },
      "+=5"
    )
    
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0,
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible",
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "#rgb(82, 146, 217)",
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=0.7"
    )
    .from(".new-screen", 0.7, {
      opacity: 0,
      scale: 1,
    }, "+=1") // Começa 1 segundo após a animação do .four
    .to(".new-screen p", 1, {
      opacity: 0,
      y: 20,
    }, "-=2")



    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.9, {
    
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=0.5"
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        rotation: 90,
        x: 8,
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+=1"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .from(
      ".girl-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#000000",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "invisible",
        opacity: 0,
        scale: 0,
        repeat: 3,
        repeatDelay: 1.4,
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90,
      },
      "+=1"
    );

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then((data) => data.json())
    .then((data) => {
      Object.keys(data).map((customData) => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .getElementById(customData)
              .setAttribute("src", data[customData]);
          } else {
            document.getElementById(customData).innerText = data[customData];
          }
        }
      });
    });
};

// Run fetch and animation in sequence
const resolveFetch = () => {
  return new Promise((resolve, reject) => {
    fetchData();
    resolve("Fetch done!");
  });
};

resolveFetch().then(animationTimeline());
