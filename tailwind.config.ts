import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		fontFamily: {
  			sans: [
  				'var(--font-geist-sans)',
                    ...fontFamily.sans
                ]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'heart-pop': {
  				'0%': {
  					transform: 'scale(0)',
  					opacity: '0'
  				},
  				'50%': {
  					transform: 'scale(1.2)',
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'scale(1)',
  					opacity: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'heart-pop': 'heart-pop 1s ease-out forwards'
  		}
  	},
  	keyframes: {
  		typing: {
  			'0%, 100%': {
  				transform: 'translateY(0)',
  				opacity: '0.5'
  			},
  			'50%': {
  				transform: 'translateY(-2px)',
  				opacity: '1'
  			}
  		},
  		'loading-dots': {
  			'0%, 100%': {
  				opacity: '0'
  			},
  			'50%': {
  				opacity: '1'
  			}
  		},
  		wave: {
  			'0%, 100%': {
  				transform: 'scaleY(1)'
  			},
  			'50%': {
  				transform: 'scaleY(0.6)'
  			}
  		},
  		blink: {
  			'0%, 100%': {
  				opacity: '1'
  			},
  			'50%': {
  				opacity: '0'
  			}
  		}
  	},
  	'text-blink': {
  		'0%, 100%': {
  			color: 'var(--primary)'
  		},
  		'50%': {
  			color: 'var(--muted-foreground)'
  		}
  	},
  	'bounce-dots': {
  		'0%, 100%': {
  			transform: 'scale(0.8)',
  			opacity: '0.5'
  		},
  		'50%': {
  			transform: 'scale(1.2)',
  			opacity: '1'
  		}
  	},
  	'thin-pulse': {
  		'0%, 100%': {
  			transform: 'scale(0.95)',
  			opacity: '0.8'
  		},
  		'50%': {
  			transform: 'scale(1.05)',
  			opacity: '0.4'
  		}
  	},
  	'pulse-dot': {
  		'0%, 100%': {
  			transform: 'scale(1)',
  			opacity: '0.8'
  		},
  		'50%': {
  			transform: 'scale(1.5)',
  			opacity: '1'
  		}
  	},
  	'shimmer-text': {
  		'0%': {
  			backgroundPosition: '150% center'
  		},
  		'100%': {
  			backgroundPosition: '-150% center'
  		}
  	},
  	'wave-bars': {
  		'0%, 100%': {
  			transform: 'scaleY(1)',
  			opacity: '0.5'
  		},
  		'50%': {
  			transform: 'scaleY(0.6)',
  			opacity: '1'
  		}
  	},
  	shimmer: {
  		'0%': {
  			backgroundPosition: '200% 50%'
  		},
  		'100%': {
  			backgroundPosition: '-200% 50%'
  		}
  	},
  	'spinner-fade': {
  		'0%': {
  			opacity: '0'
  		},
  		'100%': {
  			opacity: '1'
  		}
  	}
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
