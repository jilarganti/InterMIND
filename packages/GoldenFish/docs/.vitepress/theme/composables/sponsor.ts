import { onMounted, onUnmounted, ref } from "vue"

// size: "big" | "medium"
const sponsorsData = ref([
  {
    tier: "Reviews",
    size: "big",
    items: [
      {
        // name: "Smyrna",
        // url: "/",
        img: "/img/iStock-1936653819.avif",
      },
      {
        img: "/img/iStock-1326953883.avif",
        hasDark: false,
      },
    ],
  },
  // {
  //   tier: "Reviews",
  //   size: "medium",
  //   items: [
  //     {
  //       img: "/sponsor.avif",
  //       hasDark: true,
  //     },
  //   ],
  // },
])

function toggleDarkLogos() {
  if (sponsorsData.value) {
    const isDark = document.documentElement.classList.contains("dark")
    sponsorsData.value.forEach((sponsorTier) => {
      sponsorTier.items.forEach((s) => {
        if (s.hasDark) {
          s.img = isDark ? s.img.replace(/(\.\w+)$/, "-dark$1") : s.img.replace(/-dark(\.\w+)$/, "$1")
        }
      })
    })
  }
}

export function useSponsor() {
  onMounted(() => {
    const ob = new MutationObserver((list) => {
      for (const m of list) {
        if (m.attributeName === "class") {
          toggleDarkLogos()
        }
      }
    })
    ob.observe(document.documentElement, { attributes: true })
    onUnmounted(() => {
      ob.disconnect()
    })
  })

  return {
    data: sponsorsData,
  }
}
