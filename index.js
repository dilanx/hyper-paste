const white = "#eff0eb";
const more_white = "#ffffff";
const black = "#000000";
const gray = "#808080";
const red = "#ff6961";
const green = "#5bf5a5";
const yellow = "#fdfd96";
const blue = "#a7c7e7";
const magenta = "#f49ac2";
const cyan = "#92ddea";

exports.decorateConfig = (config) => {
    return Object.assign({}, config, {
        backgroundColor: black,
        foregroundColor: white,
        colors: {
            black,
            red,
            green,
            yellow,
            blue,
            magenta,
            cyan,
            white: more_white,
            lightBlack: gray,
            lightRed: red,
            lightGreen: green,
            lightYellow: yellow,
            lightBlue: blue,
            lightMagenta: magenta,
            lightCyan: cyan,
            lightWhite: white
            
        },
        css: `
            ${config.css}
            // hyper-snazzy inspired highlight line (bit different though)         
			.tabs_title {
						display: none !important;
			}

            .tab_tab::before {
                
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 1px;
                background-color: rgba(255, 255, 255, 1);
                transform: scaleX(0);
				transform-origin:  0% 50%
                will-change: transform;
                
            }
            .tab_tab.tab_active::before {
                
                transform: scaleX(1);
                transition: transform 250ms ease-in-out;
                
            }
            
            // tab fade (also like hyper-snazzy)
            .tab_text,
            .term_term {
                
                opacity: 0.5;
                will-change: opacity;
                
            }
            .tab_active .tab_text,
            .term_active .term_term {
                
                opacity: 1;
                transition: opacity 0.12s ease-in-out;
                
            }
        
        `
        
    });
}