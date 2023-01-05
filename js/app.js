// Modes selection
// const modes = [
//     "party",
//     "minigames",
//     "trials",
//     "store"
// ];

// for (let i = 0; i < modes.length; i++) {
//     let mode = modes[i];
//     let mode_button = document.getElementById(mode);
//     let mode_info = document.getElementById(mode + "-info");
//     mode_button.onclick = function() {
//         mode_info.classList.remove("modes");
//     }
// }

const modes = [
    "party",
    "minigames",
    "trials",
    "store"
];

let mode_buttons = [];
let mode_infos = [];

for (let i = 0; i < modes.length; i++) {
    let mode = modes[i];
    mode_buttons.push(document.getElementById(mode));
    mode_infos.push(document.getElementById(mode + "-info"));
}

for (let i = 0; i < modes.length; i++) {
    let mode_button = mode_buttons[i];
    // mode_button.index = i;
    mode_button.onclick = function() {
        for (let j = 0; j < modes.length; j++) {
            let mode_info = mode_infos[j];
            
            if (j == i) {
                mode_info.classList.remove("modes");
            } else {
                mode_info.classList.add("modes");
            }
        }
    }
}

//Particles
window.addEventListener('DOMContentLoaded', (e) => {
    particlesJS({
        "particles": {
            "number": {
                "value": 70,
                "density": {
                    "enable": true,
                    "value_area": 2000
                }
            },
            "color": {
                "value": "random"
            },
            "shape": {
                "type": "star",
                "stroke": {
                    "width": 0,
                    "color": "#d24e4e"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 0.5,
                    "opacity_min": 0.24775224775224775,
                    "sync": false
                }
            },
            "size": {
                "value": 4,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "size_min": 3.996003996003996,
                    "sync": true
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "top",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 552.4033491425909,
                    "rotateY": 631.3181133058181
                }
            }
        },
        "interactivity": {
            "detect_on": "window",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 200,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 200,
                    "size": 15,
                    "duration": 20,
                    "opacity": 0.3,
                    "speed": 1
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    })
});