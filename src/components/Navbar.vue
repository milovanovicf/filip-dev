<template>
  <div class="navbar">
    <div class="logo-container">
      <router-link to="/" class="logo"
        ><img src="../assets/images/Logo_v1.svg" alt="logo"
      /></router-link>
    </div>
    <div class="navmenu">
      <ul class="navmenu__desktop">
        <li>
          <router-link to="/projects"
            ><span class="less-than">&lt;</span> projects /<span
              class="more-than"
              >&gt;</span
            ></router-link
          >
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank">instagram</a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/filip-milovanovic-b8272a218/"
            target="_blank"
            >linkedIn</a
          >
        </li>
        <li>
          <router-link to="/about"
            ><span class="less-than">&lt;</span> about /<span class="more-than"
              >&gt;</span
            ></router-link
          >
        </li>
      </ul>
      <div class="navmenu__mobile">
        <a
          href="#"
          class="button-mobile"
          :class="{ active: isOpen }"
          @click="openMobileMenu"
          ><span></span
        ></a>
        <div class="navmenu__mobile__list" :class="{ opened: isOpen }">
          <ul>
            <li
              class="mobile-item"
              :class="{ 'opened-list': isOpen }"
              @click="openMobileMenu"
            >
              <router-link to="/projects">Projects</router-link>
            </li>
            <li class="mobile-item" :class="{ 'opened-list': isOpen }">
              <a
                @click="openMobileMenu"
                href="https://www.instagram.com/filip.jpeg/"
                target="_blank"
                >Instagram</a
              >
            </li>
            <li class="mobile-item" :class="{ 'opened-list': isOpen }">
              <a
                @click="openMobileMenu"
                href="https://www.linkedin.com/in/filip-milovanovic-b8272a218/"
                target="_blank"
                >LinkedIn</a
              >
            </li>
            <li
              class="mobile-item"
              :class="{ 'opened-list': isOpen }"
              @click="openMobileMenu"
            >
              <router-link to="/about">About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      isActiveClass: false,
    };
  },

  methods: {
    openMobileMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 15rem;
  color: #fff;
  height: 8rem;
  .logo-container {
    img {
      width: 8rem;
    }
  }
  .navmenu {
    width: 30%;

    &__desktop {
      display: flex;
      justify-content: space-between;

      li,
      a {
        font-size: 2rem;
        color: #fff;

        .less-than {
          display: inline-block;
          font-size: inherit;
          transition: all 0.2s ease-in-out;
          color: #fff;
        }
        .more-than {
          display: inline-block;
          font-size: inherit;
          transition: all 0.2s ease-in-out;
          color: #fff;
        }
      }

      a.router-link-active {
        color: #d16f54;

        .less-than {
          color: #d16f54;
        }

        .more-than {
          color: #d16f54;
        }
      }

      a,
      li {
        text-decoration: none;
        transition: 0.2s ease-in-out;
        cursor: pointer;

        &:hover {
          color: #d16f54;

          .less-than {
            transform: translateX(-5px);
            color: #d16f54;
          }
          .more-than {
            transform: translateX(5px);
            color: #d16f54;
          }
        }
      }
    }

    &__mobile {
      .navmenu__mobile__list {
        position: fixed;
        inset: 0 0 0 0;
        z-index: 2;
        background-color: #fff;
        transition: all 0.2s linear;
        transform: translate(100%);

        ul {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          transform: translateY(50%);
          padding-right: 2rem;
        }

        li {
          padding-bottom: 5rem;
        }

        .mobile-item:nth-child(1) {
          transform: translateX(100rem);
          transition: all 0.5s linear;
        }
        .mobile-item:nth-child(2) {
          transform: translateX(100rem);
          transition: all 0.5s linear;
        }
        .mobile-item:nth-child(3) {
          transform: translateX(100rem);
          transition: all 0.5s linear;
        }
        .mobile-item:nth-child(4) {
          transform: translateX(100rem);
          transition: all 0.5s linear;
        }

        .opened-list {
          transform: translateX(-5rem) !important;
        }
      }
      a {
        font-size: 4rem;
        text-decoration: none;
        color: #2a4b49;
      }

      .button-mobile {
        position: fixed;
        top: 5%;
        right: 5%;
        z-index: 3;
        cursor: pointer;

        span {
          position: relative;
          display: block;
          width: 30px;
          height: 2px;
          background: #fff;
          transition: all 0.2s ease-in-out;

          &:before,
          &:after {
            position: absolute;
            background: #fff;
            content: '';
            width: 25px;
            height: 2px;
            transition: all 0.2s ease-in-out;
          }

          &:before {
            top: -8px;
          }

          &:after {
            top: 8px;
          }
        }
      }
    }

    .active {
      span {
        &:before {
          transform: rotate(45deg) translate(5px, 6px);
          background: #2a4b49;
        }

        &:after {
          transform: rotate(-45deg) translate(5px, -6px);
          background: #2a4b49;
        }
      }
    }

    .opened {
      transform: translate(0);
    }
  }
}

@media only screen and (max-width: 1600px) {
  .navbar {
    padding: 5rem 9rem;

    .navmenu {
      width: 40%;
    }
  }
}

@media only screen and (max-width: 1000px) {
  .navbar {
    padding: 0 10rem;
  }
}

@media only screen and (max-width: 850px) {
  .navbar {
    padding: 0 5rem;
    overflow: hidden;

    .navmenu {
      width: 60%;
    }
  }
}

@media only screen and (max-width: 750px) {
  .navbar {
    .navmenu {
      .navmenu__desktop {
        display: none;
      }
    }
  }
}

@media only screen and (min-width: 750px) {
  .navbar {
    .navmenu {
      .navmenu__mobile {
        display: none;
      }
    }
  }
}

@media only screen and (max-width: 550px) {
  .navbar {
    padding: 0 2rem;
  }
}
</style>
