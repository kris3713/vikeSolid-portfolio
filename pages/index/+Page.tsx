export default function Page() {
  return (
    <section class='hero-section'>
      <div class='hero-content'>
        <div class='hero-left'>
          <div class='hero-intro'>
            <span class='hero-greeting'>Hi, I'm</span>
            <span class='hero-name'>Kris Schneider</span>
          </div>

          <h1 class='hero-profession'>Software Developer/Engineer</h1>

          <div class='hero-socials'>
            <a
              href='https://github.com'
              class='social-link'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
            >
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <g clip-path='url(#github-clip)'>
                  <path
                    d='M12 0.297C5.37 0.297 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.297 12 0.297Z'
                    fill='white'
                  />
                </g>
                <defs>
                  <clipPath id='github-clip'>
                    <rect width='24' height='24' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </a>

            <a
              href='https://linkedin.com'
              class='social-link'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M24 4H6C4.895 4 4 4.895 4 6V24C4 25.105 4.895 26 6 26H24C25.105 26 26 25.105 26 24V6C26 4.895 25.105 4 24 4ZM10.954 22H8.004V12.508H10.954V22ZM9.449 11.151C8.498 11.151 7.729 10.38 7.729 9.431C7.729 8.482 8.499 7.712 9.449 7.712C10.397 7.712 11.168 8.483 11.168 9.431C11.168 10.38 10.397 11.151 9.449 11.151ZM22.004 22H19.056V17.384C19.056 16.283 19.036 14.867 17.523 14.867C15.988 14.867 15.752 16.066 15.752 17.304V22H12.804V12.508H15.634V13.805H15.674C16.068 13.059 17.03 12.272 18.465 12.272C21.452 12.272 22.004 14.238 22.004 16.794V22Z'
                  fill='white'
                />
              </svg>
            </a>
          </div>

          <div class='hero-buttons'>
            <a href='mailto:contact@example.com' class='btn-hire'>
              Hire Me
            </a>
            <a href='/contact' class='btn-contact'>
              Contact Me
            </a>
          </div>
        </div>

        <div class='hero-right'>
          <img
            class='hero-portrait'
            src='https://api.builder.io/api/v1/image/assets/TEMP/6e18f0bf62acd3e928660e1d0066425796df9d53?width=1350'
            alt='Kris Schneider'
          />
        </div>
      </div>
    </section>
  );
}
