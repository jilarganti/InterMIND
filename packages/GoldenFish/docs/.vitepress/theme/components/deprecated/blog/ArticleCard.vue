<template>
  <a :href="href">
    <div class="card">
      <div class="flex">
        <div class="media">
          <img :src="image" :alt="title" />
        </div>
        <div class="details">
          <h2 class="title">{{ title }}</h2>
          <p class="excerpt">{{ truncateText(excerpt, 120) }}</p>
          <div class="author">
            <div>
              <h3 class="name">{{ author }}</h3>
              <p class="date">{{ date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: false,
    },
    href: {
      type: String,
      required: true,
    },
  },
  methods: {
    truncateText(text, length) {
      if (text.length > length) {
        return text.substring(0, length) + "..."
      }
      return text
    },
  },
}
</script>

<style scoped>
.card {
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  overflow: hidden;
  height: 100%;
}

.card:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
  transition: ease-in-out 0.2s all;
  color: var(--vp-c-brand-3);
}

.flex {
  display: flex;
}

.media {
  width: 55%;
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.details {
  margin-left: 1.2rem;
}

.title {
  font-size: 1.5rem;
  margin-top: 1rem;
  color: var(--vp-c-indigo-1);
}

.title:hover {
  color: var(--vp-c-purple-1);
}

.excerpt {
  margin-top: 1rem;
  color: var(--vp-c-text-1);
}

.name,
.date {
  color: #555;
  font-size: 0.8rem;
}
</style>
