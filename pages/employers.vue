<template>
  <div>
    <h1>Работодатели</h1>
    <ul>
      <li v-for="employer in employers" :key="employer.id">
        <h3>{{ employer.name }}</h3>
        <p>{{ employer.description }}</p>
        <p><strong>Требуемое образование:</strong> {{ employer.requiredEducation }}</p>
        <p><strong>Компетенции:</strong> {{ employer.requiredCompetencies }}</p>
        <p><strong>Экзамены:</strong> {{ employer.requiredExams }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employers: [],
    };
  },
  async mounted() {
    try {
      this.employers = await this.$axios.$get('/employers');
    } catch (error) {
      console.error('Ошибка загрузки работодателей:', error);
    }
  },
};
</script>
