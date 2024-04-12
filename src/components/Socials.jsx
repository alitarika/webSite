export const Socials = () => {
  return (
    <div className="absolute right-[2vw] top-[calc(10vh+64px)] z-30 flex flex-col">
      <a
        href="https://github.com/alitarika"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="size-8 fill-secondary p-[2px] sm:hover:scale-105" />
      </a>
      <a
        href="https://www.linkedin.com/in/alitarika/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin className="fill-secondary size-8 sm:hover:scale-105" />
      </a>
      <a href="" target="_blank" rel="noopener noreferrer">
        <Cv className="size-8 fill-secondary sm:hover:scale-105" />
      </a>
    </div>
  );
};

const Github = ({ className }) => {
  return (
    <svg
      className={className}
      width="100px"
      height="100px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="#308aaa"
    >
      <g strokeLinecap="round" strokeLinejoin="round" />

      <g>
        <rect width="24" height="24" fill="none" />
        <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />
      </g>
    </svg>
  );
};

const Linkedin = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z" />
    </svg>
  );
};

const Cv = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="100px"
      height="100px"
      viewBox="0 0 24 24"
      fill="#fff"
    >
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12.6385 3.05526L12.8719 2.08289L12.6385 3.05526ZM13.9373 3.93726L13.2302 4.64437L13.9373 3.93726ZM13.2166 3.29472L13.7391 2.44208L13.2166 3.29472ZM6.09202 20.782L6.54601 19.891L6.09202 20.782ZM5.21799 19.908L6.10899 19.454L5.21799 19.908ZM17.908 20.782L17.454 19.891L17.908 20.782ZM18.782 19.908L17.891 19.454L18.782 19.908ZM18.0627 8.06274L18.7698 7.35563L18.0627 8.06274ZM18.7053 8.78343L19.5579 8.26093L18.7053 8.78343ZM18.9447 9.36154L19.9171 9.12809L18.9447 9.36154ZM5.21799 4.09202L6.10899 4.54601L5.21799 4.09202ZM6.09202 3.21799L6.54601 4.10899L6.09202 3.21799ZM13.9701 11.7575C13.8362 11.2217 13.2933 10.8959 12.7575 11.0299C12.2217 11.1638 11.8959 11.7067 12.0299 12.2425L13.9701 11.7575ZM14.5 18L13.5299 18.2425C13.6411 18.6877 14.0411 19 14.5 19C14.9589 19 15.3589 18.6877 15.4701 18.2425L14.5 18ZM16.9701 12.2425C17.1041 11.7067 16.7783 11.1638 16.2425 11.0299C15.7067 10.8959 15.1638 11.2217 15.0299 11.7575L16.9701 12.2425ZM11 19C11.5523 19 12 18.5523 12 18C12 17.4477 11.5523 17 11 17V19ZM9.23463 17.8478L8.85195 18.7716H8.85195L9.23463 17.8478ZM8.15224 16.7654L7.22836 17.1481H7.22836L8.15224 16.7654ZM11 13C11.5523 13 12 12.5523 12 12C12 11.4477 11.5523 11 11 11V13ZM9.23463 12.1522L8.85195 11.2284L9.23463 12.1522ZM8.15224 13.2346L7.22836 12.8519L8.15224 13.2346ZM14 3.17981C14 2.62752 13.5523 2.17981 13 2.17981C12.4477 2.17981 12 2.62752 12 3.17981H14ZM18.82 10C19.3723 10 19.82 9.55229 19.82 9C19.82 8.44772 19.3723 8 18.82 8V10ZM15.8 20H8.2V22H15.8V20ZM6 17.8V6.2H4V17.8H6ZM8.2 4H11.6745V2H8.2V4ZM18 10.3255V17.8H20V10.3255H18ZM11.6745 4C12.2113 4 12.3167 4.00643 12.405 4.02763L12.8719 2.08289C12.4999 1.99357 12.1161 2 11.6745 2V4ZM14.6444 3.23015C14.3321 2.91791 14.0653 2.64199 13.7391 2.44208L12.6941 4.14736C12.7715 4.19482 12.8506 4.2648 13.2302 4.64437L14.6444 3.23015ZM12.405 4.02763C12.5071 4.05213 12.6046 4.09253 12.6941 4.14736L13.7391 2.44208C13.4707 2.27759 13.178 2.15638 12.8719 2.08289L12.405 4.02763ZM8.2 20C7.62345 20 7.25117 19.9992 6.96784 19.9761C6.69617 19.9539 6.59545 19.9162 6.54601 19.891L5.63803 21.673C6.01641 21.8658 6.40963 21.9371 6.80497 21.9694C7.18864 22.0008 7.65645 22 8.2 22V20ZM4 17.8C4 18.3436 3.99922 18.8114 4.03057 19.195C4.06287 19.5904 4.13419 19.9836 4.32698 20.362L6.10899 19.454C6.0838 19.4045 6.04612 19.3038 6.02393 19.0322C6.00078 18.7488 6 18.3766 6 17.8H4ZM6.54601 19.891C6.35785 19.7951 6.20487 19.6422 6.10899 19.454L4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673L6.54601 19.891ZM15.8 22C16.3436 22 16.8114 22.0008 17.195 21.9694C17.5904 21.9371 17.9836 21.8658 18.362 21.673L17.454 19.891C17.4045 19.9162 17.3038 19.9539 17.0322 19.9761C16.7488 19.9992 16.3766 20 15.8 20V22ZM18 17.8C18 18.3766 17.9992 18.7488 17.9761 19.0322C17.9539 19.3038 17.9162 19.4045 17.891 19.454L19.673 20.362C19.8658 19.9836 19.9371 19.5904 19.9694 19.195C20.0008 18.8114 20 18.3436 20 17.8H18ZM18.362 21.673C18.9265 21.3854 19.3854 20.9265 19.673 20.362L17.891 19.454C17.7951 19.6422 17.6422 19.7951 17.454 19.891L18.362 21.673ZM17.3556 8.76985C17.7352 9.14941 17.8052 9.22849 17.8526 9.30593L19.5579 8.26093C19.358 7.93471 19.0821 7.66788 18.7698 7.35563L17.3556 8.76985ZM20 10.3255C20 9.8839 20.0064 9.50012 19.9171 9.12809L17.9724 9.59498C17.9936 9.6833 18 9.7887 18 10.3255H20ZM17.8526 9.30593C17.9075 9.3954 17.9479 9.49295 17.9724 9.59498L19.9171 9.12809C19.8436 8.82198 19.7224 8.52935 19.5579 8.26093L17.8526 9.30593ZM6 6.2C6 5.62345 6.00078 5.25117 6.02393 4.96784C6.04612 4.69617 6.0838 4.59545 6.10899 4.54601L4.32698 3.63803C4.13419 4.01641 4.06287 4.40963 4.03057 4.80497C3.99922 5.18864 4 5.65645 4 6.2H6ZM8.2 2C7.65645 2 7.18864 1.99922 6.80497 2.03057C6.40963 2.06287 6.01641 2.13419 5.63803 2.32698L6.54601 4.10899C6.59545 4.0838 6.69617 4.04612 6.96784 4.02393C7.25117 4.00078 7.62345 4 8.2 4V2ZM6.10899 4.54601C6.20487 4.35785 6.35785 4.20487 6.54601 4.10899L5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803L6.10899 4.54601ZM12.0299 12.2425L13.5299 18.2425L15.4701 17.7575L13.9701 11.7575L12.0299 12.2425ZM15.4701 18.2425L16.9701 12.2425L15.0299 11.7575L13.5299 17.7575L15.4701 18.2425ZM11 17C10.5204 17 10.2107 16.9995 9.97376 16.9833C9.74576 16.9677 9.65893 16.9411 9.61732 16.9239L8.85195 18.7716C9.17788 18.9066 9.50779 18.9561 9.83762 18.9787C10.1585 19.0005 10.5477 19 11 19V17ZM7 15C7 15.4523 6.99946 15.8415 7.02135 16.1624C7.04385 16.4922 7.09336 16.8221 7.22836 17.1481L9.07612 16.3827C9.05888 16.3411 9.03227 16.2542 9.01671 16.0262C9.00054 15.7893 9 15.4796 9 15H7ZM9.61732 16.9239C9.37229 16.8224 9.17761 16.6277 9.07612 16.3827L7.22836 17.1481C7.53284 17.8831 8.11687 18.4672 8.85195 18.7716L9.61732 16.9239ZM11 11C10.5477 11 10.1585 10.9995 9.83762 11.0213C9.50779 11.0439 9.17788 11.0934 8.85195 11.2284L9.61732 13.0761C9.65893 13.0589 9.74576 13.0323 9.97376 13.0167C10.2107 13.0005 10.5204 13 11 13V11ZM9 15C9 14.5204 9.00054 14.2107 9.01671 13.9738C9.03227 13.7458 9.05888 13.6589 9.07612 13.6173L7.22836 12.8519C7.09336 13.1779 7.04385 13.5078 7.02135 13.8376C6.99946 14.1585 7 14.5477 7 15H9ZM8.85195 11.2284C8.11686 11.5328 7.53284 12.1169 7.22836 12.8519L9.07612 13.6173C9.17761 13.3723 9.37229 13.1776 9.61732 13.0761L8.85195 11.2284ZM12 3.17981V8H14V3.17981H12ZM14 10H18.82V8H14V10ZM12 8C12 9.10457 12.8954 10 14 10V8V8H12ZM13.2302 4.64437L17.3556 8.76985L18.7698 7.35563L14.6444 3.23015L13.2302 4.64437Z" />
    </svg>
  );
};
